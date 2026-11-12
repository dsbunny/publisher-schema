// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { WebhookProgressSchema, WebhookRequestSchema, WebhookResponseSchema, } from "@dsbunny/webhook-schema";
export const PublisherWebhookClassSchema = z.enum(['recipe']).register(dsbunnyRegistry, {
    id: 'PublisherWebhookClassSchema',
    description: 'Publisher webhook class schema.',
});
export const PublisherWebhookTypeSchema = z.enum(['new', 'change', 'delete']).register(dsbunnyRegistry, {
    id: 'PublisherWebhookTypeSchema',
    description: 'The type of the webhook event related to publish operations',
});
export const PublisherWebhookRequestSchema = WebhookRequestSchema.extend({
    '@type': z.literal('PublisherWebhookRequest')
        .describe('Type of the publisher webhook request object'),
    class: PublisherWebhookClassSchema,
    type: PublisherWebhookTypeSchema,
}).register(dsbunnyRegistry, {
    id: 'PublisherWebhookRequestSchema',
    description: 'The schema for webhook requests sent by the publisher',
});
export const PublisherWebhookProgressSchema = WebhookProgressSchema.extend({
    '@type': z.literal('PublisherWebhookProgress')
        .describe('Type of the publisher webhook progress object'),
}).register(dsbunnyRegistry, {
    id: 'PublisherWebhookProgressSchema',
    description: 'The schema for webhook progress sent by the publisher',
});
export const PublisherWebhookResponseSchema = WebhookResponseSchema.extend({
    '@type': z.literal('PublisherWebhookResponse')
        .describe('Type of the publisher webhook response object'),
}).register(dsbunnyRegistry, {
    id: 'PublisherWebhookResponseSchema',
    description: 'The schema for webhook responses sent by the publisher',
});
//# sourceMappingURL=webhook.schema.js.map