// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod/v4";
import { ErrorResponse } from "@dsbunny/error-schema";
import { PublishRequest } from './request.schema.js';
import { PublishResponse } from './response.schema.js';
// #region Publisher
export const CreateUUIDsRequest = z.object({})
    .describe('Create UUIDs request schema');
export const CreateUUIDsResponse = z.object({
    uuids: z.array(z.string()),
})
    .describe('Create UUIDs response schema');
export const GetJobStatusRequest = z.object({})
    .describe('Get Job Status request schema');
export const GetJobStatusErrorResponse = z.object({
    job_id: z.uuidv7(),
    error: z.string()
        .describe('Error message if the job could not be queried.'),
})
    .describe('Get Job Status failed response schema');
export const GetJobStatusFailedResponse = z.object({
    job_id: z.uuidv7(),
    status: z.literal("failed"),
    error_code: z.string()
        .describe('Error code representing the type of failure.'),
    error_message: z.string()
        .describe('Error message describing the failure.'),
})
    .describe('Get Job Status failed response schema');
export const GetJobStatusSucceededResponse = z.object({
    job_id: z.uuidv7(),
    status: z.literal("succeeded"),
    progress: z.literal(100),
})
    .describe('Get Job Status succeeded response schema');
export const GetJobStatusRejectedResponse = z.object({
    job_id: z.uuidv7(),
    status: z.literal("rejected"),
    reason: z.string()
        .describe('Reason for rejecting the job.'),
})
    .describe('Get Job Status rejected response schema');
export const GetJobStatusCreatedResponse = z.object({
    job_id: z.uuidv7(),
    status: z.literal("created"),
    progress: z.number().lt(100).gte(0)
        .describe('Progress of the job as a percentage (0-100).'),
})
    .describe('Get Job Status created response schema');
export const GetJobStatusResponse = z.union([
    GetJobStatusErrorResponse,
    GetJobStatusFailedResponse,
    GetJobStatusSucceededResponse,
    GetJobStatusRejectedResponse,
    GetJobStatusCreatedResponse,
]).or(z.array(z.union([GetJobStatusErrorResponse, GetJobStatusFailedResponse, GetJobStatusSucceededResponse, GetJobStatusRejectedResponse, GetJobStatusCreatedResponse])))
    .describe('Get Job Status response schema');
export const CreatePublishRequest = PublishRequest
    .describe('Create Publish request schema');
export const CreatePublishResponse = PublishResponse
    .describe('Create Publish response schema');
// #endregion
// #region API
export const PublisherRequest = z.union([
    CreateUUIDsRequest,
    GetJobStatusRequest,
    CreatePublishRequest,
])
    .describe('Publisher API request schema');
export const PublisherResponse = z.union([
    CreateUUIDsResponse,
    GetJobStatusResponse,
    CreatePublishResponse,
    ErrorResponse,
])
    .describe('Publisher API response schema');
// #endregion
//# sourceMappingURL=api.schema.js.map