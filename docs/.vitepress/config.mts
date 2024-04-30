import { defineConfig } from "vitepress";
import { bookSideBarConfig } from "../knowledge/book/config";

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
          collapsed: true,
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
          items: [
            {
              text: "排序类",
              collapsed: true,

              link: "/knowledge/algorithm/sorting/",
              items: [
                { text: "1.快速排序", link: "/knowledge/algorithm/sorting/quickSort" },
                { text: "2.插入排序", link: "/knowledge/algorithm/sorting/insertSort" },
                { text: "3.冒泡排序", link: "/knowledge/algorithm/sorting/bubbleSort" },
                { text: "4.选择排序", link: "/knowledge/algorithm/sorting/selectSort" },
                { text: "5.计数排序", link: "/knowledge/algorithm/sorting/countSort" },
                { text: "6.希尔排序", link: "/knowledge/algorithm/sorting/shellSort" },
                { text: "7.归并排序", link: "/knowledge/algorithm/sorting/mergeSort" },
                { text: "8.堆排序", link: "/knowledge/algorithm/sorting/maxHeapSort" },
                { text: "9.桶排序", link: "/knowledge/algorithm/sorting/bucketSort" },
                { text: "10.基数排序", link: "/knowledge/algorithm/sorting/radixSort" },
              ],
            },
            {
              text: "动态规划",
              collapsed: true,
              link: "/knowledge/algorithm/dp/",
              items: [
                { text: "70.爬楼梯", link: "/knowledge/algorithm/dp/70.爬楼梯" },
                { text: "53.最大子序列和", link: "/knowledge/algorithm/dp/53.最大子序列和" },
                { text: "198.打家劫舍", link: "/knowledge/algorithm/dp/198.打家劫舍" },
                { text: "121.买卖股票的最佳时机", link: "/knowledge/algorithm/dp/121.买卖股票的最佳时机" },
                { text: "122.买卖股票的最佳时机II", link: "/knowledge/algorithm/dp/122.买卖股票的最佳时机II" },
                { text: "118.杨辉三角", link: "/knowledge/algorithm/dp/118.杨辉三角" },
              ],
            },
            {
              text: "数组",
              link: "/knowledge/algorithm/array/",
              items: [
                { text: "48.旋转图像", link: "/knowledge/algorithm/array/48.旋转图像" },
                { text: "66.加一", link: "/knowledge/algorithm/array/66.加一" },
                { text: "189.旋转数组", link: "/knowledge/algorithm/array/189.旋转数组" },
              ],
            },
            {
              text: "字符串",
              link: "/knowledge/algorithm/string/",
              items: [
                { text: "8.字符串转整数-atoi", link: "/knowledge/algorithm/string/8.字符串转整数-atoi" },
                { text: "13.罗马数字整数", link: "/knowledge/algorithm/string/13.罗马数字整数" },
                { text: "14.最长公共前缀", link: "/knowledge/algorithm/string/14.最长公共前缀" },
                { text: "412.Fizz Buzz", link: "/knowledge/algorithm/string/412.Fizz Buzz" },
              ],
            },
            {
              text: "双指针",
              link: "/knowledge/algorithm/two-pointers/",
              items: [
                { text: "11.盛最多水的容器", link: "/knowledge/algorithm/two-pointers/11.盛最多水的容器" },
              ],
            },
            { text: "二叉树", link: "/knowledge/algorithm/adapter/" },
            { text: "链表", link: "/knowledge/algorithm/adapter/" },
            { text: "设计", link: "/knowledge/algorithm/adapter/" },
            { text: "哈希", link: "/knowledge/algorithm/adapter/" },
            { text: "位运算", link: "/knowledge/algorithm/adapter/" },
            { text: "栈", link: "/knowledge/algorithm/adapter/" },
            { text: "递归", link: "/knowledge/algorithm/adapter/" },
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
  ],
  base: "/",
});
