import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import * as styles from "./styles";
import './header'
import './menu'
import './footer'
import '@/components/Logo'
import { MagicElement } from "../../MagicElement";
import { RequiredMagicLayoutOptions } from "@/context/types";
import { styleMap } from "lit/directives/style-map.js";
import { getCssSize } from "@/utils/getCssSize";

@customElement('magic-layout-sider')
export class MagicLayoutSider extends MagicElement<RequiredMagicLayoutOptions['sider']> {
    static styles = styles.base
    stateKey = 'sider'
    connectedCallback(): void {
        super.connectedCallback()
    }
    render() {
        return html`
            <magic-flex 
                direction="column" 
                grow="magic-sider-menu" 
                align="stretch"  
                style=${styleMap({
            width: getCssSize(this.state.width)
        })}
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
