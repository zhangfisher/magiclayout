import { css } from 'lit';

export const fit = css`
    .fit {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
    }
`;

export const fullScreen = css`
    .full-screen{
        position: fixed!important;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
    } 
`;

export const flexRow = css`
    .flex-row{
        display: flex;
        flex-direction: row;
        &.center{
            align-items: center;
        }
    }
`;

export const flexCol = css`
    .flex-col{
        display: flex;
        flex-direction: column;
        &.center{
            align-items: stretch;
            justify-content: center;
        }
    }
`;

export const scrollbar = css`
    /* 自定义滚动条样式 */
    .scrollbar {
        /* Firefox - 默认隐藏 */
        scrollbar-width: thin;
        scrollbar-color: transparent transparent;
        transition: scrollbar-color 0.3s ease;
    }

    /* Firefox - 悬停时显示 */
    .scrollbar:hover {
        scrollbar-color: var(--sl-color-neutral-300, #cbd5e1) transparent;
    }

    /* Webkit浏览器 (Chrome, Safari, Edge等) */
    .scrollbar::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    /* 隐藏滚动条上下箭头按钮 */
    .scrollbar::-webkit-scrollbar-button {
        display: none;
        height: 0;
        width: 0;
    }

    .scrollbar::-webkit-scrollbar-track {
        background: transparent;
    }

    .scrollbar::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 3px;
        transition: background-color 0.3s ease;
    }

    /* 仅在鼠标悬停时显示滚动条 */
    .scrollbar:hover::-webkit-scrollbar-thumb {
        background-color: var(--sl-color-neutral-300, #cbd5e1);
    }

    .scrollbar:hover::-webkit-scrollbar-thumb:hover {
        background-color: var(--sl-color-neutral-400, #94a3b8);
    }
`;
