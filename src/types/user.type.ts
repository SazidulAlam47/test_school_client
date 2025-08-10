import type { TLevel, TStep, TUserRole } from './common.type';

export interface IUser {
    name: string;
    email: string;
    password: string;
    role: TUserRole;
    isVerified: boolean;
    otp?: string;
    otpExpiresAt?: number;
    needPasswordChange: boolean;
    certificationLevel?: TLevel;
    currentStep?: TStep;
}
