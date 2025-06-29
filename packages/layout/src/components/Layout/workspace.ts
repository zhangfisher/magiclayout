import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import * as styles from "./styles";
import '@/components/Logo'

@customElement('magic-layout-workspace')
export class MagicLayoutWorkspace extends LitElement {
    static styles = styles.workspace

    render() {
        return html` 
         <div style="margin:2rem;border:1px solid red;">
            <magic-layout-logo direction="col"></magic-layout-logo>
            <magic-layout-logo direction="row"></magic-layout-logo>
         </div>
        `
    }
}





declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-workspace': MagicLayoutWorkspace
    }
}
