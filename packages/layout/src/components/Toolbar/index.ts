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

    @state()
    breakpoint: number = -1

    // 标记是否正在渲染过程中
    private isRendering: boolean = false


    _breakItems() {
        const actions = Array.from(this.shadowRoot?.children || []) as HTMLElement[];
        if (actions.length === 0) return;

        let breakpoint = -1;

        // 确定要监测的属性（水平布局监测top，垂直布局监测left）
        const offsetProperty = this.direction === 'hori' ? 'offsetTop' : 'offsetLeft';

        // 获取第一个元素的位置作为基准
        const baseOffset = actions[0][offsetProperty];

        // 遍历所有元素，检测位置变化
        for (let i = 1; i < actions.length; i++) {
            const action = actions[i];

            // 如果当前元素的位置与基准位置不同，说明发生了换行
            if (action[offsetProperty] !== baseOffset) {
                breakpoint = i;
                break;
            }
        }

        // 只有当breakpoint发生变化时才更新状态并触发重新渲染
        if (this.breakpoint !== breakpoint) {
            this.breakpoint = breakpoint;
            this.requestUpdate();
        }
    }

    onResize = () => {
        // 如果正在渲染过程中，忽略resize事件
        if (this.isRendering) return;
        this._breakItems()
    }
    protected willUpdate(): void {
        this.isRendering = true;
    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties)
        this._breakItems()
        // 标记更新完成
        this.isRendering = false;
    }

    _renderMoreMenu() {
        if (this.breakpoint == -1) return
        return html`<sl-dropdown distance="25" class="more">
                    <magic-action-button slot="trigger" .action=${{ icon: "more" } as any}>
                    </magic-action-button>
                    <sl-menu>
                        ${repeat(this.items, (item, index) => {
            if (index < this.breakpoint) return null
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
            if (this.breakpoint > -1 && index > this.breakpoint) return null
            return this._renderAction(item)
        })} `
    }
    render() {
        return html`
            ${this.renderActions()}
            ${this._renderMoreMenu()}
        `
        // return html`
        //     <div class="toolbar fit ${classMap({
        //     [this.direction]: true,
        //     [`${this.labelPos}-label`]: true,
        //     [`align-${this.align}`]: true
        // })}">
        //     ${this.renderActions()}
        //     ${this._renderMoreMenu()}
        // </div>
        // `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-toolbar': MagicLayoutToolbar
    }
}