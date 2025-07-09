import { css } from "lit";

export default css`
    :host{
        display: flex;
        position: relative;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        & > *{
            display: flex;
            align-items: center;
        }
    }
    :host([vertical]){    
        flex-direction: column;        
        width: 100%;
        &>*{
            width: 100%;
        }
    }   
    :host([vertical])::part(widget){    
        width: 100%;
    }

    sl-menu{
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
    sl-dropdown::slotted(*){
        width: 100%;
    }

`