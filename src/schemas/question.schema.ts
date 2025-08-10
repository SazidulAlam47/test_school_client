import { Levels } from '@/constants/question.constant';
import { z } from 'zod';

export const createQuestionFormSchema = z.object({
    text: z.string().min(1, 'Question text is required'),
    option1: z.string().min(1, 'Option 1 is required'),
    option2: z.string().min(1, 'Option 2 is required'),
    option3: z.string().min(1, 'Option 3 is required'),
    option4: z.string().min(1, 'Option 4 is required'),
    correctAnswer: z.string().min(1, 'Correct answer is required'),
    level: z.enum(Levels).refine((val) => val !== undefined, {
        message: 'Level is required',
    }),
});
