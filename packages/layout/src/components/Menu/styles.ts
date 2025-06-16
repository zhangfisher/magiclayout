import { css } from "lit";

export default css`
    :host{
        display: flex;
        position: relative;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 4px;
    }   
    .toolbar{
        display: flex;
        position: relative;
        flex-direction: row;
        &.vert{
            flex-direction: column;
        }
    }
    sl-button::part(base){
        border:none;
        padding:0px 8px;
        color: var(--sl-color-gray-700);
        & sl-icon{
            color:red;
            & .lucide{
                stroke-width: 1;
            }
        }
    }
    sl-icon::part(svg){
            stroke-width: 1px!important;
    }

    sl-button::part(label){
        padding: 0px ;
    }

`