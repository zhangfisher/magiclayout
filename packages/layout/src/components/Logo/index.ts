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


@customElement('magic-logo')
export class MagicLogo extends LitElement {
    static styles = styles as CSSResult

    @consume({ context: MagicLayoutContext })
    @property({ attribute: false })
    public context?: MagicLayoutContextManager;
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
