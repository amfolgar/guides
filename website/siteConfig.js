/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'Guides' /* title for your website */,
  tagline: 'How we do things at OK GROW!',
  url: 'https://guides.okgrow.com' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  cname: 'guides.okgrow.com',
  projectName: 'guides',
  organizationName: 'okgrow',
  headerLinks: [
    { doc: 'dev-principles', label: 'Processes' },
    { doc: 'training-intro', label: 'Training' },
    // { doc: 'tools', label: 'Tools & Links' },
    { href: 'https://www.okgrow.com', label: 'Services', external: true },
    { href: 'https://www.okgrow.com/posts', label: 'Blog', external: true },
  ],
  /* path to images for header/footer */
  headerIcon: 'img/logo-white.svg',
  footerIcon: 'img/flower.png',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#5c3fb5',
    secondaryColor: '#213174',

    // secondaryColor: '#0093ff',
    // primaryColor: '#0093ff',
    // secondaryColor: '#5c3fb5',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: 'Copyright © ' + new Date().getFullYear() + ' OK GROW!',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/okgrow/guides',
  useEnglishUrl: false,
  editUrl: 'https://github.com/okgrow/guides/edit/master/docs/',
};

module.exports = siteConfig;
