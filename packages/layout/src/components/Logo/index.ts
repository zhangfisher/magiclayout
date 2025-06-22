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
import { consume } from '@lit/context';
import { MagicLayoutContext } from '@/context';
import { IMagicLayoutStore } from '@/context/store';

@customElement('magic-logo')
export class MagicLogo extends LitElement {
    static styles = styles as CSSResult

    @consume({ context: MagicLayoutContext })
    @property({ attribute: false })
    context?: IMagicLayoutStore;

    render() {
        return html`
            <div>Magic Logo</div>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-logo': MagicLogo
    }
}
