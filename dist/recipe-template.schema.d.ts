import { z } from 'zod';
export declare namespace RecipeTemplateSchema {
    const MediaTemplate: z.ZodObject<{
        asset_id: z.ZodString;
        duration_seconds: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        asset_id: string;
        duration_seconds: number;
    }, {
        asset_id: string;
        duration_seconds: number;
    }>;
    type MediaTemplate = z.infer<typeof MediaTemplate>;
    const PlaylistTemplate: z.ZodObject<{
        media_templates: z.ZodArray<z.ZodObject<{
            asset_id: z.ZodString;
            duration_seconds: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            asset_id: string;
            duration_seconds: number;
        }, {
            asset_id: string;
            duration_seconds: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        media_templates: {
            asset_id: string;
            duration_seconds: number;
        }[];
    }, {
        media_templates: {
            asset_id: string;
            duration_seconds: number;
        }[];
    }>;
    type PlaylistTemplate = z.infer<typeof PlaylistTemplate>;
    const NDay: z.ZodObject<{
        day: z.ZodEnum<["mo", "tu", "we", "th", "fr", "sa", "su"]>;
        nthOfPeriod: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        day: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su";
        nthOfPeriod?: number | undefined;
    }, {
        day: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su";
        nthOfPeriod?: number | undefined;
    }>;
    type NDay = z.infer<typeof NDay>;
    const RecurrenceRuleTemplate: z.ZodObject<{
        frequency: z.ZodEnum<["secondly", "minutely", "hourly", "daily", "weekly", "monthly", "yearly"]>;
        interval: z.ZodOptional<z.ZodNumber>;
        byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
            day: z.ZodEnum<["mo", "tu", "we", "th", "fr", "sa", "su"]>;
            nthOfPeriod: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            day: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su";
            nthOfPeriod?: number | undefined;
        }, {
            day: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su";
            nthOfPeriod?: number | undefined;
        }>, "many">>;
        byMonthDay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        byMonth: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        times: z.ZodOptional<z.ZodNumber>;
        until: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>;
    type RecurrenceRuleTemplate = z.infer<typeof RecurrenceRuleTemplate>;
    const EventTemplate: z.ZodObject<{
        priority: z.ZodNumber;
        start: z.ZodString;
        timeZone: z.ZodString;
        duration: z.ZodString;
        playlist: z.ZodObject<{
            media_templates: z.ZodArray<z.ZodObject<{
                asset_id: z.ZodString;
                duration_seconds: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                asset_id: string;
                duration_seconds: number;
            }, {
                asset_id: string;
                duration_seconds: number;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            media_templates: {
                asset_id: string;
                duration_seconds: number;
            }[];
        }, {
            media_templates: {
                asset_id: string;
                duration_seconds: number;
            }[];
        }>;
        recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            frequency: z.ZodEnum<["secondly", "minutely", "hourly", "daily", "weekly", "monthly", "yearly"]>;
            interval: z.ZodOptional<z.ZodNumber>;
            byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
                day: z.ZodEnum<["mo", "tu", "we", "th", "fr", "sa", "su"]>;
                nthOfPeriod: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                day: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su";
                nthOfPeriod?: number | undefined;
            }, {
                day: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su";
                nthOfPeriod?: number | undefined;
            }>, "many">>;
            byMonthDay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            byMonth: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            times: z.ZodOptional<z.ZodNumber>;
            until: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
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
        }, {
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
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        priority: number;
        start: string;
        timeZone: string;
        duration: string;
        playlist: {
            media_templates: {
                asset_id: string;
                duration_seconds: number;
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
    }, {
        priority: number;
        start: string;
        timeZone: string;
        duration: string;
        playlist: {
            media_templates: {
                asset_id: string;
                duration_seconds: number;
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
    }>;
    type EventTemplate = z.infer<typeof EventTemplate>;
    const RecipeTemplate: z.ZodObject<{
        events: z.ZodArray<z.ZodObject<{
            priority: z.ZodNumber;
            start: z.ZodString;
            timeZone: z.ZodString;
            duration: z.ZodString;
            playlist: z.ZodObject<{
                media_templates: z.ZodArray<z.ZodObject<{
                    asset_id: z.ZodString;
                    duration_seconds: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    asset_id: string;
                    duration_seconds: number;
                }, {
                    asset_id: string;
                    duration_seconds: number;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                media_templates: {
                    asset_id: string;
                    duration_seconds: number;
                }[];
            }, {
                media_templates: {
                    asset_id: string;
                    duration_seconds: number;
                }[];
            }>;
            recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                frequency: z.ZodEnum<["secondly", "minutely", "hourly", "daily", "weekly", "monthly", "yearly"]>;
                interval: z.ZodOptional<z.ZodNumber>;
                byDay: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    day: z.ZodEnum<["mo", "tu", "we", "th", "fr", "sa", "su"]>;
                    nthOfPeriod: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    day: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su";
                    nthOfPeriod?: number | undefined;
                }, {
                    day: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su";
                    nthOfPeriod?: number | undefined;
                }>, "many">>;
                byMonthDay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                byMonth: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                times: z.ZodOptional<z.ZodNumber>;
                until: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
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
            }, {
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
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            priority: number;
            start: string;
            timeZone: string;
            duration: string;
            playlist: {
                media_templates: {
                    asset_id: string;
                    duration_seconds: number;
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
        }, {
            priority: number;
            start: string;
            timeZone: string;
            duration: string;
            playlist: {
                media_templates: {
                    asset_id: string;
                    duration_seconds: number;
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
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        events: {
            priority: number;
            start: string;
            timeZone: string;
            duration: string;
            playlist: {
                media_templates: {
                    asset_id: string;
                    duration_seconds: number;
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
    }, {
        events: {
            priority: number;
            start: string;
            timeZone: string;
            duration: string;
            playlist: {
                media_templates: {
                    asset_id: string;
                    duration_seconds: number;
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
    }>;
    type RecipeTemplate = z.infer<typeof RecipeTemplate>;
}
