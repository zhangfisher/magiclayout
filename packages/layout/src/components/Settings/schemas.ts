import type { MagicLayoutOptions } from '@/context/types';
import { schema, type SchemaDescriptorBuilder, type AutoStore } from 'autostore';

export const schemas = [
	[
		'theme.theme',
		schema('light', {
			label: '主题颜色',
			widget: 'colorpicker',
			presets: ['#FEFEFE', '#555', 'red', 'blue'],
		}),
	],
] as unknown as [[string, SchemaDescriptorBuilder]];

export function addSchemas(store: AutoStore<MagicLayoutOptions>) {
	if (!store) return;
	schemas.forEach(([key, schema]) => {
		store.schemas.add(key, schema);
	});
}
