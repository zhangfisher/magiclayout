/**
 * 
 * trigger用于控制sidebar的折叠与展开
 * 
 */

import { MagicElement } from "@/components/MagicElement";
import { SidebarCollapsedEvent } from "@/events";
import { StateOperate } from "autostore";
import { css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";


export type MagicSidebarTriggerOptions = boolean

@customElement('magic-sidebar-trigger')
export class MagicSidebarTrigger extends MagicElement<MagicSidebarTriggerOptions> {
    static styles = css`
        sl-button::part(base){
            border:none;
            border-radius: 0px;
        }
        sl-icon{
            transition: transform 0.2s ease-in;
            transform: rotate(90deg);
        }
        sl-button.collapsed{
            sl-icon{
                transform: rotate(-90deg);
            }
        }
    `

    stateKey: string = 'sidebar.collapsed/'


    onTrigger() {
        this.store.state.sidebar.collapsed = !this.store.state.sidebar.collapsed
    }
    render() {
        return html`<sl-button             
            class="sidebar-trigger ${classMap({ 'collapsed': this.store.state.sidebar.collapsed })}"
            style="width: 100%;"
            @click=${this.onTrigger.bind(this)}
        >
            <sl-icon library="system" name="caret"></sl-icon>
        </sl-button>`
    }
}




declare global {
    interface HTMLElementTagNameMap {
        'magic-sidebar-trigger': MagicSidebarTrigger
    }
}
