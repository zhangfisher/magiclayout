import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { MagicLayoutActionBase } from "./base";
import { when } from "lit/directives/when.js";

@customElement('magic-action-button')
export class MagicLayoutActionButton extends MagicLayoutActionBase {
    static styles = [MagicLayoutActionBase.styles, css`
        :host::part(base){
            border:none;
            padding:0px 8px;
            font-size: 24px;
            & sl-icon{ 
                & .lucide{
                    stroke-width: 1;
                }
            }            
        }
        :host::part(label){
            font-size: var(--ml-font-size);
        }
    `] as any

    renderWidget() {
        return html`<sl-button size="large" part="widget">
            <sl-icon name="${this.action.icon || 'settings'}" slot="prefix"></sl-icon>
            ${when(this.action.showLabel, () => html`<span slot="label">${this.action.label}</span>`)}
        </sl-button>`
    }
}


declare global {
    interface HTMLElementTagNameMap {
        'magic-action-button': MagicLayoutActionButton
    }
}
