// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod/v4";
import { ErrorResponse } from "@dsbunny/error-schema";
import { PublishRequest } from './request.schema.js';
import { PublishResponse } from './response.schema.js';
import { Publish } from "./publish.schema.js";
// #region Publisher
export const CreateUUIDsRequest = z.object({})
    .describe('Create UUIDs request schema');
export const CreateUUIDsResponse = z.object({
    uuids: z.array(z.string()),
})
    .describe('Create UUIDs response schema');
export const GetPublishStatusRequest = z.object({})
    .describe('Get Publish Status request schema');
export const GetPublishStatusErrorResponse = z.object({
    publish_id: z.string(),
    error: z.string()
        .describe('Error message if the publish could not be queried.'),
})
    .describe('Get Publish Status failed response schema');
export const GetPublishStatusFailedResponse = z.object({
    publish_id: z.string(),
    status: z.literal("failed"),
    error_code: z.string()
        .describe('Error code representing the type of failure.'),
    error_message: z.string()
        .describe('Error message describing the failure.'),
})
    .describe('Get Publish Status failed response schema');
export const GetPublishStatusSucceededResponse = z.object({
    publish_id: z.string(),
    status: z.literal("succeeded"),
    progress: z.literal(100),
})
    .describe('Get Publish Status succeeded response schema');
export const GetPublishStatusRejectedResponse = z.object({
    publish_id: z.string(),
    status: z.literal("rejected"),
    reason: z.string()
        .describe('Reason for rejecting the publish.'),
})
    .describe('Get Publish Status rejected response schema');
export const GetPublishStatusCreatedResponse = z.object({
    publish_id: z.string(),
    status: z.literal("created"),
    progress: z.number().lt(100).gte(0)
        .describe('Progress of the publish as a percentage (0-100).'),
})
    .describe('Get Publish Status created response schema');
export const GetPublishStatusResponse = z.union([
    GetPublishStatusErrorResponse,
    GetPublishStatusFailedResponse,
    GetPublishStatusSucceededResponse,
    GetPublishStatusRejectedResponse,
    GetPublishStatusCreatedResponse,
]).or(z.array(z.union([GetPublishStatusErrorResponse, GetPublishStatusFailedResponse, GetPublishStatusSucceededResponse, GetPublishStatusRejectedResponse, GetPublishStatusCreatedResponse])))
    .describe('Get Publish Status response schema');
export const CreatePublishRequest = PublishRequest
    .describe('Create Publish request schema');
export const CreatePublishResponse = PublishResponse
    .describe('Create Publish response schema');
export const ListPublishRequest = z.object({})
    .describe('List Publish request schema');
export const ListPublishResponse = z.object({
    publishes: z.array(Publish)
        .describe('List of publishes.'),
    next_token: z.string().nullable()
        .describe('Token for fetching the next page of results, if any.'),
})
    .describe('List Publish response schema');
// #endregion
// #region API
export const PublisherRequest = z.union([
    CreateUUIDsRequest,
    GetPublishStatusRequest,
    CreatePublishRequest,
    ListPublishRequest,
])
    .describe('Publisher API request schema');
export const PublisherResponse = z.union([
    CreateUUIDsResponse,
    GetPublishStatusResponse,
    CreatePublishResponse,
    ListPublishResponse,
    ErrorResponse,
])
    .describe('Publisher API response schema');
// #endregion
//# sourceMappingURL=api.schema.js.map