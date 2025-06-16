/* eslint-disable @typescript-eslint/no-unused-vars */
/** 
 * <magic-layout>
 */

import { CSSResult, LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './styles/base'
import { provide } from '@lit/context';
import { MagicLayoutContext } from '@/context'
import { registerIconLibrary } from '@shoelace-style/shoelace';
import { IconLibrary, IconLibraryResolver } from '@shoelace-style/shoelace/dist/components/icon/library.js';
import { classMap } from 'lit/directives/class-map.js';
import { IMagicLayoutStore, MagicLayoutHeaderOptions, MagicLayoutSiderOptions } from '@/types';
import "./sider"

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/rating/rating.js';
import '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js';
import '@shoelace-style/shoelace/dist/components/qr-code/qr-code.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/color-picker/color-picker.js';
import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/split-panel/split-panel.js';


@customElement('magic-layout')
export class MagicLayout extends LitElement {
    static styles = styles as CSSResult
    @property({ type: Object, reflect: true })
    store: IMagicLayoutStore = {}

    @provide({ context: MagicLayoutContext })
    context = this.store

    @property({ type: String })
    iconSet: string = 'https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/${name}.svg'

    @property({ type: Boolean, reflect: true })
    fullScreen: boolean = true

    @property({ type: Object, reflect: true })
    header: MagicLayoutHeaderOptions = {
        visible: true,
    }

    @property({ type: Object, reflect: true })
    sider: MagicLayoutSiderOptions = {}


    /**
     * 注册图标库 
     */
    registerIconSet(resolver: IconLibraryResolver, options?: Omit<IconLibrary, 'name' | 'resolver'>) {
        registerIconLibrary('default', {
            resolver,
            ...options || {}
        })
    }

    connectedCallback(): void {
        super.connectedCallback()
        this.registerIconSet((name) => {
            return this.iconSet.replace('${name}', name)
        })
    }

    _renderHeader() {
        return html`<div class="header ${classMap({
            'header': true,
            'header-fixed': true
        })}">www</div>`
    }


    render() {
        return html`
        <div part="root" class="root ${classMap({
            'full-screen': this.fullScreen,
        })}"> 
            
            <sl-split-panel part="container" style="--divider-width: 3px;" position="15" class="container fit">
                <sl-icon slot="divider" name="grip-vertical"></sl-icon>
                <div class="sider" slot="start">
                    <magic-layout-sider class="fit"></magic-layout-sider>
                </div>
                <div slot="end">
                    ${this._renderHeader()}
                    <slot name="body"></slot>    
                </div>
            </sl-split-panel>
        </div>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-layout': MagicLayout
    }
}
