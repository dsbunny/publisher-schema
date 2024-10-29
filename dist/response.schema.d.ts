import { z } from 'zod';
export declare const PublisherResponse: z.ZodObject<{
    job_id: z.ZodString;
    reference_id: z.ZodString;
    timestamp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    reference_id: string;
    job_id: string;
    timestamp: string;
}, {
    reference_id: string;
    job_id: string;
    timestamp: string;
}>;
export type PublisherResponse = z.infer<typeof PublisherResponse>;
