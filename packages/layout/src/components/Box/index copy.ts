import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('auto-box')
export class AutoBox extends LitElement {
    static styles = css`
        :host{
            display: block;                    
            position: relative;            
        }

        :host > .box{
            display: flex;
            position: relative;            
            align-items: center;
            box-sizing: border-box;                            
            padding: var(--auto-spacing);
            font-size: var(--auto-font-size);
            border: var(--auto-border);
            border-radius: var(--auto-border-radius);
            color: var(--auto-text-color);
        }
        /* 小 */
        :host([size=small]) > .box {
            font-size: var(--sl-font-size-small);
            padding: var(--sl-spacing-small);
            border-radius: var(--sl-border-radius-small);
        }
        :host([shadow][size=small]) > .box {
            box-shadow: var(--sl-shadow-small);
        }
         
        /* 大 */
        :host([size=large]) > .box {
            font-size: var(--sl-font-size-large);
            padding: var(--sl-spacing-large);            
            border-radius: var(--sl-border-radius-large);
        }
        :host([shadow][size=small]) > .box {
            box-shadow: var(--sl-shadow-large);
        }

        /* Flex布局 */
        :host([flex=row]) > .box {            
            display: flex;
            flex-direction: row;
            align-items: center;
            
        }
        :host([flex=column]) > .box {
            display: flex;
            flex-direction: column;            
        }
        /* Grow  */
        :host([grow=first]) > .box > ::slotted(:first-child){
            flex-grow: 1;
        }
        :host([grow=last]) > .box > ::slotted(:last-child){           
            flex-grow: 1;
        }
        :host[grow=all] > .box > ::slotted(*){
            flex-grow: 1;
        }
        /* Shrink */
        :host([shrink=first]) > .box  > ::slotted(:first-child){
            flex-shrink: 0;
        }
        :host([shrink=last]) > .box > ::slotted(:last-child){
            flex-shrink: 0;
        }
        :host([shrink=all]) > .box  > ::slotted(*){
            flex-shrink: 0;
        }

        :host([no-padding]){
            padding: 0px;
        }
        :host([no-border]) > .box {
            border: 0px;
        }
        :host([no-radius]) > .box {
            border-radius: none;
        }        
        :host([shadow]) > .box {
            box-shadow: var(--auto-shadow);
        }

    `
    @property({ type: String })
    size: 'small' | 'medium' | 'large' = 'medium';

    @property({ type: Boolean, reflect: true })
    shadow: boolean = false;

    @property({ type: Boolean, reflect: true })
    noPadding: boolean = false;

    @property({ type: Boolean, reflect: true })
    noRadius: boolean = false;

    @property({ type: Boolean, reflect: true })
    noBorder: boolean = false;

    @property({ type: String })
    flex?: string;

    /**
     * 具有grow=1
     */
    @property({ type: String })
    grow?: 'first' | 'last' | 'all' = "last";

    /**
    * 具有shrink=0
    */
    @property({ type: String })
    shrink?: 'first' | 'last' | 'all' = "first";


    render() {
        return html`
            <div class="box">
                <slot></slot>
            </div>
        `
    }
}



declare global {
    interface HTMLElementTagNameMap {
        'auto-box': AutoBox;
    }
}