/* eslint-disable @typescript-eslint/no-unused-vars */
/** 
 * <magic-layout>
 */

import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/rating/rating.js';
import '@shoelace-style/shoelace/dist/components/resize-observer/resize-observer.js';
import '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/color-picker/color-picker.js';
import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/split-panel/split-panel.js';
import { IconLibrary, IconLibraryResolver } from '@shoelace-style/shoelace/dist/components/icon/library.js';
import { createLayoutStore } from '@/context/store';
import { root as rootStyles } from './styles/root'
import { provide } from '@lit/context';
import { MagicLayoutContext } from '@/context'
import { registerIconLibrary } from '@shoelace-style/shoelace';
import { classMap } from 'lit/directives/class-map.js';
import { presetIcons } from './icons';
import '../Toolbar'
import './Sidebar'
import './panels'
import './Header'
import './pages'
import './workspace'
import { MagicLayoutOptions } from '@/context/types';
import { deepMerge } from 'flex-tools/object';
import type { MagicLayoutSidebar } from './Sidebar';
import { toggleWrapper } from '@/utils/toggleWrapper';
import { when } from 'lit/directives/when.js';
import { MediaQuery, MediaQueryResult } from '@/controllers/mediaQuery';



@customElement('magic-layout')
export class MagicLayout extends LitElement {
    static styles = rootStyles

    @provide({ context: MagicLayoutContext })
    store = createLayoutStore()

    @property({ type: Object, reflect: true, attribute: false })
    options?: Partial<MagicLayoutOptions>

    @property({ type: String })
    iconSet: string = 'https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/${name}.svg'

    @property({ type: Boolean, reflect: true })
    fullScreen: boolean = false

    state: MagicLayoutOptions = this.store.state

    mediaQuery = new MediaQuery(this)

    constructor() {
        super()
        this.store.root = this
    }
    get shadow() {
        return this.shadowRoot!
    }

    get sibebar(): MagicLayoutSidebar {
        return this.shadow.querySelector('magic-layout-sidebar') as MagicLayoutSidebar
    }

    onMediaQuery(mediaResult: MediaQueryResult) {
        console.log("mediaResult=", mediaResult)
    }

    /**
     * 注册图标库 
     */
    registerIcons(resolver: IconLibraryResolver, options?: Omit<IconLibrary, 'name' | 'resolver'>) {
        registerIconLibrary('default', {
            resolver,
            ...options || {}
        })
    }

    connectedCallback(): void {
        super.connectedCallback()
        this.registerIcons((name) => {
            if (name in presetIcons) {
                return `data:image/svg+xml,${encodeURIComponent((presetIcons as any)[name])}`;
            } else {
                return this.iconSet.replace('${name}', name)
            }
        })
        if (typeof (this.options) === 'object') {
            this.store.update((state) => {
                deepMerge(state, this.options)
            }, {
                silent: true
            })
        }
    }





    renderContainer() {
        return html`
            ${when(!this.state.header.fullRow, () => {
            return html`<magic-layout-header part="header"></magic-layout-header> `
        })}
            <magic-layout-tabs part="tabs" ></magic-layout-tabs>                 
            <magic-layout-workspace part="workspace" class="workspace"></magic-layout-workspace >   
        `
    }

    renderBodyWithHeader() {
        return html`${toggleWrapper(this.state.header.fullRow, this.renderBody(), (content) => {
            return html`<magic-flex  direction="column" class="fit body-wrapper">
                    <magic-layout-header part="header"></magic-layout-header>
                    <magic-flex grow="last" >
                        ${content}
                    </magic-flex>                    
                </magic-flex>
            `
        })}`
    }
    renderBody() {
        return html` 
            <magic-layout-sidebar part="sidebar"></magic-layout-sidebar>           
            <div class="container">
               ${this.renderContainer()}
            </div>
        `
    }

    render() {
        return html`
        <div part="root" class="root ${classMap({
            'full-screen': this.state.fullScreen,
        })}">
            ${this.renderBodyWithHeader()}
        </div>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-layout': MagicLayout
    }
}



// <!-- <magic-layout-sidebar part="sidebar" ></magic-layout-sidebar>
// <div class="container">
//    ${this.renderContainer()}
// </div> -->
// <!-- <magic-layout-drawer part="drawer"></magic-layout-drawer>   -->