export type TUserRole = 'admin' | 'supervisor' | 'student';

export interface IUser {
    email: string;
    role: TUserRole;
}
