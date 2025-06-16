/**
Breakpoint	Viewport width	Value in px
xs	36em	576px
sm	48em	768px
md	62em	992px
lg	75em	1200px
xl	88em	1408px
 */
import { IMagicLayoutStore } from '@/types';
import { createContext } from '@lit/context';


export const MagicLayoutContext = createContext<IMagicLayoutStore>('magic-layout');


