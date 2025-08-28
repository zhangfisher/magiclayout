/**
 *
 *  <magic-layout>
 *   <magic-layout-settings></magic-layout-settings>
 *  </magic-layout>
 *
 *
 */
import '@autostorejs/form';
import { html, LitElement } from 'lit';
import styles from './styles.ts';
import { tag } from '@/utils/tag.ts';
import type { MagicLayout } from '@/layout/index.ts';
import type { Watcher, AutoStore } from 'autostore';
import type { MagicLayoutOptions } from '@/context/types.ts';
import { addSchemas } from './schemas.ts';

@tag('magic-layout-settings')
export class MagicLayoutSettings extends LitElement {
	static styles = [styles];
	_layout?: MagicLayout;
	_store?: AutoStore<MagicLayoutOptions>;

	_subscribers: Watcher[] = [];

	connectedCallback() {
		super.connectedCallback();
		// 连接到DOM时获取layout元素
		this._getLayout();
		this._store = this._layout?.store;
		this._onChangeTheme();
		addSchemas(this._store!);
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		this._subscribers.forEach((subscriber) => subscriber.off());
		this._subscribers = [];
	}
	_onChangeTheme() {
		if (!this._store) return;
		this._subscribers.push(
			this._store!.watch('theme.*', ({ path, value }) => {
				if (path[1] === 'theme') {
					this._onChangeThemeColor(value);
				}
			}),
		);
	}
	_onChangeThemeColor(color: string) {
		if (color === '#FEFEFE') {
			ThemePro.theme = 'light';
		} else if (color === '#555') {
			ThemePro.theme = 'dark';
		} else if (color === 'red') {
			ThemePro.theme = 'red';
		} else if (color === 'blue') {
			ThemePro.theme = 'blue';
		} else {
			ThemePro.theme = 'custom';
			ThemePro.create({
				name: 'custom',
				theme: color,
			});
		}
	}
	/**
	 * 从Shadow DOM的宿主开始查找layout元素
	 * @returns MagicLayout
	 */
	_getLayout(): MagicLayout | undefined {
		// 从宿主元素继续向上查找
		let parent = this.parentElement;
		while (parent) {
			if (parent.tagName.toLowerCase() === 'magic-layout') {
				this._layout = parent as MagicLayout;
				return this._layout;
			}
			parent = parent.parentElement;
		}

		console.warn('No magic-layout element found from Shadow DOM host of magic-layout-settings');
		return undefined;
	}
	render() {
		if (!this._layout) return null;
		return html`
            <auto-form .store=${this._store}></auto-form>
        `;
	}
}
