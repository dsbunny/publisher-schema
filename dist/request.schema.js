// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod/v4';
import { RecipeTemplateSchema } from './recipe-template.schema.js';
export const PublisherRequest = z.object({
    tenant_id: z.uuid()
        .describe('Tenant ID'),
    reference_id: z.string().max(255)
        .describe('Reference ID of the job'),
    recipe_template: RecipeTemplateSchema.RecipeTemplate,
    // WARNING: 1000 canvas is the maximum number that can be assigned to a job
    canvas_ids: z.array(z.uuid()).min(1).max(1000)
        .describe('List of canvas IDs'),
    identity: z.string()
        .describe('Identity of the author of the job'),
})
    .describe('Publish job');
//# sourceMappingURL=request.schema.js.map