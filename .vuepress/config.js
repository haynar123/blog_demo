module.exports = {
  // 网站的标题
  title: "haynar",
  // 网站的描述
  description: "",
  // 指定 vuepress build 的输出目录
  dest: "public",
  // 额外的需要被注入到当前页面的 HTML <head> 中的标签
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],

  // 主题
  theme: "reco",
  themeConfig: {
    // 导航栏链接
    nav: [
      {
        text: "首页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/recoluan",
            icon: "reco-github",
          },
        ],
      },
    ],

    // 侧边栏
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin", "api"],
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },

      // 标签
      tag: {
        location: 3,
        text: "标签",
      },
    },
    // friendLink: [
    //   {
    //     title: "午后南杂",
    //     desc: "Enjoy when you can, and endure when you must.",
    //     email: "1156743527@qq.com",
    //     link: "https://www.recoluan.com",
    //   },
    //   {
    //     title: "vuepress-theme-reco",
    //     desc: "A simple and beautiful vuepress Blog & Doc theme.",
    //     avatar:
    //       "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     link: "https://vuepress-theme-reco.recoluan.com",
    //   },
    // ],

    // logo
    logo: "/logo.png",
    // 搜索框
    search: true,
    // 搜索框显示的搜索结果数量
    searchMaxSuggestions: 10,
    // 最后更新时间
    lastUpdated: "Last Updated",
    author: "haynar",
    authorAvatar: "/avtor.jpg",
    record: "xxxx",
    startYear: "2022",
  },
  markdown: {
    // 是否在每个代码块的左侧显示行号
    lineNumbers: true,
  },
};
