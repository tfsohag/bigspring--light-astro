import { defineCollection, z } from "astro:content";

// Homepage schema
const homepage = defineCollection({
  schema: z.object({
    banner: z.object({
      title: z.string().optional(),
      content: z.string().optional(),
      image: z.string().optional(),
      button: z.object({
        label: z.string(),
        link: z.string().default("#"),
        enable: z.boolean().default(true)
      })
    }).optional(),
    feature: z.object({
      title: z.string().optional(),
      features: z.array(z.object({name: z.string().optional(), icon: z.string().optional(), content: z.string().optional()})),
    }).optional(),
    services: z.array(z.object({
      title: z.string().optional(),
      content: z.string().optional(),
      images: z.array(z.string()).optional(),
      button: z.object({
        label: z.string(),
        link: z.string().default("#"),
        enable: z.boolean().default(true)
      }).optional()
    })).optional(),
    workflow: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      image: z.string()
    }).optional(),
    call_to_action: z.object({
      title: z.string().optional(),
      content: z.string().optional(),
      image: z.string(),
      button: z.object({
        label: z.string(),
        link: z.string().default("#"),
        enable: z.boolean().default(true)
      }).optional()
    }).optional()
  }),
});

// Post collection schema
const postsCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    authors: z.array(z.string()).default(["admin"]),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// Author collection schema
const authorsCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .object({
        facebook: z.string().optional(),
        twitter: z.string().optional(),
        instagram: z.string().optional(),
      })
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  homepage: homepage,
  posts: postsCollection,
  pages: pagesCollection,
  authors: authorsCollection,
};
