import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { Resizeable } from "@/controllers/resizeable";
import { HostStyles } from "@/controllers/hostStyles";
import * as styles from "./styles";
import '@/components/Logo'
import { MagicElement } from "../../MagicElement";
import { RequiredMagicLayoutOptions } from "@/context/types";
import { getCssSize } from "@/utils/getCssSize";
import './header'
import './menu'
import './footer'
import './trigger'


@customElement('magic-layout-sidebar')
export class MagicLayoutSidebar extends MagicElement<RequiredMagicLayoutOptions['sidebar']> {
    static styles = styles.base
    resizeable = new Resizeable(this, { direction: 'right' })
    styles = new HostStyles(this)
    stateKey = 'sidebar'
    connectedCallback(): void {
        super.connectedCallback()
    }

    getSidebarWidth() {
        return getCssSize(this.sidebarCollapsed ? this.state.collapsedWidth : this.state.width)
    }
    render() {
        this.styles.toggle({
            [`width: ${this.getSidebarWidth()}`]: !!this.state.width,
            [`box-shadow: ${this.state.shadow}`]: !!this.state.shadow,
        })
        return html`
            <magic-flex 
                direction="column" 
                grow="magic-sidebar-menu" 
                align="stretch"  
                class="fit"
            >
                <magic-layout-logo> </magic-layout-logo>
                <magic-sidebar-header> </magic-sidebar-header>
                <magic-sidebar-menu style="border: 1px solid red;"></magic-sidebar-menu> 
                <magic-sidebar-footer> </magic-sidebar-footer>
                <magic-sidebar-trigger> </magic-sidebar-trigger>
            </magic-flex>
        `
    }
}





declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-sidebar': MagicLayoutSidebar
    }
}
