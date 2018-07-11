module.exports = {
  title: 'Learn DVCS',
  description: 'Getting Started with git on GitHub',
  markdown: {
    config: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-imsize'))
      md.use(require('markdown-it-mermaid').default) // leave default options
      md.use(require('markdown-it-checkbox'))
      md.use(require('markdown-it-kbd'))
      md.use(require('markdown-it-deflist'))
      md.use(require('markdown-it-abbr'))
      md.use(require('markdown-it-mark'))
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-sub'))
      md.use(require('markdown-it-sup'))
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
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
        'install'
      ],

      '/GitStarted/': [
        '',
        'gh.com',
        'ghDesktop',
        'command'
      ],

      '/GitGoing/': [
        '',
        'desktop',
        'desktopCommit',
        'desktopCommit',
        'online',
        'cmd'
      ],

      '/GitBetter/': [
        '',
        'concepts',
        'workflows',
        'pages',
        'markdown-syntax',
        'moreCmd'
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
  }
}