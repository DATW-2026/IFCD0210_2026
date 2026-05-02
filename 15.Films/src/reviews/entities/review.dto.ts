import { z } from 'zod';

const isSingleDecimal = (value: number): boolean =>
    Number.isInteger(value * 10);

export const ReviewRateDTOSchema = z.coerce
    .number()
    .min(0)
    .max(10)
    .refine(isSingleDecimal, {
        message: 'rate debe tener como maximo un decimal',
    });


export const ReviewCreateDTOSchema = z.object({
    review: z.string().trim().min(1),
    rate: ReviewRateDTOSchema,
    userID: z.coerce.number().int().positive(),
    filmID: z.coerce.number().int().positive(),
});

export const ReviewUpdateDTOSchema = z.object({
    review: z.string().trim().min(1).optional(),
    rate: ReviewRateDTOSchema.optional(),
});

export const ReviewParamsSchema = z.object({
    userID: z.coerce.number().int().positive(),
    filmID: z.coerce.number().int().positive(),
});


export type ReviewCreateDTO = z.infer<typeof ReviewCreateDTOSchema>;
export type ReviewUpdateDTO = z.infer<typeof ReviewUpdateDTOSchema>;
export type ReviewParamsDTO = z.infer<typeof ReviewParamsSchema>;
