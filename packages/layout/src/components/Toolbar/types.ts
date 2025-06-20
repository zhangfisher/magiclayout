export type MagicToolbarItemTypes =
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

export type MagicToolbarItem = {
    type?: MagicToolbarItemTypes
    icon?: string
    label?: string
    active?: boolean
    disabled?: boolean
    badge?: string
    value?: any
    tips?: string
    onClick?: () => void
    onChange?: () => void
}


export type MagicToolbarOptions = {
    visible?: boolean
    items?: (string | MagicToolbarItem)[]
}
