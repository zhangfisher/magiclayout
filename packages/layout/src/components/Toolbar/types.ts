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
    labelPos?: 'none' | 'bottom' | 'right',   // 0-不显示，1-右，2-下
    // 当工具栏折叠时，如果设置了fixed，那么该按钮将始终显示,其他按钮将隐藏显示在more菜单中
    fixed?: boolean
    onClick?: () => void
    onChange?: () => void
    styles?: HTMLElementCustomStyles
}


export type MagicToolbarOptions = {
    visible?: boolean
    styles?: HTMLElementCustomStyles
    items?: MagicToolbarAction[]
}
