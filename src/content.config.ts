import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // 최신 로더 필수!

const blog = defineCollection({
    // v6 방식: 폴더를 감시하는 로더를 직접 정의합니다.
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
    schema: z.object({
        title_ko: z.string(),
        title_en: z.string().optional(),
        title_ru: z.string().optional(),
        pubDate: z.coerce.date(), 
        categories: z.array(z.string()),
        has_ko: z.boolean().default(true),
        has_en: z.boolean().default(false),
        has_ru: z.boolean().default(false),
    }),
});

export const collections = { blog };