# Changelog
## v7.0.16
- Rename `id` for each reference to DAM assets as `asset_id` to clarify scope.
- Move `name` and `tags` from `Recipe` to `Event` as the latter is a human construct and the former is a runtime construct.
- Add `id` to `Recipe` as a unique identifier to replace API `job_id` usage and enable referencing via `RecipeLink` for synchronisation.
- Add `canvas_id` and `viewport_id` to `Recipe` as part of the _baking_ process to aid synchronisation.
- Add new `ListPublishRequest` API for enumerating publishes.
- Add `publish_id` as unique per-_publish_ identifier, reducing confusion on `recipe_id` scoping.
- Rename APIs based on _publish_ action rather than _recipe_ content.
- Update _task output_ to include recipe details including DAM links, canvas and viewport IDs, enabling capture in _publish_ records.
- Add `Publish` schema for stored state that drives definition of `PublishRequest` and `PublishResponse`.

## v6.0.15
- `job_id` is a UUID.

## v6.0.14
- Migrate _tasks_ API from `publisher-schema` to internal `publisher-worker-pool`.
- Bump to `zod@4.3.6`.

## v6.0.13
- `Tasks.Output` needs to be nullable for webhook responses.

## v6.0.12
- Add new composite `PublisherRequest` and `PublisherResponse` for public API.
- Migrate to `@dsbunny/error-schema` and `@dsbunny/webhook-schema`.
- New internal schema for WebHook tasks.
- Add `job_id` to `GetJobStatusResponse`.
- `PublishRequest` is now specifically for the action of _publishing_, whilst `PublisherRequest` is the composite of all requests to the Publisher.

## v5.0.11
- Add `name` and `tags` to both `Recipe` and `RecipeTemplate` to allow indexing.

## v4.3.10
- Bump to `zod@4.1.11`.
- Move Zod to `peerDependencies` so users can bring their own Zod.

## v4.2.9
- Add `expires` field for invalidating content on a timestamp.

## v4.1.8
- Add API schemas.

## v4.0.7
- Rename `agent_ids` to `canvas_ids`.

## v3.2.6
- Narrow asset `params` to a new `BaseParams` type.
- Extend `Transition` with optional `params` and `sources`, enabling complex transitions.
- Make `CustomElement` field `sources` optional when no dependencies.

## v3.1.5
- Remove `duration` from `CustomElement.sources` as not applicable.

## v3.1.4
- Add `params` to `CustomElement`, enabling application configuration.

## v3.0.3
- Bump to `zod@next` with `zod/v4` imports.

## v3.0.2
- Bump to `zod@4.0.0-beta`.

## v2.3.1
- Add `RecipeLink` object to link to a _recipe_ object in an object store.

## v2.2.0
- Initial release, derived from `publisher` service hence the starting version number.
