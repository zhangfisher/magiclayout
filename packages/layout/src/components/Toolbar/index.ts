/* eslint-disable @typescript-eslint/no-unused-vars */
/** 
 * 
 *   
 *  <magic-toobar></magic-toobar>
 * 
 */

import { LitElement, TemplateResult, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './styles'
import { consume } from '@lit/context';
import { MagicLayoutContextManager, MagicLayoutContext } from '@/context';
import { repeat } from 'lit/directives/repeat.js';
import { choose } from 'lit/directives/choose.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import "@shoelace-style/shoelace/dist/components/button/button.js";
import { classMap } from 'lit/directives/class-map.js';

export type MagicToolbarItem = {
    type?: 'button' | 'dropdown' | 'divider' | 'checkbox' | 'input' | 'search' | 'switch' | 'popupmenu' | 'popover'
    icon?: string
    label?: string
    active?: boolean
    disabled?: boolean
    badge?: string
    value?: any
    tips?: string

    onClick?: () => void
    onChange?: () => void
}

@customElement('magic-toolbar')
export class MagicToolbar extends LitElement {
    static styles = styles

    @consume({ context: MagicLayoutContext })
    @property({ attribute: false })
    public context?: MagicLayoutContextManager;

    @property({ type: Array, reflect: true })
    items: MagicToolbarItem[] = []

    @property({ type: String })
    direction: 'horizontal' | 'vertical' = 'horizontal'

    @property({ type: String })
    labelPos: 'right' | 'bottom' = 'right'

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
                    ['checkbox', () => this._renderCheckbox.call(this, item)],
                    ['switch', () => this._renderCheckbox.call(this, item)],
                ], () => this._renderButton.call(this, item))}`
            })}</div>
        `
    }
    _renderWithTooltip(item: MagicToolbarItem, template: TemplateResult) {
        if (item.tips) {
            return html`<sl-tooltip 
                placement="bottom"
                content="${item.tips}">
            ${template}
            </sl-tooltip>`
        } else {
            return template
        }
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
