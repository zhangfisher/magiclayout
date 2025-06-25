import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import * as styles from "./styles";
import '@/components/Logo'

@customElement('magic-layout-panels')
export class MagicLayoutPanels extends LitElement {
    static styles = styles.panels

    render() {
        return html`
        <magic-flex 
            direction="column" 
            grow="#menu" 
            align="stretch"  
            fit
        > 
        dssssssss
        </magic-flex>
        `
    }
}





declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-panels': MagicLayoutPanels
    }
}
