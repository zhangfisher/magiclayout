import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import * as styles from "./styles";


@customElement('magic-sidebar-header')
export class MagicSidebarHeader extends LitElement {
    static styles = styles.header
    render() {
        return html`<div class="header">header</div>`
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'magic-sidebar-header': MagicSidebarHeader
    }
}
