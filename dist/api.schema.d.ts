import * as z from "zod";
export declare const ErrorResponse: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
    detail: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type ErrorResponse = z.infer<typeof ErrorResponse>;
export declare const WebHookRequest: z.ZodObject<{
    ref_id: z.ZodString;
    class: z.ZodString;
}, z.core.$strip>;
export type WebHookRequest = z.infer<typeof WebHookRequest>;
export declare const WebHookResponse: z.ZodObject<{}, z.core.$strip>;
export type WebHookResponse = z.infer<typeof WebHookResponse>;
export declare const CreateUUIDsRequest: z.ZodObject<{}, z.core.$strip>;
export type CreateUUIDsRequest = z.infer<typeof CreateUUIDsRequest>;
export declare const CreateUUIDsResponse: z.ZodObject<{
    uuids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type CreateUUIDsResponse = z.infer<typeof CreateUUIDsResponse>;
export declare const GetJobStatusRequest: z.ZodObject<{}, z.core.$strip>;
export type GetJobStatusRequest = z.infer<typeof GetJobStatusRequest>;
export declare const GetJobStatusResponse: z.ZodUnion<[z.ZodObject<{
    status: z.ZodEnum<{
        created: "created";
        succeeded: "succeeded";
        failed: "failed";
        retrying: "retrying";
    }>;
    progress: z.ZodNumber;
}, z.core.$strip>, z.ZodArray<z.ZodUnion<[z.ZodObject<{
    error: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    status: z.ZodEnum<{
        created: "created";
        succeeded: "succeeded";
        failed: "failed";
        retrying: "retrying";
    }>;
    progress: z.ZodNumber;
}, z.core.$strip>]>>]>;
export type GetJobStatusResponse = z.infer<typeof GetJobStatusResponse>;
export declare const CreatePublisherRequest: z.ZodObject<{
    tenant_id: z.ZodUUID;
    reference_id: z.ZodString;
    recipe_template: z.ZodObject<{
        name: z.ZodString;
        tags: z.ZodArray<z.ZodString>;
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
export type CreatePublisherRequest = z.infer<typeof CreatePublisherRequest>;
export declare const CreatePublisherResponse: z.ZodObject<{
    job_id: z.ZodString;
    reference_id: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type CreatePublisherResponse = z.infer<typeof CreatePublisherResponse>;
