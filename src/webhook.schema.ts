// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import {
        WebhookProgress,
        WebhookRequest,
        WebhookResponse,
} from "@dsbunny/webhook-schema";

export const PublisherWebhookClass = z.enum(['recipe'])
        .describe('The class of the webhook event related to publish operations');
export type PublisherWebhookClass = z.infer<typeof PublisherWebhookClass>;

export const PublisherWebhookType = z.enum(['new', 'change', 'delete'])
        .describe('The type of the webhook event related to publish operations');
export type PublisherWebhookType = z.infer<typeof PublisherWebhookType>;

export const PublisherWebhookRequest = WebhookRequest.extend({
        class: PublisherWebhookClass,
        type: PublisherWebhookType,
})
        .describe('The schema for webhook requests sent by the publisher');
export type PublisherWebhookRequest = z.infer<typeof PublisherWebhookRequest>;

export const PublisherWebhookProgress = WebhookProgress;
export type PublisherWebhookProgress = z.infer<typeof PublisherWebhookProgress>;

export const PublisherWebhookResponse = WebhookResponse;
export type PublisherWebhookResponse = z.infer<typeof PublisherWebhookResponse>;
