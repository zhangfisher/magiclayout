export class HostClasses implements ReactiveController {
    host: HTMLElement;
    initialClasses: (string | Record<string, boolean>)[] = [];
    constructor(host: any, ...classes: (string | Record<string, boolean>)[]) {
        (this.host = host).addController(this);
        this.initialClasses = classes;
    }
}