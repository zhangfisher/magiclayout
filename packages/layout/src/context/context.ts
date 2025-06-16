

export const defaultContext = {
    state: {
        theme: "light",
        breakpoints: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1400px"
        },
        header: {
            visible: true,
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
            width: 200,
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

    }
}