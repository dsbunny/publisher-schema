// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from 'zod';
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { RecipeSchema } from "@dsbunny/recipe-schema";

export const PublishRecipeDetailSchema = z.object({
        recipe_link: RecipeSchema.RecipeLinkSchema,
        canvas_id: z.uuid()
                .describe('Canvas ID associated with the recipe'),
        viewport_id: z.string()
                .describe('Viewport ID associated with the recipe'),
}).register(dsbunnyRegistry, {
	id: 'PublishRecipeDetailSchema',
	description: 'Publish Recipe Detail schema.',
});
export type PublishRecipeDetail = z.infer<typeof PublishRecipeDetailSchema>;

export const PublishOutputSchema = z.object({
        publish_id: z.uuid()
                .describe('Unique identifier for the publish operation'),
        report: z.array(z.string()),
        recipe_details: z.array(PublishRecipeDetailSchema),
}).register(dsbunnyRegistry, {
	id: 'PublishOutputSchema',
	description: 'Publish output schema.',
});
export type PublishOutput = z.infer<typeof PublishOutputSchema>;
