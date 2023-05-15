// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: [
        './utilities/unified-app/',
        './utilities/unified-network/',
    ],
    routeRules: {
        '/**': { ssr: false },
    },
})
