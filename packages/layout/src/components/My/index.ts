import { html } from "lit";
import styles from "./styles";
import { MagicElement } from "@/components/MagicElement";
import type { MagicLayoutOptions } from "@/context/types";
import { HostStyles } from "@/controllers/hostStyles"; 
import { tag } from "@/utils/tag";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";
import { ifDefined } from "lit/directives/if-defined.js";

@tag('magic-layout-user')
export class MagicLayoutUser extends MagicElement<MagicLayoutOptions['my']> {
    static styles = styles
    stateKey: string = 'my'
    styles = new HostStyles(this) 

    renderAvatar(){

    }
    renderPopup(){

    }
    renderUserLogo(){
        return html`
            <div class='logo'>                
                <sl-avatar 
                    image="${this.state.avatar!}"
                    label="${this.state.username}"
                    title="${this.state.title || this.state.username}"
                >
                    <sl-icon slot="icon" name="user"></sl-icon>
                </sl-avatar>
                <span>${this.state.title}</span>
            </div>`
            
    }
    renderMenubar(){
        if(!this.state.menu) return
        return html``
    }
    renderToolbar(){
        if(!this.state.toolbar) return
        return html`<magic-layout-toolbar
                class="toolbar" 
                part="my-toolbar"
                labelPos="${ifDefined(this.state.toolbar.labelPos)}"
                .items=${this.state.toolbar.items || []}       
        ></magic-layout-toolbar>`
    }
    render() {
        this.styles.toggle({
            
        })
        this.classs.use({
            online:this.state.status==='online',
            idle:this.state.status==='idle',
            offline:this.state.status==='offline',
            logging:this.state.status==='logging',
        })
        return html`<sl-dropdown
                distance="5" 
                skidding="20"
                placement="bottom-end"
            >
            <sl-avatar
                slot="trigger"
                    image="${this.state.avatar!}"
                    label="${this.state.username}"
                    title="${this.state.title || this.state.username}"
                >
                    <sl-icon slot="icon" name="user"></sl-icon>
            </sl-avatar>
            <sl-menu>
                ${this.renderUserLogo()}
                ${this.renderMenubar()}
                ${this.renderToolbar()}
            </sl-menu>
        </sl-dropdown>`
    }
}






declare global {
    interface HTMLElementTagNameMap {
        'magic-layout-user': MagicLayoutUser
    }
}
