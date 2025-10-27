// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
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
export type ErrorResponse = z.infer<typeof ErrorResponse>;
// #endregion

// #region WebHook
export const WebHookRequest = z.object({
	ref_id: z.string(),
	class: z.string(),
})
	  .describe('WebHook request schema');
export type WebHookRequest = z.infer<typeof WebHookRequest>;

export const WebHookResponse = z.object({})
	  .describe('WebHook response schema');
export type WebHookResponse = z.infer<typeof WebHookResponse>;
// #endregion

// #region Publisher
export const CreateUUIDsRequest = z.object({})
	.describe('Create UUIDs request schema');
export type CreateUUIDsRequest = z.infer<typeof CreateUUIDsRequest>;
export const CreateUUIDsResponse = z.object({
	uuids: z.array(z.string()),
})
	.describe('Create UUIDs response schema');
export type CreateUUIDsResponse = z.infer<typeof CreateUUIDsResponse>;

export const GetJobStatusRequest = z.object({})
	.describe('Get Job Status request schema');
export type GetJobStatusRequest = z.infer<typeof GetJobStatusRequest>;
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
export type GetJobStatusResponse = z.infer<typeof GetJobStatusResponse>;

export const CreatePublisherRequest = PublisherRequest
	.describe('Create Publisher request schema');
export type CreatePublisherRequest = z.infer<typeof CreatePublisherRequest>;
export const CreatePublisherResponse = PublisherResponse
	.describe('Create Publisher response schema');
export type CreatePublisherResponse = z.infer<typeof CreatePublisherResponse>;
// #endregion
