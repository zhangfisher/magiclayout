/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * 
 *
 *  <maic-flex>
 *      
 *  </magic-flex>
 * 
 */

import { CSSResult, LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './styles'
import { FlexWrap, FlexAlign, FlexJustify } from '@/types'

@customElement('magic-flex')
export class MagicFlex extends LitElement {
    static styles = styles as CSSResult

    @property({ type: String })
    direction: string = 'row'
    @property({ type: String })
    gap: string = '0'
    @property({ type: String })
    wrap: FlexWrap = 'wrap'
    @property({ type: String })
    align: FlexAlign = 'center'
    @property({ type: String })
    justify?: FlexJustify = 'center'

    /**
     * 定义自动扩展的单元格的选择器
     */
    @property({ type: String })
    grow?: string

    updateStyles() {
        const gap = String(parseInt(this.gap)) === String(this.gap) ? `${this.gap}px` : this.gap
        Object.assign(this.style, {
            flexDirection: this.direction,
            gap: gap,
            flexWrap: this.wrap,
            alignItems: this.align,
            justifyContent: this.justify,
        })
        if (this.grow) {
            const growEle = this.querySelector(this.grow) as HTMLElement
            if (growEle) {
                growEle.style.flexGrow = '1'
            }
        }

    }
    connectedCallback(): void {
        super.connectedCallback()
        if (!this.grow) {
            this.grow = this.direction === 'row' ? ':first-child' : ':last-child'
        }
        this.updateStyles()
    }
    attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
        super.attributeChangedCallback(name, _old, value)
        this.updateStyles()
    }


    render() {
        return html` 
            <slot ></slot> 
        `
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'magic-flex': MagicFlex
    }
}
