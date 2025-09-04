import { css } from 'lit';

export const overloads = css`
    sl-option::part(label),
    sl-input::part(input),
    sl-button::part(label),
    sl-popup::part(display-input){        
        color: var(--auto-color);
    }  
     
    sl-icon::part(svg){
        stroke-width: 1px!important;
    }    
    sl-icon{        
        color: var(--auto-color);
    }
    sl-button::part(base){
        background-color: var(--auto-bgcolor);
    }
    sl-button::part(label){
        padding: 0px ;
    }
    sl-input::part(base){
        outline: none!important;
        box-shadow: none!important;
    }
    sl-textarea::part(base){
        outline: none!important;
        box-shadow: none!important;
    }


    
    sl-button[variant=default]::part(label){
        color: var(--auto-color);
    }
    sl-button{
        box-sizing: border-box; 
    } 

    sl-input::part(input)::placeholder{
        color: var(--auto-disable-color);
    }
    sl-tooltip{
        --sl-tooltip-background-color: var(--t-primary-color);
        --sl-tooltip-color: var(--t-color-primary-1);
    }  

    input,textarea{ 
        background-color: var(--auto-input-bgcolor);
    }     
    sl-menu{
        min-width: 12em;
        & sl-menu-item::part(prefix){
            padding-left:0.2em;
            font-size: calc(1.5 * var(--auto-font-size));            
        }
        & sl-menu-item::part(label){
            text-align: left;                    
            padding: 0.3em;
            padding-left: 0;              
        }
        & sl-menu-item::part(base){
            display: flex;
            align-items: center;
            padding:  0.5em 1em;
        }
        & sl-menu-item::part(checked-icon){
            display: none;
        }
        & sl-menu-item::part(base)::focus-visible .menu-item {
            color:red;
        }
    }
    si-icon{
        font-size: calc(1.5 * var(--auto-font-size));     
    }
`;
