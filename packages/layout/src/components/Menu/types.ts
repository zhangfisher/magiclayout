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
	labelPos?: 'right' | 'bottom';
	colorized?: boolean; // 是否全彩色背景
	/**
	 * 菜单图标修饰样式
	 * -  fill: 在图标后面显示颜色填充
	 * -  outline: 在图标外面显示边框
	 * -  circle:  在图标外面显示圆圈
	 * -  rectangle: 在图标外面显示圆角矩形
	 * -  none:     不显示图标样式
	 * - 指定颜色: 例如: 'circle,red,#769898'
	 *
	 *
	 * 例如:  'circle,fill'
	 */
	iconStyle?: string;
	/**
	 * 菜单项内嵌层级
	 * 0: 不内嵌
	 * 1: 内嵌一级
	 * 2: 内嵌二级
	 * N: 内嵌N级
	 */
	inlineLevel?: number;
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
	items: MagicMenuItem[];
};
