// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod';
export const PublisherResponse = z.object({
    // A number prefixed with "F/".
    job_id: z.string().regex(/^F\/\d+$/)
        .describe('Unique identifier for this job, can be used to query the status of the job.'),
    reference_id: z.string().max(255)
        .describe('User provided reference identifier.'),
    timestamp: z.string().datetime()
        .describe('Timestamp of the job.'),
})
    .describe('Publisher job output');
//# sourceMappingURL=response.schema.js.map