import { HostClasses } from '@/controllers/hostClasss';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('magic-icon')
export class MagicIcon extends LitElement {
	classs = new HostClasses(this);
	static styles = css`
        :host{    
            display: flex;
            & sl-icon{ 
                color: currentColor;
                font-size: var(--auto-icon-size); 
                &.small{
                    font-size: call(0.5 * var(--auto-icon-size));
                }
                &.large{
                    font-size: call(1.5 * var(--auto-icon-size));
                }
            }  
            sl-icon::part(svg) {
                stroke-width: 1px !important;
            }       
        }          
    `;
	@property({ type: String })
	size: 'small' | 'medium' | 'large' = 'medium';

	@property({ type: String })
	name?: string;

	render() {
		return html` 
            <sl-icon name="${this.name || 'file'}"
                class="${this.size}"
            ></sl-icon>
        `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'magic-icon': MagicIcon;
	}
}
