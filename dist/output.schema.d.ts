import * as z from "zod/v4";
export declare const PublishRecipeDetail: z.ZodObject<{
    recipe_link: z.ZodObject<{
        "@type": z.ZodLiteral<"RecipeLink">;
        recipe_id: z.ZodUUID;
        asset_id: z.ZodUUID;
        href: z.ZodURL;
        expires: z.ZodOptional<z.ZodISODateTime>;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, z.core.$strip>;
        md5: z.ZodString;
        integrity: z.ZodString;
    }, z.core.$strip>;
    canvas_id: z.ZodUUID;
    viewport_id: z.ZodString;
}, z.core.$strip>;
export type PublishRecipeDetail = z.infer<typeof PublishRecipeDetail>;
export declare const PublishOutput: z.ZodObject<{
    publish_id: z.ZodString;
    report: z.ZodArray<z.ZodString>;
    recipe_details: z.ZodArray<z.ZodObject<{
        recipe_link: z.ZodObject<{
            "@type": z.ZodLiteral<"RecipeLink">;
            recipe_id: z.ZodUUID;
            asset_id: z.ZodUUID;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
        }, z.core.$strip>;
        canvas_id: z.ZodUUID;
        viewport_id: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PublishOutput = z.infer<typeof PublishOutput>;
