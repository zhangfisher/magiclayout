import { html } from 'lit';
import * as styles from './styles';
import '@/components/Logo';
import { MagicElement } from '../MagicElement';
import type { MagicLayoutOptions } from '@/context/types';
import { tag } from '@/utils/tag';

@tag('magic-layout-workspace')
export class MagicLayoutWorkspace extends MagicElement<
	MagicLayoutOptions['workspace']
> {
	static styles = styles.workspace;

	render() {
		return html` 
        <div style="margin:2rem;border:1px solid blue;display:flex;height:400px;flex-direction:column;box-sizing: border-box;" >
         <div style="display:flex;height:400px;box-sizing: border-box;" >
            <div style="width:80px;display:flex;justify-content: center;position: relative;">
                <magic-layout-toolbar 
                    class="fit"
                    vertical                    
                    location="left"
                    labelPos="bottom"
                    .items=${this.store.state.header.toolbar.items || []}
                ></magic-layout-toolbar>
            </div>
            <div style="flex-grow:1;padding: 1em;">
                <magic-layout-logo direction="col"></magic-layout-logo>
                <magic-layout-logo direction="row"></magic-layout-logo>
                <magic-icon></magic-icon>
            </div>
            <div style="width:60px;display:flex;justify-content: center;position: relative;">
                <magic-layout-toolbar 
                    class="fit"
                    vertical                    
                    .items=${this.store.state.header.toolbar.items || []}
                ></magic-layout-toolbar>
            </div>  
         </div>
         <div>
               
         </div>
         </div>
        `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'magic-layout-workspace': MagicLayoutWorkspace;
	}
}
