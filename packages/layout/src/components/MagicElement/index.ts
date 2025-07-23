import { MagicLayoutContext, type MagicLayoutStore } from "@/context";
import type { MagicLayoutOptions } from "@/context/types";
import { HostClasses } from "@/controllers/hostClasss";
import { getVal } from "@/utils/getVal";
import { consume } from "@lit/context";
import type { StateOperate, WatchListener } from "autostore";
import type { ObjectKeyPaths } from "flex-tools/types";
import { LitElement } from "lit";
import { property } from "lit/decorators.js";


export type StateKey = ObjectKeyPaths<Required<MagicLayoutOptions>>

export class MagicElement<State> extends LitElement {
    stateKey: string = ''                       // 当前组件的状态key
    @consume({ context: MagicLayoutContext })
    @property({ attribute: false })
    store!: MagicLayoutStore;
    state!: State
    
    // 监听状态额外的属性，如['sidebar.collapsed']
    watchKeys: string[] = []

    classs = new HostClasses(this)

    subscribers: any[] = []

    get shadow() {
        return this.shadowRoot!
    }

    connectedCallback(): void {
        super.connectedCallback()
        this._onWatchState()
    }

    _onWatchState(){
        const watchKeys = []
        const stateKey = this.stateKey ? (this.stateKey.endsWith('/') ?
            this.stateKey.substring(0, this.stateKey.length - 1) : this.stateKey) : undefined
        if (stateKey) {
            // 如果stateKey以/结尾，则只监听stateKey变化，而不监听stateKey下的所有子属性变化            
            if (this.stateKey.endsWith('/')) {
                watchKeys.push(stateKey)
            } else {
                watchKeys.push(`${this.stateKey}.**`)
            }
        }
        if (this.watchKeys && this.watchKeys.length > 0) watchKeys.push(...this.watchKeys)
        if (stateKey && stateKey.length > 0) {
            this.state = getVal(this.store?.state, stateKey, {})
        }
        if (watchKeys.length > 0) {
            this.subscribers.push(this.store.watch(watchKeys, (operate) => {
                if (operate.reply) return
                this.onStateUpdate(operate)
            }, {
                operates: 'write'
            }))
        }
    }


    /**
     * 当组件的状态数据更新时触发
     * @param operate 
     */
    onStateUpdate(_: StateOperate) {
        this.requestUpdate()
    }

    disconnectedCallback(): void {
        super.disconnectedCallback()
        this.subscribers.forEach((subscriber) => {
            subscriber?.off()
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
}