import { html } from "lit";
import * as styles from "./styles";
import type { MagicLayoutOptions } from "@/context/types";
import { MagicElement } from "@/components/MagicElement";
import { tag } from "@/utils/tag";


@tag('magic-sidebar-header')
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
