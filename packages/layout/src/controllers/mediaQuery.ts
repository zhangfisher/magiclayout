import { ReactiveController } from 'lit';

/**
 * 媒体查询配置接口，定义断点名称和对应的尺寸值
 * 例如: { sm: '640px', md: '768px', lg: '1024px' }
 */
export interface MediaQueryBreakpoints {
    [key: string]: string | number;
}

/**
 * 媒体查询结果接口，包含每个断点的匹配状态和当前匹配的最大断点
 */
export interface MediaQueryResult {
    matches: { [key: string]: boolean };
    current: string | null;
}


const defaultBreakpoints = {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px"
}

/**
 * 一个简单的媒体查询控制器，
 * 用于当媒体查询的尺寸发生改变时触发回调函数onMediaQuery
 * 
 * 使用示例:
 * ```
 * class MyElement extends LitElement {
 *     mediaQuery = new MediaQuery(this, {
 *         sm: '640px',
 *         md: '768px',
 *         lg: '1024px'
 *     });
 * 
 *     onMediaQuery(result) {
 *         console.log('Current breakpoint:', result.current);
 *         console.log('Matches:', result.matches);
 *     }
 * 
 *     render() {
 *         return html`<div>hello</div>`;
 *     }
 * }
 * ```
 */
export class MediaQuery implements ReactiveController {
    host: HTMLElement;
    private breakpoints: MediaQueryBreakpoints;
    private mediaQueryLists: Map<string, MediaQueryList> = new Map();
    private handlers: Map<string, EventListener> = new Map();
    private result: MediaQueryResult = {
        matches: {},
        current: null
    };

    /**
     * 创建一个新的媒体查询控制器
     * @param host 宿主元素
     * @param breakpoints 媒体查询配置，键为断点名称，值为CSS媒体查询尺寸
     */
    constructor(host: any, breakpoints: MediaQueryBreakpoints = defaultBreakpoints) {
        this.host = host;
        this.breakpoints = breakpoints;
        host.addController(this);
    }

    /**
     * 初始化媒体查询监听器
     * @private
     */
    private setupMediaQueries(): void {
        // 清理现有的媒体查询监听器
        this.cleanupMediaQueries();

        // 为每个断点创建媒体查询监听器
        Object.entries(this.breakpoints).forEach(([key, value]) => {
            const mediaQuery = window.matchMedia(`(min-width: ${value})`);

            // 创建事件处理函数
            const handler = (e: MediaQueryListEvent | MediaQueryList) => {
                this.result.matches[key] = e.matches;
                this.updateCurrentBreakpoint();
                this.notifyHost();
            };

            // 保存媒体查询列表和处理函数
            this.mediaQueryLists.set(key, mediaQuery);
            this.handlers.set(key, handler as EventListener);

            // 添加事件监听器
            mediaQuery.addEventListener('change', handler);

            // 初始化匹配状态
            handler(mediaQuery);
        });
    }

    /**
     * 清理媒体查询监听器
     * @private
     */
    private cleanupMediaQueries(): void {
        // 移除所有事件监听器
        this.mediaQueryLists.forEach((mediaQuery, key) => {
            const handler = this.handlers.get(key);
            if (handler) {
                mediaQuery.removeEventListener('change', handler);
            }
        });

        // 清空集合
        this.mediaQueryLists.clear();
        this.handlers.clear();
        this.result.matches = {};
    }

    /**
     * 更新当前匹配的最大断点
     * @private
     */
    private updateCurrentBreakpoint(): void {
        const entries = Object.entries(this.result.matches);

        // 找出匹配的最大断点
        const matchedEntries = entries.filter(([_, matches]) => matches);
        const configKeys = Object.keys(this.breakpoints);

        if (matchedEntries.length === 0) {
            // 当没有匹配的断点时，使用最小的断点
            this.result.current = configKeys[0] || null;
            return;
        }

        // 按照配置中的顺序找出最后一个匹配的断点
        const lastMatchedKey = [...matchedEntries]
            .sort((a, b) => configKeys.indexOf(a[0]) - configKeys.indexOf(b[0]))
            .pop()?.[0] || null;

        this.result.current = lastMatchedKey;
    }

    /**
     * 通知宿主元素媒体查询状态变化
     * @private
     */
    private notifyHost(): void {
        // @ts-ignore
        if (typeof this.host.onMediaQuery === 'function') {
            // @ts-ignore
            this.host.onMediaQuery({ ...this.result });
        }
    }

    /**
     * 当宿主元素连接到DOM时调用的生命周期方法
     */
    hostConnected(): void {
        this.setupMediaQueries();
    }

    /**
     * 当宿主元素从DOM断开时调用的生命周期方法
     */
    hostDisconnected(): void {
        this.cleanupMediaQueries();
    }

    /**
     * 当宿主元素更新时调用的生命周期方法
     */
    hostUpdate(): void {
        // 宿主更新时不需要特殊处理
    }

    /**
     * 更新媒体查询配置
     * @param config 新的媒体查询配置
     */
    update(config: MediaQueryBreakpoints): void {
        this.breakpoints = config;
        if (this.host.isConnected) {
            this.setupMediaQueries();
        }
    }

    /**
     * 获取当前的媒体查询结果
     * @returns 媒体查询结果对象
     */
    getResult(): MediaQueryResult {
        return { ...this.result };
    }
}