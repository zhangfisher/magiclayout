import { tag } from '@/utils/tag';
import { styles } from './styles';
import { PanelBase } from '../base';
import { html } from 'lit';

@tag('magic-layout-stack-panel')
export class StackPanel extends PanelBase {
	static styles = [PanelBase.styles, styles] as any;
	render() {
		return html`<slot></slot>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'magic-layout-stack-panel': StackPanel;
	}
}
