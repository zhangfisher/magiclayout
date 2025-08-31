import { html } from 'lit';
import * as styles from './styles';
import { tag } from '@/utils/tag';
import type { MagicLayoutSidebarOptions } from '@/context/types';
import { MagicElement } from '@/components/MagicElement';
import { repeat } from 'lit/directives/repeat.js';

@tag('magic-sidebar-menu')
export class MagicSidebarMenu extends MagicElement<MagicLayoutSidebarOptions['menu']> {
	static styles = styles.menu;
	stateKey: string = 'sidebar.menu';

	_renaderMenu() {
		const topItems = this.state.items.filter((item) => item.type === 'top') || [];

		return html`
            ${repeat(this.state?.items || [], (item) => {
							return ``;
						})}
        `;
	}

	render() {
		return html`
        <sl-menu>
            <sl-menu-item value="undo">
                <sl-icon slot="prefix" name="gift"></sl-icon>
                Undo
            </sl-menu-item>
            <sl-menu-item value="redo">
                <sl-icon slot="prefix" name="gift"></sl-icon>
                Redo
            </sl-menu-item>
            <sl-divider></sl-divider>
            <sl-menu-item value="cut">Cut</sl-menu-item>
            <sl-menu-item value="copy">Copy</sl-menu-item>
            <sl-menu-item value="paste">Paste</sl-menu-item>
            <sl-menu-item value="delete">Delete</sl-menu-item>
        </sl-menu>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'magic-sidebar-menu': MagicSidebarMenu;
	}
}
