import '@shoelace-style/shoelace/dist/shoelace.js';
import '@shoelace-style/shoelace/dist/shoelace-autoloader.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import { customElement } from 'lit/decorators.js';
import { css, html, LitElement } from 'lit';


export * from './flex'
export * from './toolbar'




@customElement('magic-layout-examples')
export class MagicLayoutExamples extends LitElement {
    static styles = css`
        :host{
            margin: 10px;
        }
        magic-layout{
            display: flex;
            flex-direction: row;
            border: 1px solid var(--sl-color-gray-400);
            justify-content: stretch;
        }
        .sider{
            width: 80px;
        }
        .content{
            flex-grow: 1;
        }
    `
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
        <sl-split-panel  position="15">
  <div
    slot="start"
    style="height: 200px; background: var(--sl-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    Start
  </div>
  <div
    slot="end"
    style="height: 200px; background: var(--sl-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden;"
  >
    End
  </div>
</sl-split-panel>
            <magic-layout>
                <div class="sider">
                         <magic-toolbar
                            .items=${this._getItems()}
                            direction="vertical"
                        ></magic-toolbar>
                </div>
                <div class="content"> 
                    <magic-toolbar .items=${this._getItems()}></magic-toolbar>
                    <magic-flex-examples></magic-flex-examples>   
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
