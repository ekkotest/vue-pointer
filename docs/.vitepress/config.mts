import { defineConfig } from "vitepress";
import MarkdownPreview from "vite-plugin-markdown-preview";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vue-pointer",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/directive" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/directive" },
          { text: "Runtime API Examples", link: "https://tympanus.net/Development/ButtonStylesInspiration/" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  vite: {
    // plugins: [MarkdownPreview()],
  },
});
