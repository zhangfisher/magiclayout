import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { MagicLayoutActionBase } from "./base";

@customElement('magic-action-divider')
export class MagicLayoutActionDivider extends MagicLayoutActionBase {
    static styles = [MagicLayoutActionBase.styles, css`
        
    `] as any

    renderWidget() {
        return html`<sl-divider ?vertical=${this.vertical}></sl-divider>`
    }
}


declare global {
    interface HTMLElementTagNameMap {
        'magic-action-divider': MagicLayoutActionDivider
    }
}
