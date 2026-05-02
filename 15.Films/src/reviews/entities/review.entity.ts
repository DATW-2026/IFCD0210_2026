import { Decimal } from '@prisma/client/runtime/client';
import { z } from 'zod';

export const ReviewModelSchema = z.object({
    review: z.string(),
    rate: z.instanceof(Decimal),
    date: z.date(),
    //userID: z.number(),
    //filmID: z.number(),
    user: z.object({
        profile: z
            .object({
                firstName: z.string(),
                surname: z.string(),
            })
            .optional(),
    }).optional,
    film: z
        .object({
            title: z.string(),
        })
        .optional(),
});

export type Review = z.infer<typeof ReviewModelSchema>;
