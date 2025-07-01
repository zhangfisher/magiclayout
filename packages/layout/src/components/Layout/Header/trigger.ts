/**
 * 
 * trigger用于控制sidebar的折叠与展开
 * 
 */

import { MagicElement } from "@/components/MagicElement";
import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";


export type MagicHeaderTriggerOptions = boolean

@customElement('magic-header-trigger')
export class MagicHeaderTrigger extends MagicElement<MagicHeaderTriggerOptions> {
    static styles = css`
        sl-button::part(base){
            border:none;
            border-radius: 0px;
        }  
    `

    stateKey: string = 'sidebar.collapsed/'


    onTrigger() {
        this.store.state.sidebar.collapsed = !this.store.state.sidebar.collapsed
    }
    render() {
        return html`<sl-button             
            size="large"
            class="sidebar-trigger ${classMap({ 'collapsed': this.store.state.sidebar.collapsed })}"
            @click=${this.onTrigger.bind(this)}
        >
            <sl-icon name="menu" slot="prefix"></sl-icon>
        </sl-button>`
    }
}




declare global {
    interface HTMLElementTagNameMap {
        'magic-header-trigger': MagicHeaderTrigger
    }
}
