// https://nuxt.com/docs/api/configuration/nuxt-config
import locales from "./i18n/i18n.locales.config";
import pages from "./i18n/i18n.pages.config";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    // if default locale is not specified, it will use 'locale' prop from vueI18n config above
    lazy: true,
    langDir: 'locales',
    multiDomainLocales: true, // if it is not specified, router.options will not fire
    locales,
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    customRoutes: 'config',
    pages,
  },
})