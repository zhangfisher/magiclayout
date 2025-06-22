import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import * as styles from "./styles";
import '@/components/Logo'

@customElement('magic-layout-header')
export class MagicLayoutSider extends LitElement {
    static styles = styles.base

    render() {
        return html`
        <magic-flex 
            direction="column" 
            grow="#menu" 
            align="stretch" 
            fit
        >
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
        'magic-layout-sider': MagicLayoutSider
    }
}
