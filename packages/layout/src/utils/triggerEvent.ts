

export function triggerEvent(ele: HTMLElement, eventName: string, detail: any) {
    const event = new CustomEvent(eventName, {
        detail,
        bubbles: true,
        composed: true,
    });
    ele.dispatchEvent(event);
}