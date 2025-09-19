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
        this.layout.addEventListener("menu/click",(e)=>{
            console.log("MenuItem click:",e.detail)
        })        
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
			sidebar: {
				menu: {
					groups: {
						'*': {},
					}, 
					items: [
						{   
                            id: 'home', 
                            label: '首页', 
                            icon: 'house', 
                            loading: true,
                         },
						{
							id: 'user',
							label: '用户管理',
							tips: '用户管理',
							icon: 'user-round',
                            iconStyle:["#47ab13","fill",'circle'],
							badge: 8,
							actions: [
								{ id: 'x1', label: '用户', icon: 'user-round' },
								{ id: 'x2', label: '发布', icon: 'rocket', enabled: false },
								{ id: 'x3', label: '发布文章', icon: 'aperture' },
								{ id: 'x4', label: '智能分析', icon: 'chart-pie', checked: true },
								{ id: 'x5', label: '权限管理', icon: 'shield' },
							],
						},
						{ id: 'article', label: '文章管理', tips: '文章管理', icon: 'file-text', checked: true },
						{ type:'divider'},
                        { id: 'publish', label: '发布文章', tips: '发布文章', icon: 'rocket', badge: 8 },
                         { id: 'user-profile', label: '弹出面板',  icon: 'circle-user-round',
                            
                         },
						{
							id: 'analysis',
							label: '智能分析',
							icon: 'chart-pie',
                            panded:false,
							children: [
								{ label: '智能分析-1', icon: 'file' },
								{ label: '智能分析-1', icon: 'settings' },
								{ type: 'divider' },
								{
									label: '智能分析-1',
									icon: 'chart-pie',
									children: [
										{ label: '智能分析-2', icon: 'file' },
										{
											label: '智能分析-2',
											icon: 'settings',
											badge: 8,
											children: [
												{ label: '智能分析-3', icon: 'file' },
												{
													label: '智能分析-3',
													icon: 'settings',
													children: [
														{ label: '智能分析-4', icon: 'file' },
														{ label: '智能分析-4', badge: 8, icon: 'settings' },
														{ type: 'divider' },
                                                        { label: '智能分析-4', icon: 'chart-pie' },
														{ label: '智能分析-4', icon: 'aperture' },
														{ label: '智能分析-4', icon: 'chart-pie' },
													],
												},
												{
													label: '智能分析-3',
													icon: 'chart-pie',
													children: [
														{ label: '智能分析-4', icon: 'file' },
														{ label: '智能分析-4', icon: 'settings' },
														{ label: '智能分析-4', icon: 'chart-pie' },
														{ label: '智能分析-4', icon: 'aperture' },
														{ label: '智能分析-4', icon: 'chart-pie' },
													],
												},
												{ label: '智能分析-3', icon: 'aperture' },
												{ label: '智能分析-3', icon: 'chart-pie' },
											],
										},
										{ label: '智能分析-2', icon: 'chart-pie' },
                                        { type: 'divider' },
										{
											label: '智能分析-2',
											icon: 'aperture',
											children: [
												{ label: '智能分析-3', icon: 'file' },
												{ label: '智能分析-3', icon: 'settings' },
												{ label: '智能分析-3', icon: 'chart-pie' },
												{ label: '智能分析-3', icon: 'aperture' },
												{ label: '智能分析-3', icon: 'chart-pie' },
											],
										},
										{ label: '智能分析-2', icon: 'chart-pie' },
									],
								},
								{ label: '智能分析-1', icon: 'aperture' },
								{ label: '智能分析-1', icon: 'chart-pie' },
							],
						},
                        {
                            type:'label',
                            label:'相关链接',
                        },
						{
							id: 'perm',
							label: '权限管理',
							icon: 'shield',
							actions: [
								{ id: 'x1', label: '用户', icon: 'user-round' },
								{ id: 'x2', label: '发布', icon: 'rocket' },
							],
						},
						{ id: 'settings', label: '系统设置', icon: 'settings', bottom: true },
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
            <div style="margin:2rem;border:1px solid blue;display:flex;height:400px;flex-direction:column;box-sizing: border-box;" >
                <magic-layout-settings></magic-layout-settings>          
                <div style="display:flex;height:400px;box-sizing: border-box;" data-theme='blue'>
                    <div style="width:80px;display:flex;justify-content: center;position: relative;">
                    
                    </div>
                    <div style="flex-grow:1;padding: 1em;"> 
                    </div>
                    <div style="width:60px;display:flex;justify-content: center;position: relative;">
                        
                    </div>  
                     <my-card  title="老子-道德经" style="margin: 0.5rem;gap:0.5em" >  
                        sddddddddddddd
                    </my-card>
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
