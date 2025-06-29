import { css } from "lit";

export default css`
    :host{

    }        

    .logo{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;  
        box-sizing: border-box;        
        border-bottom: 1px solid var(--ml-border-color);
        overflow: hidden;
        &>.image{
            box-sizing: border-box;                             
            &>img{
                border-radius: 8px;                
                box-shadow: var(--ml-shadow);
            }
        }
        &>a.image{
            display: contents;
        }

        &>.title{
            font-size: 1.2rem;
            color: var(--ml-theme-color);  
            margin: 4px 0px;
            text-align: center;
            & > .subtitle{ 
                display: block;
                color: var(--ml-gray-color);
                font-size: 0.8rem;
                font-weight: 100;
                text-overflow: ellipsis;
                overflow:hidden;      
                white-space: nowrap;          
            }
        }        
        &.row{
            flex-direction: row;
            flex-wrap: wrap;
            gap:0.5rem;
        }
        &.collapsed{
            &>.title{
                display: none;
            }   
        }
        &.colorized{
            border-bottom: none;
            &>.title{
                color: white;
                &>.subtitle{
                    color: #eaeaea;
                }                
            }
        }
        &.row{
            padding: 1rem;                       
            &>.image{
                display: flex
     
            }
        }
    }
    
`