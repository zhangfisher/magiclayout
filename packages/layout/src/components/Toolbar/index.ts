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


    @property({ type: String })
    collapsed?: 'none' | 'before' | 'after'

    @state()
    splitIndex: number = -1

    connectedCallback(): void {
        super.connectedCallback()
    }

    disconnectedCallback(): void {
        super.disconnectedCallback()
    }
    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties)
        this._splitItems()
    }
    _splitItems(): [number, HTMLElement | undefined] {
        const actions = Array.from(this.shadowRoot?.querySelectorAll(".toolbar > *") || [])
        let overIndex = -1
        for (let i = 0; i < actions.length; i++) {
            const action = actions[i] as HTMLElement
            if (action.offsetLeft + action.offsetWidth > this.offsetWidth) {
                overIndex = i
                if (this.direction == 'hori') break
            }
            if (action.offsetTop + action.offsetHeight > this.offsetHeight) {
                overIndex = i
                if (this.direction == 'vert') break
            }
        }
        this.splitIndex = overIndex
        return [overIndex, actions[overIndex] as HTMLElement | undefined]
    }
    onResize = () => {
        this._splitItems()
    }

    _onCollapseToolbar(action: HTMLElement | undefined) {
        if (this.direction == 'hori') {

        } else {

        }
    }

    _renderMoreMenu() {
        if (this.splitIndex == -1) return
        return html`<sl-dropdown distance="25" class="more">
                    <magic-action-button slot="trigger" .action=${{ icon: "more" } as any}>
                    </magic-action-button>
                    <sl-menu>
                        ${repeat(this.items, (item, index) => {
            if (index < this.splitIndex) return null
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
                    <magic-icon  slot="prefix"  .name="${item.icon}"></magic-icon>
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

    renderActions() {
        return html`${repeat(this.items, (item, index) => {
            if (this.splitIndex > -1 && index < this.splitIndex) return null
            return this._renderAction(item)
        })} `
    }
    render() {
        return html`
            <div class="toolbar fit ${classMap({
            [this.direction]: true,
            [`${this.labelPos}-label`]: true,
            [`align-${this.align}`]: true
        })}">
            ${this.renderActions()}
            ${this._renderMoreMenu()}
        </div>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-toolbar': MagicLayoutToolbar
    }
}
