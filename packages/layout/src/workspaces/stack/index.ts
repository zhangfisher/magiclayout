import { tag } from '@/utils/tag';
import { styles } from './styles';
import { WorkspaceBase } from '../base';
import { html } from 'lit';

@tag('magic-layout-stack-workspace')
export class StackWorkspace extends WorkspaceBase {
	static styles = [WorkspaceBase.styles, styles] as any;
	render() {
		return html`<slot></slot>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'magic-layout-stack-workspace': StackWorkspace;
	}
}
