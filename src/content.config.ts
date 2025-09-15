import { defineCollection, z } from 'astro:content';

const thoughts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    topics: z.array(z.string()),
    summary: z.string(),
  })
});

export const collections = {
  thoughts,
};
