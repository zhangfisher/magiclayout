/* eslint-disable @typescript-eslint/no-unused-vars */

import { LitElement, PropertyValues, css, html } from 'lit'
import { customElement, query } from 'lit/decorators.js'
import { MagicFlex } from '../src/components/flex'


@customElement('magic-flex-examples')
export class MagicFlexExamples extends LitElement {
    static styles = css`     
        .actions{
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            padding: 8px 0px;
        }
        .cell{
            border: 1px solid #ddd;
            box-sizing: border-box;
            min-width: 100px;
            min-height: 80px;
        }
    `
    // @ts-ignore
    @query('magic-flex')
    flex?: MagicFlex

    onChangeAlign(e) {
        this.flex!.setAttribute('align', e.target.value)
    }
    onChangeJustify(e) {
        this.flex!.setAttribute('justify', e.target.value)
    }
    onChangeDirection(e) {
        this.flex!.setAttribute('direction', e.target.value)
    }

    onChangeGap(e) {
        this.flex!.setAttribute('gap', e.target.value)
    }

    renderAlign() {
        return html` 
        <sl-select 
            style="width:120px"
            label="Align:"  
            @sl-change=${this.onChangeAlign.bind(this)}    
            value="flex-start"
        >
            <sl-option value="flex-start"  value="flex-start">flex-start</sl-option>
            <sl-option value="center">center</sl-option>
            <sl-option value="flex-end">flex-end</sl-option>
                        <sl-option value="stretch">stretch</sl-option>

        </sl-select> 
    `
    }
    renderJustify() {
        return html` 
        <sl-select 
            style="width:120px"
            label="Justify:"  
            @sl-change=${this.onChangeJustify.bind(this)}    
            value="flex-start"
        >
            <sl-option value="flex-start"  value="flex-start">flex-start</sl-option>
            <sl-option value="center">center</sl-option>
            <sl-option value="flex-end">flex-end</sl-option>
            <sl-option value="space-between">space-between</sl-option>
        </sl-select> 
    `
    }
    renderDirection() {
        return html` 
        <sl-select 
            style="width:100px"
            label="Direction:"  
            @sl-change=${this.onChangeDirection.bind(this)}    
            value="row"
        >
            <sl-option value="row" value="flex-start">水平</sl-option>
            <sl-option value="column">垂直</sl-option> 
        </sl-select> 
    `
    }
    renderGap() {
        return html` 
       <sl-input id="gap" label="Gap" type="number"
       style="width:60px"
       @sl-change=${this.onChangeGap.bind(this)}
       ></sl-input>
    `
    }
    updateFlexValues() {
        // @ts-ignore
        this.shadowRoot.querySelector('#gap')!.value = this.flex!.gap
    }
    updated() {
        this.updateFlexValues()
    }

    render() {
        return html`
            <div class="root">
                <div class="actions">
                    ${this.renderAlign()}
                    ${this.renderJustify()}
                    ${this.renderDirection()}
                    ${this.renderGap()}
                </div>
                <div class="example">
                    <magic-flex> 
                        <span class='cell'>1</span>
                        <span class='cell'>2</span>
                        <span class='cell'>3</span>
                        <span class='cell'>4</span>
                        <span class='cell'>5</span>
                    </magic-flex>
                </div>
            </div>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-flex-examples': MagicFlexExamples
    }
}
