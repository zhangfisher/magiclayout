import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import logo from "./styles/logo";

@customElement('magic-layout-logo')
export class MagicLayoutLogo extends LitElement {
    static styles = logo
    render() {
        return html`
            <div class="logo">
                MagicLayout
                Logo
            </div>
        `
    }
}


declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-logo': MagicLayoutLogo
    }
}
