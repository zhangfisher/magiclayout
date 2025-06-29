import { AutoStore } from "autostore";
import { MagicLayoutOptions } from "./types";
import type { MagicLayoutStore } from ".";


export const defaultState = {
    theme: {
        theme: "light",
        size: "medium",
        colors: {
            primary: "#1890ff",
            secondary: "#f5222d",
            success: "#52c41a",
            warning: "#faad14",
            danger: "#f5222d",
            info: "#1890ff",
            neutral: "#f5f5f5",
        },
        borderRadius: 4
    },
    breakpoints: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px"
    },
    header: {
        title: 'MagicLayout',
        visible: true,
        height: 60,
        colorized: true,
        bgColor: '',
        fullRow: 0,
        border: '1px solid var(--ml-border-color)',
        shadow: '0px 1px 4px var(--ml-shadow-color)',
        toolbar: {
            visible: true,
            items: [

            ]
        }
    },
    sidebar: {
        visible: true,
        collapsed: false,
        width: '200px',
        collapsedWidth: '72px',
        colorized: true,
        resizeable: true,
        bgColor: '#fff',
        border: '1px solid var(--ml-border-color)',
        shadow: '1px 0px 4px var(--ml-shadow-color)',
        header: {
            visible: true,
            items: []
        },
        menu: {
            visible: true,
            items: [

            ]
        },
        footer: {
            visible: true,
            bgColor: '#fff',
            color: '#000',
            colorized: true,
            items: []
        }
    },
    panels: {
        visible: true
    },
    logo: {
        visible: true,
        title: 'MagicLayout',
        subtitle: '强大的应用布局系统',
        image: 'https://ui.shadcn.com/avatars/shadcn.jpg',
        imageSize: '52px',
        url: 'http://www.homekylin.com',
        bgColor: '#2f9dff',
        color: 'white',
        colorized: false,
        aspectRatio: 1.2 / 1,
        radius: 8,
        direction: 'col'
    },
    workspace: {
        bgColor: '#fff'
    },
    actions: [

    ]
} as MagicLayoutOptions



export function createLayoutStore(options?: MagicLayoutOptions) {
    return new AutoStore<MagicLayoutOptions>(Object.assign({}, defaultState, options)) as MagicLayoutStore
}