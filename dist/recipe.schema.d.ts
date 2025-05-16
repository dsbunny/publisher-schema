import { z } from 'zod/v4';
export declare namespace RecipeSchema {
    const HashValue: z.ZodObject<{
        method: z.ZodLiteral<"SHA256">;
        hex: z.ZodString;
    }, {}, {}>;
    const HTMLImageElement: z.ZodObject<{
        "@type": z.ZodLiteral<"HTMLImageElement">;
        id: z.ZodUUID;
        href: z.ZodURL;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, {}, {}>;
        md5: z.ZodString;
        integrity: z.ZodString;
        duration: z.ZodNumber;
    }, {}, {}>;
    type HTMLImageElement = z.infer<typeof HTMLImageElement>;
    const HTMLVideoElement: z.ZodObject<{
        "@type": z.ZodLiteral<"HTMLVideoElement">;
        id: z.ZodUUID;
        href: z.ZodURL;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, {}, {}>;
        md5: z.ZodString;
        integrity: z.ZodString;
        duration: z.ZodNumber;
    }, {}, {}>;
    type HTMLVideoElement = z.infer<typeof HTMLVideoElement>;
    const HTMLScriptElement: z.ZodObject<{
        "@type": z.ZodLiteral<"HTMLScriptElement">;
        id: z.ZodUUID;
        href: z.ZodURL;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, {}, {}>;
        md5: z.ZodString;
        integrity: z.ZodString;
    }, {}, {}>;
    type HTMLScriptElement = z.infer<typeof HTMLScriptElement>;
    const CustomElement: z.ZodObject<{
        "@type": z.ZodLiteral<"CustomElement">;
        id: z.ZodUUID;
        href: z.ZodURL;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, {}, {}>;
        md5: z.ZodString;
        integrity: z.ZodString;
        duration: z.ZodNumber;
        sources: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLImageElement">;
            id: z.ZodUUID;
            href: z.ZodURL;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, {}, {}>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
        }, {}, {}>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLVideoElement">;
            id: z.ZodUUID;
            href: z.ZodURL;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, {}, {}>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
        }, {}, {}>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLScriptElement">;
            id: z.ZodUUID;
            href: z.ZodURL;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, {}, {}>;
            md5: z.ZodString;
            integrity: z.ZodString;
        }, {}, {}>]>>;
    }, {}, {}>;
    type CustomElement = z.infer<typeof CustomElement>;
    const RecurrenceRule: z.ZodObject<{
        "@type": z.ZodLiteral<"RecurrenceRule">;
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
        firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
            mo: "mo";
            tu: "tu";
            we: "we";
            th: "th";
            fr: "fr";
            sa: "sa";
            su: "su";
        }>>;
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
        }, {}, {}>>>;
        byMonthDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        byMonth: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        timeZone: z.ZodOptional<z.ZodString>;
        times: z.ZodOptional<z.ZodNumber>;
        until: z.ZodOptional<z.iso.ZodISODateTime>;
    }, {}, {}>;
    type RecurrenceRule = z.infer<typeof RecurrenceRule>;
    const MatchPattern: z.ZodObject<{
        "@type": z.ZodLiteral<"MatchPattern">;
        code: z.ZodString;
    }, {}, {}>;
    type MatchPattern = z.infer<typeof MatchPattern>;
    const DOMEvent: z.ZodObject<{
        "@type": z.ZodLiteral<"DOMEvent">;
        type: z.ZodString;
        match: z.ZodObject<{
            "@type": z.ZodLiteral<"MatchPattern">;
            code: z.ZodString;
        }, {}, {}>;
    }, {}, {}>;
    type DOMEvent = z.infer<typeof DOMEvent>;
    const Playlist: z.ZodObject<{
        "@type": z.ZodLiteral<"Playlist">;
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLImageElement">;
            id: z.ZodUUID;
            href: z.ZodURL;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, {}, {}>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
        }, {}, {}>, z.ZodObject<{
            "@type": z.ZodLiteral<"HTMLVideoElement">;
            id: z.ZodUUID;
            href: z.ZodURL;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, {}, {}>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
        }, {}, {}>, z.ZodObject<{
            "@type": z.ZodLiteral<"CustomElement">;
            id: z.ZodUUID;
            href: z.ZodURL;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, {}, {}>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
            sources: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                id: z.ZodUUID;
                href: z.ZodURL;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, {}, {}>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
            }, {}, {}>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                id: z.ZodUUID;
                href: z.ZodURL;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, {}, {}>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
            }, {}, {}>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLScriptElement">;
                id: z.ZodUUID;
                href: z.ZodURL;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, {}, {}>;
                md5: z.ZodString;
                integrity: z.ZodString;
            }, {}, {}>]>>;
        }, {}, {}>]>>;
    }, {}, {}>;
    type Playlist = z.infer<typeof Playlist>;
    const Event: z.ZodObject<{
        "@type": z.ZodLiteral<"Event">;
        id: z.ZodUUID;
        priority: z.ZodNumber;
        start: z.iso.ZodISODateTime;
        timeZone: z.ZodString;
        duration: z.ZodString;
        playlist: z.ZodObject<{
            "@type": z.ZodLiteral<"Playlist">;
            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                id: z.ZodUUID;
                href: z.ZodURL;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, {}, {}>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
            }, {}, {}>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                id: z.ZodUUID;
                href: z.ZodURL;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, {}, {}>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
            }, {}, {}>, z.ZodObject<{
                "@type": z.ZodLiteral<"CustomElement">;
                id: z.ZodUUID;
                href: z.ZodURL;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, {}, {}>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                sources: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    id: z.ZodUUID;
                    href: z.ZodURL;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, {}, {}>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                }, {}, {}>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    id: z.ZodUUID;
                    href: z.ZodURL;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, {}, {}>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                }, {}, {}>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                    id: z.ZodUUID;
                    href: z.ZodURL;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, {}, {}>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, {}, {}>]>>;
            }, {}, {}>]>>;
        }, {}, {}>;
        recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            "@type": z.ZodLiteral<"RecurrenceRule">;
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
            firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                mo: "mo";
                tu: "tu";
                we: "we";
                th: "th";
                fr: "fr";
                sa: "sa";
                su: "su";
            }>>;
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
            }, {}, {}>>>;
            byMonthDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            byMonth: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            timeZone: z.ZodOptional<z.ZodString>;
            times: z.ZodOptional<z.ZodNumber>;
            until: z.ZodOptional<z.iso.ZodISODateTime>;
        }, {}, {}>>>;
        onceOn: z.ZodOptional<z.ZodObject<{
            "@type": z.ZodLiteral<"DOMEvent">;
            type: z.ZodString;
            match: z.ZodObject<{
                "@type": z.ZodLiteral<"MatchPattern">;
                code: z.ZodString;
            }, {}, {}>;
        }, {}, {}>>;
        enableOn: z.ZodOptional<z.ZodObject<{
            "@type": z.ZodLiteral<"DOMEvent">;
            type: z.ZodString;
            match: z.ZodObject<{
                "@type": z.ZodLiteral<"MatchPattern">;
                code: z.ZodString;
            }, {}, {}>;
        }, {}, {}>>;
        disableOn: z.ZodOptional<z.ZodObject<{
            "@type": z.ZodLiteral<"DOMEvent">;
            type: z.ZodString;
            match: z.ZodObject<{
                "@type": z.ZodLiteral<"MatchPattern">;
                code: z.ZodString;
            }, {}, {}>;
        }, {}, {}>>;
    }, {}, {}>;
    type Event = z.infer<typeof Event>;
    const Transition: z.ZodObject<{
        "@type": z.ZodLiteral<"Transition">;
        id: z.ZodUUID;
        href: z.ZodURL;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, {}, {}>;
        md5: z.ZodString;
        integrity: z.ZodString;
        duration: z.ZodNumber;
    }, {}, {}>;
    type Transition = z.infer<typeof Transition>;
    const SignalingServer: z.ZodObject<{
        url: z.ZodURL;
    }, {}, {}>;
    type SignalingServer = z.infer<typeof SignalingServer>;
    const IceServer: z.ZodObject<{
        urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        username: z.ZodOptional<z.ZodString>;
        credential: z.ZodOptional<z.ZodString>;
    }, {}, {}>;
    type IceServer = z.infer<typeof IceServer>;
    const Cluster: z.ZodObject<{
        label: z.ZodString;
        id: z.ZodUUID;
        peers: z.ZodArray<z.ZodUUID>;
        iceServers: z.ZodArray<z.ZodObject<{
            urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
            username: z.ZodOptional<z.ZodString>;
            credential: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        signalingServers: z.ZodArray<z.ZodObject<{
            url: z.ZodURL;
        }, {}, {}>>;
        enableLoopback: z.ZodOptional<z.ZodBoolean>;
    }, {}, {}>;
    type Cluster = z.infer<typeof Cluster>;
    const Recipe: z.ZodObject<{
        transition: z.ZodObject<{
            "@type": z.ZodLiteral<"Transition">;
            id: z.ZodUUID;
            href: z.ZodURL;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, {}, {}>;
            md5: z.ZodString;
            integrity: z.ZodString;
            duration: z.ZodNumber;
        }, {}, {}>;
        schedule: z.ZodArray<z.ZodObject<{
            "@type": z.ZodLiteral<"Event">;
            id: z.ZodUUID;
            priority: z.ZodNumber;
            start: z.iso.ZodISODateTime;
            timeZone: z.ZodString;
            duration: z.ZodString;
            playlist: z.ZodObject<{
                "@type": z.ZodLiteral<"Playlist">;
                entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    id: z.ZodUUID;
                    href: z.ZodURL;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, {}, {}>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                }, {}, {}>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    id: z.ZodUUID;
                    href: z.ZodURL;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, {}, {}>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                }, {}, {}>, z.ZodObject<{
                    "@type": z.ZodLiteral<"CustomElement">;
                    id: z.ZodUUID;
                    href: z.ZodURL;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, {}, {}>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                    sources: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLImageElement">;
                        id: z.ZodUUID;
                        href: z.ZodURL;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, {}, {}>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                    }, {}, {}>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLVideoElement">;
                        id: z.ZodUUID;
                        href: z.ZodURL;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, {}, {}>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                        duration: z.ZodNumber;
                    }, {}, {}>, z.ZodObject<{
                        "@type": z.ZodLiteral<"HTMLScriptElement">;
                        id: z.ZodUUID;
                        href: z.ZodURL;
                        size: z.ZodNumber;
                        hash: z.ZodObject<{
                            method: z.ZodLiteral<"SHA256">;
                            hex: z.ZodString;
                        }, {}, {}>;
                        md5: z.ZodString;
                        integrity: z.ZodString;
                    }, {}, {}>]>>;
                }, {}, {}>]>>;
            }, {}, {}>;
            recurrenceRules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                "@type": z.ZodLiteral<"RecurrenceRule">;
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
                firstDayOfWeek: z.ZodOptional<z.ZodEnum<{
                    mo: "mo";
                    tu: "tu";
                    we: "we";
                    th: "th";
                    fr: "fr";
                    sa: "sa";
                    su: "su";
                }>>;
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
                }, {}, {}>>>;
                byMonthDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byMonth: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byYearDay: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byWeekNo: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byHour: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                byMinute: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                bySecond: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                bySetPosition: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
                timeZone: z.ZodOptional<z.ZodString>;
                times: z.ZodOptional<z.ZodNumber>;
                until: z.ZodOptional<z.iso.ZodISODateTime>;
            }, {}, {}>>>;
            onceOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, {}, {}>;
            }, {}, {}>>;
            enableOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, {}, {}>;
            }, {}, {}>>;
            disableOn: z.ZodOptional<z.ZodObject<{
                "@type": z.ZodLiteral<"DOMEvent">;
                type: z.ZodString;
                match: z.ZodObject<{
                    "@type": z.ZodLiteral<"MatchPattern">;
                    code: z.ZodString;
                }, {}, {}>;
            }, {}, {}>>;
        }, {}, {}>>;
        $defs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            "@type": z.ZodLiteral<"Playlist">;
            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLImageElement">;
                id: z.ZodUUID;
                href: z.ZodURL;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, {}, {}>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
            }, {}, {}>, z.ZodObject<{
                "@type": z.ZodLiteral<"HTMLVideoElement">;
                id: z.ZodUUID;
                href: z.ZodURL;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, {}, {}>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
            }, {}, {}>, z.ZodObject<{
                "@type": z.ZodLiteral<"CustomElement">;
                id: z.ZodUUID;
                href: z.ZodURL;
                size: z.ZodNumber;
                hash: z.ZodObject<{
                    method: z.ZodLiteral<"SHA256">;
                    hex: z.ZodString;
                }, {}, {}>;
                md5: z.ZodString;
                integrity: z.ZodString;
                duration: z.ZodNumber;
                sources: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLImageElement">;
                    id: z.ZodUUID;
                    href: z.ZodURL;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, {}, {}>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                }, {}, {}>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLVideoElement">;
                    id: z.ZodUUID;
                    href: z.ZodURL;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, {}, {}>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                    duration: z.ZodNumber;
                }, {}, {}>, z.ZodObject<{
                    "@type": z.ZodLiteral<"HTMLScriptElement">;
                    id: z.ZodUUID;
                    href: z.ZodURL;
                    size: z.ZodNumber;
                    hash: z.ZodObject<{
                        method: z.ZodLiteral<"SHA256">;
                        hex: z.ZodString;
                    }, {}, {}>;
                    md5: z.ZodString;
                    integrity: z.ZodString;
                }, {}, {}>]>>;
            }, {}, {}>]>>;
        }, {}, {}>>>;
        cluster: z.ZodOptional<z.ZodObject<{
            label: z.ZodString;
            id: z.ZodUUID;
            peers: z.ZodArray<z.ZodUUID>;
            iceServers: z.ZodArray<z.ZodObject<{
                urls: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                username: z.ZodOptional<z.ZodString>;
                credential: z.ZodOptional<z.ZodString>;
            }, {}, {}>>;
            signalingServers: z.ZodArray<z.ZodObject<{
                url: z.ZodURL;
            }, {}, {}>>;
            enableLoopback: z.ZodOptional<z.ZodBoolean>;
        }, {}, {}>>;
    }, {}, {}>;
    type Recipe = z.infer<typeof Recipe>;
    const RecipeLink: z.ZodObject<{
        "@type": z.ZodLiteral<"RecipeLink">;
        id: z.ZodUUID;
        href: z.ZodURL;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, {}, {}>;
        md5: z.ZodString;
        integrity: z.ZodString;
    }, {}, {}>;
    type RecipeLink = z.infer<typeof RecipeLink>;
}
