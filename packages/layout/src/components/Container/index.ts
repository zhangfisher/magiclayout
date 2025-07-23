/* eslint-disable @typescript-eslint/no-unused-vars */
/** 
 * 
 *  
 *  
 *  <magic-container></magic-container>
 * 
 */

import { LitElement, html } from 'lit' 
import styles from './styles' 
import { tag } from '@/utils/tag'; 

@tag('magic-layout-container')
export class MagicLayoutContainer extends LitElement {
    static styles = styles  

   
    render() {
        return html`
            <slot></slot>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-container': MagicLayoutContainer
    }
}
