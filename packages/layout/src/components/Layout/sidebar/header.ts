import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import * as styles from "./styles";
import { MagicLayoutOptions } from "@/context/types";
import { MagicElement } from "@/components/MagicElement";


@customElement('magic-sidebar-header')
export class MagicSidebarHeader extends MagicElement<MagicLayoutOptions['header']> {
    static styles = styles.header
    stateKey: string = 'header'
    render() {
        return html`<div class="header">header
        </div>`
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'magic-sidebar-header': MagicSidebarHeader
    }
}
