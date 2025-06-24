import { DeepRequired } from "flex-tools/types"
import { MagicMenubarOptions } from "../components/Menu/types"
import { MagicToolbarOptions } from "../components/Toolbar/types"




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


export type MagicLayoutThemeOptions = {
    theme?: 'light' | 'dark'
    size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
    colors?: Record<string, string>
    borderRadius?: number
}


export type MagicLayoutHeaderOptions = {
    visible?: boolean                       // 是否显示
    colorized?: boolean                     // 是否全彩色背景
    bgColor?: string                        // 背景色
    height?: number | string                // 高度
    location?: 'body' | 'right'
    fullRow?: number                       // 0-none， 1- over-sider  2- over-drawer ,4- over-header
    border?: number | boolean | string      // 是否显示下边框
    shadow?: 'none' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
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
    shadow?: 'none' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
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

export type MagicLayoutWorkspaceOptions = {

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
    theme?: MagicLayoutThemeOptions
    breakpoints?: Record<string, string>
    logo?: MagicLayoutLogoOptions
    header?: MagicLayoutHeaderOptions
    sider?: MagicLayoutSiderOptions
    workspace?: MagicLayoutWorkspaceOptions
    actions?: MagicLayoutAction[]
    onAction?: (action: MagicLayoutAction) => void
    onResize?: (width: number, height: number) => void
}


export type RequiredMagicLayoutOptions = DeepRequired<MagicLayoutOptions>