/**
Breakpoint	Viewport width	Value in px
xs	36em	576px
sm	48em	768px
md	62em	992px
lg	75em	1200px
xl	88em	1408px
 */
import { createContext } from '@lit/context';


export class MagicLayoutContextManager {
    dark: boolean = false
    breakpoints = {
        xs: '576px',
        sm: '768px',
        md: '992px',
        lg: '1200px',
        xl: '1408px',
    }
    size: 'small' | 'medium' | 'large' = 'medium'
}
export const MagicLayoutContext = createContext<MagicLayoutContextManager>('magic-layout');

