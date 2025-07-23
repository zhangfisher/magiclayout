/* eslint-disable @typescript-eslint/no-unused-vars */
/** 
 * 
 *   
 *  <magic-toobar></magic-toobar>
 * 
 */

import { LitElement, html } from 'lit'
import { property } from 'lit/decorators.js'
import styles from './styles'
import "@shoelace-style/shoelace/dist/components/button/button.js";
import { tag } from '@/utils/tag';

@tag('magic-layout-menubar')
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
