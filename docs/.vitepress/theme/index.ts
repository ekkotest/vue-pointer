// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";
import "./override.css";
// Don't remove this file, because it registers the demo components.
import VuePoniter from "../../../src/index";
const modules = import.meta.glob(["../../components/*.vue"]);

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    // app.use(elementplus);
    for (let i in modules) {
      let name = /(.*)?\/(.*).vue/.exec(i);
      // if (name) app.component(name[2], modules[i].default);
    }
    app.component("Directive", () => import("../../components/Directive.vue"));
    app.directive("pointer", VuePoniter);
  },
};
