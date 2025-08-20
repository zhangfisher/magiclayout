import { css } from 'lit';

export default css`
    :host{
        display: inline-flex;
        position: relative;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        box-sizing: border-box;
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
        & > sl-dropdown{
            display: block    
        }
    }   
    :host([vertical])::part(widget){    
        width: 100%;
    }

    :host([evenly]){
        width: 100%;
        justify-content: space-evenly;
        & > *{
            flex-grow: 1;
        }        
    }
    :host([evenly])::part(widget){
        width: 100%;
    }

    :host([block])::part(label){
        width: auto;
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
    sl-tooltip::part(base){
        background-color: var(--auto-primary-color);
    }  
    sl-tooltip{
        --sl-tooltip-background-color: var(--t-color-primary-2);
    }    

`;
