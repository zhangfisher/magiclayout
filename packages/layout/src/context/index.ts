import { createContext } from '@lit/context';
import { IMagicLayoutStore } from './store';


export const MagicLayoutContext = createContext<IMagicLayoutStore>('magic-layout-context');


