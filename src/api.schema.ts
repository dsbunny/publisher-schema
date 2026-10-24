// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from 'zod';
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { PublishRequestSchema } from './request.schema.js';
import { PublishResponseSchema } from './response.schema.js';
import { PublishSchema } from "./publish.schema.js";

// #region Publisher
export const CreateUUIDsRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'CreateUUIDsRequestSchema',
	description: 'Create UUIDs request schema.',
});
export type CreateUUIDsRequest = z.infer<typeof CreateUUIDsRequestSchema>;
export const CreateUUIDsResponseSchema = z.object({
	uuids: z.array(z.string()),
}).register(dsbunnyRegistry, {
	id: 'CreateUUIDsResponseSchema',
	description: 'Create UUIDs response schema.',
});
export type CreateUUIDsResponse = z.infer<typeof CreateUUIDsResponseSchema>;

export const GetPublishStatusRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'GetPublishStatusRequestSchema',
	description: 'Get Publish Status request schema.',
});
export type GetPublishStatusRequest = z.infer<typeof GetPublishStatusRequestSchema>;

export const GetPublishStatusErrorResponseSchema = z.object({
	publish_id: z.string(),
	error: z.string()
		.describe('Error message if the publish could not be queried.'),
}).register(dsbunnyRegistry, {
	id: 'GetPublishStatusErrorResponseSchema',
	description: 'Get Publish Status failed response schema.',
});
export type GetPublishStatusErrorResponse = z.infer<typeof GetPublishStatusErrorResponseSchema>;

export const GetPublishStatusFailedResponseSchema = z.object({
	publish_id: z.string(),
	status: z.literal("failed"),
	error_code: z.string()
		.describe('Error code representing the type of failure.'),
	error_message: z.string()
		.describe('Error message describing the failure.'),
}).register(dsbunnyRegistry, {
	id: 'GetPublishStatusFailedResponseSchema',
	description: 'Get Publish Status failed response schema.',
});
export type GetPublishStatusFailedResponse = z.infer<typeof GetPublishStatusFailedResponseSchema>;

export const GetPublishStatusSucceededResponseSchema = z.object({
	publish_id: z.string(),
	status: z.literal("succeeded"),
	progress: z.literal(100),
}).register(dsbunnyRegistry, {
	id: 'GetPublishStatusSucceededResponseSchema',
	description: 'Get Publish Status succeeded response schema.',
});
export type GetPublishStatusSucceededResponse = z.infer<typeof GetPublishStatusSucceededResponseSchema>;

export const GetPublishStatusRejectedResponseSchema = z.object({
	publish_id: z.string(),
	status: z.literal("rejected"),
	reason: z.string()
		.describe('Reason for rejecting the publish.'),
}).register(dsbunnyRegistry, {
	id: 'GetPublishStatusRejectedResponseSchema',
	description: 'Get Publish Status rejected response schema.',
});
export type GetPublishStatusRejectedResponse = z.infer<typeof GetPublishStatusRejectedResponseSchema>;

export const GetPublishStatusCreatedResponseSchema = z.object({
	publish_id: z.string(),
	status: z.literal("created"),
	progress: z.number().lt(100).gte(0)
		.describe('Progress of the publish as a percentage (0-100).'),
}).register(dsbunnyRegistry, {
	id: 'GetPublishStatusCreatedResponseSchema',
	description: 'Get Publish Status created response schema.',
});
export type GetPublishStatusCreatedResponse = z.infer<typeof GetPublishStatusCreatedResponseSchema>;

export const GetPublishStatusResponseSchema = z.union([
	GetPublishStatusErrorResponseSchema,
	GetPublishStatusFailedResponseSchema,
	GetPublishStatusSucceededResponseSchema,
	GetPublishStatusRejectedResponseSchema,
	GetPublishStatusCreatedResponseSchema,
]).or(z.array(z.union([
	GetPublishStatusErrorResponseSchema,
	GetPublishStatusFailedResponseSchema,
	GetPublishStatusSucceededResponseSchema,
	GetPublishStatusRejectedResponseSchema,
	GetPublishStatusCreatedResponseSchema,
]))).register(dsbunnyRegistry, {
	id: 'GetPublishStatusResponseSchema',
	description: 'Get Publish Status response schema.',
});
export type GetPublishStatusResponse = z.infer<typeof GetPublishStatusResponseSchema>;

export const CreatePublishRequestSchema = PublishRequestSchema.register(dsbunnyRegistry, {
	id: 'CreatePublishRequestSchema',
	description: 'Create Publish request schema.',
});
export type CreatePublishRequest = z.infer<typeof CreatePublishRequestSchema>;
export const CreatePublishResponseSchema = PublishResponseSchema.register(dsbunnyRegistry, {
	id: 'CreatePublishResponseSchema',
	description: 'Create Publish response schema.',
});
export type CreatePublishResponse = z.infer<typeof CreatePublishResponseSchema>;

export const ListPublishRequestSchema = z.object({}).register(dsbunnyRegistry, {
	id: 'ListPublishRequestSchema',
	description: 'List Publish request schema.',
});
export type ListPublishRequest = z.infer<typeof ListPublishRequestSchema>;
export const ListPublishResponseSchema = z.object({
	publishes: z.array(PublishSchema)
		.describe('List of publishes.'),
	next_token: z.string().nullable()
		.describe('Token for fetching the next page of results, if any.'),
}).register(dsbunnyRegistry, {
	id: 'ListPublishResponseSchema',
	description: 'List Publish response schema.',
});
export type ListPublishResponse = z.infer<typeof ListPublishResponseSchema>;
// #endregion

// #region API
export const PublisherRequestSchema = z.union([
	CreateUUIDsRequestSchema,
	GetPublishStatusRequestSchema,
	CreatePublishRequestSchema,
	ListPublishRequestSchema,
]).register(dsbunnyRegistry, {
	id: 'PublisherRequestSchema',
	description: 'Publisher API request schema.',
});
export type PublisherRequest = z.infer<typeof PublisherRequestSchema>;

export const PublisherResponseSchema = z.union([
	CreateUUIDsResponseSchema,
	GetPublishStatusResponseSchema,
	CreatePublishResponseSchema,
	ListPublishResponseSchema,
	ErrorResponseSchema,
]).register(dsbunnyRegistry, {
	id: 'PublisherResponseSchema',
	description: 'Publisher API response schema.',
});
export type PublisherResponse = z.infer<typeof PublisherResponseSchema>;
// #endregion
