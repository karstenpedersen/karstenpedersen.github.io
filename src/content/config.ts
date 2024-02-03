import { z, defineCollection, reference } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }).optional(),
        draft: z.boolean().optional(),
        publishedAt: z.date(),
        editedAt: z.date(),
        relatedPosts: z.array(reference('blog')),
    }),
});
const caseCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }),
    }),
});

export const collections = {
    'blog': blogCollection,
    'cases': caseCollection,
};
