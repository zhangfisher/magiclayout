import { css } from "lit";

export default css`
    :host{
        display: flex;
        position: relative;
        background-color: var(--sl-color-neutral-0);
        .inline-border::slotted(*) {
            border-bottom: 1px solid red;
        }
        &.inline-border::slotted(*) {
            border-bottom: 1px solid blue;
        }
    }  
`