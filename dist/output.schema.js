// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod/v4";
export const PublishOutput = z.object({
    report: z.array(z.string()),
})
    .describe('Publish output schema');
//# sourceMappingURL=output.schema.js.map