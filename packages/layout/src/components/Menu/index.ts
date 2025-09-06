import { MagicElement } from '../MagicElement';
import styles from './styles';
import { tag } from '@/utils/tag';
import type { MagicMenuItem, MagicMenuOptions } from './types';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { when } from 'lit/directives/when.js';

@tag('magic-menu')
export class MagicLayoutMenu extends MagicElement<MagicMenuOptions> {
	static styles = styles;
	stateKey: string = 'my';

	@property({ type: Boolean, reflect: true })
	collapsed: boolean = false;

	_renderBadge(item: MagicMenuItem, level: number = 0) {
		const badge = item.badge ? Number(item.badge) : 0;
		if (badge === 0 || (this.collapsed && level === 0)) return;
		return html`<sl-badge class='ml-badge' variant="danger" pill pulse>${badge}</sl-badge>`;
	}

	_renderIcon(item: MagicMenuItem, parent?: MagicMenuItem, level: number = 0) {
		return html`<span class="ml-icon"> 
                ${when(item.icon, () => html`<magic-icon name="${item.icon!}"></magic-icon>`)}
                ${when(this.collapsed && !parent, () => this._renderBadge(item))}
            </span>`;
	}

	_renderLabel(item: MagicMenuItem, level: number = 0) {
		if (level === 0 && this.collapsed) return;
		return html`<span class="ml-label">${item.label}</span>`;
	}
	_renderActions(item: MagicMenuItem, level: number = 0) {
		if (this.collapsed && level === 0) return;
		if (!Array.isArray(item.actions)) return;
		return html`<span class="ml-actions">${repeat(item.actions, (action) => {
			return html`<magic-icon name="${action.icon}" size="small"></magic-icon>`;
		})}</span>`;
	}
	_renderCollapseIndicator() {
		return html``;
	}

	_renderItem(item: MagicMenuItem, parent?: MagicMenuItem, level: number = 0) {
		return html`<div class="ml-item">            
            <span class="ml-indent" style="width:${level}em"></span>
            ${this._renderIcon(item, parent)}                    
            ${this._renderLabel(item, level)}
            ${this._renderBadge(item, level)}           
			${this._renderActions(item, level)} 
            ${this._renderCollapseIndicator()}
        </div>`;
	}

	_renderItemWithPopupMenu(item: MagicMenuItem, parent?: MagicMenuItem, level: number = 0) {
		return html`
                <sl-dropdown>

                </sl-dropdown>
            `;
	}
	_renderPopupMenu(items: MagicMenuItem[], parent?: MagicMenuItem, level: number = 0) {
		return html``;
	}
	_renderItemWithInlineMenu(item: MagicMenuItem, parent?: MagicMenuItem, level: number = 0) {}

	_renderMenu(items: MagicMenuItem[], parent?: MagicMenuItem, level: number = 0) {
		return html`${repeat(items, (item) => {
			if (Array.isArray(item.children) && item.children.length > 0) {
				if (level > 0 && item.inline === false) {
					return this._renderItemWithPopupMenu(item, parent, level);
				} else {
					return this._renderItemWithInlineMenu(item, parent, level);
				}
			} else {
				return this._renderItem(item, parent, level);
			}
		})}`;
	}

	render() {
		return this._renderMenu(this.state.items || [], undefined, 0);
	}
}
