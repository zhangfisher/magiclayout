import { html } from "lit";
import { ReactiveController, ReactiveControllerHost } from 'lit';

/**
 * 用于为组件的host增加class
 * 
 *  class MyElement extends LitElement {
 *      classes = new HostClassesController({
 *         border: ()=>{return true},
 *      });
 *      
 *      render(){
 *          
 *          return html`<div class="${this.classes}">hello</div>`;
 *      }
 *  } 
 * 
 */

export class HostClassesController implements ReactiveController {
    host: ReactiveControllerHost;

    constructor(host: ReactiveControllerHost, timeout = 1000) {
        (this.host = host).addController(this);
    }
    hostConnected() {
        debugger
    }
    hostDisconnected() {

    }
    hostUpdate(): void {

    }
}