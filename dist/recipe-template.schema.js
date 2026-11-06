// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from 'zod';
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
export var RecipeTemplateSchema;
(function (RecipeTemplateSchema_1) {
    // e.g. MO for Monday, 2MO for the second Monday of the month.
    RecipeTemplateSchema_1.NDaySchema = z.object({
        day: z.enum(['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'])
            .describe('Day of the week'),
        nthOfPeriod: z.number().int().optional()
            .describe('Nth day of the period'),
    }).register(dsbunnyRegistry, {
        id: 'NDaySchema',
        description: 'Nth day schema.',
    });
    RecipeTemplateSchema_1.RecurrenceRuleTemplateSchema = z.object({
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
        byDay: z.array(RecipeTemplateSchema_1.NDaySchema).optional()
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
    }).register(dsbunnyRegistry, {
        id: 'RecurrenceRuleTemplateSchema',
        description: 'Recurrence rule template schema.',
    });
    RecipeTemplateSchema_1.EventTemplateSchema = z.object({
        event_id: z.uuid()
            .describe('Event ID, when IDs match all items excluding name and tags must be the same'),
        priority: z.number().int().min(0).max(10)
            .describe('Priority of the event'),
        start: z.iso.datetime()
            .describe('ISO datetime of the start of the event'),
        timeZone: z.string()
            .describe('Time zone of the event'),
        duration: z.string()
            .describe('Duration of the event'),
        playlist_id: z.uuid()
            .describe('Playlist ID'),
        recurrenceRules: z.array(RecipeTemplateSchema_1.RecurrenceRuleTemplateSchema).optional()
            .describe('Array of recurrence rule templates'),
    }).register(dsbunnyRegistry, {
        id: 'EventTemplateSchema',
        description: 'Event template schema.',
    });
    RecipeTemplateSchema_1.RecipeTemplateSchema = z.object({
        events: z.array(RecipeTemplateSchema_1.EventTemplateSchema).min(1).max(1000)
            .describe('Array of event templates'),
    }).register(dsbunnyRegistry, {
        id: 'RecipeTemplateSchema',
        description: 'Recipe template schema.',
    });
})(RecipeTemplateSchema || (RecipeTemplateSchema = {}));
//# sourceMappingURL=recipe-template.schema.js.map