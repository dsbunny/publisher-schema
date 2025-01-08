import { z } from 'zod';
export declare namespace RecipeSchema {
    const HashValue: z.ZodObject<{
        method: z.ZodLiteral<"SHA256">;
        hex: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        method: "SHA256";
        hex: string;
    }, {
        method: "SHA256";
        hex: string;
    }>;
    const HTMLImageElement: z.ZodObject<{
        "@type": z.ZodLiteral<"HTMLImageElement">;
        id: z.ZodString;
        href: z.ZodString;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            method: "SHA256";
            hex: string;
        }, {
            method: "SHA256";
            hex: string;
        }>;
        md5: z.ZodString;
        integrity: z.ZodString;
        duration: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        duration: number;
        "@type": "HTMLImageElement";
        id: string;
        href: string;
        size: number;
        hash: {
            method: "SHA256";
            hex: string;
        };
        md5: string;
        integrity: string;
    }, {
        duration: number;
        "@type": "HTMLImageElement";
        id: string;
        href: string;
        size: number;
        hash: {
            method: "SHA256";
            hex: string;
        };
        md5: string;
        integrity: string;
    }>;
    type HTMLImageElement = z.infer<typeof HTMLImageElement>;
    const HTMLVideoElement: z.ZodObject<{
        "@type": z.ZodLiteral<"HTMLVideoElement">;
        id: z.ZodString;
        href: z.ZodString;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            method: "SHA256";
            hex: string;
        }, {
            method: "SHA256";
            hex: string;
        }>;
        md5: z.ZodString;
        integrity: z.ZodString;
        duration: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        duration: number;
        "@type": "HTMLVideoElement";
        id: string;
        href: string;
        size: number;
        hash: {
            method: "SHA256";
            hex: string;
        };
        md5: string;
        integrity: string;
    }, {
        duration: number;
        "@type": "HTMLVideoElement";
        id: string;
        href: string;
        size: number;
        hash: {
            method: "SHA256";
            hex: string;
        };
        md5: string;
        integrity: string;
    }>;
    type HTMLVideoElement = z.infer<typeof HTMLVideoElement>;
    const HTMLScriptElement: z.ZodObject<{
        "@type": z.ZodLiteral<"HTMLScriptElement">;
        id: z.ZodString;
        href: z.ZodString;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            method: "SHA256";
            hex: string;
        }, {
            method: "SHA256";
            hex: string;
        }>;
        md5: z.ZodString;
        integrity: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        "@type": "HTMLScriptElement";
        id: string;
        href: string;
        size: number;
        hash: {
            method: "SHA256";
            hex: string;
        };
        md5: string;
        integrity: string;
    }, {
        "@type": "HTMLScriptElement";
        id: string;
        href: string;
        size: number;
        hash: {
            method: "SHA256";
            hex: string;
        };
        md5: string;
        integrity: string;
    }>;
    type HTMLScriptElement = z.infer<typeof HTMLScriptElement>;
    const CustomElement: z.ZodObject<{
        "@type": z.ZodLiteral<"CustomElement">;
        id: z.ZodString;
        href: z.ZodString;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            method: "SHA256";
            hex: string;
        }, {
            method: "SHA256";
            hex: string;
        }>;
        md5: z.ZodString;
        integrity: z.ZodString;
        duration: z.ZodNumber;
        sources: z.ZodArray<z.ZodUnion<[z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLImageElement">;
            id: z.ZodString;
            href: z.ZodString;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                method: "SHA256";
                hex: string;
            }, {
                method: "SHA256";
                hex: string;
            }>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            duration: number;
            "@type": "HTMLImageElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        }, {
            duration: number;
            "@type": "HTMLImageElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        }>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLVideoElement">;
            id: z.ZodString;
            href: z.ZodString;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                method: "SHA256";
                hex: string;
            }, {
                method: "SHA256";
                hex: string;
            }>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            duration: number;
            "@type": "HTMLVideoElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        }, {
            duration: number;
            "@type": "HTMLVideoElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        }>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLScriptElement">;
            id: z.ZodString;
            href: z.ZodString;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                method: "SHA256";
                hex: string;
            }, {
                method: "SHA256";
                hex: string;
            }>;
            md5: z.ZodString;
            integrity: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            "@type": "HTMLScriptElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        }, {
            "@type": "HTMLScriptElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        duration: number;
        "@type": "CustomElement";
        id: string;
        href: string;
        size: number;
        hash: {
            method: "SHA256";
            hex: string;
        };
        md5: string;
        integrity: string;
        sources: ({
            duration: number;
            "@type": "HTMLImageElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        } | {
            duration: number;
            "@type": "HTMLVideoElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        } | {
            "@type": "HTMLScriptElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        })[];
    }, {
        duration: number;
        "@type": "CustomElement";
        id: string;
        href: string;
        size: number;
        hash: {
            method: "SHA256";
            hex: string;
        };
        md5: string;
        integrity: string;
        sources: ({
            duration: number;
            "@type": "HTMLImageElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        } | {
            duration: number;
            "@type": "HTMLVideoElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        } | {
            "@type": "HTMLScriptElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        })[];
    }>;
    type CustomElement = z.infer<typeof CustomElement>;
    const RecurrenceRule: z.ZodObject<{
        "@type": z.ZodLiteral<"RecurrenceRule">;
        frequency: z.ZodEnum<["secondly", "minutely", "hourly", "daily", "weekly", "monthly", "yearly"]>;
        interval: z.ZodOptional<z.ZodNumber>;
        firstDayOfWeek: z.ZodOptional<z.ZodEnum<["mo", "tu", "we", "th", "fr", "sa", "su"]>>;
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
        byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        byHour: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        timeZone: z.ZodOptional<z.ZodString>;
        times: z.ZodOptional<z.ZodNumber>;
        until: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        frequency: "secondly" | "minutely" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
        "@type": "RecurrenceRule";
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
        timeZone?: string | undefined;
        firstDayOfWeek?: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su" | undefined;
        byYearDay?: number[] | undefined;
        byWeekNo?: number[] | undefined;
        byHour?: number[] | undefined;
        byMinute?: number[] | undefined;
        bySecond?: number[] | undefined;
    }, {
        frequency: "secondly" | "minutely" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
        "@type": "RecurrenceRule";
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
        timeZone?: string | undefined;
        firstDayOfWeek?: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su" | undefined;
        byYearDay?: number[] | undefined;
        byWeekNo?: number[] | undefined;
        byHour?: number[] | undefined;
        byMinute?: number[] | undefined;
        bySecond?: number[] | undefined;
    }>;
    type RecurrenceRule = z.infer<typeof RecurrenceRule>;
    const MatchPattern: z.ZodObject<{
        "@type": z.ZodLiteral<"MatchPattern">;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        "@type": "MatchPattern";
    }, {
        code: string;
        "@type": "MatchPattern";
    }>;
    type MatchPattern = z.infer<typeof MatchPattern>;
    const DOMEvent: z.ZodObject<{
        "@type": z.ZodLiteral<"DOMEvent">;
        type: z.ZodString;
        match: z.ZodObject<{
            "@type": z.ZodLiteral<"MatchPattern">;
            code: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            code: string;
            "@type": "MatchPattern";
        }, {
            code: string;
            "@type": "MatchPattern";
        }>;
    }, "strip", z.ZodTypeAny, {
        type: string;
        "@type": "DOMEvent";
        match: {
            code: string;
            "@type": "MatchPattern";
        };
    }, {
        type: string;
        "@type": "DOMEvent";
        match: {
            code: string;
            "@type": "MatchPattern";
        };
    }>;
    type DOMEvent = z.infer<typeof DOMEvent>;
    const Playlist: z.ZodObject<{
        "@type": z.ZodLiteral<"Playlist">;
        entries: z.ZodArray<z.ZodUnion<[z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLImageElement">;
            id: z.ZodString;
            href: z.ZodString;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                method: "SHA256";
                hex: string;
            }, {
                method: "SHA256";
                hex: string;
            }>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            duration: number;
            "@type": "HTMLImageElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        }, {
            duration: number;
            "@type": "HTMLImageElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        }>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLVideoElement">;
            id: z.ZodString;
            href: z.ZodString;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                method: "SHA256";
                hex: string;
            }, {
                method: "SHA256";
                hex: string;
            }>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            duration: number;
            "@type": "HTMLVideoElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        }, {
            duration: number;
            "@type": "HTMLVideoElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        }>, z.ZodObject<{
            "@type": z.ZodLiteral<"CustomElement">;
            id: z.ZodString;
            href: z.ZodString;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                method: "SHA256";
                hex: string;
            }, {
                method: "SHA256";
                hex: string;
            }>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            sources: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                id: z.ZodString;
                href: z.ZodString;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    method: "SHA256";
                    hex: string;
                }, {
                    method: "SHA256";
                    hex: string;
                }>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                duration: number;
                "@type": "HTMLImageElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            }, {
                duration: number;
                "@type": "HTMLImageElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            }>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                id: z.ZodString;
                href: z.ZodString;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    method: "SHA256";
                    hex: string;
                }, {
                    method: "SHA256";
                    hex: string;
                }>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                duration: number;
                "@type": "HTMLVideoElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            }, {
                duration: number;
                "@type": "HTMLVideoElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            }>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLScriptElement">;
                id: z.ZodString;
                href: z.ZodString;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    method: "SHA256";
                    hex: string;
                }, {
                    method: "SHA256";
                    hex: string;
                }>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                "@type": "HTMLScriptElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            }, {
                "@type": "HTMLScriptElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            }>]>, "many">;
        }, "strip", z.ZodTypeAny, {
            duration: number;
            "@type": "CustomElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
            sources: ({
                duration: number;
                "@type": "HTMLImageElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "HTMLVideoElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                "@type": "HTMLScriptElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            })[];
        }, {
            duration: number;
            "@type": "CustomElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
            sources: ({
                duration: number;
                "@type": "HTMLImageElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "HTMLVideoElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                "@type": "HTMLScriptElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            })[];
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        entries: ({
            duration: number;
            "@type": "HTMLImageElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        } | {
            duration: number;
            "@type": "HTMLVideoElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        } | {
            duration: number;
            "@type": "CustomElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
            sources: ({
                duration: number;
                "@type": "HTMLImageElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "HTMLVideoElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                "@type": "HTMLScriptElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            })[];
        })[];
        "@type": "Playlist";
    }, {
        entries: ({
            duration: number;
            "@type": "HTMLImageElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        } | {
            duration: number;
            "@type": "HTMLVideoElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        } | {
            duration: number;
            "@type": "CustomElement";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
            sources: ({
                duration: number;
                "@type": "HTMLImageElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "HTMLVideoElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                "@type": "HTMLScriptElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            })[];
        })[];
        "@type": "Playlist";
    }>;
    type Playlist = z.infer<typeof Playlist>;
    const Event: z.ZodObject<{
        "@type": z.ZodLiteral<"Event">;
        id: z.ZodString;
        priority: z.ZodNumber;
        start: z.ZodString;
        timeZone: z.ZodString;
        duration: z.ZodString;
        playlist: z.ZodObject<{
            "@type": z.ZodLiteral<"Playlist">;
            entries: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                id: z.ZodString;
                href: z.ZodString;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    method: "SHA256";
                    hex: string;
                }, {
                    method: "SHA256";
                    hex: string;
                }>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                duration: number;
                "@type": "HTMLImageElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            }, {
                duration: number;
                "@type": "HTMLImageElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            }>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                id: z.ZodString;
                href: z.ZodString;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    method: "SHA256";
                    hex: string;
                }, {
                    method: "SHA256";
                    hex: string;
                }>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                duration: number;
                "@type": "HTMLVideoElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            }, {
                duration: number;
                "@type": "HTMLVideoElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            }>, z.ZodObject<{
                "@type": z.ZodLiteral<"CustomElement">;
                id: z.ZodString;
                href: z.ZodString;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    method: "SHA256";
                    hex: string;
                }, {
                    method: "SHA256";
                    hex: string;
                }>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                sources: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    id: z.ZodString;
                    href: z.ZodString;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        method: "SHA256";
                        hex: string;
                    }, {
                        method: "SHA256";
                        hex: string;
                    }>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                }, {
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                }>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    id: z.ZodString;
                    href: z.ZodString;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        method: "SHA256";
                        hex: string;
                    }, {
                        method: "SHA256";
                        hex: string;
                    }>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                }, {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                }>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                    id: z.ZodString;
                    href: z.ZodString;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        method: "SHA256";
                        hex: string;
                    }, {
                        method: "SHA256";
                        hex: string;
                    }>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    "@type": "HTMLScriptElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                }, {
                    "@type": "HTMLScriptElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                }>]>, "many">;
            }, "strip", z.ZodTypeAny, {
                duration: number;
                "@type": "CustomElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                sources: ({
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    "@type": "HTMLScriptElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                })[];
            }, {
                duration: number;
                "@type": "CustomElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                sources: ({
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    "@type": "HTMLScriptElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                })[];
            }>]>, "many">;
        }, "strip", z.ZodTypeAny, {
            entries: ({
                duration: number;
                "@type": "HTMLImageElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "HTMLVideoElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "CustomElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                sources: ({
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    "@type": "HTMLScriptElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                })[];
            })[];
            "@type": "Playlist";
        }, {
            entries: ({
                duration: number;
                "@type": "HTMLImageElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "HTMLVideoElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "CustomElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                sources: ({
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    "@type": "HTMLScriptElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                })[];
            })[];
            "@type": "Playlist";
        }>;
        recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            "@type": z.ZodLiteral<"RecurrenceRule">;
            frequency: z.ZodEnum<["secondly", "minutely", "hourly", "daily", "weekly", "monthly", "yearly"]>;
            interval: z.ZodOptional<z.ZodNumber>;
            firstDayOfWeek: z.ZodOptional<z.ZodEnum<["mo", "tu", "we", "th", "fr", "sa", "su"]>>;
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
            byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            byHour: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
            timeZone: z.ZodOptional<z.ZodString>;
            times: z.ZodOptional<z.ZodNumber>;
            until: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            frequency: "secondly" | "minutely" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
            "@type": "RecurrenceRule";
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
            timeZone?: string | undefined;
            firstDayOfWeek?: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su" | undefined;
            byYearDay?: number[] | undefined;
            byWeekNo?: number[] | undefined;
            byHour?: number[] | undefined;
            byMinute?: number[] | undefined;
            bySecond?: number[] | undefined;
        }, {
            frequency: "secondly" | "minutely" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
            "@type": "RecurrenceRule";
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
            timeZone?: string | undefined;
            firstDayOfWeek?: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su" | undefined;
            byYearDay?: number[] | undefined;
            byWeekNo?: number[] | undefined;
            byHour?: number[] | undefined;
            byMinute?: number[] | undefined;
            bySecond?: number[] | undefined;
        }>, "many">>;
        onceOn: z.ZodOptional<z.ZodObject<{
            "@type": z.ZodLiteral<"DOMEvent">;
            type: z.ZodString;
            match: z.ZodObject<{
                "@type": z.ZodLiteral<"MatchPattern">;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                "@type": "MatchPattern";
            }, {
                code: string;
                "@type": "MatchPattern";
            }>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            "@type": "DOMEvent";
            match: {
                code: string;
                "@type": "MatchPattern";
            };
        }, {
            type: string;
            "@type": "DOMEvent";
            match: {
                code: string;
                "@type": "MatchPattern";
            };
        }>>;
        enableOn: z.ZodOptional<z.ZodObject<{
            "@type": z.ZodLiteral<"DOMEvent">;
            type: z.ZodString;
            match: z.ZodObject<{
                "@type": z.ZodLiteral<"MatchPattern">;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                "@type": "MatchPattern";
            }, {
                code: string;
                "@type": "MatchPattern";
            }>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            "@type": "DOMEvent";
            match: {
                code: string;
                "@type": "MatchPattern";
            };
        }, {
            type: string;
            "@type": "DOMEvent";
            match: {
                code: string;
                "@type": "MatchPattern";
            };
        }>>;
        disableOn: z.ZodOptional<z.ZodObject<{
            "@type": z.ZodLiteral<"DOMEvent">;
            type: z.ZodString;
            match: z.ZodObject<{
                "@type": z.ZodLiteral<"MatchPattern">;
                code: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                "@type": "MatchPattern";
            }, {
                code: string;
                "@type": "MatchPattern";
            }>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            "@type": "DOMEvent";
            match: {
                code: string;
                "@type": "MatchPattern";
            };
        }, {
            type: string;
            "@type": "DOMEvent";
            match: {
                code: string;
                "@type": "MatchPattern";
            };
        }>>;
    }, "strip", z.ZodTypeAny, {
        priority: number;
        start: string;
        timeZone: string;
        duration: string;
        playlist: {
            entries: ({
                duration: number;
                "@type": "HTMLImageElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "HTMLVideoElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "CustomElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                sources: ({
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    "@type": "HTMLScriptElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                })[];
            })[];
            "@type": "Playlist";
        };
        "@type": "Event";
        id: string;
        recurrenceRules?: {
            frequency: "secondly" | "minutely" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
            "@type": "RecurrenceRule";
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
            timeZone?: string | undefined;
            firstDayOfWeek?: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su" | undefined;
            byYearDay?: number[] | undefined;
            byWeekNo?: number[] | undefined;
            byHour?: number[] | undefined;
            byMinute?: number[] | undefined;
            bySecond?: number[] | undefined;
        }[] | undefined;
        onceOn?: {
            type: string;
            "@type": "DOMEvent";
            match: {
                code: string;
                "@type": "MatchPattern";
            };
        } | undefined;
        enableOn?: {
            type: string;
            "@type": "DOMEvent";
            match: {
                code: string;
                "@type": "MatchPattern";
            };
        } | undefined;
        disableOn?: {
            type: string;
            "@type": "DOMEvent";
            match: {
                code: string;
                "@type": "MatchPattern";
            };
        } | undefined;
    }, {
        priority: number;
        start: string;
        timeZone: string;
        duration: string;
        playlist: {
            entries: ({
                duration: number;
                "@type": "HTMLImageElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "HTMLVideoElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "CustomElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                sources: ({
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    "@type": "HTMLScriptElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                })[];
            })[];
            "@type": "Playlist";
        };
        "@type": "Event";
        id: string;
        recurrenceRules?: {
            frequency: "secondly" | "minutely" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
            "@type": "RecurrenceRule";
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
            timeZone?: string | undefined;
            firstDayOfWeek?: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su" | undefined;
            byYearDay?: number[] | undefined;
            byWeekNo?: number[] | undefined;
            byHour?: number[] | undefined;
            byMinute?: number[] | undefined;
            bySecond?: number[] | undefined;
        }[] | undefined;
        onceOn?: {
            type: string;
            "@type": "DOMEvent";
            match: {
                code: string;
                "@type": "MatchPattern";
            };
        } | undefined;
        enableOn?: {
            type: string;
            "@type": "DOMEvent";
            match: {
                code: string;
                "@type": "MatchPattern";
            };
        } | undefined;
        disableOn?: {
            type: string;
            "@type": "DOMEvent";
            match: {
                code: string;
                "@type": "MatchPattern";
            };
        } | undefined;
    }>;
    type Event = z.infer<typeof Event>;
    const Transition: z.ZodObject<{
        "@type": z.ZodLiteral<"Transition">;
        id: z.ZodString;
        href: z.ZodString;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            method: "SHA256";
            hex: string;
        }, {
            method: "SHA256";
            hex: string;
        }>;
        md5: z.ZodString;
        integrity: z.ZodString;
        duration: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        duration: number;
        "@type": "Transition";
        id: string;
        href: string;
        size: number;
        hash: {
            method: "SHA256";
            hex: string;
        };
        md5: string;
        integrity: string;
    }, {
        duration: number;
        "@type": "Transition";
        id: string;
        href: string;
        size: number;
        hash: {
            method: "SHA256";
            hex: string;
        };
        md5: string;
        integrity: string;
    }>;
    type Transition = z.infer<typeof Transition>;
    const SignalingServer: z.ZodObject<{
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>;
    type SignalingServer = z.infer<typeof SignalingServer>;
    const IceServer: z.ZodObject<{
        urls: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
        username: z.ZodOptional<z.ZodString>;
        credential: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        urls: string | string[];
        username?: string | undefined;
        credential?: string | undefined;
    }, {
        urls: string | string[];
        username?: string | undefined;
        credential?: string | undefined;
    }>;
    type IceServer = z.infer<typeof IceServer>;
    const Cluster: z.ZodObject<{
        label: z.ZodString;
        id: z.ZodString;
        peers: z.ZodArray<z.ZodString, "many">;
        iceServers: z.ZodArray<z.ZodObject<{
            urls: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
            username: z.ZodOptional<z.ZodString>;
            credential: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            urls: string | string[];
            username?: string | undefined;
            credential?: string | undefined;
        }, {
            urls: string | string[];
            username?: string | undefined;
            credential?: string | undefined;
        }>, "many">;
        signalingServers: z.ZodArray<z.ZodObject<{
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
        }, {
            url: string;
        }>, "many">;
        enableLoopback: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        label: string;
        peers: string[];
        iceServers: {
            urls: string | string[];
            username?: string | undefined;
            credential?: string | undefined;
        }[];
        signalingServers: {
            url: string;
        }[];
        enableLoopback?: boolean | undefined;
    }, {
        id: string;
        label: string;
        peers: string[];
        iceServers: {
            urls: string | string[];
            username?: string | undefined;
            credential?: string | undefined;
        }[];
        signalingServers: {
            url: string;
        }[];
        enableLoopback?: boolean | undefined;
    }>;
    type Cluster = z.infer<typeof Cluster>;
    const Recipe: z.ZodObject<{
        transition: z.ZodObject<{
            "@type": z.ZodLiteral<"Transition">;
            id: z.ZodString;
            href: z.ZodString;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                method: "SHA256";
                hex: string;
            }, {
                method: "SHA256";
                hex: string;
            }>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            duration: number;
            "@type": "Transition";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        }, {
            duration: number;
            "@type": "Transition";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        }>;
        schedule: z.ZodArray<z.ZodObject<{
            "@type": z.ZodLiteral<"Event">;
            id: z.ZodString;
            priority: z.ZodNumber;
            start: z.ZodString;
            timeZone: z.ZodString;
            duration: z.ZodString;
            playlist: z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                entries: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    id: z.ZodString;
                    href: z.ZodString;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        method: "SHA256";
                        hex: string;
                    }, {
                        method: "SHA256";
                        hex: string;
                    }>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                }, {
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                }>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    id: z.ZodString;
                    href: z.ZodString;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        method: "SHA256";
                        hex: string;
                    }, {
                        method: "SHA256";
                        hex: string;
                    }>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                }, {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                }>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    id: z.ZodString;
                    href: z.ZodString;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        method: "SHA256";
                        hex: string;
                    }, {
                        method: "SHA256";
                        hex: string;
                    }>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    sources: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        id: z.ZodString;
                        href: z.ZodString;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            method: "SHA256";
                            hex: string;
                        }, {
                            method: "SHA256";
                            hex: string;
                        }>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        duration: number;
                        "@type": "HTMLImageElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    }, {
                        duration: number;
                        "@type": "HTMLImageElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    }>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        id: z.ZodString;
                        href: z.ZodString;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            method: "SHA256";
                            hex: string;
                        }, {
                            method: "SHA256";
                            hex: string;
                        }>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        duration: number;
                        "@type": "HTMLVideoElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    }, {
                        duration: number;
                        "@type": "HTMLVideoElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    }>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        id: z.ZodString;
                        href: z.ZodString;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            method: "SHA256";
                            hex: string;
                        }, {
                            method: "SHA256";
                            hex: string;
                        }>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        "@type": "HTMLScriptElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    }, {
                        "@type": "HTMLScriptElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    }>]>, "many">;
                }, "strip", z.ZodTypeAny, {
                    duration: number;
                    "@type": "CustomElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                    sources: ({
                        duration: number;
                        "@type": "HTMLImageElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    } | {
                        duration: number;
                        "@type": "HTMLVideoElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    } | {
                        "@type": "HTMLScriptElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    })[];
                }, {
                    duration: number;
                    "@type": "CustomElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                    sources: ({
                        duration: number;
                        "@type": "HTMLImageElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    } | {
                        duration: number;
                        "@type": "HTMLVideoElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    } | {
                        "@type": "HTMLScriptElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    })[];
                }>]>, "many">;
            }, "strip", z.ZodTypeAny, {
                entries: ({
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "CustomElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                    sources: ({
                        duration: number;
                        "@type": "HTMLImageElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    } | {
                        duration: number;
                        "@type": "HTMLVideoElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    } | {
                        "@type": "HTMLScriptElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    })[];
                })[];
                "@type": "Playlist";
            }, {
                entries: ({
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "CustomElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                    sources: ({
                        duration: number;
                        "@type": "HTMLImageElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    } | {
                        duration: number;
                        "@type": "HTMLVideoElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    } | {
                        "@type": "HTMLScriptElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    })[];
                })[];
                "@type": "Playlist";
            }>;
            recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"RecurrenceRule">;
                frequency: z.ZodEnum<["secondly", "minutely", "hourly", "daily", "weekly", "monthly", "yearly"]>;
                interval: z.ZodOptional<z.ZodNumber>;
                firstDayOfWeek: z.ZodOptional<z.ZodEnum<["mo", "tu", "we", "th", "fr", "sa", "su"]>>;
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
                byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                byHour: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                timeZone: z.ZodOptional<z.ZodString>;
                times: z.ZodOptional<z.ZodNumber>;
                until: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                frequency: "secondly" | "minutely" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
                "@type": "RecurrenceRule";
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
                timeZone?: string | undefined;
                firstDayOfWeek?: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su" | undefined;
                byYearDay?: number[] | undefined;
                byWeekNo?: number[] | undefined;
                byHour?: number[] | undefined;
                byMinute?: number[] | undefined;
                bySecond?: number[] | undefined;
            }, {
                frequency: "secondly" | "minutely" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
                "@type": "RecurrenceRule";
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
                timeZone?: string | undefined;
                firstDayOfWeek?: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su" | undefined;
                byYearDay?: number[] | undefined;
                byWeekNo?: number[] | undefined;
                byHour?: number[] | undefined;
                byMinute?: number[] | undefined;
                bySecond?: number[] | undefined;
            }>, "many">>;
            onceOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    "@type": "MatchPattern";
                }, {
                    code: string;
                    "@type": "MatchPattern";
                }>;
            }, "strip", z.ZodTypeAny, {
                type: string;
                "@type": "DOMEvent";
                match: {
                    code: string;
                    "@type": "MatchPattern";
                };
            }, {
                type: string;
                "@type": "DOMEvent";
                match: {
                    code: string;
                    "@type": "MatchPattern";
                };
            }>>;
            enableOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    "@type": "MatchPattern";
                }, {
                    code: string;
                    "@type": "MatchPattern";
                }>;
            }, "strip", z.ZodTypeAny, {
                type: string;
                "@type": "DOMEvent";
                match: {
                    code: string;
                    "@type": "MatchPattern";
                };
            }, {
                type: string;
                "@type": "DOMEvent";
                match: {
                    code: string;
                    "@type": "MatchPattern";
                };
            }>>;
            disableOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    "@type": "MatchPattern";
                }, {
                    code: string;
                    "@type": "MatchPattern";
                }>;
            }, "strip", z.ZodTypeAny, {
                type: string;
                "@type": "DOMEvent";
                match: {
                    code: string;
                    "@type": "MatchPattern";
                };
            }, {
                type: string;
                "@type": "DOMEvent";
                match: {
                    code: string;
                    "@type": "MatchPattern";
                };
            }>>;
        }, "strip", z.ZodTypeAny, {
            priority: number;
            start: string;
            timeZone: string;
            duration: string;
            playlist: {
                entries: ({
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "CustomElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                    sources: ({
                        duration: number;
                        "@type": "HTMLImageElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    } | {
                        duration: number;
                        "@type": "HTMLVideoElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    } | {
                        "@type": "HTMLScriptElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    })[];
                })[];
                "@type": "Playlist";
            };
            "@type": "Event";
            id: string;
            recurrenceRules?: {
                frequency: "secondly" | "minutely" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
                "@type": "RecurrenceRule";
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
                timeZone?: string | undefined;
                firstDayOfWeek?: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su" | undefined;
                byYearDay?: number[] | undefined;
                byWeekNo?: number[] | undefined;
                byHour?: number[] | undefined;
                byMinute?: number[] | undefined;
                bySecond?: number[] | undefined;
            }[] | undefined;
            onceOn?: {
                type: string;
                "@type": "DOMEvent";
                match: {
                    code: string;
                    "@type": "MatchPattern";
                };
            } | undefined;
            enableOn?: {
                type: string;
                "@type": "DOMEvent";
                match: {
                    code: string;
                    "@type": "MatchPattern";
                };
            } | undefined;
            disableOn?: {
                type: string;
                "@type": "DOMEvent";
                match: {
                    code: string;
                    "@type": "MatchPattern";
                };
            } | undefined;
        }, {
            priority: number;
            start: string;
            timeZone: string;
            duration: string;
            playlist: {
                entries: ({
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "CustomElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                    sources: ({
                        duration: number;
                        "@type": "HTMLImageElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    } | {
                        duration: number;
                        "@type": "HTMLVideoElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    } | {
                        "@type": "HTMLScriptElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    })[];
                })[];
                "@type": "Playlist";
            };
            "@type": "Event";
            id: string;
            recurrenceRules?: {
                frequency: "secondly" | "minutely" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
                "@type": "RecurrenceRule";
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
                timeZone?: string | undefined;
                firstDayOfWeek?: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su" | undefined;
                byYearDay?: number[] | undefined;
                byWeekNo?: number[] | undefined;
                byHour?: number[] | undefined;
                byMinute?: number[] | undefined;
                bySecond?: number[] | undefined;
            }[] | undefined;
            onceOn?: {
                type: string;
                "@type": "DOMEvent";
                match: {
                    code: string;
                    "@type": "MatchPattern";
                };
            } | undefined;
            enableOn?: {
                type: string;
                "@type": "DOMEvent";
                match: {
                    code: string;
                    "@type": "MatchPattern";
                };
            } | undefined;
            disableOn?: {
                type: string;
                "@type": "DOMEvent";
                match: {
                    code: string;
                    "@type": "MatchPattern";
                };
            } | undefined;
        }>, "many">;
        $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            "@type": z.ZodLiteral<"Playlist">;
            entries: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                id: z.ZodString;
                href: z.ZodString;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    method: "SHA256";
                    hex: string;
                }, {
                    method: "SHA256";
                    hex: string;
                }>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                duration: number;
                "@type": "HTMLImageElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            }, {
                duration: number;
                "@type": "HTMLImageElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            }>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                id: z.ZodString;
                href: z.ZodString;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    method: "SHA256";
                    hex: string;
                }, {
                    method: "SHA256";
                    hex: string;
                }>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                duration: number;
                "@type": "HTMLVideoElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            }, {
                duration: number;
                "@type": "HTMLVideoElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            }>, z.ZodObject<{
                "@type": z.ZodLiteral<"CustomElement">;
                id: z.ZodString;
                href: z.ZodString;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    method: "SHA256";
                    hex: string;
                }, {
                    method: "SHA256";
                    hex: string;
                }>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                sources: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    id: z.ZodString;
                    href: z.ZodString;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        method: "SHA256";
                        hex: string;
                    }, {
                        method: "SHA256";
                        hex: string;
                    }>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                }, {
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                }>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    id: z.ZodString;
                    href: z.ZodString;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        method: "SHA256";
                        hex: string;
                    }, {
                        method: "SHA256";
                        hex: string;
                    }>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                }, {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                }>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                    id: z.ZodString;
                    href: z.ZodString;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        method: "SHA256";
                        hex: string;
                    }, {
                        method: "SHA256";
                        hex: string;
                    }>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    "@type": "HTMLScriptElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                }, {
                    "@type": "HTMLScriptElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                }>]>, "many">;
            }, "strip", z.ZodTypeAny, {
                duration: number;
                "@type": "CustomElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                sources: ({
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    "@type": "HTMLScriptElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                })[];
            }, {
                duration: number;
                "@type": "CustomElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                sources: ({
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    "@type": "HTMLScriptElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                })[];
            }>]>, "many">;
        }, "strip", z.ZodTypeAny, {
            entries: ({
                duration: number;
                "@type": "HTMLImageElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "HTMLVideoElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "CustomElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                sources: ({
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    "@type": "HTMLScriptElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                })[];
            })[];
            "@type": "Playlist";
        }, {
            entries: ({
                duration: number;
                "@type": "HTMLImageElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "HTMLVideoElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "CustomElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                sources: ({
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    "@type": "HTMLScriptElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                })[];
            })[];
            "@type": "Playlist";
        }>>>;
        cluster: z.ZodOptional<z.ZodObject<{
            label: z.ZodString;
            id: z.ZodString;
            peers: z.ZodArray<z.ZodString, "many">;
            iceServers: z.ZodArray<z.ZodObject<{
                urls: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
                username: z.ZodOptional<z.ZodString>;
                credential: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                urls: string | string[];
                username?: string | undefined;
                credential?: string | undefined;
            }, {
                urls: string | string[];
                username?: string | undefined;
                credential?: string | undefined;
            }>, "many">;
            signalingServers: z.ZodArray<z.ZodObject<{
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
            }, {
                url: string;
            }>, "many">;
            enableLoopback: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            label: string;
            peers: string[];
            iceServers: {
                urls: string | string[];
                username?: string | undefined;
                credential?: string | undefined;
            }[];
            signalingServers: {
                url: string;
            }[];
            enableLoopback?: boolean | undefined;
        }, {
            id: string;
            label: string;
            peers: string[];
            iceServers: {
                urls: string | string[];
                username?: string | undefined;
                credential?: string | undefined;
            }[];
            signalingServers: {
                url: string;
            }[];
            enableLoopback?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        transition: {
            duration: number;
            "@type": "Transition";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        };
        schedule: {
            priority: number;
            start: string;
            timeZone: string;
            duration: string;
            playlist: {
                entries: ({
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "CustomElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                    sources: ({
                        duration: number;
                        "@type": "HTMLImageElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    } | {
                        duration: number;
                        "@type": "HTMLVideoElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    } | {
                        "@type": "HTMLScriptElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    })[];
                })[];
                "@type": "Playlist";
            };
            "@type": "Event";
            id: string;
            recurrenceRules?: {
                frequency: "secondly" | "minutely" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
                "@type": "RecurrenceRule";
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
                timeZone?: string | undefined;
                firstDayOfWeek?: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su" | undefined;
                byYearDay?: number[] | undefined;
                byWeekNo?: number[] | undefined;
                byHour?: number[] | undefined;
                byMinute?: number[] | undefined;
                bySecond?: number[] | undefined;
            }[] | undefined;
            onceOn?: {
                type: string;
                "@type": "DOMEvent";
                match: {
                    code: string;
                    "@type": "MatchPattern";
                };
            } | undefined;
            enableOn?: {
                type: string;
                "@type": "DOMEvent";
                match: {
                    code: string;
                    "@type": "MatchPattern";
                };
            } | undefined;
            disableOn?: {
                type: string;
                "@type": "DOMEvent";
                match: {
                    code: string;
                    "@type": "MatchPattern";
                };
            } | undefined;
        }[];
        $defs?: Record<string, {
            entries: ({
                duration: number;
                "@type": "HTMLImageElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "HTMLVideoElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "CustomElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                sources: ({
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    "@type": "HTMLScriptElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                })[];
            })[];
            "@type": "Playlist";
        }> | undefined;
        cluster?: {
            id: string;
            label: string;
            peers: string[];
            iceServers: {
                urls: string | string[];
                username?: string | undefined;
                credential?: string | undefined;
            }[];
            signalingServers: {
                url: string;
            }[];
            enableLoopback?: boolean | undefined;
        } | undefined;
    }, {
        transition: {
            duration: number;
            "@type": "Transition";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        };
        schedule: {
            priority: number;
            start: string;
            timeZone: string;
            duration: string;
            playlist: {
                entries: ({
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "CustomElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                    sources: ({
                        duration: number;
                        "@type": "HTMLImageElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    } | {
                        duration: number;
                        "@type": "HTMLVideoElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    } | {
                        "@type": "HTMLScriptElement";
                        id: string;
                        href: string;
                        size: number;
                        hash: {
                            method: "SHA256";
                            hex: string;
                        };
                        md5: string;
                        integrity: string;
                    })[];
                })[];
                "@type": "Playlist";
            };
            "@type": "Event";
            id: string;
            recurrenceRules?: {
                frequency: "secondly" | "minutely" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
                "@type": "RecurrenceRule";
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
                timeZone?: string | undefined;
                firstDayOfWeek?: "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su" | undefined;
                byYearDay?: number[] | undefined;
                byWeekNo?: number[] | undefined;
                byHour?: number[] | undefined;
                byMinute?: number[] | undefined;
                bySecond?: number[] | undefined;
            }[] | undefined;
            onceOn?: {
                type: string;
                "@type": "DOMEvent";
                match: {
                    code: string;
                    "@type": "MatchPattern";
                };
            } | undefined;
            enableOn?: {
                type: string;
                "@type": "DOMEvent";
                match: {
                    code: string;
                    "@type": "MatchPattern";
                };
            } | undefined;
            disableOn?: {
                type: string;
                "@type": "DOMEvent";
                match: {
                    code: string;
                    "@type": "MatchPattern";
                };
            } | undefined;
        }[];
        $defs?: Record<string, {
            entries: ({
                duration: number;
                "@type": "HTMLImageElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "HTMLVideoElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
            } | {
                duration: number;
                "@type": "CustomElement";
                id: string;
                href: string;
                size: number;
                hash: {
                    method: "SHA256";
                    hex: string;
                };
                md5: string;
                integrity: string;
                sources: ({
                    duration: number;
                    "@type": "HTMLImageElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    duration: number;
                    "@type": "HTMLVideoElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                } | {
                    "@type": "HTMLScriptElement";
                    id: string;
                    href: string;
                    size: number;
                    hash: {
                        method: "SHA256";
                        hex: string;
                    };
                    md5: string;
                    integrity: string;
                })[];
            })[];
            "@type": "Playlist";
        }> | undefined;
        cluster?: {
            id: string;
            label: string;
            peers: string[];
            iceServers: {
                urls: string | string[];
                username?: string | undefined;
                credential?: string | undefined;
            }[];
            signalingServers: {
                url: string;
            }[];
            enableLoopback?: boolean | undefined;
        } | undefined;
    }>;
    type Recipe = z.infer<typeof Recipe>;
    const RecipeLink: z.ZodObject<{
        "@type": z.ZodLiteral<"RecipeLink">;
        id: z.ZodString;
        href: z.ZodString;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            method: "SHA256";
            hex: string;
        }, {
            method: "SHA256";
            hex: string;
        }>;
        md5: z.ZodString;
        integrity: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        "@type": "RecipeLink";
        id: string;
        href: string;
        size: number;
        hash: {
            method: "SHA256";
            hex: string;
        };
        md5: string;
        integrity: string;
    }, {
        "@type": "RecipeLink";
        id: string;
        href: string;
        size: number;
        hash: {
            method: "SHA256";
            hex: string;
        };
        md5: string;
        integrity: string;
    }>;
    type RecipeLink = z.infer<typeof RecipeLink>;
}
