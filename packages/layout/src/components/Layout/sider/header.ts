import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import * as styles from "./styles";


@customElement('magic-sider-header')
export class MagicSiderHeader extends LitElement {
    static styles = styles.header
    render() {
        return html`<div class="header">header</div>`
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'magic-sider-header': MagicSiderHeader
    }
}
