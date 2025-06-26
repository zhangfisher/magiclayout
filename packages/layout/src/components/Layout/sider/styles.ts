import { css } from "lit";

export const base = css`
    :host{
        position: relative;
        display: flex;
        & > magic-flex{
            box-sizing: border-box;
            &>magic-logo,magic-sider-header,magic-sider-footer{
                flex-shrink: 0;
            }
        }
    }
`
export const header = css``


export const menu = css`

`
export const footer = css``
