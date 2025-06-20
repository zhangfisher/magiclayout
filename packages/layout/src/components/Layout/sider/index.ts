import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import * as styles from "./styles";
import './header'
import './menu'
import './footer'
import '@/components/Logo'

@customElement('magic-sider')
export class MagicSider extends LitElement {
    static styles = styles.base

    render() {
        return html`
        <magic-flex direction="column" grow="#menu" align="stretch" fit>
            <magic-logo> </magic-logo>
            <magic-sider-header> </magic-sider-header>
            <magic-sider-menu style="border: 1px solid red;"></magic-sider-menu>
            <magic-sider-footer> </magic-sider-footer>
        </magic-flex>
        `
    }
}





declare global {
    interface HTMLElementTagNameMap {
        'magic-sider': MagicSider
    }
}
