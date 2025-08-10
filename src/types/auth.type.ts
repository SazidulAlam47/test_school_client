import type { TUserRole } from './common.type';

export interface ILogin {
    accessToken: string;
    needPasswordChange: boolean;
    role: TUserRole;
}
