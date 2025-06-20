/* eslint-disable @typescript-eslint/no-unused-vars */
/** 
 *  
 *  <magic-toobar></magic-toobar>
 * 
 */

import { LitElement, TemplateResult, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './styles'
import { consume } from '@lit/context';
import { MagicLayoutContext } from '@/context';
import { repeat } from 'lit/directives/repeat.js';
import { choose } from 'lit/directives/choose.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import "@shoelace-style/shoelace/dist/components/button/button.js";
import { classMap } from 'lit/directives/class-map.js';
import { IMagicLayoutStore } from '@/types';
import { MagicToolbarItem } from './types';


@customElement('magic-toolbar')
export class MagicToolbar extends LitElement {
    static styles = styles

    @consume({ context: MagicLayoutContext })
    @property({ attribute: false })
    context?: IMagicLayoutStore;

    items

    connectedCallback(): void {
        super.connectedCallback()
        toolbar = this.context.toolbar

    }

    render() {
        return html`
            <div class="toolbar ${classMap({
            'hori': this.direction === 'horizontal',
            'vert': this.direction === 'vertical',
            'right-label': this.labelPos === 'right',
            'bottom-label': this.labelPos === 'bottom'
        })
            }">
            ${repeat(this.items, (item) => {
                return html`${choose(item.type, [
                    ['dropdown', () => this._renderDropdown.call(this, item)],
                    ['divider', () => this._renderDivider.call(this, item)],
                    ['input', () => this._renderDivider.call(this, item)],
                    ['search', () => this._renderDivider.call(this, item)],
                    ['checkbox', () => this._renderCheckbox.call(this, item)],
                    ['avator', () => this._renderCheckbox.call(this, item)],
                    ['popup-menu', () => this._renderPopupMenu.call(this, item)],
                    ['popup-panel', () => this._renderPopupPanel.call(this, item)],
                    ['switch', () => this._renderCheckbox.call(this, item)],
                ], () => this._renderButton.call(this, item))}`
            })}</div>
        `
    }
    _renderWithTooltip(item: MagicToolbarItem, template: TemplateResult) {
        if (item.tips) {
            return html`<sl-tooltip 
                placement="${this.direction === 'horizontal' ? 'bottom' : 'right'}"
                content="${item.tips}">
            ${template}
            </sl-tooltip>`
        } else {
            return template
        }
    }
    _renderPopupmenu(item: MagicToolbarItem) {

    }
    _renderAvator(item: MagicToolbarItem) {

    }
    _renderSearch(item: MagicToolbarItem) {

    }
    _renderPopupPanel(item: MagicToolbarItem) {

    }
    _renderPopupMenu(item: MagicToolbarItem) {

    }
    _renderButton(item: MagicToolbarItem) {
        return this._renderWithTooltip(item, html`<sl-button  @click="${item.onClick?.bind(item)}">
            ${when(item.icon, () => html`<sl-icon slot="prefix" style="font-size:24px;"  .name="${item.icon}"></sl-icon>`)
            }${ifDefined(item.label)}</sl-button>`)
    }
    _renderCheckbox(item: MagicToolbarItem) {
        return html`<sl-button @click="${item.onClick?.bind(item)}">${item.label}</sl-button>`
    }
    _renderDropdown(item: MagicToolbarItem) {
        return html`<sl-dropdown>
                    <sl-button slot="trigger">${item.label}</sl-button>
                    <sl-menu>
                        <sl-menu-item>${item.label}</sl-menu-item>
                    </sl-menu>
                </sl-dropdown>`
    }
    _renderDivider(item: MagicToolbarItem) {
        return html`<sl-divider></sl-divider>`
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-toolbar': MagicToolbar
    }
}
