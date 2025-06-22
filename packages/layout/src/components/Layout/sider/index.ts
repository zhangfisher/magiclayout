import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import * as styles from "./styles";
import './header'
import './menu'
import './footer'
import '@/components/Logo'
import { MagicLayoutContext } from "@/context";
import { consume } from "@lit/context";
import { IMagicLayoutStore } from "@/context/store";
import { MagicElement } from "@/utils/magicElement";

@customElement('magic-layout-sider')
export class MagicLayoutSider extends MagicElement('sider') {
    static styles = styles.base

    // @consume({ context: MagicLayoutContext })
    // @property({ attribute: false })
    // context?: IMagicLayoutStore;

    connectedCallback(): void {
        super.connectedCallback()
        debugger
        this.context
        this.state
    }
    render() {
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
