import { overloads } from '@/styles/overloads';
import { fit } from '@/styles/utils';
import { css } from 'lit';

export const media = css` 
    @media (max-width: 575.98px) {
         /* 小屏幕设备（手机）样式 */
        
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
 
`;
export const base = css`
    ${fit}
    ${overloads}
    :host{
        position: relative;
        display: flex;
        z-index:9;        
        background-color:var(--auto-panel-bgcolor);
        & > magic-flex{
            box-sizing: border-box;
            &>magic-logo,magic-sidebar-header,magic-sidebar-footer{
                flex-shrink: 0;
            }
        }
    } 
    :host(:not(.dragging)){
        transition: width 0.3s ease-out;
    }
    magic-layout-logo{
        border-bottom: var(--auto-border);
        padding:1rem 0px;
    }
    ${media}
`;
export const header = css``;

export const menu = css`
    ${overloads}
    :host{
        display: flex;
        flex-direction: column;
    }
    .empty{
        flex-grow: 1;
    }
    sl-icon{         
        color: var(--sl-color-neutral-700);
    }
    sl-menu{
        border: none;
        background: transparent;
        min-width: 6em;
        & sl-menu-item::part(base){         
            padding-right:  0.5em;
        }
        
        &[slot="submenu"]{
            background-color: var(--auto-panel-bgcolor);
            min-width: 12em;
        }
        & sl-menu-item:not(.has-submenu)::part(submenu-icon){
            display: none;
        }
        & sl-menu-item .label{     
            transition: width 0.3s ease-out;
            padding-left: 0.5em;
        }
    }
    sl-menu.collapsed{
        width: 100%;
        min-width:0px;
        & sl-menu-item .label{         
            display: none;
        }   
    }     
    sl-menu[slot="submenu"]:not(.collapsed){
        & sl-menu-item .label{         
            display: block;
        }   
    }
    sl-badge.reddot::part(base){
        font-size: calc(0.6 * var(--auto-font-size))!important;
        aspect-ratio: 1;
        padding: 0 4px !important;
    }
    sl-badge.reddot{
        position: absolute;
        top: -5px;
        right: -5px;
    }
    
    [slot="prefix"]{
        position: relative;
        display: flex;
        margin: 0;        
    }
    sl-menu-item.collapsed::part(base){
        padding: 0.5em 1em;
        justify-content: center;
    }
    sl-menu-item.collapsed::part(prefix){
        padding-left: 0;
        padding-right: 0;
        margin: 0;
        text-align: center;        
    }
    sl-menu-item.collapsed::part(label){
        display: none;
    }
    sl-menu-item.collapsed::part(submenu-icon){
        display: none;
    }
    sl-menu-item.collapsed.has-submenu .prefix::before{
        content: ' ';
        position: absolute;
        top: calc(50% - 4px);
        left: calc(100% + 4px);
        height: 8px;
        border: 4px solid transparent;
        border-left: 4px solid var(--auto-color);
        box-sizing: border-box;
        opacity:0.2;
    }
    sl-menu-item.checked{
        background-color: var(--auto-title-bgcolor);
    } 
    sl-menu-item:focus-visible [slot="prefix"] {
        color: var(--auto-title-bgcolor); 
    }
`;
export const footer = css``;
