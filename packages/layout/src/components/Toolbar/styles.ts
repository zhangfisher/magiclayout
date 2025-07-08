import { css } from "lit";

export default css`
    :host{
        display: flex;
        position: relative;
        flex-direction: row;
        padding: 4px;
        align-items: center;
        flex-wrap: nowrap;
    }
    :host([vertical]){    
        flex-direction: column;        
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

`