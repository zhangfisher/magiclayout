import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import './logo'
import './sider'
import * as siderStyles from "./styles/sider";


@customElement('magic-layout-sider-header')
export class MagicLayoutSiderHeader extends LitElement {
    static styles = siderStyles.header
    render() {
        return html`<div class="header">header</div>`
    }
}

@customElement('magic-layout-sider-footer')
export class MagicLayoutSiderFooter extends LitElement {
    static styles = siderStyles.footer
    render() {
        return html`<div class="footer">footer</div>`
    }
}

@customElement('magic-layout-sider-menu')
export class MagicLayoutSiderMenu extends LitElement {
    static styles = siderStyles.menu
    render() {
        return html`<div class="menu">menu</div>`
    }
}



@customElement('magic-layout-sider')
export class MagicLayoutSider extends LitElement {
    static styles = siderStyles.base

    render() {
        return html`
        <magic-flex direction="column" grow="#menu" align="stretch" class="fit">
            <magic-layout-logo> </magic-layout-logo>
            <magic-layout-sider-header> </magic-layout-sider-header>
            <magic-layout-sider-menu id="menu"></magic-layout-sider-menu>
            <magic-layout-sider-footer> </magic-layout-sider-footer>
        </magic-flex>
        `
    }
}





declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-sider-header': MagicLayoutSiderHeader
        'magic-layout-sider-menu': MagicLayoutSiderMenu
        'magic-layout-sider-footer': MagicLayoutSiderFooter
        'magic-layout-sider': MagicLayoutSider
    }
}
