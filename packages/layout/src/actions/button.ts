import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { MagicLayoutActionBase } from "./base";
import { when } from "lit/directives/when.js";
import { classMap } from "lit/directives/class-map.js";

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
        sl-button::part(base){
            border-radius: 0;
        }
        sl-button.bottom::part(base){
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    `] as any

    @property({ type: String, reflect: true })
    size: 'small' | 'medium' | 'large' = 'medium'

    @property({ type: String })
    labelPos: 'none' | 'bottom' | 'right' = 'none'

    renderWidget() {
        return html`<sl-button 
            size="${this.size}" 
            part="widget" 
            class="${classMap({
            [this.labelPos]: true
        })}">
            <sl-icon name="${this.action.icon || 'file'}" slot="prefix"></sl-icon>            
            ${when(this.labelPos !== 'none', () => {
            return html`<span>${this.action.label}</span>`
        })}
        </sl-button>`
    }
}


declare global {
    interface HTMLElementTagNameMap {
        'magic-action-button': MagicLayoutActionButton
    }
}
