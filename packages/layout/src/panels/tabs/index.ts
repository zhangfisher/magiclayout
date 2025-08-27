import { tag } from '@/utils/tag';
import { styles } from './styles';
import { PanelBase } from '../base';

@tag('magic-layout-tabs-panel')
export class TabsPanel extends PanelBase {
	static styles = [PanelBase.styles, styles] as any;
	render() {
		return `<magic-layout-tabs part="tabs" ></magic-layout-tabs>                 
            <magic-layout-workspace part="workspace" class="workspace">
                <slot name="workspace"></slot>
            </magic-layout-workspace >  
`;
	}
}
declare global {
	interface HTMLElementTagNameMap {
		'magic-layout-tabs-panel': TabsPanel;
	}
}
