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
          editUrl:
            "https://github.com/Produkt/panels-guides/",
        },
        blog: false,
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
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Guides",
          },
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
    }),
};

export default config;
