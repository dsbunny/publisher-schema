import * as z from 'zod';
export declare const CreateUUIDsRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"CreateUUIDsRequest">;
}, z.core.$strip>>;
export type CreateUUIDsRequest = z.infer<typeof CreateUUIDsRequestSchema>;
export declare const CreateUUIDsResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateUUIDsResponse">;
    uuids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type CreateUUIDsResponse = z.infer<typeof CreateUUIDsResponseSchema>;
export declare const GetPublishStatusRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusRequest">;
}, z.core.$strip>>;
export type GetPublishStatusRequest = z.infer<typeof GetPublishStatusRequestSchema>;
export declare const GetPublishStatusErrorResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusErrorResponse">;
    publish_id: z.ZodString;
    error: z.ZodString;
}, z.core.$strip>;
export type GetPublishStatusErrorResponse = z.infer<typeof GetPublishStatusErrorResponseSchema>;
export declare const GetPublishStatusFailedResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusFailedResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"failed">;
    error_code: z.ZodString;
    error_message: z.ZodString;
}, z.core.$strip>;
export type GetPublishStatusFailedResponse = z.infer<typeof GetPublishStatusFailedResponseSchema>;
export declare const GetPublishStatusSucceededResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusSucceededResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"succeeded">;
    progress: z.ZodLiteral<100>;
}, z.core.$strip>;
export type GetPublishStatusSucceededResponse = z.infer<typeof GetPublishStatusSucceededResponseSchema>;
export declare const GetPublishStatusRejectedResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusRejectedResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"rejected">;
    reason: z.ZodString;
}, z.core.$strip>;
export type GetPublishStatusRejectedResponse = z.infer<typeof GetPublishStatusRejectedResponseSchema>;
export declare const GetPublishStatusCreatedResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusCreatedResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"created">;
    progress: z.ZodNumber;
}, z.core.$strip>;
export type GetPublishStatusCreatedResponse = z.infer<typeof GetPublishStatusCreatedResponseSchema>;
export declare const GetPublishStatusResponseSchema: z.ZodUnion<[z.ZodUnion<readonly [z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusErrorResponse">;
    publish_id: z.ZodString;
    error: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusFailedResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"failed">;
    error_code: z.ZodString;
    error_message: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusSucceededResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"succeeded">;
    progress: z.ZodLiteral<100>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusRejectedResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"rejected">;
    reason: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusCreatedResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"created">;
    progress: z.ZodNumber;
}, z.core.$strip>]>, z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusErrorResponse">;
    publish_id: z.ZodString;
    error: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusFailedResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"failed">;
    error_code: z.ZodString;
    error_message: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusSucceededResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"succeeded">;
    progress: z.ZodLiteral<100>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusRejectedResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"rejected">;
    reason: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusCreatedResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"created">;
    progress: z.ZodNumber;
}, z.core.$strip>]>>]>;
export type GetPublishStatusResponse = z.infer<typeof GetPublishStatusResponseSchema>;
export declare const CreatePublishRequestSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreatePublishRequest">;
    publish_request: z.ZodObject<{
        '@type': z.ZodLiteral<"PublishRequest">;
        tenant_id: z.ZodUUID;
        reference_id: z.ZodString;
        recipe_template: z.ZodObject<{
            '@type': z.ZodLiteral<"RecipeTemplate">;
            scheduled_playlists: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"ScheduledPlaylistTemplate">;
                priority: z.ZodNumber;
                start: z.ZodISODateTime;
                timeZone: z.ZodString;
                duration: z.ZodString;
                playlist: z.ZodObject<{
                    "@type": z.ZodLiteral<"PlaylistTemplate">;
                    name: z.ZodString;
                    tags: z.ZodArray<z.ZodString>;
                    media_templates: z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"MediaTemplate">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        duration_seconds: z.ZodNumber;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
                recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"RecurrenceRuleTemplate">;
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
                        "@type": z.ZodLiteral<"NDay">;
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
        client_request_token: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CreatePublishRequest = z.infer<typeof CreatePublishRequestSchema>;
export declare const CreatePublishResponseSchema: z.ZodObject<{
    reference_id: z.ZodString;
    publish_id: z.ZodUUID;
    timestamp: z.ZodISODateTime;
    '@type': z.ZodLiteral<"CreatePublishResponse">;
}, z.core.$strip>;
export type CreatePublishResponse = z.infer<typeof CreatePublishResponseSchema>;
export declare const ListPublishRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"ListPublishRequest">;
}, z.core.$strip>>;
export type ListPublishRequest = z.infer<typeof ListPublishRequestSchema>;
export declare const ListPublishResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"ListPublishResponse">;
    publishes: z.ZodArray<z.ZodObject<{
        '@type': z.ZodLiteral<"Publish">;
        publish_id: z.ZodUUID;
        tenant_id: z.ZodUUID;
        reference_id: z.ZodString;
        recipe_template: z.ZodObject<{
            '@type': z.ZodLiteral<"RecipeTemplate">;
            scheduled_playlists: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"ScheduledPlaylistTemplate">;
                priority: z.ZodNumber;
                start: z.ZodISODateTime;
                timeZone: z.ZodString;
                duration: z.ZodString;
                playlist: z.ZodObject<{
                    "@type": z.ZodLiteral<"PlaylistTemplate">;
                    name: z.ZodString;
                    tags: z.ZodArray<z.ZodString>;
                    media_templates: z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"MediaTemplate">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        duration_seconds: z.ZodNumber;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
                recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"RecurrenceRuleTemplate">;
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
                        "@type": z.ZodLiteral<"NDay">;
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
            '@type': z.ZodLiteral<"PublishRecipeDetail">;
            recipe_link: z.ZodObject<{
                "@type": z.ZodLiteral<"RecipeLink">;
                recipe_id: z.ZodUUID;
                ref_id: z.ZodOptional<z.ZodString>;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
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
            '@type': z.ZodLiteral<"TaskState">;
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
                "@type": z.ZodLiteral<"TaskConfig">;
                timeoutMs: z.ZodNumber;
                maxAttempts: z.ZodNumber;
            }, z.core.$strip>>;
            error: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"ErrorInfo">;
                message: z.ZodString;
                code: z.ZodOptional<z.ZodString>;
                stack: z.ZodOptional<z.ZodString>;
                timestamp: z.ZodISODateTime;
            }, z.core.$strip>>;
            rejection: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"RejectionInfo">;
                reason: z.ZodString;
                issues: z.ZodOptional<z.ZodArray<z.ZodString>>;
                timestamp: z.ZodISODateTime;
            }, z.core.$strip>>;
            progress: z.ZodOptional<z.ZodNumber>;
            result: z.ZodOptional<z.ZodObject<{
                '@type': z.ZodLiteral<"PublishResponse">;
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
export type ListPublishResponse = z.infer<typeof ListPublishResponseSchema>;
export declare const PublisherRequestSchema: z.ZodUnion<readonly [z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"CreateUUIDsRequest">;
}, z.core.$strip>>, z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusRequest">;
}, z.core.$strip>>, z.ZodObject<{
    '@type': z.ZodLiteral<"CreatePublishRequest">;
    publish_request: z.ZodObject<{
        '@type': z.ZodLiteral<"PublishRequest">;
        tenant_id: z.ZodUUID;
        reference_id: z.ZodString;
        recipe_template: z.ZodObject<{
            '@type': z.ZodLiteral<"RecipeTemplate">;
            scheduled_playlists: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"ScheduledPlaylistTemplate">;
                priority: z.ZodNumber;
                start: z.ZodISODateTime;
                timeZone: z.ZodString;
                duration: z.ZodString;
                playlist: z.ZodObject<{
                    "@type": z.ZodLiteral<"PlaylistTemplate">;
                    name: z.ZodString;
                    tags: z.ZodArray<z.ZodString>;
                    media_templates: z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"MediaTemplate">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        duration_seconds: z.ZodNumber;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
                recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"RecurrenceRuleTemplate">;
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
                        "@type": z.ZodLiteral<"NDay">;
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
        client_request_token: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"ListPublishRequest">;
}, z.core.$strip>>]>;
export type PublisherRequest = z.infer<typeof PublisherRequestSchema>;
export declare const PublisherResponseSchema: z.ZodUnion<readonly [z.ZodObject<{
    '@type': z.ZodLiteral<"CreateUUIDsResponse">;
    uuids: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodUnion<[z.ZodUnion<readonly [z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusErrorResponse">;
    publish_id: z.ZodString;
    error: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusFailedResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"failed">;
    error_code: z.ZodString;
    error_message: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusSucceededResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"succeeded">;
    progress: z.ZodLiteral<100>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusRejectedResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"rejected">;
    reason: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusCreatedResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"created">;
    progress: z.ZodNumber;
}, z.core.$strip>]>, z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusErrorResponse">;
    publish_id: z.ZodString;
    error: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusFailedResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"failed">;
    error_code: z.ZodString;
    error_message: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusSucceededResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"succeeded">;
    progress: z.ZodLiteral<100>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusRejectedResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"rejected">;
    reason: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetPublishStatusCreatedResponse">;
    publish_id: z.ZodString;
    status: z.ZodLiteral<"created">;
    progress: z.ZodNumber;
}, z.core.$strip>]>>]>, z.ZodObject<{
    reference_id: z.ZodString;
    publish_id: z.ZodUUID;
    timestamp: z.ZodISODateTime;
    '@type': z.ZodLiteral<"CreatePublishResponse">;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"ListPublishResponse">;
    publishes: z.ZodArray<z.ZodObject<{
        '@type': z.ZodLiteral<"Publish">;
        publish_id: z.ZodUUID;
        tenant_id: z.ZodUUID;
        reference_id: z.ZodString;
        recipe_template: z.ZodObject<{
            '@type': z.ZodLiteral<"RecipeTemplate">;
            scheduled_playlists: z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"ScheduledPlaylistTemplate">;
                priority: z.ZodNumber;
                start: z.ZodISODateTime;
                timeZone: z.ZodString;
                duration: z.ZodString;
                playlist: z.ZodObject<{
                    "@type": z.ZodLiteral<"PlaylistTemplate">;
                    name: z.ZodString;
                    tags: z.ZodArray<z.ZodString>;
                    media_templates: z.ZodArray<z.ZodObject<{
                        "@type": z.ZodLiteral<"MediaTemplate">;
                        asset_id: z.ZodUUID;
                        version: z.ZodNumber;
                        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        duration_seconds: z.ZodNumber;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
                recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    "@type": z.ZodLiteral<"RecurrenceRuleTemplate">;
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
                        "@type": z.ZodLiteral<"NDay">;
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
            '@type': z.ZodLiteral<"PublishRecipeDetail">;
            recipe_link: z.ZodObject<{
                "@type": z.ZodLiteral<"RecipeLink">;
                recipe_id: z.ZodUUID;
                ref_id: z.ZodOptional<z.ZodString>;
                href: z.ZodURL;
                expires: z.ZodOptional<z.ZodISODateTime>;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    "@type": z.ZodLiteral<"HashValue">;
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
            '@type': z.ZodLiteral<"TaskState">;
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
                "@type": z.ZodLiteral<"TaskConfig">;
                timeoutMs: z.ZodNumber;
                maxAttempts: z.ZodNumber;
            }, z.core.$strip>>;
            error: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"ErrorInfo">;
                message: z.ZodString;
                code: z.ZodOptional<z.ZodString>;
                stack: z.ZodOptional<z.ZodString>;
                timestamp: z.ZodISODateTime;
            }, z.core.$strip>>;
            rejection: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"RejectionInfo">;
                reason: z.ZodString;
                issues: z.ZodOptional<z.ZodArray<z.ZodString>>;
                timestamp: z.ZodISODateTime;
            }, z.core.$strip>>;
            progress: z.ZodOptional<z.ZodNumber>;
            result: z.ZodOptional<z.ZodObject<{
                '@type': z.ZodLiteral<"PublishResponse">;
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
    '@type': z.ZodLiteral<"ErrorResponse">;
    code: z.ZodString;
    message: z.ZodString;
    detail: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>]>;
export type PublisherResponse = z.infer<typeof PublisherResponseSchema>;
