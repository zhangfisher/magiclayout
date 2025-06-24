import { IMagicLayoutStore } from "@/context/store";
import { MagicLayoutOptions } from "@/context/types";
import { getVal } from "@/utils/getVal";
import { GetTypeByPath, ObjectKeyPaths } from "flex-tools/types";
import { LitElement } from "lit";
import { property } from "lit/decorators.js";


export type StateKey = ObjectKeyPaths<Required<MagicLayoutOptions>>

export class MagicElement<State> extends LitElement {
    stateKey: string = ''
    // @ts-ignore
    @consume({ context: MagicLayoutContext })
    @property({ attribute: false })
    context!: IMagicLayoutStore;
    state!: State

    connectedCallback(): void {
        super.connectedCallback()
        this.state = getVal(this.context?.state, this.stateKey, {})
    }

}