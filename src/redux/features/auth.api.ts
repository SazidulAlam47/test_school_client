import type { ILogin, IUser } from '@/types';
import { baseApi } from '../api/baseApi';

const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<ILogin, any>({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                data,
            }),
            invalidatesTags: ['me'],
        }),
        register: build.mutation<IUser, any>({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                data,
            }),
            invalidatesTags: ['me'],
        }),
        verifyOtp: build.mutation({
            query: (args) => ({
                url: `/auth/verify-email/${args.id}`,
                method: 'POST',
                data: args.data,
            }),
        }),
        changePassword: build.mutation({
            query: (data) => ({
                url: '/auth/change-password',
                method: 'POST',
                data,
            }),
        }),
        forgotPassword: build.mutation({
            query: (data) => ({
                url: '/auth/forget-password',
                method: 'POST',
                data,
            }),
        }),
        resetPassword: build.mutation({
            query: (args) => ({
                url: '/auth/reset-password',
                method: 'POST',
                data: args.data,
                headers: {
                    Authorization: `Bearer ${args.token}`,
                },
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useChangePasswordMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useRegisterMutation,
    useVerifyOtpMutation,
} = authApi;
