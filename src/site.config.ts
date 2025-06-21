import type { Config, Integrations } from './types'

export const configSite: Config = {
  title: 'AstroKit',
  description:
    'Plantilla de inicio ultra-ligera para proyectos con Astro, preconfigurada con TypeScript y TailwindCSS.',
  lang: 'es',
  author: 'bmmedina99',
  url: 'https://localhost:5000',
}

export const navLinks = [
  {
    title: 'Características',
    href: '#features',
  },
  {
    title: 'Integraciones',
    href: '#integrations',
  },
  {
    title: 'Comenzar',
    href: '#started',
  },
]

export const integrationsInstalled: Integrations[] = [
  {
    name: 'TailwindCSS',
    icon: 'tailwindcss',
    background: 'bg-sky-500',
    description:
      'Framework de CSS para crear interfaces modernas y responsivas.',
  },
  {
    name: 'Sitemap',
    icon: 'sitemap',
    background: 'bg-green-500',
    description:
      'Genera un mapa del sitio para mejorar la indexación en motores de búsqueda.',
  },
  {
    name: 'Robots.txt',
    icon: 'robots',
    background: 'bg-gray-500',
    description:
      'Archivo robots.txt para controlar el acceso de los bots a tu sitio web.',
  },
]

export const integrationsAvailable: Integrations[] = [
  {
    name: 'React',
    icon: 'react',
    background: 'bg-blue-500',
    description: 'Crea componentes interactivos dentro de Astro.',
  },
  {
    name: 'Preact',
    icon: 'preact',
    background: 'bg-purple-500',
    description: 'Una alternativa ligera a React, para mejorar el rendimiento.',
  },
  {
    name: 'Vue',
    icon: 'vue',
    background: 'bg-green-500',
    description: 'Utiliza componentes Vue.js en tu proyecto Astro.',
  },
  {
    name: 'Svelte',
    icon: 'svelte',
    background: 'bg-orange-500',
    description: 'Utiliza componentes Svelte en tu proyecto Astro.',
  },
  {
    name: 'SolidJS',
    icon: 'solidjs',
    background: 'bg-red-500',
    description: 'Un framework reactivo para crear interfaces de usuario.',
  },
  {
    name: 'Lit',
    icon: 'lit',
    background: 'bg-teal-500',
    description: 'Crea web components reutilizables y eficientes.',
  },
  {
    name: 'AlpineJS',
    icon: 'alpinejs',
    background: 'bg-indigo-500',
    description: 'Agrega interactividad ligera sin ser un framework completo.',
  },
  {
    name: 'MDX',
    icon: 'mdx',
    background: 'bg-yellow-500',
    description: 'Permite mezclar Markdown con componentes React o Preact.',
  },
]
