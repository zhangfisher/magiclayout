/* eslint-disable @typescript-eslint/no-unused-vars */
/** 
 *  
 *  <magic-toobar></magic-toobar>
 * 
 */

import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js';
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

    connectedCallback(): void {
        super.connectedCallback()
    }

    onResize({ width, height }: { width: number, height: number }) {
        console.log(width, height)
    }

    _renderMoreMenu() {
        const items = this.items.filter((item) => {
            return item.fixed !== true
        })
        if (items.length == 0) return null
        return html`<sl-dropdown distance="25">
                    <magic-action-button slot="trigger" .action=${{ icon: "more" } as any}>
                    </magic-action-button>
                    <sl-menu>
                        ${repeat(items, (item) => {
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
        return html`<sl-divider></sl-divider>`
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
        return html`${repeat(this.items, (item) => {
            //if (this.collapsed && !item.fixed) return null
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
            ${when(this.collapsed === 'before', () => this._renderMoreMenu())}        
            ${this.renderActions()}
            ${when(this.collapsed === 'after', () => this._renderMoreMenu())}        
        </div>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-toolbar': MagicLayoutToolbar
    }
}
