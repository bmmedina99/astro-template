import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import { configSite } from './src/site.config'

export default defineConfig({
  // -> Modifica la url del sitio en src/site.config.ts
  site: configSite.url,
  integrations: [sitemap(), robotsTxt()],
  vite: {
    plugins: [tailwindcss()],
    minify: 'es',
  },
})
