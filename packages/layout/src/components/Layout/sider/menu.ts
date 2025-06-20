import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import * as styles from "./styles";

@customElement('magic-sider-menu')
export class MagicSiderMenu extends LitElement {
    static styles = styles.menu
    render() {
        return html`<div class="menu">menu</div>`
    }
}


declare global {
    interface HTMLElementTagNameMap {
        'magic-sider-menu': MagicSiderMenu
    }
}
