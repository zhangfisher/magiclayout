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
