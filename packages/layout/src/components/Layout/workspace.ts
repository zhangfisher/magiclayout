import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import * as styles from "./styles";
import '@/components/Logo'
import { MagicElement } from "../MagicElement";
import { MagicLayoutOptions } from "@/context/types";

@customElement('magic-layout-workspace')
export class MagicLayoutWorkspace extends MagicElement<MagicLayoutOptions['workspace']> {
    static styles = styles.workspace

    render() {
        return html` 
         <div style="margin:2rem;border:1px solid red;">
            <magic-layout-logo direction="col"></magic-layout-logo>
            <magic-layout-logo direction="row"></magic-layout-logo>
            <magic-layout-toolbar
                class="toolbar"
                part="header-toolbar"
                .items=${this.store.state.header.toolbar.items || []}             
            ></magic-layout-toolbar>
            <magic-icon></magic-icon>
         </div>
        `
    }
}





declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-workspace': MagicLayoutWorkspace
    }
}
