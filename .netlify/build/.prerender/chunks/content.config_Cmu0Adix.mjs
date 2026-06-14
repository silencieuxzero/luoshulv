import { k as defineCollection } from './content-utils_C8ZdinW7.mjs';
import { o as object, s as string, c as boolean, e as array, f as date } from './prerender_Bwfl1wrL.mjs';

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
