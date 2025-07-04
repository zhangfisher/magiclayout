import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { MagicLayoutActionBase } from "./base";

@customElement('magic-action-dropdown')
export class MagicLayoutActionDropdown extends MagicLayoutActionBase {


    render() {
        return html`<sl-dropdown>
                    <sl-button slot="trigger">${this.action.label}</sl-button>
                    <sl-menu>
                        <sl-menu-item>${this.action.label}</sl-menu-item>
                    </sl-menu>
                </sl-dropdown>`
    }
}


declare global {
    interface HTMLElementTagNameMap {
        'magic-action-dropdown': MagicLayoutActionDropdown
    }
}
