// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod/v4";
import { RobustTask } from "@dsbunny/robust-task-schema";
import { jsonSafeParser } from './json-safe-parser.js';
import { PublishRecipeDetail } from "./output.schema.js";
import { PublishProgress } from "./progress.schema.js";
import { RecipeTemplateSchema } from './recipe-template.schema.js';
import { PublishResponse } from "./response.schema.js";
import { sqliteDateSchema } from './sqlite-date.schema.js';
export const PublishTaskStateSchema = RobustTask.TaskStateSchema.extend({
    progress: PublishProgress.optional(),
    result: PublishResponse.optional(),
})
    .describe('The state of the publish task');
export const Publish = z.object({
    publish_id: z.uuid()
        .describe('Unique identifier for the publish job'),
    tenant_id: z.uuid()
        .describe('Tenant ID associated with the publish job'),
    reference_id: z.string().max(255)
        .describe('Reference ID of the publish job'),
    recipe_template: RecipeTemplateSchema.RecipeTemplate
        .describe('Recipe template used for the publish job'),
    canvas_ids: z.array(z.uuid()).min(1).max(1000)
        .describe('List of canvas IDs associated with the publish job'),
    identity: z.string()
        .describe('Identity of the author of the publish job'),
    recipe_details: z.array(PublishRecipeDetail)
        .describe('Details of the recipes associated with the publish job'),
    task_publish_state: PublishTaskStateSchema,
    task_publish_status: z.enum(RobustTask.StatusValues),
    create_timestamp: z.iso.datetime() // ISO 8601
        .describe('The ISO datetime when the publish job was created'),
    modify_timestamp: z.iso.datetime()
        .describe('The ISO datetime when the publish job was last modified'),
    is_deleted: z.boolean().default(false)
        .describe('Whether the publish job is deleted'),
});
export const DbDtoFromPublish = Publish.transform((publish) => {
    return {
        ...publish,
        recipe_details: JSON.stringify(publish.recipe_details),
        task_publish_state: JSON.stringify(publish.task_publish_state),
    };
});
export const DbDtoToPublish = z.object({
    publish_id: z.uuid(),
    tenant_id: z.uuid(),
    reference_id: z.string().max(255),
    recipe_template: z.string().max(65535).nullable(),
    canvas_ids: z.string().max(65535).nullable(), // Stored as JSON string
    identity: z.string().max(255),
    recipe_details: z.string().max(65535).nullable(), // Stored as JSON string
    task_publish_state: z.string().max(65535).nullable(), // Stored as JSON string
    task_publish_status: z.enum(RobustTask.StatusValues),
    create_timestamp: sqliteDateSchema,
    modify_timestamp: sqliteDateSchema,
    is_deleted: z.boolean(),
})
    .transform((dto, ctx) => {
    const recipe_template_result = jsonSafeParser(RecipeTemplateSchema.RecipeTemplate).safeParse(dto.recipe_template);
    if (!recipe_template_result.success) {
        ctx.addIssue({
            code: "custom",
            message: `Invalid recipe_template: ${z.prettifyError(recipe_template_result.error)}`,
            fatal: true,
        });
        throw z.NEVER;
    }
    const canvas_ids_result = !dto.canvas_ids
        ? { success: true, data: [], error: undefined }
        : jsonSafeParser(z.array(z.uuid()).min(1).max(1000)).safeParse(dto.canvas_ids);
    if (!canvas_ids_result.success) {
        ctx.addIssue({
            code: "custom",
            message: `Invalid canvas_ids: ${z.prettifyError(canvas_ids_result.error)}`,
            fatal: true,
        });
        throw z.NEVER;
    }
    const recipe_details_result = !dto.recipe_details
        ? { success: true, data: [], error: undefined }
        : jsonSafeParser(z.array(PublishRecipeDetail)).safeParse(dto.recipe_details);
    if (!recipe_details_result.success) {
        ctx.addIssue({
            code: "custom",
            message: `Invalid recipe_details: ${z.prettifyError(recipe_details_result.error)}`,
            fatal: true,
        });
        throw z.NEVER;
    }
    const task_publish_state_result = jsonSafeParser(PublishTaskStateSchema).safeParse(dto.task_publish_state);
    if (!task_publish_state_result.success) {
        ctx.addIssue({
            code: "custom",
            message: `Invalid task_publish_state: ${z.prettifyError(task_publish_state_result.error)}`,
            fatal: true,
        });
        throw z.NEVER;
    }
    return {
        ...dto,
        recipe_template: recipe_template_result.data,
        canvas_ids: canvas_ids_result.data,
        recipe_details: recipe_details_result.data,
        task_publish_state: task_publish_state_result.data,
        is_deleted: Boolean(dto.is_deleted),
    };
});
//# sourceMappingURL=publish.schema.js.map