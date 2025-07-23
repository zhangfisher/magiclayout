import { HostClasses } from "@/controllers/hostClasss";
import { tag } from "@/utils/tag";
import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

@tag('magic-card')
export class MagicCard extends LitElement {
    classs = new HostClasses(this)
    static styles = css`
        :host{          
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
        :host([size=small]) {
            font-size: var(--sl-font-size-small);
            padding: var(--sl-spacing-small);
            border-radius: var(--sl-border-radius-small);
        }
        :host([shadow][size=small]) {
            box-shadow: var(--sl-shadow-small);
        }
         
        /* 大 */
        :host([size=large]) {
            font-size: var(--sl-font-size-large);
            padding: var(--sl-spacing-large);            
            border-radius: var(--sl-border-radius-large);
        }
        :host([shadow][size=small]) {
            box-shadow: var(--sl-shadow-large);
        } 
        /* Flex布局 */
        :host([flex=row]) {            
            display: flex;
            flex-direction: row;
            align-items: center;
            &>::slotted(*){
                box-sizing: border-box;
                height: 100%;
            }
        }
        :host([flex=column]) {
            display: flex;
            flex-direction: column;                
            &>::slotted(*){
                box-sizing: border-box;
                width: 100%;
            }        
        }
        /* Grow  */
        :host([grow=first]) > ::slotted(:first-child){
            flex-grow: 1;
        }
        :host([grow=last]) > ::slotted(:last-child){           
            flex-grow: 1;
        }
        :host[grow=all] > ::slotted(*){
            flex-grow: 1;
        }
        /* Shrink */
        :host([shrink=first])  > ::slotted(:first-child){
            flex-shrink: 0;
        }
        :host([shrink=last]) > ::slotted(:last-child){
            flex-shrink: 0;
        }
        :host([shrink=all])  > ::slotted(*){
            flex-shrink: 0;
        }

        :host([no-padding]){
            padding: 0px;
        }
        :host([no-border]) {
            border: 0px;
        }
        :host([no-radius]) {
            border-radius: none;
        }        
        :host([shadow]) {
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
    @property({ type: String })
    gap: string = '0'

    /**
     * 具有grow=1
     */
    @property({ type: String })
    grow?: 'first' | 'last' | 'all' | string = "last";

    /**
    * 具有shrink=0
    */
    @property({ type: String })
    shrink?: 'first' | 'last' | 'all' = "first";

    @property({ type: String })
    border?: 'inline' | 'full' | 'none' = "none";


    updateStyles() {
        const gap = String(parseInt(this.gap)) === String(this.gap) ? `${this.gap}px` : this.gap
        this.style.gap = gap
        const growElements = this.grow ? Array.from<HTMLElement>(this.querySelectorAll(this.grow)) : []
        const shrinkElements = this.shrink ? Array.from<HTMLElement>(this.querySelectorAll(this.shrink)) : []
        growElements.forEach(ele => {ele.style.flexGrow = '1'})
        shrinkElements.forEach(ele =>{ele.style.flexShrink = '1'})
        if (this.border === 'inline') {
            this.classList.add('inline-border')
        } else if (this.border === 'full') {
            this.classList.add('border')
        }
    }
    connectedCallback(): void {
        super.connectedCallback()
        if (!this.grow) {
            this.grow = this.flex === 'row' ? ':first-child' : ':last-child'
        }
        this.updateStyles()
    }
    attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
        super.attributeChangedCallback(name, _old, value)
        this.updateStyles()
    }
    render() {
        return html` 
            <slot></slot> 
        `
    }
}



declare global {
    interface HTMLElementTagNameMap {
        'magic-card': MagicCard;
    }
}