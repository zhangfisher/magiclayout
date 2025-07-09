import '@shoelace-style/shoelace/dist/shoelace.js';
import '@shoelace-style/shoelace/dist/shoelace-autoloader.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import { customElement, query } from 'lit/decorators.js';
import { css, html, LitElement, PropertyValues } from 'lit';

import '../src/styles/index.css'
export * from './flex'
export * from './toolbar'
import type { MagicLayout } from '../src/components/layout'



@customElement('magic-layout-examples')
export class MagicLayoutExamples extends LitElement {
    static styles = css`
        :host{
            margin: 10px;
            display: block;
            position: relative; 

        }
    `

    @query('magic-layout')
    layout?: HTMLElement

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties)
        globalThis.layout = this.layout as MagicLayout
    }

    getOptions() {
        return {
            header: {
                title: "管理系统",
                logo: true,
                toolbar: {
                    items: [
                        { icon: 'settings', label: "设置", tips: '设置' },
                        { icon: 'file', label: "打开文件", tips: '文件' },
                        { icon: 'aperture', label: "滤镜", tips: '滤镜' },
                        { icon: 'bell-ring', label: '我的通知', fixed: true, tips: '通知', divider: true },
                        { icon: 'camera', label: '我的相机', tips: '相机' },
                        { icon: 'bug', label: 'Bug管理' },
                        { icon: 'chrome', label: '浏览器' },
                        { icon: 'message-square-more', label: '更多...' },
                        { icon: 'rotate-cw', label: '刷新' },
                    ]
                }
            }

        }
    }

    render() {
        return html`

        <magic-layout .options=${this.getOptions()}>
             
        </magic-layout> 
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-examples': MagicLayoutExamples
    }
}
