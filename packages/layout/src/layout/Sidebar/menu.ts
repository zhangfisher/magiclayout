import { html, TemplateResult } from 'lit';
import * as styles from './styles';
import { tag } from '@/utils/tag';
import type { MagicLayoutSidebarOptions } from '@/context/types';
import { MagicElement } from '@/components/MagicElement';
import { repeat } from 'lit/directives/repeat.js';
import { when } from 'lit/directives/when.js';
import { MagicMenubarItem } from '@/components/Menu/types';
import { classMap } from 'lit/directives/class-map.js';

@tag('magic-sidebar-menu')
export class MagicSidebarMenu extends MagicElement<MagicLayoutSidebarOptions['menu']> {
	static styles = styles.menu;
	stateKey: string = 'sidebar.menu';

	_onClickMenu(e: any, item: MagicMenubarItem) {
		item.onClick?.(e, item);
		this.dispatchEvent(new CustomEvent('menu-click', { detail: item }));
	}
	_renderMenuItem(item: MagicMenubarItem): TemplateResult {
		const hasChildren = Array.isArray(item.children) && item.children.length > 0;
		return html`<sl-menu-item
                @click=${(e: any) => this._onClickMenu(e, item)}
                class=${classMap({
									'has-submenu': hasChildren,
									checked: !!item.checked,
								})}
            >
                ${when(item.icon, () => {
									return html`<sl-icon slot="prefix" .name="${item.icon}"></sl-icon>`;
								})}                
                ${item.label}
                ${when(item.badge, () => {
									return html`<sl-badge slot="suffix" variant="primary" pill>${item.badge}</sl-badge>`;
								})}                   
                ${when(hasChildren, () => {
									return this._renderMenu(item.children!, true) as any;
								})}
            </sl-menu-item>
      `;
	}
	_renderMenu(items: MagicMenubarItem[], submenu: boolean = false): TemplateResult {
		return html`
            <sl-menu slot=${submenu ? 'submenu' : ''}>
                ${repeat(items || [], (item) => {
									return this._renderMenuItem(item);
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
