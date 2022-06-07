const config = {
    content: [
        './src/**/*.{html,js,svelte,ts}',
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],
    theme: {
        screens: {
            'sm': '360px',
            // => @media (min-width: 640px) { ... }
            'md': '768px',
            // => @media (min-width: 768px) { ... }
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {}
    },
    plugins: [
        require('flowbite/plugin')
    ],
    darkMode: 'class',
};

module.exports = config;