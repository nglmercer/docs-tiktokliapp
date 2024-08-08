// @ts-check
// `@type` JSDoc annotations allow editor                                           ocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
// # endregion
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TiktokLiveWinApp',
  tagline: 'Documentacion sobre Tiktok Interactivo',
  favicon: 'img/favicon.ico',
  //cmd /C "set "GIT_USER=nglmercer" && yarn deploy "
  //deplor comando para yarn deploy '' powershell
  //cmd /C 'set "GIT_USER=nglmercer" && yarn deploy'
  //powershell
  // Establece aquí la URL de producción de tu sitio
  url: 'https://nglmercer.github.io/',
  // Establece la ruta /<baseUrl>/ bajo la cual se sirve tu sitio
  // Para despliegue en GitHub Pages, suele ser '/<nombreProyecto>/'
  baseUrl: '/TikLiveApp/',
  //https://github.com/nglmercer/TikLiveApp/tree/mainTikLiveApp-DOCS
  // Configuración para despliegue en GitHub Pages.
  // Si no estás utilizando GitHub Pages, no necesitas esto.
  organizationName: 'nglmercer', // Por lo general, tu nombre de usuario u organización de GitHub.
  projectName: 'TikLiveApp', // Por lo general, el nombre de tu repositorio.
  deploymentBranch: 'main',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Aunque no utilices internacionalización, puedes usar este campo para definir
  // metadatos útiles como el idioma HTML. Por ejemplo, si tu sitio está en chino,
  // puedes reemplazar "en" por "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['en', 'es'],
    localeConfigs: {
      es: {
        htmlLang: 'es-ES',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      en: {
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edita" links.
          editUrl:
            'https://github.com/nglmercer/TikLiveApp/tree/gh-pages',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edita" links.
          editUrl:
            'https://github.com/nglmercer/TikLiveApp/tree/gh-pages',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'APP docs',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/nglmercer/Tiktok-Live-TTS-APPv2',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Canales',
            items: [
              {
                label: 'youtube',
                href: 'https://www.youtube.com/channel/@melserngl',
              },
              {
                label: 'tiktok',
                href: 'https://www.tiktok.com/@melserng',
              },
              {
                label: 'Todas mis redes',
                href: 'https://linktr.ee/melsern',
              },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'tiktok',
                href: 'https://www.tiktok.com/@melserng',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/kqj7Ev3Uzr',
              },
              {
                label: 'github',
                href: 'https://github.com/nglmercer',
              },
            ],
          },
          {
            title: 'Mas',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nglmercer',
              },
              {
                label: 'Todas mis redes',
                href: 'https://linktr.ee/melsern',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TiktokLiveWebApp. by melser.`,
      },
      prism: {
        theme: prismThemes.oceanicNext,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
