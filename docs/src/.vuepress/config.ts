import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Cloud Corners Programmer",
      description: "Making cloud programming fun",
    },
  },

  theme,

  shouldPrefetch: false,
});
