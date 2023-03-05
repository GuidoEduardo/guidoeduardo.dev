import { defineConfig } from "astro/config";
import aws from "astro-sst/lambda";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

export default defineConfig({
  output: "server",
  integrations: [sitemap(), tailwind(), react()],
  adapter: aws(),
});
