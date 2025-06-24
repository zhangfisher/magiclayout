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
import "./sider"

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/rating/rating.js';
import '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/color-picker/color-picker.js';
import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/split-panel/split-panel.js';
import { MagicLayoutStore } from '@/context/store';


@customElement('magic-layout')
export class MagicLayout extends LitElement {
    static styles = styles as CSSResult

    @provide({ context: MagicLayoutContext })
    context = new MagicLayoutStore()

    @property({ type: String })
    iconSet: string = 'https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/${name}.svg'

    @property({ type: Boolean, reflect: true })
    fullScreen: boolean = true

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

    renderWorkspace() {

    }

    render() {
        return html`
        <div part="root" class="root ${classMap({
            'full-screen': this.fullScreen,
        })}">
            <div part="sider" class="sider">
                <magic-layout-sider class="fit"></magic-layout-sider>
            </div>
            <div part="body" class="body" > 
                <magic-layout-header part="header"  class="fit"></magic-layout-header> 
                <magic-layout-tabs part="tabs"  class="fit"></magic-layout-tabs> 
                <div part="workspace" class="workspace">
                    <magic-layout-panels part="panels"></magic-layout-panels>  
                </div>
            </div> 
            <magic-layout-drawer part="drawer"></magic-layout-drawer>  
        </div>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-layout': MagicLayout
    }
}
