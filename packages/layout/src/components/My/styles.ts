import { css } from "lit";



// const media = css`

//     @media (max-width: 575.98px) {
         
//     }
//     @media (min-width: 576px) and (max-width: 767.98px) {
        
//     }

//     @media (min-width: 768px) and (max-width: 991.98px) {
//         /* 大屏幕设备（桌面）样式 */
        
//     }

//     @media (min-width: 992px) and (max-width: 1199.98px) {
//         /* 超大屏幕设备（大桌面）样式 */
//     }

//     @media (min-width: 1200px) {
//         /* 超超大屏幕设备（超大桌面）样式 */
//     }
// `

export default css`     
    :host{
        padding: 0.5em;
        cursor: pointer;
    }         
    sl-avatar{
        border: 2px solid white;
        border-radius: 50%;
        box-shadow: 0px 0px 4px var(--ml-shadow-color);        
    }
    sl-menu{
        min-width: 15em;
        padding:0;
        & .logo{            
            display: flex;
            align-items: center;
            padding: 1em;
            flex-direction: column;
            box-sizing: border-box;
            border-bottom: var(--ml-border);
            color:var(--ml-text-color);
        }
    }
    .menubar{
        display: block;
        border-bottom: var(--ml-border);
        & sl-menu-item::part(base){
            align-items: center;
        }
        & sl-menu-item::part(checked-icon){
            display: none;
        } 
    }

    sl-menu-item::part(prefix){
        font-size:var(--ml-icon-size);
        padding: 2px 0.2em;        
    }
    sl-icon::part(svg){
        stroke-width: 1;
    }
` 