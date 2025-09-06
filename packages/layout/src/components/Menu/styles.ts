import { css } from 'lit';

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
        display: flex;
        position: relative;
        background: transparent;
        flex-direction: column;
        align-items:center;
        width:100%;   
    }         

    .ml-item{
        display: flex;
        align-items:center;
        position: relative;    
        color: var(--auto-color);
        padding: calc(0.5 * var(--auto-padding)) var(--auto-padding);
        padding-right:calc(0.3 * var(--auto-padding));
        width: 100%;
        box-sizing: border-box;
        gap:0.5em;
        cursor: pointer;
        user-select: none;
        &:hover{
            background-color: rgba(0,0,0,0.03);
             color:var(--auto-primary-color);
        }
        &>.ml-icon{
            flex-shrink: 0;
        }
        &>.ml-label{
            flex-grow: 1;
            min-width: 0px;
        }
        &>.ml-badge{

        }
        &>.ml-actions{
            display: flex;
            position: relative;
            align-items:center;
            gap: 0.1em;
            & > magic-icon{
                cursor: pointer;
                border-radius: 6px;
                padding: 0.3em;
                width: 1em;
                height: 1em;
                background: rgba(0,0,0,0.05);
            }
            magic-icon:hover{                
                border-radius: 5px;
                background: rgba(0,0,0,0.1);
                color:var(--auto-primary-color);
            } 
            magic-icon:active{
                background: rgba(0,0,0,0.2);
            } 

        }
    }
    :host([collapsed]){
        .ml-item{
            &>.ml-label{
                display: none;
            }
            &>.ml-badge{
                display: none;
            }
            &>.ml-actions{
                display: none;
            }
        }
    }


    
    
    
`;
