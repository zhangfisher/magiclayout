import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MagicLayoutActionBase } from './base';
import { ifDefined } from 'lit/directives/if-defined.js';

@customElement('magic-action-search')
export class MagicLayoutActionSearch extends MagicLayoutActionBase {
	static styles = [
		MagicLayoutActionBase.styles,
		css`         
        sl-input{
            max-width: 8em;
            width: 6em;
            transition: width 0.3s ease-in;            
        }
        sl-input:focus{
            width: 8em;
        }
    `,
	] as any;

	@property({ type: String, reflect: true })
	size: 'small' | 'medium' | 'large' = 'medium';

	_onChange(e: MouseEvent) {
		// @ts-ignore
		this.action.value = e.target?.value as string;
	}
	_onSearch(e: Event) {
		if (e instanceof KeyboardEvent && e.key === 'Enter') {
			//if (isFunction(this.action.onSearch)) this.action?.onSearch(this.action, e)
		}
	}
	renderWidget() {
		return html`<sl-input 
            .value=${this.action.value}
            placeholder="${ifDefined(this.action.placeholder)}"
            pill
            type="search"
            size="small"
            part="widget"
            @sl-input=${this._onChange.bind(this)}
            @keydown=${this._onSearch.bind(this)}
        >             
            <sl-icon name="search" slot="suffix"></sl-icon>
        </sl-input>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'magic-action-search': MagicLayoutActionSearch;
	}
}
