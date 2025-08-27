import { tag } from '@/utils/tag';
import { styles } from './styles';
import { PanelBase } from '../base';

@tag('magic-layout-collapsable-panel')
export class CollapsablePanel extends PanelBase {
	static styles = [PanelBase.styles, styles] as any;
	render() {
		return ``;
	}
}
declare global {
	interface HTMLElementTagNameMap {
		'magic-layout-collapsable-panel': CollapsablePanel;
	}
}
