// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from 'zod';
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { RobustTask } from "@dsbunny/robust-task-schema";
import { PublishRecipeDetailSchema } from "./output.schema.js";
import { PublishProgressSchema } from "./progress.schema.js";
import { RecipeTemplateSchema } from './recipe-template.schema.js';
import { PublishResponseSchema } from "./response.schema.js";
export const PublishTaskStateSchema = RobustTask.TaskStateSchema.extend({
    progress: PublishProgressSchema.optional(),
    result: PublishResponseSchema.optional(),
}).register(dsbunnyRegistry, {
    id: 'PublishTaskStateSchema',
    description: 'Publish task state schema.',
});
export const PublishSchema = z.object({
    publish_id: z.uuid()
        .describe('Unique identifier for the publish job'),
    tenant_id: z.uuid()
        .describe('Tenant ID associated with the publish job'),
    reference_id: z.string().max(255)
        .describe('Reference ID of the publish job'),
    recipe_template: RecipeTemplateSchema.RecipeTemplateSchema
        .describe('Recipe template used for the publish job'),
    canvas_ids: z.array(z.uuid()).min(1).max(1000)
        .describe('List of canvas IDs associated with the publish job'),
    identity: z.string()
        .describe('Identity of the author of the publish job'),
    recipe_details: z.array(PublishRecipeDetailSchema)
        .describe('Details of the recipes associated with the publish job'),
    task_publish_state: PublishTaskStateSchema,
    task_publish_status: z.enum(RobustTask.StatusValues),
    create_timestamp: z.iso.datetime() // ISO 8601
        .describe('The ISO datetime when the publish job was created'),
    modify_timestamp: z.iso.datetime()
        .describe('The ISO datetime when the publish job was last modified'),
    is_deleted: z.boolean().default(false)
        .describe('Whether the publish job is deleted'),
}).register(dsbunnyRegistry, {
    id: 'PublishSchema',
    description: 'Publish job schema.'
});
//# sourceMappingURL=publish.schema.js.map