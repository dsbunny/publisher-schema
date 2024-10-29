// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod';

export namespace RecipeSchema {

	export const HashValue = z.object({
		method: z.literal("SHA256")
			.describe("Hash method"),
		hex: z.string()
			.describe("Hexadecimal hash value"),
	})
		.describe("SHA-256 hash value");

	// Define types for HTML elements
	export const HTMLImageElement = z.object({
		"@type": z.literal("HTMLImageElement")
			.describe("Type of the HTML element"),
		id: z.string().uuid()
			.describe("ID of the image"),
		href: z.string().url().min(20).max(2048)
			.describe("URL of the image"),
		size: z.number().min(20).max(5368709120)  // 5GB
			.describe("Size of the image in bytes"),
		hash: HashValue,
		md5: z.string().length(24)  // Base64 encoded 16 bytes.
			.describe("MD5 hash value"),
		integrity: z.string()
			.describe("Subresource Integrity (SRI) value"),
		duration: z.number().min(1).max(86400)
			.describe("Duration of the image in seconds"),
	})
		.describe("HTML image element");
	export type HTMLImageElement = z.infer<typeof HTMLImageElement>;

	export const HTMLVideoElement = z.object({
		"@type": z.literal("HTMLVideoElement")
			.describe("Type of the HTML element"),
		id: z.string().uuid()
			.describe("ID of the video"),
		href: z.string().url().min(20).max(2048)
			.describe("URL of the video"),
		size: z.number().min(20).max(5497558138880) // 5TB
			.describe("Size of the video in bytes"),
		hash: HashValue,
		md5: z.string().length(24)  // Base64 encoded 16 bytes.
			.describe("MD5 hash value"),
		integrity: z.string()
			.describe("Subresource Integrity (SRI) value"),
		duration: z.number().min(1).max(86400)
			.describe("Duration of the video in seconds"),
	})
		.describe("HTML video element");
	export type HTMLVideoElement = z.infer<typeof HTMLVideoElement>;

	export const HTMLScriptElement = z.object({
		"@type": z.literal("HTMLScriptElement")
			.describe("Type of the HTML element"),
		id: z.string().uuid()
			.describe("ID of the script"),
		href: z.string().url().min(20).max(2048)
			.describe("URL of the script"),
		size: z.number().min(20).max(1073741824) // 1GB
			.describe("Size of the script in bytes"),
		hash: HashValue,
		md5: z.string().length(24)  // Base64 encoded 16 bytes.
			.describe("MD5 hash value"),
		integrity: z.string()
			.describe("Subresource Integrity (SRI) value"),
	})
		.describe("HTML script element");
	export type HTMLScriptElement = z.infer<typeof HTMLScriptElement>;

	export const CustomElement = z.object({
		"@type": z.literal("CustomElement")
			.describe("Type of the custom element"),
		id: z.string().uuid()
			.describe("ID of the custom element"),
		href: z.string().url().min(20).max(2048)
			.describe("URL of the custom element"),
		size: z.number().min(20).max(1073741824) // 1GB
			.describe("Size of the custom element in bytes"),
		hash: HashValue,
		md5: z.string().length(24)  // Base64 encoded 16 bytes.
			.describe("MD5 hash value"),
		integrity: z.string()
			.describe("Subresource Integrity (SRI) value"),
		duration: z.number().min(1).max(86400)
			.describe("Duration of the custom element in seconds"),
		sources: z.array(z.union([HTMLImageElement, HTMLVideoElement, HTMLScriptElement]))
			.describe("Array of sources"),
	})
		.describe("Custom element");
	export type CustomElement = z.infer<typeof CustomElement>;

	// Define types for other components
	export const RecurrenceRule = z.object({
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
		until: z.string().datetime().optional()
			.describe("DateTime until the recurrence rule repeats"),
	})
		.describe("Recurrence rule");
	export type RecurrenceRule = z.infer<typeof RecurrenceRule>;

	export const MatchPattern = z.object({
		"@type": z.literal("MatchPattern")
			.describe("Type of the match pattern"),
		code: z.string()
			.describe("Code of the match pattern"),
	})
		.describe("Match pattern");
	export type MatchPattern = z.infer<typeof MatchPattern>;

