// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod/v4";
import { ErrorResponse } from "@dsbunny/error-schema";
import { PublishRequest } from './request.schema.js';
import { PublishResponse } from './response.schema.js';

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

export const GetJobStatusErrorResponse = z.object({
	job_id: z.uuidv7(),
	error: z.string()
		.describe('Error message if the job could not be queried.'),
})
	.describe('Get Job Status failed response schema');
export type GetJobStatusErrorResponse = z.infer<typeof GetJobStatusErrorResponse>;

export const GetJobStatusFailedResponse = z.object({
	job_id: z.uuidv7(),
	status: z.literal("failed"),
	error_code: z.string()
		.describe('Error code representing the type of failure.'),
	error_message: z.string()
		.describe('Error message describing the failure.'),
})
	.describe('Get Job Status failed response schema');
export type GetJobStatusFailedResponse = z.infer<typeof GetJobStatusFailedResponse>;

export const GetJobStatusSucceededResponse = z.object({
	job_id: z.uuidv7(),
	status: z.literal("succeeded"),
	progress: z.literal(100),
})
	.describe('Get Job Status succeeded response schema');
export type GetJobStatusSucceededResponse = z.infer<typeof GetJobStatusSucceededResponse>;

export const GetJobStatusRejectedResponse = z.object({
	job_id: z.uuidv7(),
	status: z.literal("rejected"),
	reason: z.string()
		.describe('Reason for rejecting the job.'),
})
	.describe('Get Job Status rejected response schema');
export type GetJobStatusRejectedResponse = z.infer<typeof GetJobStatusRejectedResponse>;

export const GetJobStatusCreatedResponse = z.object({
	job_id: z.uuidv7(),
	status: z.literal("created"),
	progress: z.number().lt(100).gte(0)
		.describe('Progress of the job as a percentage (0-100).'),
})
	.describe('Get Job Status created response schema');
export type GetJobStatusCreatedResponse = z.infer<typeof GetJobStatusCreatedResponse>;

export const GetJobStatusResponse = z.union([
	GetJobStatusErrorResponse,
	GetJobStatusFailedResponse,
	GetJobStatusSucceededResponse,
	GetJobStatusRejectedResponse,
	GetJobStatusCreatedResponse,
]).or(z.array(z.union([GetJobStatusErrorResponse, GetJobStatusFailedResponse, GetJobStatusSucceededResponse, GetJobStatusRejectedResponse, GetJobStatusCreatedResponse])))
	.describe('Get Job Status response schema');
export type GetJobStatusResponse = z.infer<typeof GetJobStatusResponse>;

export const CreatePublishRequest = PublishRequest
	.describe('Create Publish request schema');
export type CreatePublishRequest = z.infer<typeof CreatePublishRequest>;
export const CreatePublishResponse = PublishResponse
	.describe('Create Publish response schema');
export type CreatePublishResponse = z.infer<typeof CreatePublishResponse>;
// #endregion

// #region API
export const PublisherRequest = z.union([
	CreateUUIDsRequest,
	GetJobStatusRequest,
	CreatePublishRequest,
])
	.describe('Publisher API request schema');
export type PublisherRequest = z.infer<typeof PublisherRequest>;

export const PublisherResponse = z.union([
	CreateUUIDsResponse,
	GetJobStatusResponse,
	CreatePublishResponse,
	ErrorResponse,
])
	.describe('Publisher API response schema');
export type PublisherResponse = z.infer<typeof PublisherResponse>;
// #endregion