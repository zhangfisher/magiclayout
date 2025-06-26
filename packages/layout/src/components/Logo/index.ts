/* eslint-disable @typescript-eslint/no-unused-vars */
/** 
 * 
 *  
 *  
 *  <magic-container></magic-container>
 * 
 */

import { CSSResult, LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './styles'
import { MagicElement } from '../MagicElement';
import { RequiredMagicLayoutOptions } from '@/context/types';

@customElement('magic-layout-logo')
export class MagicLayoutLogo extends MagicElement<RequiredMagicLayoutOptions['logo']> {
    static styles = styles as CSSResult
    stateKey = 'logo'
    render() {

        return html`
            <div>Magic Logo</div>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-logo': MagicLayoutLogo
    }
}
