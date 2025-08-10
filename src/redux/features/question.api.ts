import { baseApi } from '../api/baseApi';
import type { IQuestion } from '@/types/question.type';

const questionApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllQuestions: build.query<IQuestion[], any>({
            query: () => ({
                url: '/questions',
                method: 'GET',
            }),
            providesTags: ['question'],
        }),
        getQuestionsByStep: build.query<IQuestion[], any>({
            query: (step: number) => ({
                url: `/questions/step/${step}`,
                method: 'GET',
            }),
            providesTags: ['question'],
        }),
        createQuestion: build.mutation<IQuestion, any>({
            query: (data) => ({
                url: `/questions`,
                method: 'POST',
                data,
            }),
            invalidatesTags: ['question'],
        }),
    }),
});

export const {
    useGetAllQuestionsQuery,
    useGetQuestionsByStepQuery,
    useCreateQuestionMutation,
} = questionApi;
