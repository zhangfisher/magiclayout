import { MagicLayoutOptions } from "./types";


export const defaultState = {
    theme: {
        theme: "light",
        dark: false,
        colors: {
            primary: "#1890ff",
            secondary: "#f5222d",
            success: "#52c41a",
            warning: "#faad14",
            danger: "#f5222d",
            info: "#1890ff",
            neutral: "#f5f5f5",
        }
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
        toolbar: {
            visible: true,
            items: [
                'settings', 'file', 'aperture', 'bell-ring', 'camera', 'bug', 'chrome', 'message-square-more', 'rotate-cw'
            ]
        }
    },
    sider: {
        visible: true,
        collapsed: false,
        width: '220px',
        collapsedWidth: '72px',
        header: {
            visible: true,
            items: ['file', 'aperture', 'bell-ring']
        },
        menu: {
            visible: true,
            items: [
                'settings', 'file', 'aperture', 'bell-ring', 'camera', 'bug', 'chrome', 'message-square-more', 'rotate-cw'
            ]
        },
        footer: {
            visible: true,
            items: ['file', 'aperture', 'bell-ring']
        }
    },
    actions: [
        { id: 'settings', label: "设置", tips: '设置' },
        { id: 'file', tips: '文件' },
        { id: 'aperture', tips: '滤镜' },
        { id: 'bell-ring', tips: '通知' },
        { id: 'camera' },
        { id: 'bug' },
        { id: 'chrome' },
        { id: 'message-square-more' },
        { id: 'rotate-cw' },
    ]
} as MagicLayoutOptions
