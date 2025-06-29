import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import * as styles from "./styles";
import '@/components/Logo'

@customElement('magic-layout-tabs')
export class MagicLayoutTabs extends LitElement {
    static styles = styles.tabs

    render() {
        return html`
        <div style="height: 3rem;">
            <sl-tab-group>
  <sl-tab slot="nav" panel="tab-1">Tab 1</sl-tab>
  <sl-tab slot="nav" panel="tab-2">Tab 2</sl-tab>
  <sl-tab slot="nav" panel="tab-3">Tab 3</sl-tab>
  <sl-tab slot="nav" panel="tab-4">Tab 4</sl-tab>
  <sl-tab slot="nav" panel="tab-5">Tab 5</sl-tab>
  <sl-tab slot="nav" panel="tab-6">Tab 6</sl-tab>
  <sl-tab slot="nav" panel="tab-7">Tab 7</sl-tab>
  <sl-tab slot="nav" panel="tab-8">Tab 8</sl-tab>
  <sl-tab slot="nav" panel="tab-9">Tab 9</sl-tab>
  <sl-tab slot="nav" panel="tab-10">Tab 10</sl-tab>
  <sl-tab slot="nav" panel="tab-11">Tab 11</sl-tab>
  <sl-tab slot="nav" panel="tab-12">Tab 12</sl-tab>
  <sl-tab slot="nav" panel="tab-13">Tab 13</sl-tab>
  <sl-tab slot="nav" panel="tab-14">Tab 14</sl-tab>
  <sl-tab slot="nav" panel="tab-15">Tab 15</sl-tab>
  <sl-tab slot="nav" panel="tab-16">Tab 16</sl-tab>
  <sl-tab slot="nav" panel="tab-17">Tab 17</sl-tab>
  <sl-tab slot="nav" panel="tab-18">Tab 18</sl-tab>
  <sl-tab slot="nav" panel="tab-19">Tab 19</sl-tab>
  <sl-tab slot="nav" panel="tab-20">Tab 20</sl-tab>

  <sl-tab-panel name="tab-1">Tab panel 1</sl-tab-panel>
  <sl-tab-panel name="tab-2">Tab panel 2</sl-tab-panel>
  <sl-tab-panel name="tab-3">Tab panel 3</sl-tab-panel>
  <sl-tab-panel name="tab-4">Tab panel 4</sl-tab-panel>
  <sl-tab-panel name="tab-5">Tab panel 5</sl-tab-panel>
  <sl-tab-panel name="tab-6">Tab panel 6</sl-tab-panel>
  <sl-tab-panel name="tab-7">Tab panel 7</sl-tab-panel>
  <sl-tab-panel name="tab-8">Tab panel 8</sl-tab-panel>
  <sl-tab-panel name="tab-9">Tab panel 9</sl-tab-panel>
  <sl-tab-panel name="tab-10">Tab panel 10</sl-tab-panel>
  <sl-tab-panel name="tab-11">Tab panel 11</sl-tab-panel>
  <sl-tab-panel name="tab-12">Tab panel 12</sl-tab-panel>
  <sl-tab-panel name="tab-13">Tab panel 13</sl-tab-panel>
  <sl-tab-panel name="tab-14">Tab panel 14</sl-tab-panel>
  <sl-tab-panel name="tab-15">Tab panel 15</sl-tab-panel>
  <sl-tab-panel name="tab-16">Tab panel 16</sl-tab-panel>
  <sl-tab-panel name="tab-17">Tab panel 17</sl-tab-panel>
  <sl-tab-panel name="tab-18">Tab panel 18</sl-tab-panel>
  <sl-tab-panel name="tab-19">Tab panel 19</sl-tab-panel>
  <sl-tab-panel name="tab-20">Tab panel 20</sl-tab-panel>
</sl-tab-group>
        </div>
        `
    }
}





declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-tabs': MagicLayoutTabs
    }
}
