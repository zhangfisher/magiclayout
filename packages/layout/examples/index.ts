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
             
        </magic-layout> 
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-examples': MagicLayoutExamples
    }
}
