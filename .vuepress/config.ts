import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: process.env.NODE_ENV === 'production' ? '/philosophy/' : '/',
  title: "Know thyself",
  description: "To Sophia",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    logo: "/logo.png",
    author: "yshen",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "philosophy",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/philosopher/": [
        '苏格拉底',
        '柏拉图',
        '亚里士多德',
        '伊壁鸠鲁',
        '笛卡尔',
        '斯宾诺莎',
        '洛克',
        '休谟',
        '贝克莱',
        '康德',
        '边沁',
        '黑格尔',
        '谢林',
        '叔本华',
        '穆勒',
        '祁克果',
        '马克思',
        '叔本华',
        '尼采',
        '维特根斯坦',
        '萨特',
        '诺齐克'
      ]
    },
    navbar: [
      { text: "Home", link: "/" },
      { text: "Overview", link: "/docs/overview"},
      { text: "Philosopher", link: "/docs/philosopher/苏格拉底" }
    ],
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
