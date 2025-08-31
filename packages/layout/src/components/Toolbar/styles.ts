import { overloads } from '@/styles/overloads';
import { css } from 'lit';

export default css`
    ${overloads}
    :host{
        display: inline-flex;
        position: relative;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        box-sizing: border-box;
        background-color: var(--auto-panel-bgcolor);
        & > * {
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
    sl-dropdown::slotted(*){
        width: 100%;
    } 
`;
