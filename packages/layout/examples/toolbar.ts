/* eslint-disable @typescript-eslint/no-unused-vars */

import { LitElement, css, html } from 'lit'
import { customElement, query } from 'lit/decorators.js'
import { MagicFlex } from '../src/components/flex'


@customElement('magic-toolbar-examples')
export class MagicToolbarExamples extends LitElement {
    static styles = css`     
        .actions{
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            padding: 8px 0px;
        } 
    `
    // @ts-ignore
    @query('magic-flex')
    flex?: MagicFlex

    onChangeAlign(e) {
        this.flex!.setAttribute('align', e.target.value)
    }
    _getItems() {
        return [
            { icon: 'settings', label: "设置", tips: '设置' },
            { icon: 'file', tips: '文件' },
            { icon: 'aperture', tips: '滤镜' },
            { icon: 'bell-ring', tips: '通知' },
            { icon: 'camera' },
            { icon: 'bug' },
            { icon: 'chrome' },
            { icon: 'message-square-more' },
            { icon: 'rotate-cw' },
        ]
    }
    render() {
        return html`
            <div class="root">
                <div class="actions">
                   
                </div>
                <div class="example">
                    <magic-toolbar
                        .items=${this._getItems()}
                    > 
                         
                    </magic-toolbar>
                       <magic-toolbar
                        .items=${this._getItems()}
                        direction="vertical"
                    > 
                         
                    </magic-toolbar>
                </div>
            </div>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-toolbar-examples': MagicToolbarExamples
    }
}
