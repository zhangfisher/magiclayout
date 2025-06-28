import '@shoelace-style/shoelace/dist/shoelace.js';
import '@shoelace-style/shoelace/dist/shoelace-autoloader.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import { customElement } from 'lit/decorators.js';
import { css, html, LitElement } from 'lit';

import '../src/styles/index.css'
export * from './flex'
export * from './toolbar'




@customElement('magic-layout-examples')
export class MagicLayoutExamples extends LitElement {
    static styles = css`
        :host{
            margin: 10px;
            display: block;
            position: relative;
            width: 90%;
            height: 800px;
            border: 1px solid #ccc;

        }
    `
    getOptions() {
        return {
            header: {
                header: {
                    title: "管理系统"
                },
                toolbar: {
                    items: [
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
            }

        }
    }

    render() {
        return html`

        <magic-layout .options=${this.getOptions()}>
            <div slot="body">
                <auto-box flex="row" gap="10px" grow="last" style="height:80px;width:700px;background-color:red">
                    <div>auto-box</div>
                    <div>auto-box</div>
                    <div>auto-box</div>
                    <div>auto-box</div>
                </auto-box>
                <auto-box flex="column" gap="10px" grow="last" style="height:300px;width:100px;background-color:#124555">
                    <div>auto-box</div>
                    <div>auto-box</div>
                    <div>auto-box</div>
                    <div>auto-box</div>
                </auto-box>
            </div>
        </magic-layout> 
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-examples': MagicLayoutExamples
    }
}
