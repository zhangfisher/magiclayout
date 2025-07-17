import { html } from "lit";
import { customElement, query } from "lit/decorators.js";
import styles from "./styles";
import { MagicElement } from "@/components/MagicElement";
import type { MagicLayoutOptions } from "@/context/types";
import { HostStyles } from "@/controllers/hostStyles";
import { when } from "lit/directives/when.js";
import type { SlDrawer } from "@shoelace-style/shoelace";
import './trigger'
import { ifDefined } from "lit/directives/if-defined.js";

@customElement('magic-layout-header')
export class MagicLayoutHeader extends MagicElement<MagicLayoutOptions['header']> {
    static styles = styles
    stateKey: string = 'header'
    styles = new HostStyles(this)
    @query('sl-drawer')
    drawer?: SlDrawer
    renderSidebar() {
        return html`<sl-drawer 
            placement="start" 
            class="drawer-placement-start"
            style="--size: ${this.store.state.sidebar.width};"
        >
        <magic-layout-sidebar class="fit"></magic-layout-sidebar>
        <sl-button slot="footer" variant="primary" @click=${this._onCloseSidebar.bind(this)}>Close</sl-button>
        </sl-drawer>`
    }

    _onOpenSidebar() {
        this.drawer?.show()
    }
    _onCloseSidebar() {
        this.drawer?.hide()
    }
    render() {
        this.styles.toggle({
            [`height: ${this.state.height}px`]: this.state.visible !== false,
            [`box-shadow: ${this.state.shadow}`]: !!this.state.shadow,
            [`border-bottom: ${this.state.border}`]: !!this.state.border,
        })
        return html` 
        ${this.renderSidebar()}
        <div part="header-base" class="header fit flex-row" >         
            ${when(this.store.state.logo.pos === 'header', () => html`
                <magic-layout-logo direction="row" shape="circle"></magic-layout-logo>`)
            }
            <span part="header-title" class="title">
                <sl-icon-button class="sidebar-tigger" name="menu" @click=${this._onOpenSidebar.bind(this)}></sl-icon-button> 
                ${this.state.title}
            </span>          
            <magic-layout-toolbar
                class="toolbar" 
                part="header-toolbar"
                labelPos="${ifDefined(this.state.toolbar.labelPos)}"
                .items=${this.state.toolbar.items || []}             
            ></magic-layout-toolbar>  
        </div>
        `
    }
}






declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-header': MagicLayoutHeader
    }
}
