

export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse' | 'initial' | 'inherit'
export type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit'
export type FlexJustify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit'



export type HeaderOptions = {
    colorized?: boolean                     // 是否变色
    bgColor?: string                        // 背景色
    visible?: boolean                       // 是否显示
    height?: number | string                // 高度
    location?: 'body' | 'right'
    fullRow?: boolean                       // 是否占满一行
    border?: number | boolean | string      // 是否显示下边框
    elevation?: 'none' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
}
export type SiderOptions = {
    collapsed?: boolean                     // 是否收起
    width?: number                          // 初始化宽度    
    colorized?: boolean                     // 是否变色
    bgColor?: string                        // 背景色
    visible?: boolean                       // 是否显示    
}


export type BodyOptions = {

}

export type ActionType = 'button' | 'dropdown' | 'divider' | 'checkbox' | 'input' | 'search' | 'switch' | 'popup-menu' | 'popup-panel' | 'avator'

export type Action = {
    type?: ActionType
    pos?: 'header-left' | 'header-right' | 'sider-top' | 'sider-bottom'
    icon?: string
    label?: string
    checked?: boolean
    disabled?: boolean
    badge?: number
    value?: any
    tips?: string
    onClick?: () => void
    onChange?: () => void
}
