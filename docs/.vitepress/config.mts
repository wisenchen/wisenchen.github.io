import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wisen blog",
  description: "记录学习过程",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '知识库', link: '/knowledge/' },
      { text: '文章', link: '/article/' },
      { text: '小游戏', link: '/games/' },
      { text: '工具集', link: '/tools/' },
    ],

    sidebar: {
      '/knowledge/': [
        {
          text: 'JavaScript',
          collapsed: false,
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        },
        {
          text: 'Book',
          collapsed: false,
          items: [
            { text: '你不知道的JavaScript（上卷）', link: '/book/ydkjs1' },
            { text: '你不知道的JavaScript（中卷）', link: '/book/ydkjs2' },
          ]
        
        }
      ],
      '/article/': [
        {
          text: '算法',
          collapsed: false,
          items: [
            { text: '两数之和', link: '/article/2sum' },
            { text: '三叔之和', link: '/article/3sum' }
          ]
        },
        {
          text: '服务器',
          collapsed: false,
          items: [
            { text: 'linux 基本命令', link: '/article/linux' },
            { text: 'docker 基本命令', link: '/article/docker' },
          ]
        
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wisenchen' }
    ]
  },
})
