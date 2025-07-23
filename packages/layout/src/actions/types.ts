import type { HTMLElementCustomClasss, HTMLElementCustomStyles, MutableRecord } from "@/types" 

export type MagicLayoutActionTypes =
    'button'
    | 'dropdown'
    | 'divider'
    | 'checkbox'
    | 'input'
    | 'search'
    | 'switch'
    | 'popup-panel'
    | 'avatar'

export type MagicLayoutActionButtonOptions = {
    
}

export type MagicLayoutActionDividerOptions = {
    ab:boolean
}

export type MagicLayoutActionAvatarOptions = {
    url?: string
    image?:string
    shape?: 'circle' | 'square'
    title?: string
    subtitle?: string    
    panel?:any 
}

export type MagicLayoutActionSelect = {
    id?: string
    label: string
    icon?: string
    value?: any
    checked?: boolean
    divider?: boolean
    onClick?: (action: MagicLayoutAction, e: MouseEvent) => void
}

export type MagicLayoutActionDropdownOptions = {
    select?: MagicLayoutActionSelect[]
    onShow?: (action: MagicLayoutAction, e: MouseEvent) => void
    onHide?: (action: MagicLayoutAction, e: MouseEvent) => void
}

export type MagicLayoutActionSearchOptions = {
    placeholder?: string
    onChange?: (action: MagicLayoutAction, e: MouseEvent) => void
    // 当按下回车键时触发
    onSearch?: (action: MagicLayoutAction, e: MouseEvent) => void
}

export type MagicLayoutActionBaseOptions = {
    id?: string
    type: MagicLayoutActionTypes
    icon?: string
    label?: string
    showLabel?: boolean
    labelPos?: 'none' | 'bottom' | 'right',
    checked?: boolean
    disabled?: boolean
    badge?: number
    value?: any
    tips?: string
    placeholder?: string
    group?: string
    order?: number
    divider?: boolean
    onClick?: (action: MagicLayoutAction<any>, e: MouseEvent) => void
    styles?: HTMLElementCustomStyles
    classs?: HTMLElementCustomClasss
}



export type MagicLayoutAction<T extends MagicLayoutActionTypes=MagicLayoutActionTypes> = MutableRecord<{
    button: MagicLayoutActionButtonOptions,
    dropdown: MagicLayoutActionDropdownOptions,
    avatar: MagicLayoutActionAvatarOptions,
    divider: MagicLayoutActionDividerOptions,
},
    'type',
    MagicLayoutActionBaseOptions,
    'button'
> & {
    type:T
}








