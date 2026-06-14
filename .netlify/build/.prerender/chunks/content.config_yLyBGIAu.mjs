import { k as defineCollection } from './content-utils_D8KsiDKd.mjs';
import { o as object, s as string, c as boolean, e as array, f as date } from './prerender_3I2M0cI9.mjs';

defineCollection({
  schema: object({
    title: string(),
    published: date(),
    updated: date().optional(),
    draft: boolean().optional().default(false),
    description: string().optional().default(""),
    image: string().optional().default(""),
    tags: array(string()).optional().default([]),
    category: string().optional().nullable().default(""),
    lang: string().optional().default(""),
    pinned: boolean().optional().default(false),
    /* For internal use */
    prevTitle: string().default(""),
    prevSlug: string().default(""),
    nextTitle: string().default(""),
    nextSlug: string().default("")
  })
});
defineCollection({
  schema: object({})
});
