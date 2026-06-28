import * as z from "zod/v4";
import { RobustTask } from "@dsbunny/robust-task-schema";
import { PublishProgress } from "./progress.schema.js";
import { PublishResponse } from "./response.schema.js";
import { PublishRequest } from "./request.schema.js";
export declare const PublishTaskStateSchema: z.ZodObject<{
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
export type PublishTaskState = RobustTask.TaskState<PublishRequest, RobustTask.TaskConfig, PublishProgress, PublishResponse> & {
    progress?: PublishProgress;
    result?: PublishResponse;
};
export declare const Publish: z.ZodObject<{
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
}, z.core.$strip>;
export type Publish = z.infer<typeof Publish>;
export declare const DbDtoFromPublish: z.ZodPipe<z.ZodObject<{
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
}, z.core.$strip>, z.ZodTransform<{
    recipe_details: string;
    task_publish_state: string;
    publish_id: string;
    tenant_id: string;
    reference_id: string;
    recipe_template: {
        events: {
            event_id: string;
            name: string;
            tags: string[];
            priority: number;
            start: string;
            timeZone: string;
            duration: string;
            playlist: {
                media_templates: {
                    asset_id: string;
                    duration_seconds: number;
                    params?: Record<string, any> | undefined;
                }[];
            };
            recurrenceRules?: {
                frequency: "secondly" | "minutely" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
                interval?: number | undefined;
                byDay?: {
                    day: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su";
                    nthOfPeriod?: number | undefined;
                }[] | undefined;
                byMonthDay?: number[] | undefined;
                byMonth?: number[] | undefined;
                bySetPosition?: number[] | undefined;
                times?: number | undefined;
                until?: string | undefined;
            }[] | undefined;
        }[];
    };
    canvas_ids: string[];
    identity: string;
    task_publish_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    publish_id: string;
    tenant_id: string;
    reference_id: string;
    recipe_template: {
        events: {
            event_id: string;
            name: string;
            tags: string[];
            priority: number;
            start: string;
            timeZone: string;
            duration: string;
            playlist: {
                media_templates: {
                    asset_id: string;
                    duration_seconds: number;
                    params?: Record<string, any> | undefined;
                }[];
            };
            recurrenceRules?: {
                frequency: "secondly" | "minutely" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
                interval?: number | undefined;
                byDay?: {
                    day: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su";
                    nthOfPeriod?: number | undefined;
                }[] | undefined;
                byMonthDay?: number[] | undefined;
                byMonth?: number[] | undefined;
                bySetPosition?: number[] | undefined;
                times?: number | undefined;
                until?: string | undefined;
            }[] | undefined;
        }[];
    };
    canvas_ids: string[];
    identity: string;
    recipe_details: {
        recipe_link: {
            "@type": "RecipeLink";
            recipe_id: string;
            asset_id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
            expires?: string | undefined;
        };
        canvas_id: string;
        viewport_id: string;
    }[];
    task_publish_state: {
        status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
        createdAt: string;
        attempts: number;
        startedAt?: string | undefined;
        updatedAt?: string | undefined;
        finishedAt?: string | undefined;
        runtimeToken?: string | undefined;
        data?: unknown;
        config?: {
            timeoutMs: number;
            maxAttempts: number;
        } | undefined;
        error?: {
            message: string;
            timestamp: string;
            code?: string | undefined;
            stack?: string | undefined;
        } | undefined;
        rejection?: {
            reason: string;
            timestamp: string;
            issues?: string[] | undefined;
        } | undefined;
        progress?: number | undefined;
        result?: {
            publish_id: string;
            reference_id: string;
            timestamp: string;
        } | undefined;
    };
    task_publish_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}>>;
export declare const DbDtoToPublish: z.ZodPipe<z.ZodObject<{
    publish_id: z.ZodUUID;
    tenant_id: z.ZodUUID;
    reference_id: z.ZodString;
    recipe_template: z.ZodNullable<z.ZodString>;
    canvas_ids: z.ZodNullable<z.ZodString>;
    identity: z.ZodString;
    recipe_details: z.ZodNullable<z.ZodString>;
    task_publish_state: z.ZodNullable<z.ZodString>;
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
    create_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    modify_timestamp: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
    is_deleted: z.ZodBoolean;
}, z.core.$strip>, z.ZodTransform<{
    publish_id: string;
    tenant_id: string;
    reference_id: string;
    recipe_template: {
        events: {
            event_id: string;
            name: string;
            tags: string[];
            priority: number;
            start: string;
            timeZone: string;
            duration: string;
            playlist: {
                media_templates: {
                    asset_id: string;
                    duration_seconds: number;
                    params?: Record<string, any> | undefined;
                }[];
            };
            recurrenceRules?: {
                frequency: "secondly" | "minutely" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
                interval?: number | undefined;
                byDay?: {
                    day: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su";
                    nthOfPeriod?: number | undefined;
                }[] | undefined;
                byMonthDay?: number[] | undefined;
                byMonth?: number[] | undefined;
                bySetPosition?: number[] | undefined;
                times?: number | undefined;
                until?: string | undefined;
            }[] | undefined;
        }[];
    };
    canvas_ids: string[];
    identity: string;
    recipe_details: {
        recipe_link: {
            "@type": "RecipeLink";
            recipe_id: string;
            asset_id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
            expires?: string | undefined;
        };
        canvas_id: string;
        viewport_id: string;
    }[];
    task_publish_state: {
        status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
        createdAt: string;
        attempts: number;
        startedAt?: string | undefined;
        updatedAt?: string | undefined;
        finishedAt?: string | undefined;
        runtimeToken?: string | undefined;
        data?: unknown;
        config?: {
            timeoutMs: number;
            maxAttempts: number;
        } | undefined;
        error?: {
            message: string;
            timestamp: string;
            code?: string | undefined;
            stack?: string | undefined;
        } | undefined;
        rejection?: {
            reason: string;
            timestamp: string;
            issues?: string[] | undefined;
        } | undefined;
        progress?: number | undefined;
        result?: {
            publish_id: string;
            reference_id: string;
            timestamp: string;
        } | undefined;
    };
    task_publish_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    publish_id: string;
    tenant_id: string;
    reference_id: string;
    recipe_template: string | null;
    canvas_ids: string | null;
    identity: string;
    recipe_details: string | null;
    task_publish_state: string | null;
    task_publish_status: "pending" | "running" | "succeeded" | "failed" | "rejected" | "blocked-dependency" | "blocked-input" | "skipped" | "pending-paused" | "blocked-dependency-paused" | "blocked-input-paused";
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}>>;
