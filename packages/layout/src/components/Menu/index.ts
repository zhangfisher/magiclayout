import { MagicElement } from '../MagicElement';
import styles from './styles';
import { tag } from '@/utils/tag';
import type { MagicMenuItem, MagicMenuItemAction, MagicMenuOptions } from './types';
import { html, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { when } from 'lit/directives/when.js';
import { registerIcons } from '@/icons';
import { ifDefined } from 'lit/directives/if-defined.js';
import { omit } from 'flex-tools/object';
import { forEachTreeByDfs } from 'flex-tools/tree/forEachTreeByDfs';
import { classMap } from 'lit/directives/class-map.js';
import { createRef, ref } from 'lit/directives/ref.js';
import type { SlDropdown } from '@shoelace-style/shoelace';

type NormalizedMagicMenuOptions = Required<Omit<MagicMenuOptions, 'items'>> & {
	items: Record<string, MagicMenuItem>;
};

// 在window上扩展鼠标位置属性
declare global {
    interface Window {
        mouseX?: number;
        mouseY?: number;
    }
}

@tag('magic-menu')
export class MagicLayoutMenu extends MagicElement<MagicMenuOptions> {
	static styles = styles;
	stateKey: string = 'my';

	@property({ type: Boolean, reflect: true })
	collapsed: boolean = false;

	/**
	 * 控制子菜单是否内联显示
	 *
	 * inline-level=0 时，所有子菜单均不内联，而是全部弹出方式
	 * inline-level=1 时，只有一级子菜单内联
	 *
	 */
	@property({ type: Number, reflect: true })
	inlineLevel: number = 1;

	_cache!: NormalizedMagicMenuOptions;

    private _lastHoverItem: string | null = null;
    private _hoverTimer: number | null = null;
    private _leaveTimer: number | null = null;
    private _mouseX!:number
    private _mouseY!:number

	_normalizeCache() {
		this._cache = Object.assign(
			{
				labelPos: 'right',
				colorized: false,
				inlineLevel: 1,
				items: {},
			},
			omit(this.state, 'items'),
		) as unknown as NormalizedMagicMenuOptions;
		forEachTreeByDfs(this.state.items, ({ node }) => {
			if (!node.id) {
				console.warn('magic-menu: item must have id');
				return;
			}
			this._cache.items[node.id] = node;
		});
	}

	connectedCallback(): void {
		super.connectedCallback();
		registerIcons();
		this._normalizeCache();		
		// 添加全局鼠标移动事件监听器
		window.addEventListener('mousemove', this._trackMousePosition);
	}
	
	disconnectedCallback(): void {
		super.disconnectedCallback();
		// 移除鼠标移动事件监听器
		window.removeEventListener('mousemove', this._trackMousePosition);
	}
	
	// 跟踪鼠标位置
	private _trackMousePosition = (e: MouseEvent): void => {
		this._mouseX = e.clientX;
		this._mouseY = e.clientY;
	}

	_renderBadge(item: MagicMenuItem, level: number = 0) {
		const badge = item.badge ? Number(item.badge) : 0;
		if (badge === 0 || (this.collapsed && level === 0)) return;
		return html`<sl-badge class='ml-badge' variant="danger" pill pulse>${badge}</sl-badge>`;
	}

	_renderIcon(item: MagicMenuItem) {
        const iconStyles = classMap((item.iconStyle || this.state.iconStyle || []).reduce((acc,cur)=>{
            if(cur.trim() === '') return acc            
            acc[cur] = true;
            return acc
        },{} as Record<string,boolean>))
		return html`<span class="ml-icon ${iconStyles}" > 
                ${when(item.icon, () => html`<sl-icon name="${item.icon!}"></sl-icon>`)}
                ${when(this.collapsed , () => this._renderBadge(item))}
                ${when(this.collapsed, () => this._renderRedDot(item))}                
            </span>`;
	}

	_renderLabel(item: MagicMenuItem, level: number = 0) {
		if (level === 0 && this.collapsed) return;
		return html`<span class="ml-label">${item.label}</span>`;
	}
	_renderActions(item: MagicMenuItem, level: number = 0) {
		if (this.collapsed && level === 0) return;
		if (!Array.isArray(item.actions)) return;
		return html`<span class="ml-actions">
        ${repeat(item.actions, (action) => {
					if (item.actions!.length > 2) return;
					return html`<magic-icon name="${action.icon}" title="${action.label!}"  class='action' size="small"></magic-icon>`;
				})}
            ${when(item.actions.length > 2, () => {
							return this._renderMoreActions(item.actions!);
						})}
        </span>`;
	}
	_renderMoreActions(actions: MagicMenuItemAction[]) {
		return html`<sl-dropdown>
                    <magic-icon name="more" class='action'  slot="trigger" size="small"></magic-icon>
                    <sl-menu>
                        ${repeat(actions, (action) => {
													return html`<sl-menu-item 
                                                    .disabled=${action.enabled === false}
                                                    type="${ifDefined(action.checked === true ? 'checkbox' : undefined)}"
                                                    ?checked=${action.checked === true}
                                                >
                                <magic-icon slot="prefix" name="${action.icon}"></magic-icon>
                                ${action.label}
                            </sl-menu-item>`;})}
                    </sl-menu>
                </sl-dropdown>`;
	}
	_renderExpander(item: MagicMenuItem) {
		if (this.collapsed) return;
		if (!item.children || item.children.length === 0) return;

		return html`<sl-icon-button data-id="${item.id}"  library="system" name="caret" class="expander ${classMap({
			expanded: item.expanded===undefined ? true : item.expanded,
			right: 1,
		})}"
            @click=${() => this._onExpandInlineMenu(item)}             
        ></sl-icon-button>`;
	}
	_onExpandInlineMenu(item: MagicMenuItem) {
		item.expanded = item.expanded === undefined ? false : !item.expanded;
	}
	_renderLoading(item: MagicMenuItem) {
		return html`${when(!this.collapsed && item.loading, () => html`<sl-spinner></sl-spinner>`)}`;
	}

	_renderItem(item: MagicMenuItem, parent?: MagicMenuItem, level: number = 0) {
		return html`<div class="ml-item ${classMap({
            'bottom-label':this.state.labelPos==='bottom'
        })}" title="${ifDefined(item.label)}">            
            <span class="ml-indent" style="width:${1.5 * level}em"></span>
            ${this._renderIcon(item)}                    
            ${this._renderLabel(item, level)}
            ${this._renderBadge(item, level)}           
            ${this._renderLoading(item)}
			${this._renderActions(item, level)} 
            ${this._renderExpander(item)}

        </div>`;
	}
	_renderSubmenu(item: MagicMenuItem, level: number = 0): TemplateResult {
		return html`
                <sl-menu slot="${ifDefined(level > 0 ? 'submenu' : '')}">
                    ${repeat(item.children!, (child) => {
											return html`<sl-menu-item>
                            ${when(child.icon, () => html`<magic-icon slot="prefix" name="${child.icon!}"></magic-icon>`)}                            
                            ${child.label}
                            ${when(Number(child.badge) > 0, () => html`<sl-badge slot="suffix" class='ml-badge' variant="danger" pill pulse>${child.badge}</sl-badge>`)}
                            ${when(child.children, () => this._renderSubmenu(child, level + 1))}
                        </sl-menu-item>`;
										})}
                </sl-menu>`;
	}

    _onMenuPopupItemOver(popupmenu: SlDropdown | undefined, e: MouseEvent) {
        if (!popupmenu) return;
        
        // 获取当前悬停的菜单项
        const menuItem = (e.currentTarget as HTMLElement).closest('.ml-item.popup') as HTMLElement;
        if (!menuItem) return;
        
        const itemId = menuItem.dataset.id;
        if (!itemId) return;
        
        // 如果是同一个菜单项的子元素触发的事件，不重复处理
        if (this._lastHoverItem === itemId) {
            return;
        }
        
        // 清除之前的定时器
        if (this._hoverTimer !== null) {
            window.clearTimeout(this._hoverTimer);
            this._hoverTimer = null;
        }
        
        if (this._leaveTimer !== null) {
            window.clearTimeout(this._leaveTimer);
            this._leaveTimer = null;
        }
        
        // 记录当前悬停的菜单项
        this._lastHoverItem = itemId;
        
        // 延迟显示菜单，避免鼠标快速经过时频繁触发
        this._hoverTimer = window.setTimeout(() => {
            popupmenu.show();
            this._hoverTimer = null;
        }, 200);
        
        // 添加鼠标离开事件处理
        menuItem.addEventListener('mouseleave', () => this._onMenuPopupItemLeave(popupmenu), { once: true });
    }
    
    _onMenuPopupItemLeave(popupmenu: SlDropdown | undefined) {
        if (!popupmenu) return;
        
        // 清除悬停定时器
        if (this._hoverTimer !== null) {
            window.clearTimeout(this._hoverTimer);
            this._hoverTimer = null;
        }
        
        // 延迟隐藏菜单，给用户时间移动到子菜单
        this._leaveTimer = window.setTimeout(() => {
            // 检查鼠标是否移到了子菜单上
            const submenu = popupmenu.querySelector('sl-menu');
            const dropdown = popupmenu.shadowRoot?.querySelector('.dropdown') as HTMLElement;
            
            // 检查鼠标是否在子菜单或下拉菜单容器上
            if ((submenu && this._isMouseOverElement(submenu as HTMLElement)) || 
                (dropdown && this._isMouseOverElement(dropdown))) {
                // 鼠标在子菜单上，不隐藏
                const elementToWatch = submenu || dropdown;
                if (elementToWatch) {
                    elementToWatch.addEventListener('mouseleave', () => {                      
                        popupmenu.hide();  // 当鼠标离开子菜单时，隐藏弹出菜单
                        this._lastHoverItem = null;
                    }, { once: true });
                }
            } else {               
                popupmenu.hide(); // 鼠标不在子菜单上，隐藏弹出菜单
                this._lastHoverItem = null;
            }
            this._leaveTimer = null;
        }, 300);
    }
    
    _isMouseOverElement(element: HTMLElement): boolean {
        const rect = element.getBoundingClientRect();
        // 使用document.defaultView?.getComputedStyle获取当前鼠标位置
        // 或者使用MouseEvent.clientX/Y的全局属性
        const mousePosition = this._getMousePosition();
        const mouseX = mousePosition.x;
        const mouseY = mousePosition.y;
        
        return (
            mouseX >= rect.left &&
            mouseX <= rect.right &&
            mouseY >= rect.top &&
            mouseY <= rect.bottom
        );
    }
    
    // 添加一个辅助方法来获取当前鼠标位置
    private _getMousePosition(): {x: number, y: number} {
        return {
            x: this._mouseX || 0,
            y: this._mouseY || 0
        };
    }
    
	_renderRedDot(item: MagicMenuItem) {
		const badge = item.badge ? Number(item.badge) : 0;
		return html`${when(badge > 0 && this.collapsed, () => {
			return html`<sl-badge class='reddot' variant="danger" pill pulse></sl-badge>`;
		})} `;
	}
	_renderItemWithPopupMenu(item: MagicMenuItem, parent?: MagicMenuItem, level: number = 0) {
        const dropdownRef = createRef<SlDropdown>();
        const id = item.id || item.label || item.icon || '';
		return html`               
            <div class="ml-item popup" slot="trigger" 
                data-id="${id}" 
                @mouseover="${(e:MouseEvent) => this._onMenuPopupItemOver(dropdownRef.value, e)}">
                <span class="ml-indent" style="width:${1.5 * level}em"></span>
                ${this._renderIcon(item)}
                ${this._renderLabel(item, level + 1)}                
                <sl-dropdown ${ref(dropdownRef)} class="ml-expander ${classMap({collapsed:this.collapsed})}" 
                    placement="right-start" distance="${this.collapsed ? 0 : 8}" hoist>
                    <sl-icon-button slot="trigger" library="system" name="caret" style="transform: rotate(-90deg)"></sl-icon-button>
                    ${this._renderSubmenu(item)}                    
                </sl-dropdown>          
            </div>                   
            `;
	}
	_renderItemWithInlineMenu(item: MagicMenuItem, parent?: MagicMenuItem, level: number = 0): TemplateResult {
		return html`${this._renderItem(item, parent, level)}           
        <div class="ml-inline-submenu ${classMap({
					collapsed: item.expanded === false,
				})} ">
            ${this._renderMenu(item.children!, item, level + 1)}
        </div>`;
	}

	_renderMenu(items: MagicMenuItem[], parent?: MagicMenuItem, level: number = 0) {
		return html`${repeat(items, (item) => {
			if (Array.isArray(item.children) && item.children.length > 0) {
				if (this.collapsed || level >= this._cache.inlineLevel || this.state.labelPos==='bottom') {
					return this._renderItemWithPopupMenu(item, parent, level);
				} else {
					return this._renderItemWithInlineMenu(item, parent, level);
				}
			} else {
				return this._renderItem(item, parent, level);
			}
		})}`;
	}
	render() {
		return this._renderMenu(this.state.items || [], undefined, 0);
	}
}
