import { overloads } from '@/styles/overloads';
import type {
	MagicLayoutAction,
	MagicLayoutActionTypes,
} from '@/actions/types';
import { toggleWrapper } from '@/utils/toggleWrapper';
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class MagicLayoutActionBase<
	T extends MagicLayoutActionTypes = 'button',
> extends LitElement {
	static styles = css`
        ${overloads}       
        sl-button::part(base){
            border-radius: 0;
        }
        
        
    `;

	@property({ type: Object, reflect: true, attribute: false })
	action!: MagicLayoutAction<T>;

	@property({ type: Boolean, reflect: true, useDefault: true })
	vertical?: boolean;

	get shadow() {
		return this.shadowRoot!;
	}

	_onClick(e: any) {
		if (typeof this.action.onClick === 'function') {
			this.action.onClick.call(this, this.action, e);
		}
	}

	renderWidget() {
		return html``;
	}

	_renderDivider() {
		if (this.action.divider) {
			return html`<sl-divider .vertical=${!this.vertical}></sl-divider>`;
		}
	}

	render() {
		return html`
            ${toggleWrapper(
							!!this.action.tips,
							this.renderWidget(),
							(content) => {
								return html`<sl-tooltip 
                    placement="${this.vertical ? 'right' : 'bottom'}"
                    content="${this.action.tips!}" 
                >  
                    ${content}
            </sl-tooltip>`;
							},
						)}
        `;
	}
}
