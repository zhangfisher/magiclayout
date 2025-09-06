import { html, type TemplateResult } from 'lit';
import * as styles from './styles';
import { tag } from '@/utils/tag';
import type { MagicLayoutSidebarOptions } from '@/context/types';
import { MagicElement } from '@/components/MagicElement';
import { repeat } from 'lit/directives/repeat.js';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';
import type { MagicSideMenuItem } from './types';

@tag('magic-sidebar-menu')
export class MagicSidebarMenu extends MagicElement<MagicLayoutSidebarOptions['menu']> {
	static styles = styles.menu;
	stateKey: string = 'sidebar.menu';

	@property({ type: Boolean, reflect: true })
	collapsed: boolean = false;

	_onClickMenu = (e: any) => {
		console.log('menu item click:', e.target);
	};
	connectedCallback(): void {
		super.connectedCallback();
		this.addEventListener('click', this._onClickMenu);
	}

	_onItemCheck(item: MagicSideMenuItem) {}

	_renderBadge(item: MagicSideMenuItem) {
		const badge = item.badge ? Number(item.badge) : 0;
		return html`${when(badge > 0 && !this.collapsed, () => {
			return html`<sl-badge class='badge' slot="suffix"  variant="danger" pill pulse>${item.badge}</sl-badge>`;
		})} `;
	}
	_renderRedDot(item: MagicSideMenuItem) {
		const badge = item.badge ? Number(item.badge) : 0;
		return html`${when(badge > 0 && this.collapsed, () => {
			return html`<sl-badge class='reddot' variant="danger" pill pulse></sl-badge>`;
		})} `;
	}
	_renderPrefixIcon(item: MagicSideMenuItem, submenu: boolean = false) {
		if (!item.icon) return;
		return html`<span slot="prefix" class="${submenu ? '' : 'prefix'}">
                                        <sl-icon slot="prefix" .name="${item.icon}"></sl-icon>
                                        ${this._renderRedDot(item)}
                                    </span>`;
	}
	_renderMenuItem(item: MagicSideMenuItem, submenu: boolean = false): TemplateResult {
		const hasChildren = Array.isArray(item.children) && item.children.length > 0;
		return html`<sl-menu-item
                title="${item.tips || item.label || ''}"
                class=${classMap({
									'has-submenu': hasChildren,
									checked: !!item.checked,
									collapsed: !submenu && this.collapsed,
									'bottom-label': this.state.labelPos === 'bottom',
								})}
                >
                ${this._renderPrefixIcon(item, submenu)}
                <div class="label">${item.label}</div>
                ${this._renderBadge(item)}                
                ${when(hasChildren, () => {
									return this._renderMenu(item.children!, true) as any;
								})}
                                
            </sl-menu-item>
            ${this._renderInlineSubmenu(item)}
      `;
	}
	_renderInlineSubmenu(item: MagicSideMenuItem): TemplateResult {
		if (item.children?.length === 0) return html``;
		return html`<div class='submenu'>
                ${this._renderMenu(item.children!, true)}
        </div>`;
	}
	_renderMenu(items: MagicSideMenuItem[], submenu: boolean = false): TemplateResult {
		return html`
            <sl-menu slot=${submenu ? 'submenu' : ''} class="${classMap({
							collapsed: !submenu && this.collapsed,
							submenu,
							colorized: this.state.colorized,
						})}">
                ${repeat(items || [], (item) => {
									return this._renderMenuItem(item, submenu);
								})}
            </sl-menu>`;
	}
	_renderEmpty() {
		return html`<div class='empty'></div>`;
	}

	render() {
		const topItems = this.state.items!.filter((item) => item.bottom !== false) || [];

		const bottomItems = this.state.items!.filter((item) => item.bottom) || [];
		return html`
            ${this._renderMenu(topItems)}
            ${this._renderEmpty()}
            ${this._renderMenu(bottomItems)}
        `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'magic-sidebar-menu': MagicSidebarMenu;
	}
}
