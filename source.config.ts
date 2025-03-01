import { defineConfig, defineDocs, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";

export const docs = defineDocs({
	docs: {
		async: true,
		schema: frontmatterSchema.extend({
			preview: z.string().optional(),
			index: z.boolean().default(false),
			/**
			 * API routes only
			 */
			method: z.string().optional(),
		}),
	},
});

export default defineConfig({
	mdxOptions: {
		// MDX options
	},
});
