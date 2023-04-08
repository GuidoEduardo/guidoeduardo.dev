import { defineCollection, z } from "astro:content";
import { books } from "../pages/wizard/[book]/_books";

const wizard = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    book: z.enum(books.map((book) => book.params.book)),
    date: z.date(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { wizard };
