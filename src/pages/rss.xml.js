import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function get(context) {
  const pages = await getCollection("wizard");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./*.{md,mdx}")),
  });
}
