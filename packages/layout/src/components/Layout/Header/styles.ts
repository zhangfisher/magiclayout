import { fit } from "@/styles/utils";
import { css } from "lit";

export default css`
    ${fit}
    :host{
        position: relative;
        display: flex;        
        & > magic-flex{
            box-sizing: border-box;
            &>.title{
                display: flex;
                align-items: center;         
                padding: 0px 0.5rem ;
            } 
            &>magic-layout-toolbar{
                flex-grow: 1;
            }
            &>magic-layout-logo{
                display: inline-flex;
                padding: 0px 0.5rem;
            }
        }
    }    
    @media (max-width: 575.98px) {
         /* 小屏幕设备（手机）样式 */
         :host::part(sidebar){
             display: none;
         } 
         ::part(header-toolbar){
             display: none;
         }
        :host{
            .toolbar{
                display: none;
            } 
        }
    }
    
    @media (min-width: 576px) and (max-width: 767.98px) {
        /* 中等屏幕设备（平板）样式 */
        .toolbar{
            display: none;
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