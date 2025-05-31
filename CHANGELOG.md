# Changelog
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
