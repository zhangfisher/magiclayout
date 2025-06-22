import { MagicLayoutOptions } from "@/context/types"
import { defaultState } from "./state"



export type IMagicLayoutStore = {
    state: MagicLayoutOptions
    // AutoStore接口
    on?: (event: string, callback: () => void) => void
}


export class MagicLayoutStore implements IMagicLayoutStore {
    state: MagicLayoutOptions = defaultState
    on(event: string, callback: () => void) {
        console.log('on', event, callback)
    }
}