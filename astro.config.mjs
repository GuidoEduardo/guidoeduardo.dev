import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import aws from "astro-sst/lambda";

export default defineConfig({
  output: "server",
  adapter: aws(),
  integrations: [mdx(), sitemap(), tailwind()],
});
