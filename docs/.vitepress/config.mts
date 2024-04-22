import { defineConfig } from "vitepress";
import { bookSideBarConfig } from "../knowledge/book/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "玉沐丶",
  description: "记录学习过程",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "知识库", link: "/knowledge/javascript/newKnowledge" },
      { text: "文集", link: "/article/" },
      { text: "小游戏", link: "/games/" },
      { text: "工具集", link: "/tools/" },
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
            {
              text: "装饰器模式",
              link: "/knowledge/design-patterns/decorator",
            },
            { text: "迭代器模式", link: "/knowledge/design-patterns/iterator" },
            { text: "原型模式", link: "/knowledge/design-patterns/prototype" },
            { text: "代理模式", link: "/knowledge/design-patterns/proxy" },
          ],
        },
        {
          text: "算法",
          collapsed: false,
          items: [
            {
              text: "排序类",
              collapsed: false,
              link: "/knowledge/algorithm/",
              items: [
                {
                  text: "1.快速排序",
                  link: "/knowledge/algorithm/quickSort",
                },
                {
                  text: "2.插入排序",
                  link: "/knowledge/algorithm/insertSort",
                },
                {
                  text: "3.冒泡排序",
                  link: "/knowledge/algorithm/bubbleSort",
                },
                {
                  text: "4.选择排序",
                  link: "/knowledge/algorithm/selectSort",
                },
                {
                  text: "5.计数排序",
                  link: "/knowledge/algorithm/countSort",
                },
                {
                  text: "6.希尔排序",
                  link: "/knowledge/algorithm/shellSort",
                },
                {
                  text: "7.归并排序",
                  link: "/knowledge/algorithm/mergeSort",
                },
                {
                  text: "8.堆排序",
                  link: "/knowledge/algorithm/maxHeapSort",
                },
                {
                  text: "9.桶排序",
                  link: "/knowledge/algorithm/bucketSort",
                },
                {
                  text: "10.基数排序",
                  link: "/knowledge/algorithm/radixSort",
                },
              ],
            },
            { text: "动态规划", link: "/knowledge/algorithm/singleton" },
            { text: "数组", link: "/knowledge/algorithm/pubsub" },
            { text: "字符串", link: "/knowledge/algorithm/observer" },
            { text: "工厂模式", link: "/knowledge/algorithm/factory" },
            { text: "双指针", link: "/knowledge/algorithm/adapter" },
            { text: "二叉树", link: "/knowledge/algorithm/adapter" },
            { text: "链表", link: "/knowledge/algorithm/adapter" },
            { text: "设计", link: "/knowledge/algorithm/adapter" },
            { text: "哈希", link: "/knowledge/algorithm/adapter" },
            { text: "位运算", link: "/knowledge/algorithm/adapter" },
            { text: "栈", link: "/knowledge/algorithm/adapter" },
            { text: "递归", link: "/knowledge/algorithm/adapter" },
            {
              text: "装饰器模式",
              link: "/knowledge/design-patterns/decorator",
            },
            { text: "迭代器模式", link: "/knowledge/design-patterns/iterator" },
            { text: "原型模式", link: "/knowledge/design-patterns/prototype" },
            { text: "代理模式", link: "/knowledge/design-patterns/proxy" },
          ],
        },
        {
          text: "Book",
          collapsed: false,
          items: bookSideBarConfig,
        },
        {
          text: "工作流",
          collapsed: false,
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
                {
                  text: "css 企鹅",
                  link: "/knowledge/other/css/penguin",
                },
                {
                  text: "css 水杯",
                  link: "/knowledge/other/css/cup",
                },
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
  ],
  base: "/",
});
