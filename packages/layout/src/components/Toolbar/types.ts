export type MagicToolbarItem = {
    type?: 'button' | 'dropdown' | 'divider' | 'checkbox' | 'input' | 'search' | 'switch' | 'popup-menu' | 'popup-panel' | 'avator'
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
