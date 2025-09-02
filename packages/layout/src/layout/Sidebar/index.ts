import { html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Resizeable } from '@/controllers/resizeable';
import { HostStyles } from '@/controllers/hostStyles';
import * as styles from './styles';
import '@/components/Logo';
import { MagicElement } from '../../components/MagicElement';
import type { RequiredMagicLayoutOptions } from '@/context/types';
import { getCssSize } from '@/utils/getCssSize';
import './header';
import './menu';
import './footer';
import './trigger';
import type { MagicLayoutLogo } from '@/components/Logo';
import { when } from 'lit/directives/when.js';
import { isPathEq, type StateOperate } from 'autostore';

@customElement('magic-layout-sidebar')
export class MagicLayoutSidebar extends MagicElement<RequiredMagicLayoutOptions['sidebar']> {
	static styles = styles.base;
	resizeable = new Resizeable(this, { direction: 'right' });
	styles = new HostStyles(this);
	stateKey = 'sidebar';
	watchKeys: string[] = ['sidebar.collapsed'];

	@query('magic-layout-logo')
	logoEle?: MagicLayoutLogo;

	connectedCallback(): void {
		super.connectedCallback();
	}

	_onSidebarCollapsed(value: boolean) {
		this.state.collapsed = value;
		if (value) {
			this.resizeable.enable = false;
		} else {
			this.resizeable.enable = true;
		}
	}
	onStateUpdate({ path, value }: StateOperate) {
		if (isPathEq(path, ['sidebar', 'collapsed'])) {
			setTimeout(() => {
				this._onSidebarCollapsed(value);
			});
		}
	}
	/**
	 * 切换侧边栏的折叠状态
	 *
	 * sibebar.toggle()     // 折叠/展开侧边栏
	 *
	 * @param value
	 */
	toggle() {
		this.state.collapsed = !this.state.collapsed;
	}

	getSidebarWidth() {
		return getCssSize(this.state.collapsed ? this.state.collapsedWidth : this.state.width);
	}
	render() {
		this.classs.use({
			collapsed: this.state.collapsed,
		});
		this.styles.toggle({
			[`width: ${this.getSidebarWidth()}`]: !!this.state.width,
			[`box-shadow: ${this.state.shadow}`]: !!this.state.shadow,
			[`border-right: ${this.state.border}`]: !!this.state.border,
		});
		return html`
            <magic-flex 
                direction="column" 
                grow="magic-sidebar-menu" 
                align="stretch"  
                class="fit"
            >
                ${when(this.store.state.logo.pos === 'sidebar', () => html`<magic-layout-logo ?collapsed=${this.state.collapsed}> </magic-layout-logo>`)}
                <magic-sidebar-header> </magic-sidebar-header>
                <magic-sidebar-menu .collapsed=${this.state.collapsed}></magic-sidebar-menu> 
                <magic-sidebar-footer> </magic-sidebar-footer>
                <magic-sidebar-trigger> </magic-sidebar-trigger>
            </magic-flex>
        `;
	}
	onResize(args: { width: number; height: number }): void {
		this.logoEle && this.logoEle?.onResize!(args);
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'magic-layout-sidebar': MagicLayoutSidebar;
	}
}
