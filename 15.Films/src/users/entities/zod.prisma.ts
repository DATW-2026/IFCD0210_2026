/* eslint-disable @typescript-eslint/no-unused-vars */
import type {
    ProfileCreateWithoutUserInput,
    ProfileModel,
    UserCreateInput,
    // UserModel,
    // ReviewModel,
} from '../../../generated/prisma/models.ts';
import type { Assert, IsExact } from '../../types/tools.ts';
import type {
    LoginUserData,
    ProfileDTO,
    RegisterUserData,
    UserUpdateDTO,
} from './user.dto.ts';
import type { Profile } from './user.entity.ts';

// Desde Prisma podemos obtener los tipos correspondientes
// - al modelo de datos (e,g. UserModel o ProfileModel)
// - a los datos que prisma acepta en una operación (e.g. UserCreateInput o UserCreateUpdate)

// A partir de ellos podemos hablar de shapes para definir el contrato estructural
// de dichas operaciones (Login Register, Update), que acepta sólo la parte
// de los tipos Prisma que realmente queremos exponer en la API.

type ProfileShape = Omit<ProfileModel, 'id'>;

// type UserModelShape = UserModel & {
//     profile?: Omit<ProfileModel, 'id'>;
//     reviews?: ReviewModel[];
// };

type LoginUserShape = Pick<UserCreateInput, 'email' | 'password'>;

type RegisterUserShape = Pick<UserCreateInput, 'email' | 'password'> & {
    role?: UserCreateInput['role'];
    profile: ProfileCreateWithoutUserInput;
};

interface UserUpdateShape {
    email?: UserCreateInput['email'];
    password?: UserCreateInput['password'];
    role?: UserCreateInput['role'];
    // profile?: OptionalsUndefined<ProfileCreateWithoutUserInput> | undefined;
}

// Los tipos que realmente exportaremos se infieren desde los schemas de validación de Zod,
// y se comprueban con los tipos de Prisma para garantizar
// que los shapes definidos coinciden exactamente con los tipos de prisma



// Typos que exportaríamos normalmente,
// sin contrastar con los tipos de Prisma para garantizar compatibilidad

// Profile En Prisma corresponde a ProfileModel
type _ProfileCheck = Assert<IsExact<Profile, ProfileShape>>;

// ProfileDTO En Prisma corresponde a ProfileCreateWithoutUserInput
type _ProfileDTOCheck = Assert<
    IsExact<ProfileDTO, ProfileCreateWithoutUserInput>
>;

// FullUser En Prisma corresponde a UserCreateInput sin el campo profile
// type _UserCheck = Assert<IsExact<FullUser, UserModelShape>>;

// User En Prisma corresponde a UserCreateInput sin el campo profile
// type _UserWithoutPasswordCheck = Assert<
//     IsExact<User, Omit<UserModelShape, 'password'>>
// >;

// RegisterUserData En Prisma corresponde a UserCreateInput sin el campo profile
// que se gestiona de forma anidada,
// y sin el campo password que se encripta antes de guardarlo en la base de datos
type _RegisterUserDataCheck = Assert<
    IsExact<RegisterUserData, RegisterUserShape>
>;

// LoginUserData En Prisma corresponde a UserCreateInput sin el campo profile
type _LoginUserDataCheck = Assert<IsExact<LoginUserData, LoginUserShape>>;

// UserUpdateDTO Tipos finales que exportamos, comprobando compatibilidad con los tipos de Prisma
type _UserUpdateDTOCheck = Assert<IsExact<UserUpdateDTO, UserUpdateShape>>;
