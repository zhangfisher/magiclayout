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
        sl-button{
            height: 100%;
            align-content: center;
        }
        sl-button::part(base){
            border-radius: 0;
            background-color: transparent; 
        } 
        sl-button:hover{
            background-color: color-mix(in hsl, var(--t-color-theme-2), white 20%);
            color: var(--auto-primary-color);
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
        sl-badge::part(base){
            font-size: calc(0.6 * var(--auto-font-size))!important;
            aspect-ratio: 1;
            padding: 0 4px !important;
        }
        sl-badge.badge{
            position: absolute;
            top: -5px;
            right: -5px;
        }
        [slot="prefix"]{
            position: relative;
            display: flex
        }
    `,
	] as any;

	@property({ type: String, reflect: true })
	size: 'small' | 'medium' | 'large' = 'medium';

	@property({ type: String })
	labelPos: 'none' | 'bottom' | 'right' = 'none';

	_renderBadge() {
		const badge = this.action.badge ? Number(this.action.badge) : 0;
		return html`${when(badge > 0, () => {
			return html`<sl-badge class='badge' variant="danger" pill pulse></sl-badge>`;
		})} `;
	}
	_renderLabel() {
		const labelPos = this.action.labelPos || this.labelPos;
		return html`${when(
			labelPos !== 'none',
			() => html`<span>${this.action.label}</span>`,
		)}`;
	}
	renderWidget() {
		const labelPos = this.action.labelPos || this.labelPos;
		return html`<sl-button 
            size="${this.size}" 
            part="widget"
            class="${classMap({
							[labelPos]: true,
						})}">
            <span slot="prefix" class="prefix">
                <sl-icon name="${this.action.icon || 'file'}"></sl-icon>  
                ${this._renderBadge()} 
            </span>
            ${this._renderLabel()}
        </sl-button>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'magic-action-button': MagicLayoutActionButton;
	}
}
