import { html } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import { Resizeable } from "@/controllers/resizeable";
import { HostStyles } from "@/controllers/hostStyles";
import * as styles from "./styles";
import '@/components/Logo'
import { MagicElement } from "../../MagicElement";
import { RequiredMagicLayoutOptions } from "@/context/types";
import { getCssSize } from "@/utils/getCssSize";
import './header'
import './menu'
import './footer'
import './trigger'
import type { MagicLayoutLogo } from "@/components/Logo";
import { when } from "lit/directives/when.js";


@customElement('magic-layout-sidebar')
export class MagicLayoutSidebar extends MagicElement<RequiredMagicLayoutOptions['sidebar']> {
    static styles = styles.base
    resizeable = new Resizeable(this, { direction: 'right' })
    styles = new HostStyles(this)
    stateKey = 'sidebar'

    @query('magic-layout-logo')
    logoEle?: MagicLayoutLogo


    connectedCallback(): void {
        super.connectedCallback()
        this._addSidebarCollapsedEvent()
    }

    /**
     * 监听MagicLayout折叠事件
     */
    _addSidebarCollapsedEvent() {
        this.store.root.addEventListener('sidebar-collapsed', this._onSidebarCollapsed.bind(this), true); // 使用捕获阶段监听
    }
    _onSidebarCollapsed(event: Event) {
        // @ts-ignore
        if (event.detail.collapsed) {
            this._onCollapsed();
        } else {
            this._onExpanded();
        }
    }
    _onCollapsed() {
        console.log("sidebar collapsed")
    }
    _onExpanded() {
        console.log("sidebar expanded")
    }
    /**
     * 切换侧边栏的折叠状态
     * 
     * sibebar.toggle()     // 折叠/展开侧边栏
     * 
     * @param value 
     */
    toggle() {
        this.state.collapsed = !this.state.collapsed
    }

    // onStateUpdate(operate: StateOperate): void {
    //     const path = operate.path.join(".")
    //     if (path === 'sidebar.collapsed') {

    //     }
    // }




    getSidebarWidth() {
        return getCssSize(this.state.collapsed ? this.state.collapsedWidth : this.state.width)
    }
    render() {
        this.classs.use({
            'collapsed': this.state.collapsed
        })
        this.styles.toggle({
            [`width: ${this.getSidebarWidth()}`]: !!this.state.width,
            [`box-shadow: ${this.state.shadow}`]: !!this.state.shadow,
            [`border-right: ${this.state.border}`]: !!this.state.border,
        })
        return html`
            <magic-flex 
                direction="column" 
                grow="magic-sidebar-menu" 
                align="stretch"  
                class="fit"
            >
                ${when(this.store.state.logo.position === 'sidebar', () => html`<magic-layout-logo ?collapsed=${this.state.collapsed}> </magic-layout-logo>`)}
                <magic-sidebar-header> </magic-sidebar-header>
                <magic-sidebar-menu></magic-sidebar-menu> 
                <magic-sidebar-footer> </magic-sidebar-footer>
                <magic-sidebar-trigger> </magic-sidebar-trigger>
            </magic-flex>
        `
    }
    onResize(args: { width: number, height: number }): void {
        this.logoEle && this.logoEle?.onResize!(args)
    }
}





declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-sidebar': MagicLayoutSidebar
    }
}
