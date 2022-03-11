import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-netlify';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: mdsvex({ extensions: ['.md', '.svx'] }),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter()
	}

	// preprocess: [mdsvex(mdsvexConfig)]
};

export default config;
