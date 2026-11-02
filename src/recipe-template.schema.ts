// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from 'zod';
import { dsbunnyRegistry } from '@dsbunny/zod-registry';

export namespace RecipeTemplateSchema {

	// e.g. MO for Monday, 2MO for the second Monday of the month.
	export const NDaySchema = z.object({
		day: z.enum(['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'])
			.describe('Day of the week'),
		nthOfPeriod: z.number().int().optional()
			.describe('Nth day of the period'),
	}).register(dsbunnyRegistry, {
		id: 'NDaySchema',
		description: 'Nth day schema.',
	});
	export type NDay = z.infer<typeof NDaySchema>;

	export const RecurrenceRuleTemplateSchema = z.object({
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
		byDay: z.array(NDaySchema).optional()
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
	export type RecurrenceRuleTemplate = z.infer<typeof RecurrenceRuleTemplateSchema>;

	export const EventTemplateSchema = z.object({
		event_id: z.uuid()
			.describe('Event ID, when IDs match all items excluding name and tags must be the same'),
		name: z.string().min(1).max(100)
			.describe('The name of the event'),
		tags: z.array(z.string().max(64))
			.describe('The tags of the event'),
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
		recurrenceRules: z.array(RecurrenceRuleTemplateSchema).optional()
			.describe('Array of recurrence rule templates'),
	}).register(dsbunnyRegistry, {
		id: 'EventTemplateSchema',
		description: 'Event template schema.',
	});
	export type EventTemplate = z.infer<typeof EventTemplateSchema>;

	export const RecipeTemplateSchema = z.object({
		events: z.array(EventTemplateSchema).min(1).max(1000)
			.describe('Array of event templates'),
	}).register(dsbunnyRegistry, {
		id: 'RecipeTemplateSchema',
		description: 'Recipe template schema.',
	});
	export type RecipeTemplate = z.infer<typeof RecipeTemplateSchema>;
}
