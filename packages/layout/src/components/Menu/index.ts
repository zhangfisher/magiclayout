import { MagicElement } from '../MagicElement';
import styles from './styles';
import { tag } from '@/utils/tag';
import type { MagicMenuItem, MagicMenuOptions } from './types';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { switch } from 'lit/directives/switch.js';

@tag('magic-menu')
export class MagicLayoutMenu extends MagicElement<MagicMenuOptions> {
	static styles = styles;
	stateKey: string = 'my';

	@property({ type: String, reflect: true })
	sstateKey: string = '';

	_renderItem(item: MagicMenuItem, parent?: MagicMenuItem) {}

	_renderPopoverItem(item: MagicMenuItem) {
		return html`
            <sl-dropdown>   </sl-dropdown>
        `;
	}
	_renderSubmenu(item: MagicMenuItem, parent: MagicMenuItem) {
		return html`

        `;
	}
	render() {
		return html`${repeat(this.state.items || [], (item) => {
            return html`${switch(item.type)}`
			if(item.children){

            }else{

            }
            
			return this._renderItem(item);
		})}`;
	}
}
