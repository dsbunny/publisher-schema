import * as z from "zod/v4";
export declare const CreateUUIDsRequest: z.ZodObject<{}, z.core.$strip>;
export type CreateUUIDsRequest = z.infer<typeof CreateUUIDsRequest>;
export declare const CreateUUIDsResponse: z.ZodObject<{
    uuids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type CreateUUIDsResponse = z.infer<typeof CreateUUIDsResponse>;
export declare const GetPublishStatusRequest: z.ZodObject<{}, z.core.$strip>;
export type GetPublishStatusRequest = z.infer<typeof GetPublishStatusRequest>;
export declare const GetPublishStatusErrorResponse: z.ZodObject<{
    publish_id: z.ZodString;
    error: z.ZodString;
}, z.core.$strip>;
export type GetPublishStatusErrorResponse = z.infer<typeof GetPublishStatusErrorResponse>;
export declare const GetPublishStatusFailedResponse: z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"failed">;
    error_code: z.ZodString;
    error_message: z.ZodString;
}, z.core.$strip>;
export type GetPublishStatusFailedResponse = z.infer<typeof GetPublishStatusFailedResponse>;
export declare const GetPublishStatusSucceededResponse: z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"succeeded">;
    progress: z.ZodLiteral<100>;
}, z.core.$strip>;
export type GetPublishStatusSucceededResponse = z.infer<typeof GetPublishStatusSucceededResponse>;
export declare const GetPublishStatusRejectedResponse: z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"rejected">;
    reason: z.ZodString;
}, z.core.$strip>;
export type GetPublishStatusRejectedResponse = z.infer<typeof GetPublishStatusRejectedResponse>;
export declare const GetPublishStatusCreatedResponse: z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"created">;
    progress: z.ZodNumber;
}, z.core.$strip>;
export type GetPublishStatusCreatedResponse = z.infer<typeof GetPublishStatusCreatedResponse>;
export declare const GetPublishStatusResponse: z.ZodUnion<[z.ZodUnion<readonly [z.ZodObject<{
    publish_id: z.ZodString;
    error: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"failed">;
    error_code: z.ZodString;
    error_message: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"succeeded">;
    progress: z.ZodLiteral<100>;
}, z.core.$strip>, z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"rejected">;
    reason: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"created">;
    progress: z.ZodNumber;
}, z.core.$strip>]>, z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
    publish_id: z.ZodString;
    error: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"failed">;
    error_code: z.ZodString;
    error_message: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"succeeded">;
    progress: z.ZodLiteral<100>;
}, z.core.$strip>, z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"rejected">;
    reason: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"created">;
    progress: z.ZodNumber;
}, z.core.$strip>]>>]>;
export type GetPublishStatusResponse = z.infer<typeof GetPublishStatusResponse>;
export declare const CreatePublishRequest: z.ZodObject<{
    tenant_id: z.ZodUUID;
    reference_id: z.ZodString;
    recipe_template: z.ZodObject<{
        events: z.ZodArray<z.ZodObject<{
            event_id: z.ZodUUID;
            name: z.ZodString;
            tags: z.ZodArray<z.ZodString>;
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
    publish_id: z.ZodUUID;
    reference_id: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type CreatePublishResponse = z.infer<typeof CreatePublishResponse>;
export declare const ListPublishRequest: z.ZodObject<{}, z.core.$strip>;
export type ListPublishRequest = z.infer<typeof ListPublishRequest>;
export declare const ListPublishResponse: z.ZodObject<{
    publishes: z.ZodArray<z.ZodObject<{
        publish_id: z.ZodUUID;
        tenant_id: z.ZodUUID;
        reference_id: z.ZodString;
        recipe_template: z.ZodObject<{
            events: z.ZodArray<z.ZodObject<{
                event_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
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
        recipe_details: z.ZodArray<z.ZodObject<{
            recipe_link: z.ZodObject<{
                "@type": z.ZodLiteral<"RecipeLink">;
                recipe_id: z.ZodUUID;
                asset_id: z.ZodUUID;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>;
            canvas_id: z.ZodUUID;
            viewport_id: z.ZodString;
        }, z.core.$strip>>;
        task_publish_state: z.ZodObject<{
            status: z.ZodEnum<{
                pending: "pending";
                running: "running";
                succeeded: "succeeded";
                failed: "failed";
                rejected: "rejected";
                "blocked-dependency": "blocked-dependency";
                "blocked-input": "blocked-input";
                skipped: "skipped";
                "pending-paused": "pending-paused";
                "blocked-dependency-paused": "blocked-dependency-paused";
                "blocked-input-paused": "blocked-input-paused";
            }>;
            createdAt: z.ZodISODateTime;
            startedAt: z.ZodOptional<z.ZodISODateTime>;
            updatedAt: z.ZodOptional<z.ZodISODateTime>;
            finishedAt: z.ZodOptional<z.ZodISODateTime>;
            attempts: z.ZodNumber;
            runtimeToken: z.ZodOptional<z.ZodString>;
            data: z.ZodOptional<z.ZodUnknown>;
            config: z.ZodOptional<z.ZodObject<{
                timeoutMs: z.ZodNumber;
                maxAttempts: z.ZodNumber;
            }, z.core.$strip>>;
            error: z.ZodOptional<z.ZodObject<{
                message: z.ZodString;
                code: z.ZodOptional<z.ZodString>;
                stack: z.ZodOptional<z.ZodString>;
                timestamp: z.ZodISODateTime;
            }, z.core.$strip>>;
            rejection: z.ZodOptional<z.ZodObject<{
                reason: z.ZodString;
                issues: z.ZodOptional<z.ZodArray<z.ZodString>>;
                timestamp: z.ZodISODateTime;
            }, z.core.$strip>>;
            progress: z.ZodOptional<z.ZodNumber>;
            result: z.ZodOptional<z.ZodObject<{
                publish_id: z.ZodUUID;
                reference_id: z.ZodString;
                timestamp: z.ZodISODateTime;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        task_publish_status: z.ZodEnum<{
            pending: "pending";
            running: "running";
            succeeded: "succeeded";
            failed: "failed";
            rejected: "rejected";
            "blocked-dependency": "blocked-dependency";
            "blocked-input": "blocked-input";
            skipped: "skipped";
            "pending-paused": "pending-paused";
            "blocked-dependency-paused": "blocked-dependency-paused";
            "blocked-input-paused": "blocked-input-paused";
        }>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ListPublishResponse = z.infer<typeof ListPublishResponse>;
export declare const PublisherRequest: z.ZodUnion<readonly [z.ZodObject<{}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>, z.ZodObject<{
    tenant_id: z.ZodUUID;
    reference_id: z.ZodString;
    recipe_template: z.ZodObject<{
        events: z.ZodArray<z.ZodObject<{
            event_id: z.ZodUUID;
            name: z.ZodString;
            tags: z.ZodArray<z.ZodString>;
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
}, z.core.$strip>, z.ZodObject<{}, z.core.$strip>]>;
export type PublisherRequest = z.infer<typeof PublisherRequest>;
export declare const PublisherResponse: z.ZodUnion<readonly [z.ZodObject<{
    uuids: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodUnion<[z.ZodUnion<readonly [z.ZodObject<{
    publish_id: z.ZodString;
    error: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"failed">;
    error_code: z.ZodString;
    error_message: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"succeeded">;
    progress: z.ZodLiteral<100>;
}, z.core.$strip>, z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"rejected">;
    reason: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"created">;
    progress: z.ZodNumber;
}, z.core.$strip>]>, z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
    publish_id: z.ZodString;
    error: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"failed">;
    error_code: z.ZodString;
    error_message: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"succeeded">;
    progress: z.ZodLiteral<100>;
}, z.core.$strip>, z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"rejected">;
    reason: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    publish_id: z.ZodString;
    status: z.ZodLiteral<"created">;
    progress: z.ZodNumber;
}, z.core.$strip>]>>]>, z.ZodObject<{
    publish_id: z.ZodUUID;
    reference_id: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>, z.ZodObject<{
    publishes: z.ZodArray<z.ZodObject<{
        publish_id: z.ZodUUID;
        tenant_id: z.ZodUUID;
        reference_id: z.ZodString;
        recipe_template: z.ZodObject<{
            events: z.ZodArray<z.ZodObject<{
                event_id: z.ZodUUID;
                name: z.ZodString;
                tags: z.ZodArray<z.ZodString>;
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
        recipe_details: z.ZodArray<z.ZodObject<{
            recipe_link: z.ZodObject<{
                "@type": z.ZodLiteral<"RecipeLink">;
                recipe_id: z.ZodUUID;
                asset_id: z.ZodUUID;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, z.core.$strip>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, z.core.$strip>;
            canvas_id: z.ZodUUID;
            viewport_id: z.ZodString;
        }, z.core.$strip>>;
        task_publish_state: z.ZodObject<{
            status: z.ZodEnum<{
                pending: "pending";
                running: "running";
                succeeded: "succeeded";
                failed: "failed";
                rejected: "rejected";
                "blocked-dependency": "blocked-dependency";
                "blocked-input": "blocked-input";
                skipped: "skipped";
                "pending-paused": "pending-paused";
                "blocked-dependency-paused": "blocked-dependency-paused";
                "blocked-input-paused": "blocked-input-paused";
            }>;
            createdAt: z.ZodISODateTime;
            startedAt: z.ZodOptional<z.ZodISODateTime>;
            updatedAt: z.ZodOptional<z.ZodISODateTime>;
            finishedAt: z.ZodOptional<z.ZodISODateTime>;
            attempts: z.ZodNumber;
            runtimeToken: z.ZodOptional<z.ZodString>;
            data: z.ZodOptional<z.ZodUnknown>;
            config: z.ZodOptional<z.ZodObject<{
                timeoutMs: z.ZodNumber;
                maxAttempts: z.ZodNumber;
            }, z.core.$strip>>;
            error: z.ZodOptional<z.ZodObject<{
                message: z.ZodString;
                code: z.ZodOptional<z.ZodString>;
                stack: z.ZodOptional<z.ZodString>;
                timestamp: z.ZodISODateTime;
            }, z.core.$strip>>;
            rejection: z.ZodOptional<z.ZodObject<{
                reason: z.ZodString;
                issues: z.ZodOptional<z.ZodArray<z.ZodString>>;
                timestamp: z.ZodISODateTime;
            }, z.core.$strip>>;
            progress: z.ZodOptional<z.ZodNumber>;
            result: z.ZodOptional<z.ZodObject<{
                publish_id: z.ZodUUID;
                reference_id: z.ZodString;
                timestamp: z.ZodISODateTime;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        task_publish_status: z.ZodEnum<{
            pending: "pending";
            running: "running";
            succeeded: "succeeded";
            failed: "failed";
            rejected: "rejected";
            "blocked-dependency": "blocked-dependency";
            "blocked-input": "blocked-input";
            skipped: "skipped";
            "pending-paused": "pending-paused";
            "blocked-dependency-paused": "blocked-dependency-paused";
            "blocked-input-paused": "blocked-input-paused";
        }>;
        create_timestamp: z.ZodISODateTime;
        modify_timestamp: z.ZodISODateTime;
        is_deleted: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>>;
    next_token: z.ZodNullable<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
    detail: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>]>;
export type PublisherResponse = z.infer<typeof PublisherResponse>;