	export const DOMEvent = z.object({
		"@type": z.literal("DOMEvent")
			.describe("Type of the DOM event"),
		type: z.string()
			.describe("Type of the DOM event"),
		match: MatchPattern,
	})
		.describe("DOM event");
	export type DOMEvent = z.infer<typeof DOMEvent>;

	export const Playlist = z.object({
		"@type": z.literal("Playlist")
			.describe("Type of the playlist"),
		entries: z.array(z.union([HTMLImageElement, HTMLVideoElement, CustomElement]))
			.describe("Array of entries"),
	})
		.describe("Playlist");
	export type Playlist = z.infer<typeof Playlist>;

	export const Event = z.object({
		"@type": z.literal("Event")
			.describe("Type of the event"),
		id: z.string().uuid()
			.describe("ID of the event"),
		priority: z.number().int().min(0).max(10)
			.describe("Priority of the event"),
		start: z.string().datetime()
			.describe("DateTime of the start of the event"),
		timeZone: z.string()
			.describe("Time zone of the event"),
		duration: z.string()
			.describe("Duration of the event"),
		playlist: Playlist,
		recurrenceRules: z.array(RecurrenceRule).optional()
			.describe("Array of recurrence rules"),
		onceOn: DOMEvent.optional()
			.describe("Once on DOM event"),
		enableOn: DOMEvent.optional()
			.describe("Enable on DOM event"),
		disableOn: DOMEvent.optional()
			.describe("Disable on DOM event"),
	})
		.describe("Event");
	export type Event = z.infer<typeof Event>;

	export const Transition = z.object({
		"@type": z.literal("Transition")
			.describe("Type of the transition"),
		id: z.string().uuid()
			.describe("ID of the transition"),
		href: z.string().url().min(20).max(2048)
			.describe("URL of the transition"),
		size: z.number().min(20).max(1073741824) // 1GB
			.describe("Size of the transition in bytes"),
		hash: HashValue,
		md5: z.string().length(24)  // Base64 encoded 16 bytes.
			.describe("MD5 hash value"),
		integrity: z.string()
			.describe("Subresource Integrity (SRI) value"),
		duration: z.number().min(1).max(86400)
			.describe("Duration of the transition in seconds"),
	})
		.describe("Transition");
	export type Transition = z.infer<typeof Transition>;

	export const SignalingServer = z.object({
		url: z.string().url().min(20).max(2048)
			.describe("URL of the signaling server"),
	})
		.describe("Signaling server");
	export type SignalingServer = z.infer<typeof SignalingServer>;

	// aka RTCIceServer in the DOM.
	export const IceServer = z.object({
		urls: z.union([z.string(), z.array(z.string())])
			.describe("URLs of the ICE server"),
		username: z.string().optional()
			.describe("Username of the ICE server"),
		credential: z.string().optional()
			.describe("Credential of the ICE server"),
	})
		.describe("ICE server");
	export type IceServer = z.infer<typeof IceServer>;

	export const Cluster = z.object({
		label: z.string()
			.describe("Label of the cluster"),
		id: z.string().uuid()
			.describe("ID of the cluster"),
		peers: z.array(z.string().uuid())
			.describe("Array of peer IDs"),
		iceServers: z.array(IceServer)
			.describe("Array of ICE servers"),
		signalingServers: z.array(SignalingServer)
			.describe("Array of signaling servers"),
		enableLoopback: z.boolean().optional()
			.describe("Enable loopback"),
	})
		.describe("Cluster");
	export type Cluster = z.infer<typeof Cluster>;

	// Compose the final type
	export const Recipe = z.object({
		transition: Transition,
		schedule: z.array(Event)
			.describe("Array of events"),
		$defs: z.record(Playlist).optional()
			.describe("Definitions of playlists"),
		cluster: Cluster.optional()
			.describe("Cluster configuration"),
	})
		.describe("Recipe");
	export type Recipe = z.infer<typeof Recipe>;
}