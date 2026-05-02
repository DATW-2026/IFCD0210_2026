/* eslint-disable @typescript-eslint/no-unused-vars */


import type {
    ReviewModel,
    ReviewUncheckedCreateInput,
    ReviewUserIDFilmIDCompoundUniqueInput,
} from '../../../generated/prisma/models.ts';
import type { Assert, IsExact } from '../../types/tools.ts';
import type { ReviewCreateDTO, ReviewParamsDTO, ReviewUpdateDTO } from './review.dto.ts';

// Desde Prisma podemos obtener los tipos correspondientes
// - al modelo de datos (e.g. FilmModel o GenreModel)
// - a los datos que Prisma acepta en una operación (e.g. FilmCreateInput)

// A partir de ellos definimos shapes para expresar el contrato estructural
// de las operaciones de la aplicación con DTOs más planos y cómodos para HTTP.


// type ReviewModelShape = ReviewModel;

type ReviewCreateShape = Pick<
    ReviewUncheckedCreateInput,
    'review' | 'userID' | 'filmID'
> & {
    rate: number;
};

type ReviewUpdateShape = Partial<Pick<ReviewCreateShape, 'review' | 'rate'>>;

type ReviewParamsShape = ReviewUserIDFilmIDCompoundUniqueInput;

// Tipos que exportaríamos normalmente,
// contrastados con los tipos de Prisma para garantizar compatibilidad

//export type _ReviewCheck = Assert<IsExact<Review, ReviewModelShape>>;


type _ReviewCreateDTOCheck = Assert<
    IsExact<ReviewCreateDTO, ReviewCreateShape>
>;

type _ReviewUpdateDTOCheck = Assert<
    IsExact<ReviewUpdateDTO, ReviewUpdateShape>
>;

type _ReviewParamsDTOCheck = Assert<
    IsExact<ReviewParamsDTO, ReviewParamsShape>
>;
