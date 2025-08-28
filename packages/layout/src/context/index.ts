import { createContext } from '@lit/context';
import type { AutoStore } from 'autostore';
import type { MagicLayoutOptions } from './types';
import type { MagicLayout } from '@/layout';

export type MagicLayoutStore = AutoStore<MagicLayoutOptions> & {
	root: MagicLayout;
};
export const MagicLayoutContext = createContext<MagicLayoutStore>('magic-layout-context');
