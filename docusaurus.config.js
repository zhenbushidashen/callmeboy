module.exports = {
  title: 'CallMeBoy‘s HOME',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/blog/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'zhenbushidashen', 
  projectName: 'zhenbushidashen Home', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'note',
          label: '笔记',
          position: 'left',
        },
        {to: 'css', label: 'css特效', position: 'left'},
        {to: 'blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/zhenbushidashen',
          label: 'GitHub',
          position: 'right',
        },
         {href: 'https://gitee.com/callmeboy',
          label: 'Gitee',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Note',
          items: [
            {
              label: 'Style Guide',
              to: 'note/',
            },
          ],
        },

      ],
      copyright: `Copyright © ${new Date().getFullYear()} CallMeBoy loves 01`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'js/array-mock',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/zhenbushidashen/callmeboy/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/zhenbushidashen/callmeboy/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
