import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('magic-layout-action-button')
export class MagicLayoutActionButton extends LitElement {
    render() {
        return html`<sl-button>button</sl-button>`
    }
}


declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-action-button': MagicLayoutActionButton
    }
}
