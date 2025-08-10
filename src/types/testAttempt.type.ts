import type { TLevel, TStep, TTestStatus } from './common.type';

export interface ITestAttempt {
    _id: string;
    userId: string;
    step: TStep;
    submittedAnswers?: {
        questionId: string;
        selectedOption: number;
        isCorrect: boolean;
    }[];
    score?: number;
    status: TTestStatus;
    certifiedLevel?: TLevel;
    startTime: Date;
    endTime: Date;
}
