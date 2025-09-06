export type MagicMenuItem = {
	id: string;
	icon?: string;
	label?: string;
	checked?: boolean;
	enabled?: boolean;
	visible?: boolean;
	badge?: string;
	value?: any;
	tips?: string;
	bottom?: boolean;
	group?: string;
	expanded?: boolean;
	actions?: MagicMenuItemActions;
	onClick?: (e: any, item: MagicMenuItem) => void;
	onChange?: (e: any, item: MagicMenuItem) => void;
	children?: MagicMenuItem[];
	// 内嵌子菜单
	inline?: boolean;
};

export type MagicMenuItemGroup = {
	checked: string[];
	multiple: boolean;
	value: any;
};

export type MagicMenuItemAction = {
	id: string;
	icon: string;
	label?: string;
	checked?: boolean;
	enabled?: boolean;
	value?: any;
	onClick: (e: any, item: MagicMenuItem) => void;
};
export type MagicMenuItemActions = MagicMenuItemAction[];

export type MagicMenuOptions = {
	visible?: boolean;
	labelPos?: 'left' | 'bottom';
	colorized?: boolean; // 是否全彩色背景
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
	groups?: Record<string, MagicMenuItemGroup>;
	items?: MagicMenuItem[];
};
