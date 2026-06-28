// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod/v4";
export const PublishResponse = z.object({
    publish_id: z.uuid()
        .describe('Unique identifier for this publish, can be used to query the status of the publish.'),
    reference_id: z.string().max(255)
        .describe('User provided reference identifier.'),
    timestamp: z.iso.datetime()
        .describe('ISO datetime of the publish.'),
})
    .describe('Publisher publish output');
//# sourceMappingURL=response.schema.js.map