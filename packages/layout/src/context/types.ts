import { MagicMenubarOptions } from "../components/Menu/types"
import { MagicToolbarOptions } from "../components/Toolbar/types"


export type HTMLElementCustomStyles = Record<string, string | Record<string, string>>

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
    visible: boolean                       // 是否显示
    title: string
    colorized: boolean                     // 是否全彩色背景
    logo: boolean                           // 是否显示Logo
    fullRow: boolean                       // 是否占满顶部一行
    bgColor?: string                        // 背景色
    height?: number | string                // 高度    
    border?: string      // 是否显示下边框
    shadow?: string
    toolbar: MagicToolbarOptions
    styles?: HTMLElementCustomStyles
}

// 侧边栏
export type MagicLayoutSidebarOptions = {
    visible: boolean                       // 是否显示    
    collapsed: boolean                     // 是否折叠
    width: string | number                 // 初始化宽度    
    collapsedWidth: string | number        // 折叠宽度    
    colorized: boolean                     // 是否全彩色背景
    resizeable: boolean                    // 是否可拖动改变宽度
    bgColor?: string                        // 背景色
    border?: number | boolean | string                // 是否显示边框
    shadow?: string                         //'none' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large'
    menu?: MagicMenubarOptions
    footer: {
        visible: boolean
        colorized: boolean                     // 是否全彩色背景
        bgColor?: string
        color?: string
        items?: (string | MagicLayoutAction)[]
    }
    styles?: HTMLElementCustomStyles
}

export type MagicLayoutLogoOptions = {
    visible: boolean           //  
    colorized: boolean         // 是否全彩色背景，=true时使用bgColor
    image: string              // Logo图片地址
    imageSize: string          // Logo在小，默认是50*50
    showTitle?: boolean        // 是否显示标题
    position?: 'sidebar' | 'header' | 'none'
    title: string
    subtitle?: string
    radius: string | number     // 是否为Logo图片启用圆角
    icon?: string               // 图标名称，当指定image时，优先显示image
    bgColor?: string            // 背景色
    color?: string              // 字体颜色
    url?: string
    direction?: 'row' | 'col'
    shape?: 'radius' | 'circle'
    styles?: HTMLElementCustomStyles
}

export type MagicLayoutWorkspaceOptions = {
    bgColor?: string
    styles?: HTMLElementCustomStyles
}

export type MagicLayoutDrawerOptions = {
    visible: boolean
    styles?: HTMLElementCustomStyles
}
export type MagicLayoutPanelsOptions = {
    visible: boolean
    styles?: HTMLElementCustomStyles
}


export type MagicLayoutFooterOptions = {
    visible: boolean
    content?: string
    bgColor?: string
    color?: string
    items?: (string | MagicLayoutAction)[]
}

export type MagicLayoutAction = {
    id?: string
    type?: MagicActionTypes
    icon?: string
    label?: string
    showLabel?: boolean
    checked?: boolean
    disabled?: boolean
    badge?: number
    value?: any
    tips?: string
    group?: string
    order?: number
    onClick?: (action: MagicLayoutAction, e: MouseEvent) => void
    onChange?: (action: MagicLayoutAction, e: MouseEvent) => void
    onPopup?: (action: MagicLayoutAction, e: MouseEvent) => void
    styles?: HTMLElementCustomStyles
}

export type MagicLayoutScreenOptions = {
    full: boolean   // 是否全屏
    size: string    // 尺寸，媒体查询断点尺寸
}


export type MagicLayoutOptions = {
    screen: MagicLayoutScreenOptions
    theme: MagicLayoutThemeOptions
    breakpoints: Record<string, string>
    logo: MagicLayoutLogoOptions
    header: MagicLayoutHeaderOptions
    sidebar: MagicLayoutSidebarOptions
    workspace: MagicLayoutWorkspaceOptions
    panels: MagicLayoutPanelsOptions
    actions: MagicLayoutAction[]
    styles?: HTMLElementCustomStyles
}


export type RequiredMagicLayoutOptions = Required<MagicLayoutOptions>