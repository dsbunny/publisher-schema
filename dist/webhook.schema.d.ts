import * as z from "zod";
export declare const PublisherWebhookClass: z.ZodEnum<{
    recipe: "recipe";
}>;
export type PublisherWebhookClass = z.infer<typeof PublisherWebhookClass>;
export declare const PublisherWebhookType: z.ZodEnum<{
    new: "new";
    change: "change";
    delete: "delete";
}>;
export type PublisherWebhookType = z.infer<typeof PublisherWebhookType>;
export declare const PublisherWebhookRequest: z.ZodObject<{
    tenant_id: z.ZodUUID;
    ref_id: z.ZodUUID;
    trace_id: z.ZodOptional<z.ZodString>;
    class: z.ZodEnum<{
        recipe: "recipe";
    }>;
    type: z.ZodEnum<{
        new: "new";
        change: "change";
        delete: "delete";
    }>;
}, z.core.$strip>;
export type PublisherWebhookRequest = z.infer<typeof PublisherWebhookRequest>;
export declare const PublisherWebhookProgress: z.ZodNull;
export type PublisherWebhookProgress = z.infer<typeof PublisherWebhookProgress>;
export declare const PublisherWebhookResponse: z.ZodObject<{}, z.core.$strip>;
export type PublisherWebhookResponse = z.infer<typeof PublisherWebhookResponse>;
