import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import * as styles from "./styles";
import '@/components/Logo'

@customElement('magic-layout-tabs')
export class MagicLayoutTabs extends LitElement {
    static styles = styles.tabs

    render() {
        return html`
        <div style="height: 3rem;">
            Tabs
        </div>
        `
    }
}





declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-tabs': MagicLayoutTabs
    }
}
