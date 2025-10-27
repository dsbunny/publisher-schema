// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
export const BaseParams = z.record(z.string(), z.any())
    .describe('Runtime parameters for an asset');
//# sourceMappingURL=base-params.js.map