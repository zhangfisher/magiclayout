import { AutoStore } from 'autostore';
import type { MagicLayoutOptions } from './types';
import type { MagicLayoutStore } from '.';

export const defaultState = {
	my: {
		visible: true,
		username: 'admin',
		title: '管理员',
		avatar: 'https://ui.shadcn.com/avatars/shadcn.jpg',
		logined: false,
		loginAt: Date.now(),
		toolbar: {
			labelPos: 'right',
			items: [
				{ type: 'button', icon: 'settings', label: '设置' },
				{
					type: 'button',
					icon: 'user',
					label: '注销',
					onClick: (action) => {
						console.log('logout');
						action.label = '登录';
					},
				},
			],
		},
	},
	screen: {
		full: true,
		size: '',
	},
	theme: {
		theme: 'light',
		size: 'medium',
		colors: {
			primary: '#1890ff',
			secondary: '#f5222d',
			success: '#52c41a',
			warning: '#faad14',
			danger: '#f5222d',
			info: '#1890ff',
			neutral: '#f5f5f5',
		},
		borderRadius: 4,
	},
	breakpoints: {
		sm: '576px',
		md: '768px',
		lg: '992px',
		xl: '1200px',
		xxl: '1400px',
	},
	header: {
		title: 'MagicLayout',
		visible: true,
		logo: true,
		height: 64,
		colorized: true,
		bgColor: '',
		fullRow: false,
		border: 'var(--auto-border)',
		shadow: 'var(--auto-shadow)',
		toolbar: {
			visible: true,
			items: [],
		},
	},
	sidebar: {
		visible: true,
		collapsed: false,
		width: '200px',
		collapsedWidth: '72px',
		colorized: true,
		resizeable: true,
		bgColor: '#fff',
		border: 'var(--auto-border)',
		shadow: 'var(--auto-shadow)',
		header: {
			visible: true,
			items: [],
		},
		menu: {
			visible: true,
			items: [],
		},
		footer: {
			visible: true,
			bgColor: '#fff',
			color: '#000',
			colorized: true,
			items: [],
		},
	},
	panels: {
		visible: true,
	},
	logo: {
		visible: true,
		title: 'MagicLayout',
		subtitle: '强大的应用布局系统',
		showTitle: true,
		image: 'https://ui.shadcn.com/avatars/shadcn.jpg',
		imageSize: '52px',
		url: 'http://www.homekylin.com',
		pos: 'sidebar',
		bgColor: '#2f9dff',
		color: 'white',
		colorized: false,
		radius: 8,
		shape: 'radius',
		direction: 'col',
	},
	workspace: {
		bgColor: '#fff',
	},
	actions: [],
} as MagicLayoutOptions;

export function createLayoutStore(options?: MagicLayoutOptions) {
	return new AutoStore<MagicLayoutOptions>(
		Object.assign({}, defaultState, options),
	) as MagicLayoutStore;
}
