/* eslint-disable @typescript-eslint/no-unused-vars */
/** 
 *  
 *  <magic-toobar></magic-toobar>
 * 
 */

import { LitElement, TemplateResult, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js';
import styles from './styles'
import { repeat } from 'lit/directives/repeat.js';
import { choose } from 'lit/directives/choose.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import "@shoelace-style/shoelace/dist/components/button/button.js";
import { classMap } from 'lit/directives/class-map.js';
import { MagicToolbarAction } from './types';
import './actions'


export type MagicToolbarOptions = {

}

@customElement('magic-toolbar')
export class MagicToolbar extends LitElement {
    static styles = styles

    @property({ type: Array, reflect: true })
    actions: MagicToolbarAction[] = []

    @property({ type: String })
    direction: 'hori' | 'vert' = 'hori'

    @property({ type: String })
    labelPos: 'none' | 'bottom' | 'right' = 'none'

    connectedCallback(): void {
        super.connectedCallback()

    }

    render() {
        return html`
            <div class="toolbar ${classMap({
            'hori': this.direction.startsWith('hori'),
            'vert': this.direction.startsWith('vert'),
            'right-label': this.labelPos === 'right',
            'bottom-label': this.labelPos === 'bottom'
        })
            }">
            ${repeat(this.actions, (item) => {
                return this._renderAction(item)
            })}</div>
        `
    }
    _renderAction(action: MagicToolbarAction) {
        const extraStyles = action.styles
        const widget = action.type
        let actionEle: HTMLElement
        try {
            actionEle = document.createElement(`magic-layout-action-${widget || 'input'}`)
        } catch {
            actionEle = document.createElement('auto-field-input')
        }
        // @ts-ignore
        actionEle.schema = action
        if (extraStyles) {

        }
        return actionEle
    }
    _renderWithTooltip(item: MagicToolbarAction, template: TemplateResult) {
        if (item.tips) {
            return html`<sl-tooltip 
                placement="${this.direction.startsWith('hori') ? 'bottom' : 'right'}"
                content="${item.tips}">
            ${template}
            </sl-tooltip>`
        } else {
            return template
        }
    }


    _renderButton(item: MagicToolbarAction) {
        return this._renderWithTooltip(item, html`<sl-button  @click="${item.onClick?.bind(item)}">
            ${when(item.icon, () => html`<sl-icon slot="prefix" style="font-size:24px;"  .name="${item.icon}"></sl-icon>`)
            }${ifDefined(item.label)}</sl-button>`)
    }
    _renderCheckbox(item: MagicToolbarAction) {
        return html`<sl-button @click="${item.onClick?.bind(item)}">${item.label}</sl-button>`
    }
    _renderDropdown(item: MagicToolbarAction) {
        return html`<sl-dropdown>
                    <sl-button slot="trigger">${item.label}</sl-button>
                    <sl-menu>
                        <sl-menu-item>${item.label}</sl-menu-item>
                    </sl-menu>
                </sl-dropdown>`
    }
    _renderDivider(item: MagicToolbarAction) {
        return html`<sl-divider></sl-divider>`
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-toolbar': MagicToolbar
    }
}
