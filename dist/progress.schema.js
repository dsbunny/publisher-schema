// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from 'zod';
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
export const PublishProgressSchema = z.number().min(0).max(100).register(dsbunnyRegistry, {
    id: 'PublishProgressSchema',
    description: 'Publisher job progress schema.',
});
//# sourceMappingURL=progress.schema.js.map