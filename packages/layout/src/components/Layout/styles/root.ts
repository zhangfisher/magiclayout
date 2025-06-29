import { css } from "lit";
import { fit } from "@/styles/utils";

export const root = css`
    ${fit}
    :host{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;        
        /* 变量 */
        --ml-text-color: var(--sl-color-gray-700);    
        --ml-theme-color: hsl(208.21deg 100% 59.31%);    
        --ml-gray-color: var(--sl-color-gray-500);    
        --ml-shadow-color: var(--sl-color-gray-200);    
        --ml-bgcolor: var(--sl-color-neutral-0);    
        --ml-font-size: var(--sl-font-size-medium);    
        --ml-spacing: var(--sl-spacing-medium);                    /* 用于内边距和外边距 */
        --ml-border-color: var(--sl-color-neutral-300);
        --ml-border: 1px solid var(--ml-border-color);    
        --ml-border-radius: var(--sl-border-radius-medium);
        --ml-shadow: var(--sl-shadow-medium);    
        --ml-workspace-bgcolor: var(--sl-color-neutral-50);
        auto-box{
            padding: var(--ml-spacing);
            font-size: var(--ml-font-size);
            border-radius: var(--ml-border-radius);
            box-shadow: var(--ml-shadow);
            color: var(--ml-text-color);
        }
    }        
    
    .title{
        background: -webkit-linear-gradient(120deg,#bd34fe 30%,#41d1ff);
        -webkit-text-fill-color: transparent;
    }
    

    :host([size=small]){ 
        --ml-font-size: var(--sl-font-size-small);    
        --ml-spacing: var(--sl-spacing-small);                    /* 用于内边距和外边距 */
        --ml-border-radius: var(--sl-border-radius-small);
        --ml-shadow: var(--sl-shadow-small);    
    }

    
    :host([size=large]){ 
        --ml-font-size: var(--sl-font-size-large);    
        --ml-spacing: var(--sl-spacing-large);                    /* 用于内边距和外边距 */
        --ml-border-radius: var(--sl-border-radius-large);
        --ml-shadow: var(--sl-shadow-large);    
    } 

    :host > .root{
        display: flex;
        position: relative;
        flex-direction: row;        
        height:100%;
        &>.container{
            position: relative;
            flex-grow: 1;
            display: flex;
            justify-content: center;
        }
    }
    :host::part(body){
        position: relative;
        display: flex;
        flex-direction: column;
    }
     
 
`
