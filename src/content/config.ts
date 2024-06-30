import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    draft: z.boolean().default(false).optional(),
    publishedAt: z.date(),
    editedAt: z.date(),
    relatedPosts: z.array(reference("blog")).optional(),
  }),
});

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    website: z.string().url().optional(),
    sourceCode: z.string().url().optional(),
    draft: z.boolean().default(false).optional(),
    period: z.object({
      start: z.date(),
      end: z.date().optional()
    }).optional(),
    relatedWork: z.array(reference("work")).optional(),
  }),
});

const socialsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    icon: z.string()
  })
});

const workCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    jobTitle: z.string(),
    companyUrl: z.string().url(),
    period: z.object({
      start: z.string(),
      end: z.string().optional()
    }),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
  })
});

const educationCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    period: z.object({
      start: z.string(),
      end: z.string().optional()
    }),
  })
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
  socials: socialsCollection,
  work: workCollection,
  education: educationCollection,
};
