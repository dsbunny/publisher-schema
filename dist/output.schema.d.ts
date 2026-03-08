import * as z from "zod/v4";
export declare const PublishOutput: z.ZodObject<{
    report: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type PublishOutput = z.infer<typeof PublishOutput>;
