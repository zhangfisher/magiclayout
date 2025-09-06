import { getIconLibrary, registerIconLibrary } from '@shoelace-style/shoelace/dist/components/icon/library.js';
import { presetIcons } from './presets';

let iconSourceUrl: string = 'https://unpkg.com/lucide-static@latest/icons/{name}.svg';

const defaultResolver = (name: string) => {
	if (name in presetIcons) {
		return `data:image/svg+xml,${encodeURIComponent(presetIcons[name])}`;
	} else {
		return iconSourceUrl.replace('{name}', name);
	}
};

const defaultMutator = (svg: any) => {
	if (svg) {
		svg.setAttribute('stroke-width', '1');
	}
};

/**
 * 注册图标库
 * @param url - 图标URL模板，必须包含'{name}'占位符
 * @param icons - 本地SVG图标集合，键为图标名称，值为SVG字符串
 * @param options - 可选配置项，继承自IconLibrary(排除'name'和'resolver')
 * @throws 当url不包含'{name}'时抛出错误
 * @description
 * 1. 将本地SVG编码为dataURL格式
 * 2. 优先使用本地图标，未找到时回退到远程URL
 * 3. 自动为SVG添加fill和stroke-width属性
 */
export function registerIcons(
	url: string = 'https://unpkg.com/lucide-static@latest/icons/{name}.svg',
	icons?: Record<string, string>,
) {
	if (!url.includes('{name}')) {
		throw new Error('icon url must include "{name}"');
	}
	iconSourceUrl = url;
	if (icons) {
		Object.entries(icons).forEach(([name, svg]) => {
			presetIcons[name] = `data:image/svg+xml,${encodeURIComponent(svg)}`;
		});
	}
	const iconLib = getIconLibrary('default')!;
	if (iconLib.resolver !== defaultResolver) {
		registerIconLibrary('default', {
			resolver: defaultResolver,
			mutator: defaultMutator,
		});
	}
}
