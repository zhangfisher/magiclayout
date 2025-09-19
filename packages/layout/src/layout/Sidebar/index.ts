import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { Resizeable } from '@/controllers/resizeable';
import { HostStyles } from '@/controllers/hostStyles';
import * as styles from './styles';
import '@/components/Logo';
import { MagicElement } from '../../components/MagicElement';
import type { RequiredMagicLayoutOptions } from '@/context/types';
import { getCssSize } from '@/utils/getCssSize';
import './header';
import './footer';
import './trigger';
import type { MagicLayoutLogo } from '@/components/Logo';
import { when } from 'lit/directives/when.js';
import { isPathEq, type StateOperate } from 'autostore';

@customElement('magic-layout-sidebar')
export class MagicLayoutSidebar extends MagicElement<RequiredMagicLayoutOptions['sidebar']> {
	static styles = styles.base;
	resizeableController = new Resizeable(this, { direction: 'right', minWidth: 120 });

	styles = new HostStyles(this);
	stateKey = 'sidebar';
	watchKeys: string[] = ['sidebar.collapsed'];

	@query('magic-layout-logo')
	logoEle?: MagicLayoutLogo;

	@property({ type: Boolean, reflect: true })
	collapable: boolean = true;

	@property({ type: Boolean, reflect: true })
	resizeable: boolean = true;

	connectedCallback(): void {
		super.connectedCallback();
		this.resizeableController.enable = this.resizeable;
	}

	_onSidebarCollapsed(value: boolean) {
		this.state.collapsed = value;
		if (value) {
			this.resizeableController.enable = false;
		} else {
			this.resizeableController.enable = true;
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
    _renderEmpty(){
        return html`<div class="empty"></div>`
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
                data-theme="blue"
            >
                ${when(this.store.state.logo.pos === 'sidebar', () => html`<magic-layout-logo ?collapsed=${this.state.collapsed}> </magic-layout-logo>`)}
                <magic-menu class="scrollbar" stateKey="sidebar.menu" .collapsed=${this.state.collapsed} ></magic-menu>
                ${this._renderEmpty()}
                <magic-menu class="scrollbar" stateKey="sidebar.menu" .collapsed=${this.state.collapsed} bottom></magic-menu>
                ${when(this.collapable, () => html`<magic-sidebar-trigger> </magic-sidebar-trigger>`)}                
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
