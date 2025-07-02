import { drawer } from './../styles/drawer';
import { fit } from "@/styles/utils";
import { css } from "lit";



const media = css`

    @media (max-width: 575.98px) {
         /* 小屏幕设备（手机）样式 */       
        .sidebar-tigger{
            display:block;
        }
    }
    @media (min-width: 576px) and (max-width: 767.98px) {
        /* 中等屏幕设备（平板）样式 */            
        .sidebar-tigger{
            display:block;
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
        sl-drawer::part(body){
            padding: 0px;            
        }
        sl-drawer::part(header){
            display: none;
        }
        sl-drawer::part(footer){
            display: none;
        }
        sl-drawer::part(panel){
            overflow: unset;
        }
    }        
    .sidebar-tigger{
        display:none;
    }
    ${media}    
` 