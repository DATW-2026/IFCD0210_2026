/* eslint-disable @typescript-eslint/no-unused-vars */
import type { FilmModel, ReviewModel } from '../../../generated/prisma/models.ts';
import type {
    GenreCreateInput,
    GenreModel,
} from '../../../generated/prisma/models.ts';
import type { Assert, IsExact } from '../../types/tools.ts';
import type { GenreCreateDTO, GenreUpdateDTO } from './genre.dto.ts';
import type { Genre, GenreDetail } from './genre.entity.ts';

type GenreModelShape = GenreModel;

type FilmModelShape = FilmModel & {
    genres?: Omit<GenreModel, 'id'>[];
    reviews?: ReviewModel[];
};

type GenreDetailModelShape = GenreModelShape & {
    films: Omit<FilmModelShape, 'reviews'>[];
};

type GenreCreateShape = Pick<GenreCreateInput, 'name'>;

type GenreUpdateShape = Partial<GenreCreateShape>;

type _GenreCheck = Assert<IsExact<Genre, GenreModelShape>>;

type _GenreDetailCheck = Assert<
    IsExact<GenreDetail, GenreDetailModelShape>
>;

type _GenreCreateDTOCheck = Assert<
    IsExact<GenreCreateDTO, GenreCreateShape>
>;

type _GenreUpdateDTOCheck = Assert<
    IsExact<GenreUpdateDTO, GenreUpdateShape>
>;

