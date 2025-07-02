import { css } from "lit";
import { fullScreen, fit } from "@/styles/utils";
import { vars } from "./vars";

export const media = css` 
    @media (max-width: 575.98px) {
         /* 小屏幕设备（手机）样式 */
        :host{
            &>.root>magic-layout-sidebar{
                display: none;
            }
        }
    }
    @media (min-width: 576px) and (max-width: 767.98px) {
        /* 中等屏幕设备（平板）样式 */
        :host{
            &>.root>magic-layout-sidebar{
                display: none;
            }
        }
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

export const root = css`
    ${fit}
    ${vars}
    ${fullScreen}
    :host{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        &> .root{
            display: flex;
            position: relative;
            flex-direction: row;        
            height:100%;
            &>.container{
                position: relative;
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }
    }

    :host::part(body){
        position: relative;
        display: flex;
        flex-direction: column;
    }
    
    ${media}
 
`
