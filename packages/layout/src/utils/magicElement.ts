/**
 * 
 * 
 * 用于封装自定义组件，具有以下特性
 * 
 * - 自动提供context
 * - 提供this.state访问当前组件的状态
 * - 自动监听state变化，自动更新视图
 * 
 */
import { MagicLayoutContext } from "@/context";
import { IMagicLayoutStore } from "@/context/store";
import { consume } from "@lit/context";
import { LitElement } from "lit"
import { property } from 'lit/decorators.js';
import { getVal } from "./getVal";


export function MagicElement<State = any>(stateKey: string) {
    class MagicElementClass<State> extends LitElement {
        // @ts-ignore
        @consume({ context: MagicLayoutContext })
        @property({ attribute: false })
        context?: IMagicLayoutStore;
        state!: State
        connectedCallback(): void {
            super.connectedCallback()
            this.state = getVal(this.context?.state, stateKey, {})
        }

    }
    return MagicElementClass
}