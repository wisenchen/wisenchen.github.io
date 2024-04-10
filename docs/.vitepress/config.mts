import { defineConfig } from "vitepress";
import { bookSideBarConfig } from "../knowledge/book/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "玉沐丶",
  description: "记录学习过程",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "知识库", link: "/knowledge/" },
      { text: "文章", link: "/article/" },
      { text: "小游戏", link: "/games/" },
      { text: "工具集", link: "/tools/" },
    ],

    sidebar: {
      "/knowledge/": [
        {
          text: "JavaScript",
          collapsed: false,
          items: [
            { text: "一些新知识", link: "/knowledge/newKnowledge" },
            { text: "探讨性问题", link: "/knowledge/discussion" },
            { text: "如何实现一个CLI 工具", link: "/knowledge/cli" },
          ],
        },
        {
          text: "Book",
          collapsed: false,
          items: bookSideBarConfig,
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
      { async: "", type: "module", src: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.min.mjs" },
    ]
  ],
});
