import type { MagicLayoutOptions } from '@/context/types';
import { schema, type SchemaDescriptorBuilder, type AutoStore } from 'autostore';

export const schemas = [
	[
		'theme.theme',
		schema('light', {
			label: '主题颜色',
			widget: 'colorpicker',
			presets: ['#FEFEFE', '#555', 'red', 'blue'],
		})
	],
    [
		'sidebar.menu.iconStyle',
		schema([], {
			label: '图标样式',
			widget: 'checkbox-group',
			select:[                
                {label:'矩形', value:'rectangle'},
                {label:'圆形',value:'circle'},
                {label:'填充',value:'fill'},
            ]
		})]
] as unknown as [[string, SchemaDescriptorBuilder]];

export function addSchemas(store: AutoStore<MagicLayoutOptions>) {
	if (!store) return;
	schemas.forEach(([key, schema]) => {
		store.schemas.add(key, schema);
	}); 
}
