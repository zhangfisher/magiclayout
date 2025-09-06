import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: 'src/index.ts',
			formats: ['es'],
		},
	},
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	server: {
		open: '/examples/index.html',
		proxy: {
			// 代理规则示例：将以 '/lucide-static' 开头的请求转发到 unpkg.com
			'/lucide-static': {
				target: 'https://unpkg.com', // 目标地址
				changeOrigin: true, // 修改请求头中的 Origin 为目标地址:cite[1]:cite[6]
				rewrite: (path) => path.replace(/^\/lucide-static/, '/lucide-static@0.542.0'), // 可选：重写路径:cite[1]:cite[6]
				secure: false, // 如果需要代理到 HTTPS 但证书有问题，可设置为 false
			},
			// 你可以继续添加其他代理规则...
		},
	},
});
