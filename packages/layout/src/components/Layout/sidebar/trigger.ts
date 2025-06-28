/**
 * 
 * trigger用于控制sidebar的折叠与展开
 * 
 */

import { MagicElement } from "@/components/MagicElement";
import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";


export type MagicSidebarTriggerOptions = {}

@customElement('magic-sidebar-trigger')
export class MagicSidebarTrigger extends MagicElement<MagicSidebarTriggerOptions> {
    stateKey: string = 'sidebar'
    static styles = css`
        sl-button::part(base){
            border:none;
            border-radius: opx;
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
    onTrigger() {
        const triggerEvent = new CustomEvent('sidebar-trigger', {
            detail: {
                collapsed: this.sidebarCollapsed
            }
        })
        this.sidebarCollapsed = !this.sidebarCollapsed
        this.dispatchEvent(triggerEvent)
    }
    render() {
        return html`<sl-button             
            class="sidebar-trigger
                ${classMap({ 'collapsed': this.sidebarCollapsed })}
            "
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
