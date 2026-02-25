import * as z from "zod/v4";
export declare const CreateUUIDsRequest: z.ZodObject<{}, z.core.$strip>;
export type CreateUUIDsRequest = z.infer<typeof CreateUUIDsRequest>;
export declare const CreateUUIDsResponse: z.ZodObject<{
    uuids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type CreateUUIDsResponse = z.infer<typeof CreateUUIDsResponse>;
export declare const GetJobStatusRequest: z.ZodObject<{}, z.core.$strip>;
export type GetJobStatusRequest = z.infer<typeof GetJobStatusRequest>;
export declare const GetJobStatusErrorResponse: z.ZodObject<{
    job_id: z.ZodUUID;
    error: z.ZodString;
}, z.core.$strip>;
export type GetJobStatusErrorResponse = z.infer<typeof GetJobStatusErrorResponse>;
export declare const GetJobStatusFailedResponse: z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"failed">;
    error_code: z.ZodString;
    error_message: z.ZodString;
}, z.core.$strip>;
export type GetJobStatusFailedResponse = z.infer<typeof GetJobStatusFailedResponse>;
export declare const GetJobStatusSucceededResponse: z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"succeeded">;
    progress: z.ZodLiteral<100>;
}, z.core.$strip>;
export type GetJobStatusSucceededResponse = z.infer<typeof GetJobStatusSucceededResponse>;
export declare const GetJobStatusRejectedResponse: z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"rejected">;
    reason: z.ZodString;
}, z.core.$strip>;
export type GetJobStatusRejectedResponse = z.infer<typeof GetJobStatusRejectedResponse>;
export declare const GetJobStatusCreatedResponse: z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"created">;
    progress: z.ZodNumber;
}, z.core.$strip>;
export type GetJobStatusCreatedResponse = z.infer<typeof GetJobStatusCreatedResponse>;
export declare const GetJobStatusResponse: z.ZodUnion<[z.ZodUnion<readonly [z.ZodObject<{
    job_id: z.ZodUUID;
    error: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"failed">;
    error_code: z.ZodString;
    error_message: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"succeeded">;
    progress: z.ZodLiteral<100>;
}, z.core.$strip>, z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"rejected">;
    reason: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"created">;
    progress: z.ZodNumber;
}, z.core.$strip>]>, z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
    job_id: z.ZodUUID;
    error: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"failed">;
    error_code: z.ZodString;
    error_message: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"succeeded">;
    progress: z.ZodLiteral<100>;
}, z.core.$strip>, z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"rejected">;
    reason: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"created">;
    progress: z.ZodNumber;
}, z.core.$strip>]>>]>;
export type GetJobStatusResponse = z.infer<typeof GetJobStatusResponse>;
export declare const CreatePublishRequest: z.ZodObject<{
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
export type CreatePublishRequest = z.infer<typeof CreatePublishRequest>;
export declare const CreatePublishResponse: z.ZodObject<{
    job_id: z.ZodString;
    reference_id: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type CreatePublishResponse = z.infer<typeof CreatePublishResponse>;
export declare const PublisherRequest: z.ZodUnion<readonly [z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
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
}, z.core.$strip>]>;
export type PublisherRequest = z.infer<typeof PublisherRequest>;
export declare const PublisherResponse: z.ZodUnion<readonly [z.ZodObject<{
    uuids: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodUnion<[z.ZodUnion<readonly [z.ZodObject<{
    job_id: z.ZodUUID;
    error: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"failed">;
    error_code: z.ZodString;
    error_message: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"succeeded">;
    progress: z.ZodLiteral<100>;
}, z.core.$strip>, z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"rejected">;
    reason: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"created">;
    progress: z.ZodNumber;
}, z.core.$strip>]>, z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
    job_id: z.ZodUUID;
    error: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"failed">;
    error_code: z.ZodString;
    error_message: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"succeeded">;
    progress: z.ZodLiteral<100>;
}, z.core.$strip>, z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"rejected">;
    reason: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"created">;
    progress: z.ZodNumber;
}, z.core.$strip>]>>]>, z.ZodObject<{
    job_id: z.ZodString;
    reference_id: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>, z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
    detail: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>]>;
export type PublisherResponse = z.infer<typeof PublisherResponse>;
