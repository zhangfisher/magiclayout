import { MagicMenubarOptions } from "./components/Menu/types"
import { MagicToolbarOptions } from "./components/Toolbar/types"

export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse' | 'initial' | 'inherit'
export type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch' | 'initial' | 'inherit'
export type FlexJustify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch' | 'initial' | 'inherit'


export type MagicActionTypes =
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



export type MagicLayoutHeaderOptions = {
    visible?: boolean                       // 是否显示
    colorized?: boolean                     // 是否全彩色背景
    bgColor?: string                        // 背景色
    height?: number | string                // 高度
    location?: 'body' | 'right'
    fullRow?: boolean                       // 是否占满一行
    border?: number | boolean | string      // 是否显示下边框
    elevation?: 'none' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
    toolbar?: MagicToolbarOptions
}

// 侧边栏
export type MagicLayoutSiderOptions = {
    visible?: boolean                       // 是否显示    
    collapsed?: boolean                     // 是否折叠
    width?: number                          // 初始化宽度    
    colorized?: boolean                     // 是否全彩色背景
    resizeable?: boolean                    // 是否可拖动改变宽度
    bgColor?: string                        // 背景色
    border?: number | boolean | string      // 是否显示下边框
    elevation?: 'none' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
    menu?: MagicMenubarOptions
    footer?: {
        visible?: boolean
        bgColor?: string
        color?: string
        colorized?: boolean                     // 是否全彩色背景
        items?: (string | MagicLayoutAction)[]
    }
}

export type MagicLayoutLogoOptions = {
    title?: string
    image?: string
    url?: string
    bgColor?: string
    color?: string
}

export type MagicLayoutBodyOptions = {

}

export type MagicLayoutDrawerOptions = {

}


export type MagicLayoutFooterOptions = {
    visible?: boolean
    content?: string
    bgColor?: string
    color?: string
    items?: (string | MagicLayoutAction)[]
}

export type MagicLayoutAction = {
    id?: string
    type?: MagicActionTypes
    location?: 'header-left' | 'header-right' | 'sider-top' | 'sider-bottom'
    icon?: string
    label?: string
    checked?: boolean
    disabled?: boolean
    badge?: number
    value?: any
    tips?: string
    group?: string
    order?: number
    onClick?: () => void
    onChange?: () => void
    onPopup?: () => void
}

export type MagicLayoutOptions = {
    theme?: 'light' | 'dark'
    breakpoints?: Record<string, string>
    size: 'small' | 'medium' | 'large'
    logo?: MagicLayoutLogoOptions
    header?: MagicLayoutHeaderOptions
    sider?: MagicLayoutSiderOptions
    body?: MagicLayoutBodyOptions
    actions?: MagicLayoutAction[]
    onAction?: (action: MagicLayoutAction) => void
    onResize?: (width: number, height: number) => void
}


export type IMagicLayoutStore = {
    state: MagicLayoutOptions
    // AutoStore接口
    on?: (event: string, callback: () => void) => void
}