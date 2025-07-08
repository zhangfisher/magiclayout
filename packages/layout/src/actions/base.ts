import { MagicLayoutAction } from "@/context/types";
import { toggleWrapper } from "@/utils/toggleWrapper";
import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class MagicLayoutActionBase extends LitElement {
    static styles = css`
        sl-icon::part(svg){
            stroke-width: 1px!important;
        }
        sl-button::part(label){
            padding: 0px ;
        }
    `

    @property({ type: Object, reflect: true, attribute: false })
    action!: MagicLayoutAction

    @property({ type: Boolean, reflect: true, useDefault: true })
    vertical?: boolean


    get shadow() {
        return this.shadowRoot!
    }

    _onClick(e: any) {
        if (typeof (this.action.onClick) === 'function') {
            this.action.onClick.call(this, this.action, e)
        }
    }

    renderWidget() {
        return html``
    }

    render() {
        return html`
            ${toggleWrapper(!!this.action.tips, this.renderWidget(), (content) => {
            return html`<sl-tooltip 
                placement="${this.vertical ? 'right' : 'bottom'}"
                content="${this.action.tips!}">
                    ${content}
            </sl-tooltip>`
        })}
        `
    }

}


function triggerWrapper(arg0: boolean, arg1: (e: any) => void) {
    throw new Error("Function not implemented.");
}

