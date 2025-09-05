export type MagicMenubarItem = {
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
	onClick?: (e: any, item: MagicMenubarItem) => void;
	onChange?: (e: any, item: MagicMenubarItem) => void;
	children?: MagicMenubarItem[];
};

export type MagicMenuItemGroup = {
	checked: string[];
	multiple: boolean;
	value: any;
};

export type MagicMenubarOptions = {
	visible?: boolean;
	label?: 'auto' | 'always';
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
	 *   b: [x,y,z]
	 * }
	 *
	 */
	groups?: Record<string, MagicMenuItemGroup>;
	items?: MagicMenubarItem[];
};
