import * as z from "zod";
export declare const PublisherWebhookClassSchema: z.ZodEnum<{
    recipe: "recipe";
}>;
export type PublisherWebhookClass = z.infer<typeof PublisherWebhookClassSchema>;
export declare const PublisherWebhookTypeSchema: z.ZodEnum<{
    new: "new";
    change: "change";
    delete: "delete";
}>;
export type PublisherWebhookType = z.infer<typeof PublisherWebhookTypeSchema>;
export declare const PublisherWebhookRequestSchema: z.ZodObject<{
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
export type PublisherWebhookRequest = z.infer<typeof PublisherWebhookRequestSchema>;
export declare const PublisherWebhookProgressSchema: z.ZodNull;
export type PublisherWebhookProgress = z.infer<typeof PublisherWebhookProgressSchema>;
export declare const PublisherWebhookResponseSchema: z.ZodObject<{}, z.core.$strip>;
export type PublisherWebhookResponse = z.infer<typeof PublisherWebhookResponseSchema>;
