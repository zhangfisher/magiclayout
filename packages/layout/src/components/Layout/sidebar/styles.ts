import { fit } from "@/styles/utils";
import { css } from "lit";

export const base = css`
    ${fit}
    :host{
        position: relative;
        display: flex;
        & > magic-flex{
            box-sizing: border-box;
            &>magic-logo,magic-sidebar-header,magic-sidebar-footer{
                flex-shrink: 0;
            }
        }
    }
`
export const header = css``


export const menu = css`

`
export const footer = css``
