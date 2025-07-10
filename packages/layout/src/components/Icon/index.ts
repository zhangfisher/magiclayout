import { HostClasses } from "@/controllers/hostClasss";
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('magic-icon')
export class MagicIcon extends LitElement {
    classs = new HostClasses(this)
    static styles = css`
        :host{    
            display: flex;
            & sl-icon{ 
                font-size: var(--ml-icon-size);
                color: var(--ml-text-color);
            }  
            sl-icon::part(svg) {
                stroke-width: 1px !important;
            }       
        }
        /* 小 */
        :host([size=small]) {
            font-size: var(--sl-font-size-small);
            padding: var(--sl-spacing-small);
            border-radius: var(--sl-border-radius-small);
        }
        :host([shadow][size=small]) {
            box-shadow: var(--sl-shadow-small);
        }
          
    `
    @property({ type: String })
    size: 'small' | 'medium' | 'large' = 'medium';

    @property({ type: String })
    name?: string

    render() {
        return html` 
            <sl-icon name="${this.name || 'file'}"></sl-icon>
        `
    }
}



declare global {
    interface HTMLElementTagNameMap {
        'magic-icon': MagicIcon;
    }
}