// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod/v4";
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { PublishRequestSchema } from './request.schema.js';
import { PublishResponseSchema } from './response.schema.js';
import { PublishSchema } from "./publish.schema.js";
// #region Publisher
export const CreateUUIDsRequestSchema = z.object({})
    .describe('Create UUIDs request schema');
export const CreateUUIDsResponseSchema = z.object({
    uuids: z.array(z.string()),
})
    .describe('Create UUIDs response schema');
export const GetPublishStatusRequestSchema = z.object({})
    .describe('Get Publish Status request schema');
export const GetPublishStatusErrorResponseSchema = z.object({
    publish_id: z.string(),
    error: z.string()
        .describe('Error message if the publish could not be queried.'),
})
    .describe('Get Publish Status failed response schema');
export const GetPublishStatusFailedResponseSchema = z.object({
    publish_id: z.string(),
    status: z.literal("failed"),
    error_code: z.string()
        .describe('Error code representing the type of failure.'),
    error_message: z.string()
        .describe('Error message describing the failure.'),
})
    .describe('Get Publish Status failed response schema');
export const GetPublishStatusSucceededResponseSchema = z.object({
    publish_id: z.string(),
    status: z.literal("succeeded"),
    progress: z.literal(100),
})
    .describe('Get Publish Status succeeded response schema');
export const GetPublishStatusRejectedResponseSchema = z.object({
    publish_id: z.string(),
    status: z.literal("rejected"),
    reason: z.string()
        .describe('Reason for rejecting the publish.'),
})
    .describe('Get Publish Status rejected response schema');
export const GetPublishStatusCreatedResponseSchema = z.object({
    publish_id: z.string(),
    status: z.literal("created"),
    progress: z.number().lt(100).gte(0)
        .describe('Progress of the publish as a percentage (0-100).'),
})
    .describe('Get Publish Status created response schema');
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
])))
    .describe('Get Publish Status response schema');
export const CreatePublishRequestSchema = PublishRequestSchema
    .describe('Create Publish request schema');
export const CreatePublishResponseSchema = PublishResponseSchema
    .describe('Create Publish response schema');
export const ListPublishRequestSchema = z.object({})
    .describe('List Publish request schema');
export const ListPublishResponseSchema = z.object({
    publishes: z.array(PublishSchema)
        .describe('List of publishes.'),
    next_token: z.string().nullable()
        .describe('Token for fetching the next page of results, if any.'),
})
    .describe('List Publish response schema');
// #endregion
// #region API
export const PublisherRequestSchema = z.union([
    CreateUUIDsRequestSchema,
    GetPublishStatusRequestSchema,
    CreatePublishRequestSchema,
    ListPublishRequestSchema,
])
    .describe('Publisher API request schema');
export const PublisherResponseSchema = z.union([
    CreateUUIDsResponseSchema,
    GetPublishStatusResponseSchema,
    CreatePublishResponseSchema,
    ListPublishResponseSchema,
    ErrorResponseSchema,
])
    .describe('Publisher API response schema');
// #endregion
//# sourceMappingURL=api.schema.js.map