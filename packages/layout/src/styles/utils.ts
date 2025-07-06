import { css } from "lit";


export const fit = css`
    .fit {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
    }
`



export const fullScreen = css`
    .full-screen{
        position: fixed!important;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
    } 
`


export const flexRow = css`
    .flex-row{
        display: flex;
        flex-direction: row;
        &.center{
            align-items: center;
        }
    }
`

export const flexCol = css`
    .flex-col{
        display: flex;
        flex-direction: column;
        &.center{
            align-items: stretch;
            justify-content: center;
        }
    }
`