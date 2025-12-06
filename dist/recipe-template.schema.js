// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { BaseParams } from './base-params.js';
export var RecipeTemplateSchema;
(function (RecipeTemplateSchema) {
    RecipeTemplateSchema.MediaTemplate = z.object({
        asset_id: z.uuid()
            .describe('Asset ID'),
        params: BaseParams.optional()
            .describe('Runtime parameters for the asset'),
        // WARNING: 86400 seconds is the maximum duration of a media template
        duration_seconds: z.number().min(1).max(86400)
            .describe('Duration of the asset in seconds'),
    })
        .describe('Media template');
    RecipeTemplateSchema.PlaylistTemplate = z.object({
        // WARNING: 1000 media templates is the maximum number of media templates that can be assigned to a playlist template
        media_templates: z.array(RecipeTemplateSchema.MediaTemplate).min(1).max(1000)
            .describe('Array of media templates'),
    })
        .describe('Playlist template');
    // e.g. MO for Monday, 2MO for the second Monday of the month.
    RecipeTemplateSchema.NDay = z.object({
        day: z.enum(['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'])
            .describe('Day of the week'),
        nthOfPeriod: z.number().int().optional()
            .describe('Nth day of the period'),
    })
        .describe('Nth day');
    RecipeTemplateSchema.RecurrenceRuleTemplate = z.object({
        frequency: z.enum([
            'secondly',
            'minutely',
            'hourly',
            'daily',
            'weekly',
            'monthly',
            'yearly',
        ])
            .describe('Frequency of the recurrence rule'),
        interval: z.number().int().min(1).max(1000).optional()
            .describe('Interval of the recurrence rule'),
        byDay: z.array(RecipeTemplateSchema.NDay).optional()
            .describe('Array of Nth days'),
        byMonthDay: z.array(z.number().int().min(1).max(31)).optional()
            .describe('Array of month days'),
        byMonth: z.array(z.number().int().min(1).max(12)).optional()
            .describe('Array of months'),
        bySetPosition: z.array(z.number().int()).optional()
            .describe('Array of set positions'),
        times: z.number().int().min(1).max(1000).optional()
            .describe('Number of times the recurrence rule repeats'),
        until: z.iso.datetime().optional()
            .describe('DateTime until the recurrence rule repeats'),
    })
        .describe('Recurrence rule template');
    RecipeTemplateSchema.EventTemplate = z.object({
        priority: z.number().int().min(0).max(10)
            .describe('Priority of the event template'),
        start: z.iso.datetime()
            .describe('ISO datetime of the start of the event template'),
        timeZone: z.string()
            .describe('Time zone of the event template'),
        duration: z.string()
            .describe('Duration of the event template'),
        playlist: RecipeTemplateSchema.PlaylistTemplate,
        recurrenceRules: z.array(RecipeTemplateSchema.RecurrenceRuleTemplate).optional()
            .describe('Array of recurrence rule templates'),
    })
        .describe('Event template');
    RecipeTemplateSchema.RecipeTemplate = z.object({
        name: z.string().min(1).max(100)
            .describe('The name of the recipe template'),
        tags: z.array(z.string().max(64))
            .describe('The tags of the recipe template'),
        events: z.array(RecipeTemplateSchema.EventTemplate).min(1).max(1000)
            .describe('Array of event templates'),
    })
        .describe('Recipe template');
})(RecipeTemplateSchema || (RecipeTemplateSchema = {}));
//# sourceMappingURL=recipe-template.schema.js.map