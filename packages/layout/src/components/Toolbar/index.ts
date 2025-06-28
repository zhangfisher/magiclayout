/* eslint-disable @typescript-eslint/no-unused-vars */
/** 
 *  
 *  <magic-toobar></magic-toobar>
 * 
 */

import { LitElement, TemplateResult, html } from 'lit'
import { customElement, property } from 'lit/decorators.js';
import styles from './styles'
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { MagicToolbarAction } from './types';
import './actions'
import { applyCustomStyles } from '../../utils/applyCustomStyles';


export type MagicToolbarOptions = {

}

@customElement('magic-layout-toolbar')
export class MagicLayoutToolbar extends LitElement {
    static styles = styles

    @property({ type: Array, reflect: true, attribute: false })
    items: MagicToolbarAction[] = []

    @property({ type: String })
    direction: 'hori' | 'vert' = 'hori'

    @property({ type: String })
    labelPos: 'none' | 'bottom' | 'right' = 'none'

    @property({ type: String })
    align: 'start' | 'end' = 'start'



    connectedCallback(): void {
        super.connectedCallback()

    }
    _renderAction(action: MagicToolbarAction) {
        const extraStyles = action.styles
        const widget = action.type || 'button'
        let actionEle: HTMLElement
        try {
            actionEle = document.createElement(`magic-layout-action-${widget || 'button'}`)
        } catch {
            actionEle = document.createElement('magic-layout-action-button')
        }
        // @ts-ignore
        actionEle.action = action
        applyCustomStyles(actionEle, extraStyles)
        return actionEle
    }

    render() {
        return html`
            <div class="toolbar fit ${classMap({
            'hori': this.direction.startsWith('hori'),
            'vert': this.direction.startsWith('vert'),
            'right-label': this.labelPos === 'right',
            'bottom-label': this.labelPos === 'bottom',
            'align-start': this.align === 'start',
            'align-end': this.align === 'end',
        })
            }"
            >
            ${repeat(this.items, (item) => {
                return this._renderAction(item)
            })}</div>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-toolbar': MagicLayoutToolbar
    }
}
