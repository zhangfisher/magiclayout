import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import * as styles from "./styles";

@customElement('magic-sidebar-menu')
export class MagicSidebarMenu extends LitElement {
    static styles = styles.menu
    render() {
        return html`<div class="menu">
        <sl-menu>
            <sl-menu-item value="undo">
                <sl-icon slot="prefix" name="gift"></sl-icon>
                Undo
            </sl-menu-item>
            <sl-menu-item value="redo">Redo</sl-menu-item>
            <sl-divider></sl-divider>
            <sl-menu-item value="cut">Cut</sl-menu-item>
            <sl-menu-item value="copy">Copy</sl-menu-item>
            <sl-menu-item value="paste">Paste</sl-menu-item>
            <sl-menu-item value="delete">Delete</sl-menu-item>
        </sl-menu>    
        </div>`
    }
}


declare global {
    interface HTMLElementTagNameMap {
        'magic-sidebar-menu': MagicSidebarMenu
    }
}
