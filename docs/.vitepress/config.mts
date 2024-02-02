import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/cloud-notes/",
  title: "cloud-notes",
  description: "一个基于vue3+typescript的云笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/markdown-examples' },
      {
        text: '关于我',
        items: [
          { text: 'Github',
            link: 'https://github.com/Jacqueline712' },
          {
            text: 'Gitee',
            link: 'https://juejin.cn/user/3131845139247960/posts'
          },
          {
            text: 'CSDN',
            link: 'https://pzfqk98jn1.feishu.cn/wiki/space/7193915595975491587?ccm_open_type=lark_wiki_spaceLink'
          }
        ]
      }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: 'Markdown 指南', link: '/markdown-examples' },
          { text: 'Runtime API 指南', link: '/api-examples' }
        ]
      },
      {
        text: 'Vite',
        items: [
          { text: '项目初始化', link: '/vite/vite-01.md' },
        ]
      },
      {
        text: 'Spring Boot',
        items: [
          { text: '项目初始化', link: '/markdown-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/likehao19/cloud-notes' }
    ]
  }
})
