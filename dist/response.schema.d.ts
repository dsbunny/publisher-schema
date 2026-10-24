import * as z from 'zod';
export declare const PublishResponseSchema: z.ZodObject<{
    publish_id: z.ZodUUID;
    reference_id: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type PublishResponse = z.infer<typeof PublishResponseSchema>;
