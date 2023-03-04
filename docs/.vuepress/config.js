const nav = require("./config/nav.js");
const sidebar = require("./config/sidebar.js");

module.exports = {
    title: "C-SAT 知识库",
    description: "C-SAT 知识库",
    dest: "./docs/dist",
    // 如果不想将文档的小标题移到右侧，请去掉plugins中的vuepress-theme-vdoing，注释掉theme: "vdoing",
    plugins: ["demo-container", "vuepress-theme-vdoing"],
    theme: "vdoing",
    base: process.env.NODE_ENV === 'production' ? '/c-sat-wiki/dist/' : '/',
    themeConfig: {
        logo: "https://vuejs.org/images/logo.png",
        // 最近更新栏
        updateBar: {
            showToArticle: false, // 显示到文章页底部，默认true
        },
        sidebar: "structuring",
        category: false,
        tag: false,
        archive: false,
        nav,
        sidebar,
    },
};