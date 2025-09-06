export type MagicSideMenuItem = {
	id: string;
	type?: 'button' | 'divider' | 'popup-menu' | 'popup-panel';
	icon?: string;
	label?: string;
	checked?: boolean;
	disabled?: boolean;
	badge?: string;
	value?: any;
	tips?: string;
	bottom?: boolean;
	group?: string;
	onClick?: (e: any, item: MagicSideMenuItem) => void;
	onChange?: (e: any, item: MagicSideMenuItem) => void;
	children?: MagicSideMenuItem[];
};

export type MagicSideMenuItemGroup = {
	checked: string[];
	multiple: boolean;
	value: any;
};

export type MagicSideMenuOptions = {
	visible?: boolean;
	labelPos?: 'left' | 'bottom';
	colorized: boolean; // 是否全彩色背景
	/**
	 * 创建菜单项组
	 *
	 * ‘*’代表一级菜单项
	 *
	 * groups:{
	 *   a: {
	 *     checked: [a,b,c],
	 *     multiple: true
	 *     value: 1
	 *   }
	 * }
	 *
	 */
	groups?: Record<string, MagicSideMenuItemGroup>;
	items?: MagicSideMenuItem[];
};
