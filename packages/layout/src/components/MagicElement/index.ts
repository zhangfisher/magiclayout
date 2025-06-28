import { MagicLayoutContext, MagicLayoutStore } from "@/context";
import { MagicLayoutOptions } from "@/context/types";
import { HostClasses } from "@/controllers/hostClasss";
import { getVal } from "@/utils/getVal";
import { consume } from "@lit/context";
import { WatchListener } from "autostore";
import { ObjectKeyPaths } from "flex-tools/types";
import { LitElement } from "lit";
import { property, state } from "lit/decorators.js";


export type StateKey = ObjectKeyPaths<Required<MagicLayoutOptions>>

export class MagicElement<State> extends LitElement {
    stateKey: string = ''                       // 当前组件的状态key
    @consume({ context: MagicLayoutContext })
    @property({ attribute: false })
    store!: MagicLayoutStore;
    state!: State

    /**
     * 侧边栏是否收起
     */
    @state()
    sidebarCollapsed: boolean = false
    classs = new HostClasses(this)

    subscribers: any[] = []

    get shadow() {
        return this.shadowRoot!
    }

    connectedCallback(): void {
        super.connectedCallback()
        if (this.stateKey && this.stateKey.length > 0) {
            this.state = getVal(this.store?.state, this.stateKey, {})
            this.sidebarCollapsed = !!this.store.state.sidebar.collapsed
            // 监听状态变化多端
            this.subscribers.push(this.store.watch(this.stateKey, (operate) => {
                console.log(operate)
            }))
        }

    }
    disconnectedCallback(): void {
        super.disconnectedCallback()
        this.subscribers.forEach((subscriber) => {
            subscriber && subscriber.off()
        })
    }
    /**
     * 监听状态变化
     * @param statePath 
     * @param callback 
     */
    watch(statePath: string | string[], listener: WatchListener) {
        this.subscribers.push(this.store.watch(statePath, listener))
    }
    onResize({ width, height }: { width: number, height: number }) {
        console.log(width, height)
    }
}