/* eslint-disable @typescript-eslint/no-unused-vars */
/** 
 * 
 *   
 *  <magic-toobar></magic-toobar>
 * 
 */

import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './styles'
import "@shoelace-style/shoelace/dist/components/button/button.js";

@customElement('magic-menubar')
export class MagicMenubar extends LitElement {
    static styles = styles

    @property({ type: String })
    title: string = ''

    render() {
        return html`
            
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-menubar': MagicMenubar
    }
}
