import { createContext } from '@lit/context';
import type { AutoStore } from 'autostore';
import { MagicLayoutOptions } from './types';


export type MagicLayoutStore = AutoStore<MagicLayoutOptions>
export const MagicLayoutContext = createContext<MagicLayoutStore>('magic-layout-context');

