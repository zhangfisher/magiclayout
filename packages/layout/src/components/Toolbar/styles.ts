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
        align-items: center;              
        width: 100%;
        &.align-end{
            justify-content: flex-end;
        }
        &.vert{
            flex-direction: column;
        }   
        & sl-menu{
            min-width: 12em;
            & sl-menu-item::part(label){
                text-align: left;
                padding-left: 0.5em;
            }
            & sl-menu-item::part(base){
                display: flex;
                align-items: center;
            }
        }
    }
    
    

`