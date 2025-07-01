import { html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./styles";
import { MagicElement } from "@/components/MagicElement";
import { MagicLayoutOptions } from "@/context/types";
import { HostStyles } from "@/controllers/hostStyles";
import { when } from "lit/directives/when.js";
import './trigger'

@customElement('magic-layout-header')
export class MagicLayoutHeader extends MagicElement<MagicLayoutOptions['header']> {
    static styles = styles
    stateKey: string = 'header'
    styles = new HostStyles(this)

    render() {
        this.styles.toggle({
            [`height: ${this.state.height}px`]: this.state.visible !== false,
            [`box-shadow: ${this.state.shadow}`]: !!this.state.shadow,
            [`border-bottom: ${this.state.border}`]: !!this.state.border,
        })
        return html` 
        <magic-flex 
            grow="magic-layout-toolbar"
            class="fit">            
            ${when(this.store.state.logo.position === 'header', () => html`
                <magic-layout-logo direction="row" shape="circle"></magic-layout-logo>`)
            }
            <span class="title">
                <magic-header-trigger></magic-header-trigger>
                ${this.state.title}
            </span>            
            <magic-layout-toolbar
                class="toolbar"
                part="header-toolbar"
                .items=${this.state.toolbar.items || []}
                align="end"                
            ></magic-layout-toolbar>
        </magic-flex >
        `
    }
}





declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-header': MagicLayoutHeader
    }
}
