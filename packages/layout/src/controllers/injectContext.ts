


/**
 * 为组件自动注入context
 */
import { ReactiveController } from "lit";

export class StoreController implements ReactiveController {
    host: HTMLElement;
    constructor(host: any) {
        (this.host = host).addController(this);
    }

    hostConnected() {

    }
    hostDisconnected() {

    }
    hostUpdate(): void {

    }
}