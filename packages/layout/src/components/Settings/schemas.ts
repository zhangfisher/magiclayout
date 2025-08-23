import type { MagicLayoutOptions } from '@/context/types';
import {
	schema,
	type SchemaDescriptorBuilder,
	type AutoStore,
} from 'autostore';

const schemas = [
	[
		'theme.theme',
		schema({
			type: 'colorpicker',
			label: '主题颜色',
		}),
	],
] as unknown as [[string, SchemaDescriptorBuilder]];

export function addSchemas(store: AutoStore<MagicLayoutOptions>) {
	if (!store) return;
	schemas.forEach(([key, schema]) => {
		store.schemas.add(key, schema);
	});
}
