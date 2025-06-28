import { HTMLElementCustomStyles } from "@/context/types"

export type MagicToolbarActionTypes =
    'button'
    | 'dropdown'
    | 'divider'
    | 'checkbox'
    | 'input'
    | 'search'
    | 'switch'
    | 'popup-menu'
    | 'popup-panel'
    | 'avator'

export type MagicToolbarAction = {
    type?: MagicToolbarActionTypes
    icon?: string
    label?: string
    active?: boolean
    enable?: boolean
    badge?: string
    value?: any
    tips?: string
    onClick?: () => void
    onChange?: () => void
    styles?: HTMLElementCustomStyles
}


export type MagicToolbarOptions = {
    visible?: boolean
    styles?: HTMLElementCustomStyles
    items?: MagicToolbarAction[]
}
