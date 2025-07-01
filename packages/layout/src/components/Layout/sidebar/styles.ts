import { fit } from "@/styles/utils";
import { css } from "lit";
import { media } from "./media";

export const base = css`
    ${fit}
    :host{
        position: relative;
        display: flex;
        z-index:9;        
        & > magic-flex{
            box-sizing: border-box;
            &>magic-logo,magic-sidebar-header,magic-sidebar-footer{
                flex-shrink: 0;
            }
        }
    } 
    :host(:not(.dragging)){
        transition: width 0.5s ease-out;
    }
    magic-layout-logo{
        border-bottom: 1px solid var(--ml-border-color);
        padding:1rem 0px;
    }
    ${media}
`
export const header = css``


export const menu = css`
    :host{

    }
    sl-menu{

    }
`
export const footer = css``
