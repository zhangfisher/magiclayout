import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MagicLayoutActionBase } from './base';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('magic-action-button')
export class MagicLayoutActionButton extends MagicLayoutActionBase<'button'> {
	static styles = [
		MagicLayoutActionBase.styles,
		css`        
        :host::part(base){
            border:none;
            padding:0px 8px;
            font-size: calc(1.5 * var(--auto-font-size));
            & sl-icon{ 
                & .lucide{
                    stroke-width: 1;
                }
            }            
        }
        :host::part(label){
            display: inline-block;
            font-size: var(--auto-font-size);
            line-height: 150%;
            overflow: hidden;            
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        sl-button::part(base){
            border-radius: 0;
            background-color: var(--auto-bgcolor);
        }

        sl-button.bottom::part(base){
            display: flex;
            flex-direction: column;
            align-items: center;    
            padding: 0.5em 0.2em;
        }
        sl-button.right::part(base){
            display: flex;
            flex-direction: row;
            align-items: center;
            gap:0.2em;
        }
        sl-button.none::part(label){
            display: none;
        }

    `,
	] as any;

	@property({ type: String, reflect: true })
	size: 'small' | 'medium' | 'large' = 'medium';

	@property({ type: String })
	labelPos: 'none' | 'bottom' | 'right' = 'none';

	renderWidget() {
		const labelPos = this.action.labelPos || this.labelPos;
		return html`<sl-button 
            size="${this.size}" 
            part="widget"
            class="${classMap({
							[labelPos]: true,
						})}">
            <sl-icon name="${this.action.icon || 'file'}" slot="prefix"></sl-icon>            
            ${when(
							labelPos !== 'none',
							() => html`<span>${this.action.label}</span>`,
						)}
        </sl-button>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'magic-action-button': MagicLayoutActionButton;
	}
}
