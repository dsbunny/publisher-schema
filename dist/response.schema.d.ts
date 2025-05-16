import { z } from 'zod/v4';
export declare const PublisherResponse: z.ZodObject<{
    job_id: z.ZodString;
    reference_id: z.ZodString;
    timestamp: z.iso.ZodISODateTime;
}, {}, {}>;
export type PublisherResponse = z.infer<typeof PublisherResponse>;
