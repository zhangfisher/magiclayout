import { MagicLayoutOptions, RequiredMagicLayoutOptions } from "@/context/types"
import { defaultState } from "./state"



export type IMagicLayoutStore = {
    state: RequiredMagicLayoutOptions
    // AutoStore接口
    on?: (event: string, callback: () => void) => void
}


export class MagicLayoutStore implements IMagicLayoutStore {
    state: RequiredMagicLayoutOptions = defaultState
    on(event: string, callback: () => void) {
        console.log('on', event, callback)
    }
}