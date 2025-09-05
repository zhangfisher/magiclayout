import { html, type TemplateResult } from 'lit';
import * as styles from './styles';
import { tag } from '@/utils/tag';
import type { MagicLayoutSidebarOptions } from '@/context/types';
import { MagicElement } from '@/components/MagicElement';
import { repeat } from 'lit/directives/repeat.js';
import { when } from 'lit/directives/when.js';
import type { MagicMenubarItem } from '@/components/Menu/types';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { toggleWrapper } from '@/utils/toggleWrapper';

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

	// _onClickMenu(e: any, item: MagicMenubarItem) {
	// 	item.onClick?.(e, item);
	// 	this.dispatchEvent(new CustomEvent('menu-click', { detail: item }));
	// }
	_onItemCheck(item: MagicMenubarItem) {}

	_renderBadge(item: MagicMenubarItem) {
		const badge = item.badge ? Number(item.badge) : 0;
		return html`${when(badge > 0 && !this.collapsed, () => {
			return html`<sl-badge class='badge' slot="suffix"  variant="danger" pill pulse>${item.badge}</sl-badge>`;
		})} `;
	}
	_renderRedDot(item: MagicMenubarItem) {
		const badge = item.badge ? Number(item.badge) : 0;
		return html`${when(badge > 0 && this.collapsed, () => {
			return html`<sl-badge class='reddot' variant="danger" pill pulse></sl-badge>`;
		})} `;
	}
	_renderPrefixIcon(item: MagicMenubarItem, submenu: boolean = false) {
		if (!item.icon) return;
		return html`<span slot="prefix" class="${submenu ? '' : 'prefix'}">
                                        <sl-icon slot="prefix" .name="${item.icon}"></sl-icon>
                                        ${this._renderRedDot(item)}
                                    </span>`;
	}
	_renderMenuItem(item: MagicMenubarItem, submenu: boolean = false): TemplateResult {
		const hasChildren = Array.isArray(item.children) && item.children.length > 0;
		return html`<sl-menu-item
                title="${item.tips || item.label || ''}"
                class=${classMap({
									'has-submenu': hasChildren,
									checked: !!item.checked,
									collapsed: !submenu && this.collapsed,
									'always-label': this.state.label === 'always',
								})}
                >
                ${this._renderPrefixIcon(item, submenu)}
                <div class="label">${item.label}</div>
                ${this._renderBadge(item)}                
                ${when(hasChildren, () => {
									return this._renderMenu(item.children!, true) as any;
								})}
            </sl-menu-item>
      `;
	}
	_renderMenu(items: MagicMenubarItem[], submenu: boolean = false): TemplateResult {
		return html`
            <sl-menu slot=${submenu ? 'submenu' : ''} class="${classMap({
							collapsed: !submenu && this.collapsed,
							submenu,
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
