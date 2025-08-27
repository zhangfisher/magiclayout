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
	},
});
