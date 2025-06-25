import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import * as styles from "./styles";
import '@/components/Logo'

@customElement('magic-layout-header')
export class MagicLayoutHeader extends LitElement {
    static styles = styles.header

    render() {
        return html` 
        `
    }
}





declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-header': MagicLayoutHeader
    }
}
