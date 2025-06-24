import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import * as styles from "./styles";
import './header'
import './menu'
import './footer'
import '@/components/Logo'
import { MagicElement } from "../../MagicElement";
import { RequiredMagicLayoutOptions } from "@/context/types";

@customElement('magic-layout-sider')
export class MagicLayoutSider extends MagicElement<RequiredMagicLayoutOptions['sider']> {
    static styles = styles.base
    stateKey = 'sider'
    connectedCallback(): void {
        super.connectedCallback()
    }
    render() {
        this.context.state.sider

        return html`
        <magic-flex direction="column" grow="magic-sider-menu" align="stretch" fit>
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
