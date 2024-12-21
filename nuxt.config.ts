// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxthq/studio',
    'nuxt-og-image'
  ],

  devtools: {
    enabled: true
  },

  colorMode: {
    disableTransition: true
  },
  // false enable app/router.options.ts
  content: {
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5
      },
      anchorLinks: true
    }
  },

  routeRules: {
    '/api/search.json': { prerender: true }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      concurrency: 12
    }
  },

  typescript: {
    strict: false
  },

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton', 'UIcon'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  // Source: https://github.com/nuxt/ui/issues/2124
  // https://github.com/nuxt/icon?tab=readme-ov-file#server-bundle
  icon: {
    serverBundle: 'remote'
  },
  uiPro: { routerOptions: true }})
