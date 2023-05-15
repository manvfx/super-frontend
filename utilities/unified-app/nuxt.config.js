import { routes } from '../../routes';

export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    build: {
        transpile: [
            'unified-form',
        ]
    },
    watch: [
        'routes.js',
    ],
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    pages: true,
    hooks: {
        'pages:extend'(pages) {
            pages.push(...routes);
        },
    },
});
