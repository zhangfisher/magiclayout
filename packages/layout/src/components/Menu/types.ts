export type MagicMenubarItem = {
	type?:
		| 'button'
		| 'dropdown'
		| 'divider'
		| 'checkbox'
		| 'input'
		| 'search'
		| 'switch'
		| 'popup-menu'
		| 'popup-panel'
		| 'avator';
	icon?: string;
	label?: string;
	active?: boolean;
	disabled?: boolean;
	badge?: string;
	value?: any;
	tips?: string;
	onClick?: () => void;
	onChange?: () => void;
	children?: MagicMenubarItem[];
};

export type MagicMenubarOptions = {
	visible?: boolean;
	items?: (string | MagicMenubarItem)[];
};
