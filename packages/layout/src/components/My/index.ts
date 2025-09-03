import { html } from 'lit';
import styles from './styles';
import { MagicElement } from '@/components/MagicElement';
import type { MagicLayoutOptions } from '@/context/types';
import { HostStyles } from '@/controllers/hostStyles';
import { tag } from '@/utils/tag';
import { ifDefined } from 'lit/directives/if-defined.js';
import { repeat } from 'lit/directives/repeat.js';
import { when } from 'lit/directives/when.js';

@tag('magic-layout-user')
export class MagicLayoutUser extends MagicElement<MagicLayoutOptions['my']> {
	static styles = styles;
	stateKey: string = 'my';
	styles = new HostStyles(this);

	renderAvatar() {}
	renderPopup() {}
	renderUserLogo() {
		return html`
            <div class='logo'>                
                <sl-avatar 
                    image="${this.state.avatar!}"
                    label="${this.state.username}"
                    title="${this.state.title || this.state.username}"
                >
                    <sl-icon slot="icon" name="user"></sl-icon>
                </sl-avatar>
                <span class="title">${this.state.title}</span>
                ${this.renderTags()}
            </div>`;
	}
	renderMenubar() {
		if (!this.state.menu || this.state.menu.visible === false) return;
		return html`
            <s-menu 
                class="menubar"
                part="my-toolbar">
                ${repeat(this.state.menu.items || [], (item) => {
									if (typeof item === 'string') {
										return html`<sl-divider></sl-divider>`;
									} else {
										return html`<sl-menu-item>
                        <sl-icon  slot="prefix" name="${item.icon!}"></sl-icon>
                        ${item.label}
                        </sl-menu-item>`;
									}
								})}
            </s-menu>
        `;
	}
	renderToolbar() {
		if (!this.state.toolbar) return;
		return html`<magic-layout-toolbar
                class="toolbar" 
                part="my-toolbar"
                evenly
                labelPos="${ifDefined(this.state.toolbar.labelPos)}"
                .items=${this.state.toolbar.items || []}       
        ></magic-layout-toolbar>`;
	}

	renderTags() {
		if (!this.state.tags) return;
		if (!Array.isArray(this.state.tags)) return;
		return html`<div class="tags">${repeat(this.state.tags, (tag) => {
			return html`<sl-badge 
                variant=${tag.type || 'neutral'} pill
                title="${ifDefined(tag.tips)}"
            >   ${when(tag.icon, () => html`<sl-icon name=${tag.icon!}></sl-icon>`)}
                ${tag.label}
                ${when(tag.badge, () => {
									return html`<span class="badge">${tag.badge}</span>`;
								})}
            </sl-badge>`;
		})}</div>`;
	}

	render() {
		this.styles.toggle({});
		this.classs.use({
			logined: this.state.logined,
		});
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
        </sl-dropdown>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'magic-layout-user': MagicLayoutUser;
	}
}
