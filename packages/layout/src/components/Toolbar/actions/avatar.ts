import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { MagicLayoutActionBase } from "./base";

@customElement('magic-layout-action-avatar')
export class MagicLayoutActionAvatar extends MagicLayoutActionBase {
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
        return html`<sl-avatar label="User avatar"></sl-avatar>`
    }
}


declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-action-avatar': MagicLayoutActionAvatar
    }
}
