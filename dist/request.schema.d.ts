import * as z from "zod";
export declare const PublisherRequest: z.ZodObject<{
    tenant_id: z.ZodUUID;
    reference_id: z.ZodString;
    recipe_template: z.ZodObject<{
        events: z.ZodArray<z.ZodObject<{
            priority: z.ZodNumber;
            start: z.ZodISODateTime;
            timeZone: z.ZodString;
            duration: z.ZodString;
            playlist: z.ZodObject<{
                media_templates: z.ZodArray<z.ZodObject<{
                    asset_id: z.ZodUUID;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    duration_seconds: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                frequency: z.ZodEnum<{
                    secondly: "secondly";
                    minutely: "minutely";
                    hourly: "hourly";
                    daily: "daily";
                    weekly: "weekly";
                    monthly: "monthly";
                    yearly: "yearly";
                }>;
                interval: z.ZodOptional<z.ZodNumber>;
                byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    day: z.ZodEnum<{
                        mo: "mo";
                        tu: "tu";
                        we: "we";
                        th: "th";
                        fr: "fr";
                        sa: "sa";
                        su: "su";
                    }>;
                    nthOfPeriod: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>>;
                byMonthDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byMonth: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                times: z.ZodOptional<z.ZodNumber>;
                until: z.ZodOptional<z.ZodISODateTime>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    canvas_ids: z.ZodArray<z.ZodUUID>;
    identity: z.ZodString;
}, z.core.$strip>;
export type PublisherRequest = z.infer<typeof PublisherRequest>;
