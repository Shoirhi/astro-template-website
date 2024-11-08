// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-template-website.pages.dev/", //同じ値をconfig/constantsのENVIRONMENTに設定
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  output: "hybrid", // デフォルトでHTMLに事前レンダリング。事前レンダリングをオプトアウトするには、export const prerender = falseを追加。
  adapter: cloudflare(),
});
