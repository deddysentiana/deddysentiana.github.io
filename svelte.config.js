import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),

		// Add this paths configuration
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/portfolio' : ''
		}
	}
};

export default config;
