// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod/v4";
import { PublisherRequest } from './request.schema.js';
import { PublisherResponse } from './response.schema.js';
// #region Errors
export const ErrorResponse = z.object({
    code: z.string()
        .describe('Error code representing the type of error.'),
    message: z.string()
        .describe('Error message describing the issue.'),
    detail: z.string()
        .describe('Additional details about the error, if available.'),
    timestamp: z.iso.datetime()
        .describe('Timestamp when the error occurred (ISO_8601 format).'),
})
    .describe('Error response schema');
// #endregion
// #region WebHook
export const WebHookRequest = z.object({
    ref_id: z.string(),
    class: z.string(),
})
    .describe('WebHook request schema');
export const WebHookResponse = z.object({})
    .describe('WebHook response schema');
// #endregion
// #region Publisher
export const CreateUUIDsRequest = z.object({})
    .describe('Create UUIDs request schema');
export const CreateUUIDsResponse = z.object({
    uuids: z.array(z.string()),
})
    .describe('Create UUIDs response schema');
export const GetJobStatusRequest = z.object({})
    .describe('Get Job Status request schema');
export const GetJobStatusResponse = z.object({
    status: z.enum(["created", "succeeded", "failed", "retrying"])
        .describe('Job status indicating the current state of the job.'),
    progress: z.number()
        .describe('Progress of the job as a percentage (0-100).'),
}).or(z.array(z.object({
    error: z.string()
        .describe('Error message if the job could not be queried.'),
}).or(z.object({
    status: z.enum(["created", "succeeded", "failed", "retrying"])
        .describe('Job status indicating the current state of the job.'),
    progress: z.number()
        .describe('Progress of the job as a percentage (0-100).'),
}))))
    .describe('Get Job Status response schema');
export const CreatePublisherRequest = PublisherRequest
    .describe('Create Publisher request schema');
export const CreatePublisherResponse = PublisherResponse
    .describe('Create Publisher response schema');
// #endregion
//# sourceMappingURL=api.schema.js.map