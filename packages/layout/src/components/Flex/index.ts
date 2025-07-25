/* eslint-disable @typescript-eslint/no-unused-vars */
/** 
 *  <maic-flex>
 *      
 *  </magic-flex> 
 */

import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './styles'
import { HostClasses } from '@/controllers/hostClasss'

export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse' | 'initial' | 'inherit'
export type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch' | 'initial' | 'inherit'
export type FlexJustify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-every' | 'space-around' | 'stretch' | 'initial' | 'inherit'
export type FlexDirection = 'row' | 'column' | 'column-reverse' | 'row-reverse' 


@customElement('magic-flex')
export class MagicFlex extends LitElement {
    static styles = styles  

    classes = new HostClasses(this)

    @property({ type: String })
    direction: FlexDirection  = 'row'

    @property({ type: String })
    gap: string = '0'

    @property({ type: String })
    wrap: FlexWrap = 'wrap'

    @property({ type: String })
    align: FlexAlign = 'center'

    @property({ type: String })
    justify?: FlexJustify = 'center'

    // none: 没有, inline: 仅单元格内部, full: 包括外边框
    @property({ type: String })
    border: string = 'inline'

    @property({ type: String })
    grow?: string

    @property({ type: String })
    shrink?: string

    @property({ type: Boolean, reflect: true })
    fit: boolean = false

    updateStyles() {
        const gap = String(parseInt(this.gap)) === String(this.gap) ? `${this.gap}px` : this.gap
        this.style.gap = gap
        const growElements = this.grow ? Array.from<HTMLElement>(this.querySelectorAll(this.grow)) : []
        const shrinkElements = this.shrink ? Array.from<HTMLElement>(this.querySelectorAll(this.shrink)) : []
        growElements.forEach(ele => {ele.style.flexGrow = '1'})
        shrinkElements.forEach(ele =>{ele.style.flexShrink = '1'})
        if (this.border === 'inline') {
            this.classList.add('inline-border')
        } else if (this.border === 'full') {
            this.classList.add('border')
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
