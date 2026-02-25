// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { WebhookProgress, WebhookRequest, WebhookResponse, } from "@dsbunny/webhook-schema";
export const PublisherWebhookClass = z.enum(['recipe'])
    .describe('The class of the webhook event related to publish operations');
export const PublisherWebhookType = z.enum(['new', 'change', 'delete'])
    .describe('The type of the webhook event related to publish operations');
export const PublisherWebhookRequest = WebhookRequest.extend({
    class: PublisherWebhookClass,
    type: PublisherWebhookType,
})
    .describe('The schema for webhook requests sent by the publisher');
export const PublisherWebhookProgress = WebhookProgress;
export const PublisherWebhookResponse = WebhookResponse;
//# sourceMappingURL=webhook.schema.js.map