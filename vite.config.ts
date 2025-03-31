import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		host: '127.0.0.1',
		https: {
			key: readFileSync('./certs/key.pem'),
			cert: readFileSync('./certs/cert.pem')
		}
	},
	plugins: [
		tailwindcss(),
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	]
});
