/* eslint-disable @typescript-eslint/no-unused-vars */
import type { IsExact, Assert } from '../../types/tools.ts';
import type { FilmCreateInput } from '../../../generated/prisma/models.ts';
import type { FilmCreateDTO, FilmParamsDTO, FilmQueryDTO, FilmUpdateDTO } from './film.dto.ts';


type FilmCreateShape = Pick<
    FilmCreateInput,
    'title' | 'year' | 'director' | 'duration'
> & {
    poster?: string | null;
    rate: number;
    genres: string[];
};

type FilmUpdateShape = Partial<FilmCreateShape>;

interface FilmParamsShape {
    id: number;
}

interface FilmQueryShape {
    title?: string;
    year?: number;
    director?: string;
    genre?: string;
    minRate?: number;
    maxRate?: number;
    page?: number;
    limit?: number;
    sortBy?: 'id' | 'title' | 'year' | 'director' | 'duration' | 'rate';
    order?: 'asc' | 'desc';
}

//type _FilmCheck = Assert<IsExact<Film, FilmModelShape>>;

type _FilmCreateDTOCheck = Assert<
    IsExact<FilmCreateDTO, FilmCreateShape>
>;

type _FilmUpdateDTOCheck = Assert<
    IsExact<FilmUpdateDTO, FilmUpdateShape>
>;

 type _FilmParamsDTOCheck = Assert<
    IsExact<FilmParamsDTO, FilmParamsShape>
>;

type _FilmQueryDTOCheck = Assert<IsExact<FilmQueryDTO, FilmQueryShape>>;
