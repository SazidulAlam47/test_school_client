import type { TLevel } from './common.type';
type TCorrectAnswer = 0 | 1 | 2 | 3;

export interface IQuestion {
    _id: string;
    text: string;
    options: string[];
    correctAnswer: TCorrectAnswer;
    level: TLevel;
}
