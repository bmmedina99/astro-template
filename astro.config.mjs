import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import siteConfig from './site.config'

export default defineConfig({
  site: siteConfig.canonical,
  integrations: [sitemap(), robotsTxt()],
  vite: {
    plugins: [tailwindcss()],
  },
})
