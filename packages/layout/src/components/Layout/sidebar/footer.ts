import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import * as styles from "./styles";


@customElement('magic-sidebar-footer')
export class MagicSidebarFooter extends LitElement {
    static styles = styles.footer
    render() {
        return html`<div class="footer">footer</div>`
    }
}




declare global {
    interface HTMLElementTagNameMap {
        'magic-sidebar-footer': MagicSidebarFooter
    }
}
