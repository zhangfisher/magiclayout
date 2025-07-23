import { html, LitElement } from "lit";
import * as styles from "./styles";
import { tag } from "@/utils/tag";


@tag('magic-sidebar-footer')
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
