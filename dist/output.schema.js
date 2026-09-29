// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod/v4";
import { RecipeSchema } from "@dsbunny/recipe-schema";
export const PublishRecipeDetailSchema = z.object({
    recipe_link: RecipeSchema.RecipeLinkSchema,
    canvas_id: z.uuid()
        .describe('Canvas ID associated with the recipe'),
    viewport_id: z.string()
        .describe('Viewport ID associated with the recipe'),
});
export const PublishOutputSchema = z.object({
    publish_id: z.string()
        .describe('Unique identifier for the publish operation'),
    report: z.array(z.string()),
    recipe_details: z.array(PublishRecipeDetailSchema),
})
    .describe('Publish output schema');
//# sourceMappingURL=output.schema.js.map