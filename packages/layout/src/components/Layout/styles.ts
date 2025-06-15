import { css } from "lit";
import { fit } from "@/styles/utils";

export default css`
    ${fit}
    :host{
        display: flex;
        position: relative;
    }        
    .sider{
        background-color: var(--sl-color-neutral-50);
    }
    .header{
        display: flex;
        flex-direction: row;
        align-items: center;
        min-height: 2rem;
        &.coloreized{
            background: var(--sl-color-primary-500);
            color : var(--sl-color-primary-50);
        }
    }
    :host > .root{
        
        &>.container{            
            background-color: var(--sl-color-neutral-50);
            & .body{
                display: flex;
                flex-direction: column;
            }
        }
    }

    .header{
        background: var(--sl-color-primary-500);
    }
    .full-screen{
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
    } 
`