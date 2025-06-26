import { MagicLayoutAction, RequiredMagicLayoutOptions } from "./types";


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
        visible: true,
        height: 60,
        colorized: true,
        bgColor: '',
        fullRow: 0,
        border: true,
        shadow: 'small',
        toolbar: {
            visible: true,
            items: [

            ]
        }
    },
    sider: {
        visible: true,
        collapsed: false,
        width: '200px',
        collapsedWidth: '72px',
        colorized: true,
        resizeable: true,
        bgColor: '#fff',
        border: true,
        shadow: '0 2px 4px hsl(240 3.8% 46.1% / 12%)',
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
        image: '',
        url: '',
        bgColor: '',
        color: ''
    },
    workspace: {
        bgColor: '#fff'
    },
    actions: [

    ],
    onAction: (action: MagicLayoutAction) => { },
    onResize: (width: number, height: number) => { }
} as RequiredMagicLayoutOptions
