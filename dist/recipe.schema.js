// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod/v4';
export var RecipeSchema;
(function (RecipeSchema) {
    RecipeSchema.HashValue = z.object({
        method: z.literal("SHA256")
            .describe("Hash method"),
        hex: z.string()
            .describe("Hexadecimal hash value"),
    })
        .describe("SHA-256 hash value");
    // Define types for HTML elements
    RecipeSchema.HTMLImageElement = z.object({
        "@type": z.literal("HTMLImageElement")
            .describe("Type of the HTML element"),
        id: z.uuid()
            .describe("ID of the image"),
        href: z.url().min(20).max(2048)
            .describe("URL of the image"),
        size: z.number().min(20).max(5368709120) // 5GB
            .describe("Size of the image in bytes"),
        hash: RecipeSchema.HashValue,
        md5: z.string().length(24) // Base64 encoded 16 bytes.
            .describe("MD5 hash value"),
        integrity: z.string()
            .describe("Subresource Integrity (SRI) value"),
        duration: z.number().min(1).max(86400)
            .describe("Duration of the image in seconds"),
        params: z.any()
            .describe("Optional parameters of the image element"),
    })
        .describe("HTML image element");
    RecipeSchema.HTMLVideoElement = z.object({
        "@type": z.literal("HTMLVideoElement")
            .describe("Type of the HTML element"),
        id: z.uuid()
            .describe("ID of the video"),
        href: z.url().min(20).max(2048)
            .describe("URL of the video"),
        size: z.number().min(20).max(5497558138880) // 5TB
            .describe("Size of the video in bytes"),
        hash: RecipeSchema.HashValue,
        md5: z.string().length(24) // Base64 encoded 16 bytes.
            .describe("MD5 hash value"),
        integrity: z.string()
            .describe("Subresource Integrity (SRI) value"),
        duration: z.number().min(1).max(86400)
            .describe("Duration of the video in seconds"),
        params: z.any()
            .describe("Optional parameters of the video element"),
    })
        .describe("HTML video element");
    RecipeSchema.HTMLScriptElement = z.object({
        "@type": z.literal("HTMLScriptElement")
            .describe("Type of the HTML element"),
        id: z.uuid()
            .describe("ID of the script"),
        href: z.url().min(20).max(2048)
            .describe("URL of the script"),
        size: z.number().min(20).max(1073741824) // 1GB
            .describe("Size of the script in bytes"),
        hash: RecipeSchema.HashValue,
        md5: z.string().length(24) // Base64 encoded 16 bytes.
            .describe("MD5 hash value"),
        integrity: z.string()
            .describe("Subresource Integrity (SRI) value"),
    })
        .describe("HTML script element");
    RecipeSchema.CustomElement = z.object({
        "@type": z.literal("CustomElement")
            .describe("Type of the custom element"),
        id: z.uuid()
            .describe("ID of the custom element"),
        href: z.url().min(20).max(2048)
            .describe("URL of the custom element"),
        size: z.number().min(20).max(1073741824) // 1GB
            .describe("Size of the custom element in bytes"),
        hash: RecipeSchema.HashValue,
        md5: z.string().length(24) // Base64 encoded 16 bytes.
            .describe("MD5 hash value"),
        integrity: z.string()
            .describe("Subresource Integrity (SRI) value"),
        duration: z.number().min(1).max(86400)
            .describe("Duration of the custom element in seconds"),
        params: z.any()
            .describe("Optional parameters of the custom element"),
        sources: z.array(z.union([RecipeSchema.HTMLImageElement, RecipeSchema.HTMLVideoElement, RecipeSchema.HTMLScriptElement]))
            .describe("Array of sources"),
    })
        .describe("Custom element");
    // Define types for other components
    RecipeSchema.RecurrenceRule = z.object({
        "@type": z.literal("RecurrenceRule")
            .describe("Type of the recurrence rule"),
        frequency: z.enum([
            "secondly",
            "minutely",
            "hourly",
            "daily",
            "weekly",
            "monthly",
            "yearly",
        ])
            .describe("Frequency of the recurrence rule"),
        interval: z.number().int().min(1).max(1000).optional()
            .describe("Interval of the recurrence rule"),
        firstDayOfWeek: z.enum(["mo", "tu", "we", "th", "fr", "sa", "su"]).optional()
            .describe("First day of the week"),
        byDay: z.array(z.object({
            day: z.enum(["mo", "tu", "we", "th", "fr", "sa", "su"]),
            nthOfPeriod: z.number().int().optional(),
        })).optional()
            .describe("Array of Nth days"),
        byMonthDay: z.array(z.number().int().min(1).max(31)).optional()
            .describe("Array of month days"),
        byMonth: z.array(z.number().int().min(1).max(12)).optional()
            .describe("Array of months"),
        byYearDay: z.array(z.number().int().min(1).max(366)).optional()
            .describe("Array of year days"),
        byWeekNo: z.array(z.number().int().min(1).max(53)).optional()
            .describe("Array of week numbers"),
        byHour: z.array(z.number().int().min(0).max(23)).optional()
            .describe("Array of hours"),
        byMinute: z.array(z.number().int().min(0).max(59)).optional()
            .describe("Array of minutes"),
        bySecond: z.array(z.number().int().min(0).max(59)).optional()
            .describe("Array of seconds"),
        bySetPosition: z.array(z.number().int()).optional()
            .describe("Array of set positions"),
        timeZone: z.string().optional()
            .describe("Time zone"),
        times: z.number().int().min(1).max(1000).optional()
            .describe("Number of times the recurrence rule repeats"),
        until: z.iso.datetime().optional()
            .describe("ISO datetime until the recurrence rule repeats"),
    })
        .describe("Recurrence rule");
    RecipeSchema.MatchPattern = z.object({
        "@type": z.literal("MatchPattern")
            .describe("Type of the match pattern"),
        code: z.string()
            .describe("Code of the match pattern"),
    })
        .describe("Match pattern");
    RecipeSchema.DOMEvent = z.object({
        "@type": z.literal("DOMEvent")
            .describe("Type of the DOM event"),
        type: z.string()
            .describe("Type of the DOM event"),
        match: RecipeSchema.MatchPattern,
    })
        .describe("DOM event");
    RecipeSchema.Playlist = z.object({
        "@type": z.literal("Playlist")
            .describe("Type of the playlist"),
        entries: z.array(z.union([RecipeSchema.HTMLImageElement, RecipeSchema.HTMLVideoElement, RecipeSchema.CustomElement]))
            .describe("Array of entries"),
    })
        .describe("Playlist");
    RecipeSchema.Event = z.object({
        "@type": z.literal("Event")
            .describe("Type of the event"),
        id: z.uuid()
            .describe("ID of the event"),
        priority: z.number().int().min(0).max(10)
            .describe("Priority of the event"),
        start: z.iso.datetime()
            .describe("ISO datetime of the start of the event"),
        timeZone: z.string()
            .describe("Time zone of the event"),
        duration: z.string()
            .describe("Duration of the event"),
        playlist: RecipeSchema.Playlist,
        recurrenceRules: z.array(RecipeSchema.RecurrenceRule).optional()
            .describe("Array of recurrence rules"),
        onceOn: RecipeSchema.DOMEvent.optional()
            .describe("Once on DOM event"),
        enableOn: RecipeSchema.DOMEvent.optional()
            .describe("Enable on DOM event"),
        disableOn: RecipeSchema.DOMEvent.optional()
            .describe("Disable on DOM event"),
    })
        .describe("Event");
    RecipeSchema.Transition = z.object({
        "@type": z.literal("Transition")
            .describe("Type of the transition"),
        id: z.uuid()
            .describe("ID of the transition"),
        href: z.url().min(20).max(2048)
            .describe("URL of the transition"),
        size: z.number().min(20).max(1073741824) // 1GB
            .describe("Size of the transition in bytes"),
        hash: RecipeSchema.HashValue,
        md5: z.string().length(24) // Base64 encoded 16 bytes.
            .describe("MD5 hash value"),
        integrity: z.string()
            .describe("Subresource Integrity (SRI) value"),
        duration: z.number().min(1).max(86400)
            .describe("Duration of the transition in seconds"),
    })
        .describe("Transition");
    RecipeSchema.SignalingServer = z.object({
        url: z.url().min(20).max(2048)
            .describe("URL of the signaling server"),
    })
        .describe("Signaling server");
    // aka RTCIceServer in the DOM.
    RecipeSchema.IceServer = z.object({
        urls: z.union([z.string(), z.array(z.string())])
            .describe("URLs of the ICE server"),
        username: z.string().optional()
            .describe("Username of the ICE server"),
        credential: z.string().optional()
            .describe("Credential of the ICE server"),
    })
        .describe("ICE server");
    RecipeSchema.Cluster = z.object({
        label: z.string()
            .describe("Label of the cluster"),
        id: z.uuid()
            .describe("ID of the cluster"),
        peers: z.array(z.uuid())
            .describe("Array of peer IDs"),
        iceServers: z.array(RecipeSchema.IceServer)
            .describe("Array of ICE servers"),
        signalingServers: z.array(RecipeSchema.SignalingServer)
            .describe("Array of signaling servers"),
        enableLoopback: z.boolean().optional()
            .describe("Enable loopback"),
    })
        .describe("Cluster");
    // Compose the final type
    RecipeSchema.Recipe = z.object({
        transition: RecipeSchema.Transition,
        schedule: z.array(RecipeSchema.Event)
            .describe("Array of events"),
        $defs: z.record(z.string(), RecipeSchema.Playlist).optional()
            .describe("Definitions of playlists"),
        cluster: RecipeSchema.Cluster.optional()
            .describe("Cluster configuration"),
    })
        .describe("Recipe");
    // Link to a recipe
    RecipeSchema.RecipeLink = z.object({
        "@type": z.literal("RecipeLink")
            .describe("Type of the recipe link"),
        id: z.uuid()
            .describe("ID of the recipe"),
        href: z.url().min(20).max(2048)
            .describe("URL of the recipe"),
        size: z.number().min(20).max(1073741824) // 1GB
            .describe("Size of the recipe in bytes"),
        hash: RecipeSchema.HashValue,
        md5: z.string().length(24) // Base64 encoded 16 bytes.
            .describe("MD5 hash value"),
        integrity: z.string()
            .describe("Subresource Integrity (SRI) value"),
    })
        .describe("Recipe link");
})(RecipeSchema || (RecipeSchema = {}));
//# sourceMappingURL=recipe.schema.js.map