import { css } from "lit";

export const media = css` 
    @media (max-width: 575.98px) {
         /* 小屏幕设备（手机）样式 */
        :host{
            display: none;
        }
    }
    @media (min-width: 576px) and (max-width: 767.98px) {
        /* 中等屏幕设备（平板）样式 */
 
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        /* 大屏幕设备（桌面）样式 */
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
        /* 超大屏幕设备（大桌面）样式 */
    }

    @media (min-width: 1200px) {
        /* 超超大屏幕设备（超大桌面）样式 */
    }

` 