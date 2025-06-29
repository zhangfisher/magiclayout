import { fit } from "@/styles/utils";
import { css } from "lit";

export default css`
    ${fit}
    :host{
        position: relative;
        display: flex;        
        & > magic-flex{
            box-sizing: border-box;
            &>.title{
                display: flex;
                align-items: center;         
                padding: 0px 0.5rem ;
            } 
            &>magic-layout-toolbar{
                flex-grow: 1;
            }
            &>magic-layout-logo{
                display: inline-flex;
                padding: 0px 0.5rem;
            }
        }
    }
` 