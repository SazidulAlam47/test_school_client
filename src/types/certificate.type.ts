import type { TLevel } from './common.type';

export interface ICertificate {
    name: string;
    level: TLevel;
    issuedAt: Date;
}
