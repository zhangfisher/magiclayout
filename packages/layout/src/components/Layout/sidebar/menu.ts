import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import * as styles from "./styles";

@customElement('magic-sidebar-menu')
export class MagicSidebarMenu extends LitElement {
    static styles = styles.menu
    render() {
        return html`<div class="menu">menu</div>`
    }
}


declare global {
    interface HTMLElementTagNameMap {
        'magic-sidebar-menu': MagicSidebarMenu
    }
}
