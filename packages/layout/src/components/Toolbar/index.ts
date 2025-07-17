/* eslint-disable @typescript-eslint/no-unused-vars */
/** 
 *  
 *  <magic-toobar></magic-toobar>
 * 
 */


import { customElement, property, state } from 'lit/decorators.js';
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
    resizeObserver = new ResizeObserver(this)

    @property({ type: Array, reflect: true, attribute: false })
    items: MagicLayoutAction[] = []

    /**
     * 声明工具栏位置
     * 决定工具栏是显示在顶部还是底部，或者显示在左边还是右边
     * 当显示tooltip时用于决定tooltip的显示位置
     */
    @property({ type: String })
    location: 'top' | 'bottom' | 'left' | 'right' = 'top'

    @property({ type: String })
    labelPos: 'none' | 'bottom' | 'right' = 'none'

    @property({ type: String })
    align: 'start' | 'end' = 'start'

    @property({ type: Boolean, reflect: true, useDefault: true })
    vertical?: boolean

    @property({ type: String, reflect: true })
    size: 'small' | 'medium' | 'large' = 'medium'

    @state()
    itemSize: number = 50

    @state()
    itemSizes: number[] = []

    _isMeasured: boolean = false

    connectedCallback(): void {
        super.connectedCallback()
        this.itemSize = this.vertical ? 56 : 50
    }
    onResize = () => {
        this.requestUpdate()
    }
    get shadow() {
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        return this.shadowRoot!
    }
    _measureSize() {
        const items = Array.from(this.shadow.children) as HTMLElement[]
        let size: number = 0
        items.forEach(item => {
            size += this.vertical ? item.offsetHeight : item.offsetWidth
            this.itemSizes.push(size)
        })
        this._isMeasured = true
    }

    _renderMoreMenu() {
        const breakpoint = this._getBreakpoint()
        if (breakpoint >= this.items.length) return null
        return html`<sl-dropdown 
                    class="more"
                    distance="${this.vertical ? 0 : 20}" 
                    skidding="20"
                    placement="${this.vertical ? 'right-end' : 'bottom-end'}"
                >
                    <magic-action-button 
                        class="fit" 
                        part='action' 
                        slot="trigger"                         
                        .action=${{ icon: "more", labelPos: 'none' } as any}>
                    </magic-action-button>
                    <sl-menu >
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
        return html`<sl-menu-item >
                <magic-icon slot="prefix" .name="${item.icon}"></magic-icon>
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
        if (!this._isMeasured) actionEle.style.visibility = 'hidden'
        // @ts-ignore
        if (!action.labelPos) actionEle.labelPos = this.labelPos

        applyCustomStyles(actionEle, extraStyles)

        // 显示分割线
        if (action.divider) {
            actionEle.classList.add('divider')
            // if (this.vertical) {
            //     actionEle.style.borderTop = '1px solid #e8e8e8';
            // } else {
            //     actionEle.style.borderLeft = '1px solid #e8e8e8';
            // }
        }
        return actionEle
    }
    _getBreakpoint() {
        const totalSize = this.vertical ? this.offsetHeight : this.offsetWidth
        if (this.itemSizes.length > 0) {
            for (let i = 0; i < this.itemSizes.length; i++) {
                if (totalSize < this.itemSizes[i]) {
                    return i - 1
                }
            }
        }
        return this.items.length
    }

    _getItemSize() {
        if (this.vertical) {
            return this.labelPos === 'bottom' ? 80 : 50
        } else {
            return 50
        }
    }

    firstUpdated() {
        setTimeout(() => {
            this._measureSize()
        })
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