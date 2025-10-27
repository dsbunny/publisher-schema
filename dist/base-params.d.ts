import * as z from "zod";
export declare const BaseParams: z.ZodRecord<z.ZodString, z.ZodAny>;
export type BaseParams = z.infer<typeof BaseParams>;
