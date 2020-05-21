module.exports = {
  title: 'Learn DVCS',
  description: 'Getting Started with git and GitHub',
  extendMarkdown(md) {
    md.set({ breaks: true })
    md.use(require('markdown-it-imsize'))
    md.use(require('markdown-it-checkbox'))
    md.use(require('markdown-it-kbd'))
    md.use(require('markdown-it-deflist'))
    md.use(require('markdown-it-abbr'))
    md.use(require('markdown-it-mark'))
    md.use(require('markdown-it-footnote'))
    md.use(require('markdown-it-sub'))
    md.use(require('markdown-it-sup'))
  },
  themeConfig: {
    nav: [
      { text: 'About', link: '/LOGs' },
      { text: 'Git Ready', link: '/GitReady/' },
      { text: 'Git Started', link: '/GitStarted/' },
      { text: 'Git Going', link: '/GitGoing/' },
      { text: 'Git Better', link: '/GitBetter/' },
      { text: 'GitHub', link: 'https://github.com' }
    ],
    sidebar: {
      '/GitReady/': [
        '',
        'gh',
        'install',
        '/GitStarted/'
      ],

      '/GitStarted/': [
        '',
        'background.md',
        'gh.com',
        'ghDesktop',
        'gkraken',
        'command',
        '/GitGoing/'
      ],

      '/GitGoing/': [
        '',
        'desktop',
        'kraken',
        'online',
        'cmd',
        '/GitBetter/'
      ],

      '/GitBetter/': [
        '',
        'concepts',
        'workflows',
        'pages',
        'markdown-syntax',
        'moreCmd',
        '/Help'
      ],

      // fallback
      '/': [
        'LOGs',
        'Help',
        'Background/',
        'GitBetter/markdown-syntax',
        'colophon',
        'GLOSSARY'
      ]
    }
  },
  plugins: {
    '@vuewpress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/active-header-links': { },
    '@vuepress/back-to-top': { },
    '@vuepress/last-updated': { }
  }
}
