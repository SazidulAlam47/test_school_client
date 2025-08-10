import { type JwtPayload } from 'jwt-decode';

export type TDecodedUser = JwtPayload & {
    email: string;
    role: 'admin' | 'supervisor' | 'student';
};
