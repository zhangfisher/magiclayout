import { css } from "lit";

export default css`
    :host{
        display: inline-block;
        position: relative;
    }        

    .logo{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;  
        box-sizing: border-box;        
        overflow: hidden;
        &>.image{
            box-sizing: border-box;                             
            &>img{
                
                box-shadow: var(--ml-shadow);      
                &.radius{
                    border-radius: 8px;                
                }          
                &.circle{
                    border-radius: 50%;                
                }          
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
            transition: display,width,height 0.5s ease-out;

            & > .subtitle{ 
                display: block;
                color: var(--ml-gray-color);
                font-size: 0.8rem;
                font-weight: 100;
                text-overflow: ellipsis;
                overflow:hidden;      
                white-space: nowrap;     
                line-height: 100%;     
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
            &>.image{
                display: flex
     
            }
            .subtitle{
                text-align: left;
            }
        }
    }
    
`