// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod/v4";
import { RecipeSchema } from "./recipe.schema.js";
export const PublishRecipeDetail = z.object({
    recipe_link: RecipeSchema.RecipeLink,
    canvas_id: z.uuid()
        .describe('Canvas ID associated with the recipe'),
    viewport_id: z.string()
        .describe('Viewport ID associated with the recipe'),
});
export const PublishOutput = z.object({
    publish_id: z.string()
        .describe('Unique identifier for the publish operation'),
    report: z.array(z.string()),
    recipe_details: z.array(PublishRecipeDetail),
})
    .describe('Publish output schema');
//# sourceMappingURL=output.schema.js.map