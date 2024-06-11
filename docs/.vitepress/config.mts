import { defineConfig } from "vitepress";
import { bookSideBarConfig } from "../knowledge/book/config";
import { algorithmSidebarConfig } from "../knowledge/algorithm/index";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "玉沐丶",
  description: "记录学习过程",
  appearance: "dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "知识库", link: "/knowledge/javascript/newKnowledge" },
      // { text: "文集", link: "/article/" },
      // { text: "小游戏", link: "/games/" },
      // { text: "工具集", link: "/tools/" },
    ],

    sidebar: {
      "/knowledge/": [
        {
          text: "JavaScript",
          collapsed: false,
          items: [
            { text: "一些新知识", link: "/knowledge/javascript/newKnowledge" },
            { text: "探讨性问题", link: "/knowledge/javascript/discussion" },
            { text: "如何实现一个CLI 工具", link: "/knowledge/javascript/cli" },
          ],
        },
        {
          text: "CSS",
          collapsed: false,
          items: [
            { text: "一些新知识", link: "/knowledge/css/newKnowledge" },
            { text: "粘性定位", link: "/knowledge/css/sticky" },
            { text: "Grid 布局", link: "/knowledge/css/grid" },
          ],
        },
        {
          text: "设计模式",
          collapsed: false,
          items: [
            { text: "策略模式", link: "/knowledge/design-patterns/strategy" },
            { text: "单例模式", link: "/knowledge/design-patterns/singleton" },
            { text: "发布订阅模式", link: "/knowledge/design-patterns/pubsub" },
            { text: "观察者模式", link: "/knowledge/design-patterns/observer" },
            { text: "工厂模式", link: "/knowledge/design-patterns/factory" },
            { text: "适配器模式", link: "/knowledge/design-patterns/adapter" },
            { text: "装饰器模式", link: "/knowledge/design-patterns/decorator" },
            { text: "迭代器模式", link: "/knowledge/design-patterns/iterator" },
            { text: "原型模式", link: "/knowledge/design-patterns/prototype" },
            { text: "代理模式", link: "/knowledge/design-patterns/proxy" },
          ],
        },
        {
          text: "算法",
          collapsed: false,
          items: algorithmSidebarConfig,
        },
        {
          text: "Book",
          collapsed: true,
          items: bookSideBarConfig,
        },
        {
          text: "计算机网络",
          collapsed: true,
          link: "/knowledge/network/",
          items: [
            { text: "HTTP", link: "/knowledge/network/http" },
            { text: "WebSocket", link: "/knowledge/network/websocket" },
            { text: "TCP/UDP", link: "/knowledge/network/tcp" },
            { text: "RPC", link: "/knowledge/network/rpc" },
            { text: "DNS", link: "/knowledge/network/dns" },
            { text: "跨域", link: "/knowledge/network/cors" },
          ],
        },
        {
          text: "前端安全",
          collapsed: true,
          link: "/knowledge/security/",
          items: [
            { text: "csrf", link: "/knowledge/security/csrf" },
            { text: "xss", link: "/knowledge/security/xss" }
          ],
        },
        {
          text: "TypeScript",
          collapsed: true,
          link: "/knowledge/typescript/",
          items: [],
        },
        {
          text: "NodeJS",
          collapsed: true,
          link: "/knowledge/nodejs/",
          items: [],
        },
        {
          text: "Vue",
          collapsed: true,
          link: "/knowledge/vue/",
          items: [],
        },
        {
          text: "React",
          collapsed: true,
          link: "/knowledge/react/",
          items: [],
        },
        {
          text: "Angular",
          collapsed: true,
          link: "/knowledge/angular/",
          items: [],
        },
        {
          text: "RxJS",
          collapsed: true,
          link: "/knowledge/rxjs/",
          items: [],
        },
        {
          text: "工作流",
          collapsed: true,
          items: [
            { text: "git", link: "/knowledge/workflow/git" },
            { text: "submodule", link: "/knowledge/workflow/submodule" },
            { text: "monorepo", link: "/knowledge/javascript/discussion" },
            { text: "微前端", link: "/knowledge/javascript/cli" },
            { text: "vite", link: "/knowledge/javascript/cli" },
            { text: "webpack", link: "/knowledge/javascript/cli" },
          ],
        },
        {
          text: "杂记",
          collapsed: false,
          items: [
            {
              text: "css",
              collapsed: false,
              items: [
                { text: "css 企鹅", link: "/knowledge/other/css/penguin" },
                { text: "css 水杯", link: "/knowledge/other/css/cup" },
              ],
            },
          ],
        },
      ],
      "/article/": [
        {
          text: "算法",
          collapsed: false,
          items: [
            { text: "两数之和", link: "/article/2sum" },
            { text: "三数之和", link: "/article/3sum" },
          ],
        },
        {
          text: "服务器",
          collapsed: false,
          items: [
            { text: "linux 基本命令", link: "/article/linux" },
            { text: "docker 基本命令", link: "/article/docker" },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/wisenchen" }],
  },
  head: [
    [
      "script",
      {
        async: "",
        type: "module",
        src: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.min.mjs",
      },
    ],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]
  ],
  base: "/",
});
