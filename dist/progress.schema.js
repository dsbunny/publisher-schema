// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod/v4";
export const PublishProgress = z.number().min(0).max(100)
    .describe('Publisher job progress schema');
//# sourceMappingURL=progress.schema.js.map