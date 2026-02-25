import * as z from "zod/v4";
export declare const PublishResponse: z.ZodObject<{
    job_id: z.ZodString;
    reference_id: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type PublishResponse = z.infer<typeof PublishResponse>;
