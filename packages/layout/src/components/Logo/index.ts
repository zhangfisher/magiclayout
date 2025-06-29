
/* eslint-disable @typescript-eslint/no-unused-vars */
/** 
 * 
 *  
 *  
 *  <magic-container></magic-container>
 * 
 */

import { html, PropertyValues } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import styles from './styles'
import { MagicElement } from '../MagicElement';
import { RequiredMagicLayoutOptions } from '@/context/types';
import { when } from 'lit/directives/when.js';
import { toggleWrapper } from '@/utils/toggleWrapper';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { getCssSize } from '../../utils/getCssSize';

@customElement('magic-layout-logo')
export class MagicLayoutLogo extends MagicElement<RequiredMagicLayoutOptions['logo']> {
    static styles = styles
    stateKey = 'logo'


    @property({ type: Boolean, reflect: true })
    collapsed: boolean = false

    @property({ type: String })
    direction?: 'row' | 'col'

    @property({ type: Boolean, reflect: true })
    inline: boolean = false



    @query('.title')
    titleEle?: HTMLElement

    private _titleWidth: number = 0


    renderImage() {
        const imageStyles = styleMap({
            width: getCssSize(this.state.imageSize),
            height: getCssSize(this.state.imageSize),
        })
        const logoImage = when(this.state.image,
            () => html`<img class="image" src="${this.state.image}" style="${imageStyles}"/>`,
            () => html`<span class="image" style="${imageStyles}"><sl-icon name="${this.state.icon!}"></sl-icon></span>`)
        return toggleWrapper(!!this.state.url, logoImage, (content) => {
            return html`<a class="image" target="_blank" href="${this.state.url!}">${content}</a>`
        })
    }
    renderTitle() {
        if (!this.collapsed && this.state.title && this.state.title.length > 0) {
            return html`<span class="title">
                ${this.state.title} 
                ${when(this.state.subtitle && this.state.subtitle.length > 0, () => {
                return html`<span class="subtitle">${this.state.subtitle}</span>`
            })}                
            </span>`
        }
    }

    protected updated(_changedProperties: PropertyValues): void {
        if (this.titleEle) {
            this._titleWidth = this.titleEle.offsetWidth
        }
    }

    render() {
        return html`<div
                class="logo ${classMap({
            collapsed: this.collapsed,
            row: this.direction ? this.direction === 'row' : this.state.direction === 'row',
            col: this.direction ? this.direction === 'col' : this.state.direction === 'col',
            colorized: this.state.colorized,
            inline: this.inline,
        })}"
            style = "${styleMap({
            'background-color': this.state.colorized ? this.state.bgColor : undefined,
        })}"
        >
            ${this.renderImage()}
            ${this.renderTitle()}
        </div>
        `
    }

    onResize({ width }: { width: number }) {
        if (!this.titleEle) return
        if (this._titleWidth > 0 && this._titleWidth > width * 0.9) {
            this.titleEle.style.display = 'none'
        } else {
            this.titleEle.style.display = 'block'
        }
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-logo': MagicLayoutLogo
    }
}
