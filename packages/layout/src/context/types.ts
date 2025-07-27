import type { HTMLElementCustomClasss, HTMLElementCustomStyles } from "@/types"
import type { MagicMenubarOptions } from "../components/Menu/types"
import type { MagicLayoutAction } from "@/actions/types"



export type MagicLayoutToolbarOptions = {
    visible?: boolean
    labelPos?: 'none' | 'bottom' | 'right',
    items?: MagicLayoutAction[]
    styles?: HTMLElementCustomStyles
    classs?: HTMLElementCustomClasss
}

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
    toolbar: MagicLayoutToolbarOptions
    styles?: HTMLElementCustomStyles
    classs?: HTMLElementCustomClasss
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
    classs?: HTMLElementCustomClasss
}

export type MagicLayoutLogoOptions = {
    visible: boolean           //  
    colorized: boolean         // 是否全彩色背景，=true时使用bgColor
    image: string              // Logo图片地址
    imageSize: string          // Logo在小，默认是50*50
    showTitle?: boolean        // 是否显示标题
    pos?: 'sidebar' | 'header' | 'none'
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
    classs?: HTMLElementCustomClasss
}

export type MagicLayoutWorkspaceOptions = {
    bgColor?: string
    styles?: HTMLElementCustomStyles
    classs?: HTMLElementCustomClasss
}

export type MagicLayoutDrawerOptions = {
    visible: boolean
    styles?: HTMLElementCustomStyles
    classs?: HTMLElementCustomClasss
}
export type MagicLayoutPanelsOptions = {
    visible: boolean
    styles?: HTMLElementCustomStyles
    classs?: HTMLElementCustomClasss
}


export type MagicLayoutFooterOptions = {
    visible: boolean
    content?: string
    bgColor?: string
    color?: string
    items?: (string | MagicLayoutAction)[]
    styles?: HTMLElementCustomStyles
    classs?: HTMLElementCustomClasss
}

export type MagicLayoutScreenOptions = {
    full: boolean   // 是否全屏
    size: string    // 尺寸，媒体查询断点尺寸
}



export type MagicLayoutUserTag={
    icon?:string
    label:string
    badge?:number
    type?:'primary'|'danger'|'success'|'warning' | 'neutral'
    color?:string
    link?:string
}

export type MagicLayoutUserOptions = {
    visible:boolean
    /**
     * 用户名
     */
    username:string
    /**
     * 友好名称
     */
    title?:string
    description?:string
    /**
     * 头像
     */
    avatar?:string
    status: 'idle' | 'logging' | 'online' | 'offline'
    tags?:MagicLayoutUserTag[]
    /**
     * 登录时间
     */
    loginAt: number
    menu?: MagicMenubarOptions
    toolbar?: MagicLayoutToolbarOptions 
    styles?: HTMLElementCustomStyles
    classs?: HTMLElementCustomClasss
}


export type MagicLayoutOptions = {
    my:MagicLayoutUserOptions
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
    classs?: HTMLElementCustomClasss
}


export type RequiredMagicLayoutOptions = Required<MagicLayoutOptions>