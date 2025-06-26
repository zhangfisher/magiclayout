import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import * as styles from "./styles";
import '@/components/Logo'

@customElement('magic-layout-workspace')
export class MagicLayoutWorkspace extends LitElement {
    static styles = styles.workspace

    render() {
        return html` 
         workspace
        `
    }
}





declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-workspace': MagicLayoutWorkspace
    }
}
