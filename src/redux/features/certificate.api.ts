import type { ICertificate } from '@/types';
import { baseApi } from '../api/baseApi';

const certificateApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMyCertificate: build.query<ICertificate, any>({
            query: () => ({
                url: '/certificates/my-certificate',
                method: 'GET',
            }),
            providesTags: ['certificate'],
        }),
    }),
});

export const { useGetMyCertificateQuery } = certificateApi;
