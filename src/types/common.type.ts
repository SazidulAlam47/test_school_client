export type TUserRole = 'admin' | 'supervisor' | 'student';
export type TLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type TStep = 3 | 1 | 2;
export type TTestStatus = 'completed' | 'promoted' | 'failed' | 'in-progress';

export type TResponseSuccessType = {
    data: any;
};

export type TResponseErrorType = {
    statusCode: number;
    message: string;
};
