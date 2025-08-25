import '@shoelace-style/shoelace/dist/shoelace.js';
import '@shoelace-style/shoelace/dist/shoelace-autoloader.js';
import { customElement, query } from 'lit/decorators.js';
import { css, html, LitElement, type PropertyValues } from 'lit';

import '../src/styles/index.css';
import 'themepro/index.css';
export * from './flex';
export * from './toolbar';
import type { MagicLayout } from '../src/layout';

@customElement('magic-layout-examples')
export class MagicLayoutExamples extends LitElement {
	static styles = css`
        :host{
            margin: 10px;
            display: block;
            position: relative; 

        }
    `;

	@query('magic-layout')
	layout?: any;

	protected updated(_changedProperties: PropertyValues): void {
		super.updated(_changedProperties);
		globalThis.layout = this.layout as MagicLayout;
	}

	getOptions() {
		return {
			my: {
				visible: true,
				username: 'admin',
				title: '管理员d',
				avatar: 'https://ui.shadcn.com/avatars/shadcn.jpg',
				status: 'idle',
				loginAt: Date.now(),
				tags: [
					{ icon: 'cog', label: '级别', badge: 2, type: 'success', link: '' },
					{ icon: 'star', label: '星', badge: 2, type: 'danger', link: '' },
					{
						icon: 'power',
						label: '告警',
						badge: 4,
						type: 'warning',
						link: '',
						tips: '打开告警信息',
					},
				],
				menu: {
					visible: true,
					items: [
						{
							icon: 'settings',
							label: '设置',
							onClick: () => {
								console.log('settings');
							},
						},
						{ icon: 'home', label: '首页', divider: true },
						{ label: '仪表盘', badge: '1', divider: true },
					],
				},
			},
			header: {
				title: '管理系统',
				logo: true,
				toolbar: {
					// labelPos: 'right',
					items: [
						{ icon: 'settings', label: '设置', tips: '设置' },
						{ icon: 'file', label: '打开文件', tips: '文件' },
						{
							icon: 'aperture',
							label: '滤镜',
							tips: '滤镜',
							labelPos: 'right',
						},
						{
							icon: 'bell-ring',
							label: '我的通知',
							fixed: true,
							tips: '通知',
							badge: 2,
							divider: true,
						},
						{ icon: 'camera', label: '我的相机', tips: '相机' },
						{
							type: 'search',
							placeholder: '搜索',
							value: '',
							onChange: (action, e) => {
								console.log('search', action, e);
							},
							onSearch: (action, e) => {
								console.log('onSeatch', action, e);
							},
						},
						{ icon: 'bug', label: 'Bug管理' },
						{
							type: 'dropdown',
							icon: 'chrome',
							label: '浏览器',
							select: [
								{ icon: 'chrome', label: 'Chrome' },
								{ icon: 'firefox', label: 'Firefox' },
								{ icon: 'safari', label: 'Safari' },
								{ icon: 'edge', label: 'Edge' },
								{ icon: 'ie', label: 'IE' },
							],
						},
						{ icon: 'message-square-more', label: '更多...' },
						{ icon: 'rotate-cw', label: '刷新' },
					],
				},
			},
		};
	}

	render() {
		return html`
        <magic-layout .options=${this.getOptions()}>  
            <magic-layout-settings></magic-layout-settings>          
             <div style="margin:2rem;border:1px solid blue;display:flex;height:400px;flex-direction:column;box-sizing: border-box;" >

         <div style="display:flex;height:400px;box-sizing: border-box;" >
            <div style="width:80px;display:flex;justify-content: center;position: relative;">
               
            </div>
            <div style="flex-grow:1;padding: 1em;">
                <magic-layout-logo direction="col"></magic-layout-logo>
                <magic-layout-logo direction="row"></magic-layout-logo>
                <magic-icon></magic-icon>
            </div>
            <div style="width:60px;display:flex;justify-content: center;position: relative;">
                 
            </div>  
         </div>
         <div>               
         </div>
         </div>
            
        </magic-layout> 
        `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'magic-layout-examples': MagicLayoutExamples;
	}
}

// <!-- <magic-layout-toolbar
//                     class="fit"
//                     vertical
//                     location="left"
//                     labelPos="bottom"

//                 ></magic-layout-toolbar> --><!-- <magic-layout-toolbar
//                     class="fit"
//                     vertical
//                     .items=${this.store.state.header.toolbar.items || []}
//                 ></magic-layout-toolbar> -->
