/* eslint-disable @typescript-eslint/no-unused-vars */
/** 
 *   
 */

import { LitElement, html } from 'lit'
import styles from './styles'
import { tag } from '@/utils/tag'
import { property } from 'lit/decorators.js';



@tag('magic-progressbar')
export class MagicProgressbar extends LitElement {
    static styles = styles  
  
    @property({ type: Number, reflect: true})
	max:number = 100
    
    @property({ type: Number, reflect: true})
	min:number = 0

    @property({ type: Number, reflect: true})
	value:number = 0
    
 
    connectedCallback(): void {
        super.connectedCallback()         
    }


    render() {
        return html` 
            <div class="value"></div>
        `
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'magic-progressbar': MagicProgressbar
    }
}
