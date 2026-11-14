// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// `@type` field is optional for requests with no other required fields.
import * as z from 'zod';
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { PublishRequestSchema } from './request.schema.js';
import { PublishResponseSchema } from './response.schema.js';
import { PublishSchema } from "./publish.schema.js";
// #region Publisher
export const CreateUUIDsRequestSchema = z.object({
    '@type': z.literal('CreateUUIDsRequest')
        .describe('Type of the create UUIDs request object'),
}).optional().register(dsbunnyRegistry, {
    id: 'CreateUUIDsRequestSchema',
    description: 'Create UUIDs request schema.',
});
export const CreateUUIDsResponseSchema = z.object({
    '@type': z.literal('CreateUUIDsResponse')
        .describe('Type of the create UUIDs response object'),
    uuids: z.array(z.string()),
}).register(dsbunnyRegistry, {
    id: 'CreateUUIDsResponseSchema',
    description: 'Create UUIDs response schema.',
});
export const GetPublishStatusRequestSchema = z.object({
    '@type': z.literal('GetPublishStatusRequest')
        .describe('Type of the get publish status request object'),
}).optional().register(dsbunnyRegistry, {
    id: 'GetPublishStatusRequestSchema',
    description: 'Get Publish Status request schema.',
});
export const GetPublishStatusErrorResponseSchema = z.object({
    '@type': z.literal('GetPublishStatusErrorResponse')
        .describe('Type of the get publish status error response object'),
    publish_id: z.string(),
    error: z.string()
        .describe('Error message if the publish could not be queried.'),
}).register(dsbunnyRegistry, {
    id: 'GetPublishStatusErrorResponseSchema',
    description: 'Get Publish Status failed response schema.',
});
export const GetPublishStatusFailedResponseSchema = z.object({
    '@type': z.literal('GetPublishStatusFailedResponse')
        .describe('Type of the get publish status failed response object'),
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
export const GetPublishStatusSucceededResponseSchema = z.object({
    '@type': z.literal('GetPublishStatusSucceededResponse')
        .describe('Type of the get publish status succeeded response object'),
    publish_id: z.string(),
    status: z.literal("succeeded"),
    progress: z.literal(100),
}).register(dsbunnyRegistry, {
    id: 'GetPublishStatusSucceededResponseSchema',
    description: 'Get Publish Status succeeded response schema.',
});
export const GetPublishStatusRejectedResponseSchema = z.object({
    '@type': z.literal('GetPublishStatusRejectedResponse')
        .describe('Type of the get publish status rejected response object'),
    publish_id: z.string(),
    status: z.literal("rejected"),
    reason: z.string()
        .describe('Reason for rejecting the publish.'),
}).register(dsbunnyRegistry, {
    id: 'GetPublishStatusRejectedResponseSchema',
    description: 'Get Publish Status rejected response schema.',
});
export const GetPublishStatusCreatedResponseSchema = z.object({
    '@type': z.literal('GetPublishStatusCreatedResponse')
        .describe('Type of the get publish status created response object'),
    publish_id: z.string(),
    status: z.literal("created"),
    progress: z.number().lt(100).gte(0)
        .describe('Progress of the publish as a percentage (0-100).'),
}).register(dsbunnyRegistry, {
    id: 'GetPublishStatusCreatedResponseSchema',
    description: 'Get Publish Status created response schema.',
});
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
export const CreatePublishRequestSchema = z.object({
    '@type': z.literal('CreatePublishRequest')
        .describe('Type of the create publish request object'),
    publish_request: PublishRequestSchema
        .describe('The publish request object.'),
}).register(dsbunnyRegistry, {
    id: 'CreatePublishRequestSchema',
    description: 'Create Publish request schema.',
});
export const CreatePublishResponseSchema = PublishResponseSchema.extend({
    '@type': z.literal('CreatePublishResponse')
        .describe('Type of the create publish response object'),
}).register(dsbunnyRegistry, {
    id: 'CreatePublishResponseSchema',
    description: 'Create Publish response schema.',
});
export const ListPublishRequestSchema = z.object({
    '@type': z.literal('ListPublishRequest')
        .describe('Type of the list publish request object'),
}).optional().register(dsbunnyRegistry, {
    id: 'ListPublishRequestSchema',
    description: 'List Publish request schema.',
});
export const ListPublishResponseSchema = z.object({
    '@type': z.literal('ListPublishResponse')
        .describe('Type of the list publish response object'),
    publishes: z.array(PublishSchema)
        .describe('List of publishes.'),
    next_token: z.string().nullable()
        .describe('Token for fetching the next page of results, if any.'),
}).register(dsbunnyRegistry, {
    id: 'ListPublishResponseSchema',
    description: 'List Publish response schema.',
});
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
// #endregion
//# sourceMappingURL=api.schema.js.map