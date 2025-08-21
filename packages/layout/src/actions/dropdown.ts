import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MagicLayoutActionBase } from './base';
import { when } from 'lit/directives/when.js';
import { repeat } from 'lit/directives/repeat.js';
import type { MagicLayoutActionSelect } from '@/actions/types';
import { classMap } from 'lit/directives/class-map.js';
import { overloads } from '@/styles/overloads';

@customElement('magic-action-dropdown')
export class MagicLayoutActionDropdown extends MagicLayoutActionBase<'dropdown'> {
	static styles = [
		MagicLayoutActionBase.styles,
		overloads,
		css`        
            :host::part(base){
                border:none;
                padding:0px 8px;
                font-size: calc(1.5 * var(--auto-font-size));
                & sl-icon{ 
                    & .lucide{
                        stroke-width: 1;
                    }
                }            
            } 
            :host::part(label){
                display: inline-block;
                font: var(--auto-font);
                line-height: 150%;
                width: 100%;
                overflow: hidden;            
                white-space: nowrap;
                text-overflow: ellipsis;
            } 
            sl-dropdown{
                width: 100%; 
                height: 100%;
                align-content: center; 
            }
            sl-dropdown:hover{
                background-color: color-mix(in hsl, var(--t-color-theme-2), white 20%);
                color: var(--auto-primary-color);
            }
            
            sl-button::part(base){
                border-radius: 0;
                background-color: transparent; 
            } 
            [slot=trigger]{
                align-items: center;
                display: flex;
            } 
            [slot=trigger]::part(caret){
                color:var(--auto-color);
                font-size: var(--auto-font-size);
            }
            sl-button.none::part(label){
                display: none;
            }
    `,
	] as any;

	@property({ type: String, reflect: true })
	size: 'small' | 'medium' | 'large' = 'medium';

	@property({ type: String })
	labelPos: 'none' | 'bottom' | 'right' = 'none';

	_renderMenuItem(item: MagicLayoutActionSelect) {
		return html`<sl-menu-item 
            .value=${item.value || item.id || item.label}
        > 
            ${when(item.icon, () => html`<sl-icon name="${item.icon!}" slot="prefix"></sl-icon>`)}
            ${item.label} 
        </sl-menu-item>`;
	}
	render() {
		const labelPos = this.action.labelPos || this.labelPos;
		return html`<sl-dropdown
                distance="${this.vertical ? 0 : 10}" 
                skidding="20"
                placement="${this.vertical ? 'right-end' : 'bottom-end'}"
            >
                <sl-button slot="trigger" 
                caret
                    class="${classMap({
											[labelPos]: true,
										})}">
                    ${when(this.action.icon, () => html`<sl-icon name="${this.action.icon!}" slot="prefix"></sl-icon>`)}
                    ${when(labelPos !== 'none', () => html`<span>${this.action.label}</span>`)}                                                
                
                </sl-button>
                <sl-menu>
                    ${repeat(this.action.select || [], (item) => this._renderMenuItem(item))}        
                </sl-menu>
                </sl-dropdown>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'magic-action-dropdown': MagicLayoutActionDropdown;
	}
}
