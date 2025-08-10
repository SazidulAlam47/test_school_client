import type { ITestAttempt } from '@/types';
import { baseApi } from '../api/baseApi';

const testAttemptApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMyAttempts: build.query<ITestAttempt[], any>({
            query: () => ({
                url: '/test-attempts/my-attempts',
                method: 'GET',
            }),
            providesTags: ['test-attempt'],
        }),
        startTest: build.mutation<ITestAttempt, any>({
            query: () => ({
                url: '/test-attempts/start-test',
                method: 'POST',
            }),
            invalidatesTags: ['test-attempt'],
        }),
        submitAnswers: build.mutation<ITestAttempt, any>({
            query: (args: {
                id: string;
                data: {
                    answers: {
                        questionId: string;
                        selectedOption: number | undefined;
                    }[];
                };
            }) => ({
                url: `/test-attempts/submit-answers/${args.id}`,
                method: 'POST',
                data: args.data,
            }),
            invalidatesTags: ['test-attempt', 'me'],
        }),
    }),
});

export const {
    useStartTestMutation,
    useSubmitAnswersMutation,
    useGetMyAttemptsQuery,
} = testAttemptApi;
