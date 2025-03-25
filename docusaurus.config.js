// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Panels Guides",
  tagline: "Tutorials, guides, faqs and how-to documents for iOS panels app",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://guides.panels.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'. For custom domains leave it as /
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Produkt", // Usually your GitHub org/user name.
  projectName: "panels-guides", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Produkt/panels-guides/tree/main/",
        },
        blog: false,
        gtag: {
          trackingID: "G-3YTR94STDJ",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Panels Logo',
          src: 'img/Panels-light.png',
          srcDark: 'img/Panels-dark.png',
          height: 32,
        },
        items: [
          {
            href: "https://github.com/Produkt/panels-guides",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/bQ6NMecYFn",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/panels_ink",
              },
            ],
          },
          {},
          {},
          {
            title: "More",
            items: [
              {
                label: "Download Panels app",
                href: "https://apps.apple.com/us/app/panels-comic-reader/id1236567663",
              },
              {
                label: "GitHub",
                href: "https://github.com/Produkt/panels-guides",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Produkt Software Engineering. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "5C0JC51MM9",

        // Public API key: it is safe to commit it
        apiKey: "63d123a26581b9d7e710192b1de4e8d8",

        indexName: "guides",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        //... other Algolia params
      },
    }),
};

export default config;
