// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import {
        WebhookProgressSchema,
        WebhookRequestSchema,
        WebhookResponseSchema,
} from "@dsbunny/webhook-schema";

export const PublisherWebhookClassSchema = z.enum(['recipe'])
        .describe('The class of the webhook event related to publish operations');
export type PublisherWebhookClass = z.infer<typeof PublisherWebhookClassSchema>;

export const PublisherWebhookTypeSchema = z.enum(['new', 'change', 'delete'])
        .describe('The type of the webhook event related to publish operations');
export type PublisherWebhookType = z.infer<typeof PublisherWebhookTypeSchema>;

export const PublisherWebhookRequestSchema = WebhookRequestSchema.extend({
        class: PublisherWebhookClassSchema,
        type: PublisherWebhookTypeSchema,
})
        .describe('The schema for webhook requests sent by the publisher');
export type PublisherWebhookRequest = z.infer<typeof PublisherWebhookRequestSchema>;

export const PublisherWebhookProgressSchema = WebhookProgressSchema;
export type PublisherWebhookProgress = z.infer<typeof PublisherWebhookProgressSchema>;

export const PublisherWebhookResponseSchema = WebhookResponseSchema;
export type PublisherWebhookResponse = z.infer<typeof PublisherWebhookResponseSchema>;
