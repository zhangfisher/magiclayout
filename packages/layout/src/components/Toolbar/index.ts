/* eslint-disable @typescript-eslint/no-unused-vars */
/** 
 *  
 *  <magic-toobar></magic-toobar>
 * 
 */


import { customElement, property } from 'lit/decorators.js';
import { LitElement, html } from 'lit'
import type { MagicLayoutAction } from '@/context/types';
import { repeat } from 'lit/directives/repeat.js';
import { choose } from 'lit/directives/choose.js';
import { applyCustomStyles } from '../../utils/applyCustomStyles';
import { ResizeObserver } from '../../controllers/resizeObserver';
import '../../actions'
import styles from './styles'


@customElement('magic-layout-toolbar')
export class MagicLayoutToolbar extends LitElement {
    static styles = styles

    @property({ type: Array, reflect: true, attribute: false })
    items: MagicLayoutAction[] = []

    resizeObserver = new ResizeObserver(this)

    @property({ type: String })
    direction: 'hori' | 'vert' = 'hori'

    @property({ type: String })
    labelPos: 'none' | 'bottom' | 'right' = 'none'

    @property({ type: String })
    align: 'start' | 'end' = 'start'

    @property({ type: Boolean, reflect: true, useDefault: true })
    vertical?: boolean

    @property({ type: String, reflect: true })
    size: 'small' | 'medium' | 'large' = 'medium'


    itemSize: number = 50


    onResize = () => {
        this.requestUpdate()
    }
    _getMoreMenuPosition() {

    }
    _renderMoreMenu() {
        const breakpoint = this._getBreakpoint()
        if (breakpoint >= this.items.length) return null
        return html`<sl-dropdown 
                    class="more"
                    distance="${this.vertical ? 0 : 20}" 
                    skidding="20"
                    placement="${this.vertical ? 'right-end' : 'bottom-end'}"
                    style="display:block;"
                >
                    <magic-action-button 
                        class="fit" 
                        part='action' 
                        slot="trigger" 
                        .action=${{ icon: "more" }}>
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


    renderMenuItem(item: MagicLayoutAction) {
        return html`<sl-menu-item aria-hidden="false">
                <magic-icon  slot="prefix" .name="${item.icon}"></magic-icon>
                ${item.label}                
            </sl-menu-item>`
    }

    renderDivider() {
        return html`<sl-divider .vertical=${this.vertical === true}></sl-divider>`
    }

    _renderAction(action: MagicLayoutAction) {
        const extraStyles = action.styles
        const widget = action.type || 'button'
        let actionEle: HTMLElement
        try {
            actionEle = document.createElement(`magic-action-${widget || 'button'}`)
        } catch {
            actionEle = document.createElement('magic-action-button')
        }
        actionEle.setAttribute('part', 'action')
        actionEle.setAttribute('exportparts', 'widget')
        if (this.vertical) actionEle.setAttribute('vertical', '')

        // @ts-ignore
        actionEle.action = action
        // @ts-ignore
        if (!action.labelPos) actionEle.labelPos = this.labelPos

        applyCustomStyles(actionEle, extraStyles)

        // 显示分割线
        if (action.divider) {
            if (this.vertical) {
                actionEle.style.borderTop = '1px solid #e8e8e8';
            } else {
                actionEle.style.borderLeft = '1px solid #e8e8e8';
            }
        }
        return actionEle
    }

    _getBreakpoint() {
        if (this.vertical) {
            return Math.floor(this.offsetHeight / this.itemSize) - 1
        } else {
            return Math.floor(this.offsetWidth / this.itemSize) - 1
        }

    }

    _renderDivider(action: MagicLayoutAction) {
        if (action.divider) {
            return html`<sl-divider .vertical=${!this.vertical}></sl-divider>`
        } else {
            return ''
        }
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