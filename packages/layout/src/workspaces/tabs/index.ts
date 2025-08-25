import { tag } from '@/utils/tag';
import { styles } from './styles';
import { WorkspaceBase } from '../base';

@tag('magic-layout-tabs-workspace')
export class TabsWorkspace extends WorkspaceBase {
	static styles = [WorkspaceBase.styles, styles] as any;
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
		'magic-layout-tabs-workspace': TabsWorkspace;
	}
}
