/**
 * 事件
 */


export const MagicLayoutEvents = {
    // 侧边栏收起
    'sidebar-collapsed': CustomEvent
}


function createCustomEvent<T extends Record<string, any>>(type: string, initDetail?: T) {
    return (detail?: T) => {
        const params = Object.assign({}, initDetail, detail)
        return new CustomEvent<T>(type, {
            detail: params,
            composed: true,
            bubbles: true,
        })
    }
}

export const SidebarCollapsedEvent = createCustomEvent<{
    collapsed: boolean
}>('sidebar-collapsed')
