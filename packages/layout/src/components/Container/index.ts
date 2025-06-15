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
import { MagicLayoutContextManager, MagicLayoutContext } from '@/context';


@customElement('magic-container')
export class MagicContainer extends LitElement {
    static styles = styles as CSSResult

    @consume({ context: MagicLayoutContext })
    @property({ attribute: false })
    public context?: MagicLayoutContextManager;
    render() {
        return html`
            <slot></slot>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-container': MagicContainer
    }
}
