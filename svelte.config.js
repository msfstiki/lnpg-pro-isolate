import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({
        postcss: true,
        scss: true
    }),

    kit: {
        adapter: adapter(),
        vite: {
            resolve: {
                alias: {
                    '$general': path.resolve('./src/lib/components/general'),
                    '$global': path.resolve('./src/lib/components/global'),
                    '$section': path.resolve('./src/lib/components/section'),
                    '$shared': path.resolve('./src/lib/components/shared'),
                    '$helper': path.resolve('./src/lib/helper'),
                    '$stores': path.resolve('./src/lib/stores'),
                    '$utils': path.resolve('./src/lib/utils'),
                    '$styles': path.resolve('./src/styles')
                }
            },
        },
    }
};

export default config;