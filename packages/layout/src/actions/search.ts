import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { MagicLayoutActionBase } from "./base";
import { when } from "lit/directives/when.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement('magic-action-search')
export class MagicLayoutActionSearch extends MagicLayoutActionBase {
    static styles = [MagicLayoutActionBase.styles, css`         
        sl-input{
            max-width: 8em;
        }
    `] as any

    @property({ type: String, reflect: true })
    size: 'small' | 'medium' | 'large' = 'medium'

    _onSearchChange(e: MouseEvent) {
        this.action.value = e.target?.value as string
    }
    renderWidget() {
        return html`<sl-input 
            .value=${this.action.value}
            placeholder="${ifDefined(this.action.placeholder)}"
            pill
            type="search"
            size="small"
            part="widget"
            @sl-input=${this._onSearchChange.bind(this)}
        >             
            <sl-icon name="search" slot="suffix"></sl-icon>
        </sl-input>`
    }
}


declare global {
    interface HTMLElementTagNameMap {
        'magic-action-search': MagicLayoutActionSearch
    }
}
