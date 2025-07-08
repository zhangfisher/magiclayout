/* eslint-disable @typescript-eslint/no-unused-vars */
/** 
 *  
 *  <magic-toobar></magic-toobar>
 * 
 */

import { LitElement, PropertyValues, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js';
import styles from './styles'
import { repeat } from 'lit/directives/repeat.js';
import { choose } from 'lit/directives/choose.js';
import { classMap } from 'lit/directives/class-map.js';
import { MagicToolbarAction } from './types';
import '../../actions'
import { applyCustomStyles } from '../../utils/applyCustomStyles';
import { when } from 'lit/directives/when.js';
import { ResizeObserver } from '../../controllers/resizeObserver';

export type MagicToolbarOptions = {

}

@customElement('magic-layout-toolbar')
export class MagicLayoutToolbar extends LitElement {
    static styles = styles

    @property({ type: Array, reflect: true, attribute: false })
    items: MagicToolbarAction[] = []

    resizeObserver = new ResizeObserver(this)

    @property({ type: String })
    direction: 'hori' | 'vert' = 'hori'

    @property({ type: String })
    labelPos: 'none' | 'bottom' | 'right' = 'none'

    @property({ type: String })
    align: 'start' | 'end' = 'start'


    itemSize: number = 42


    onResize = () => {
        this.requestUpdate()
    }

    _renderMoreMenu() {
        const breakpoint = this._getBreakpoint()
        if (breakpoint >= this.items.length) return null
        return html`<sl-dropdown distance="25" class="more">
                    <magic-action-button slot="trigger" .action=${{ icon: "more" } as any}>
                    </magic-action-button>
                    <sl-menu>
                        ${repeat(this.items, (item, index) => {
            if (index < breakpoint) return null
            return html`${choose(item.type, [
                ['divider', () => this.renderDivider()]
            ], () => {
                return this.renderMenuItem(item)
            })}`
        })}            
                </sl-menu>
            </sl-dropdown>`
    }


    renderMenuItem(item: MagicToolbarAction) {
        return html`<sl-menu-item aria-hidden="false">
                    <magic-icon  slot="prefix" .name="${item.icon}"></magic-icon>
                    ${item.label}                
                </sl-menu-item>`
    }

    renderDivider() {
        return html`<sl-divider .vertical=${this.direction === 'hori'}></sl-divider>`
    }

    _renderAction(action: MagicToolbarAction) {
        const extraStyles = action.styles
        const widget = action.type || 'button'
        let actionEle: HTMLElement
        try {
            actionEle = document.createElement(`magic-action-${widget || 'button'}`)
        } catch {
            actionEle = document.createElement('magic-action-button')
        }
        // @ts-ignore
        actionEle.action = action
        applyCustomStyles(actionEle, extraStyles)
        return actionEle
    }

    _getBreakpoint() {
        return Math.floor(this.offsetWidth / this.itemSize) - 1
    }
    renderActions() {
        const breakpoint = this._getBreakpoint()
        if (breakpoint === 0) return
        return html`${repeat(this.items, (item, index) => {
            if (index >= breakpoint) return null
            return this._renderAction(item)
        })} `
    }
    render() {
        return html`
            ${this.renderActions()}
            ${this._renderMoreMenu()}
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-toolbar': MagicLayoutToolbar
    }
}