import { z } from 'zod';

// Los valores <name>DTOSchema representan los datos
// que aceptamos en las operaciones de la aplicación,
// permitiendo validar req.body, req.params, etc.

// DTO para el perfil
export const ProfileDTOSchema = z.object({
    firstName: z.string(),
    surname: z.string(),
    avatar: z.string(),
});

// DTO para el login de usuarios
export const UserCredentialsDTOSchema = z.object({
    email: z.email(),
    password: z.string().min(6),
});

// El profile se actualiza independientemente
export const UpdateUserDTOSchema = z.strictObject({
    email: z.string().optional(),
    password: z.string().min(6).optional(),
    role: z.enum(['ADMIN', 'EDITOR', 'USER']).optional(),
    // profile: ProfileDTOSchema.partial().optional(),
});

export const RegisterUserDTOSchema = UserCredentialsDTOSchema.extend(
    z.object({
        role: z.enum(['ADMIN', 'EDITOR', 'USER']).optional(),
        profile: ProfileDTOSchema,
    }).shape,
);

export type ProfileDTO = z.infer<typeof ProfileDTOSchema>;
export type RegisterUserData = z.infer<typeof RegisterUserDTOSchema>;
export type LoginUserData = z.infer<typeof UserCredentialsDTOSchema>;
export type UserUpdateDTO = z.infer<typeof UpdateUserDTOSchema>;
