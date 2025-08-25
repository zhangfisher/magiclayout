import { MagicElement } from '@/components/MagicElement';
import type { MagicLayoutOptions } from '@/context/types';
import { styles } from './styles';

export class WorkspaceBase extends MagicElement<
	MagicLayoutOptions['workspace']
> {
	static styles = styles;
	stateKey: string = 'workspace';
}
