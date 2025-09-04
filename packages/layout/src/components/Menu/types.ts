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

export type MagicMenubarOptions = {
	visible?: boolean;
	label?: 'auto' | 'always';
	checked?: string[];
	multiple?: boolean;
	items?: MagicMenubarItem[];
};
