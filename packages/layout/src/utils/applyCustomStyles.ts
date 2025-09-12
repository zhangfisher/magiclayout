import type { HTMLElementCustomStyles } from "@/types"


export function applyCustomStyles(el: HTMLElement, styles: HTMLElementCustomStyles | undefined) {
    if (!styles) return
    Object.entries(styles).forEach(([selector, value]) => {
        const eles = selector === 'root' ? [el] : Array.from(el.querySelectorAll(selector)) as HTMLElement[]
        eles.forEach((ele) => {
            if (typeof (value) === 'string') {
                ele.setAttribute('style',value)
            } else if (typeof (value) === 'object') {
                Object.assign(ele.style, value)
            }
        })
    })
}

 