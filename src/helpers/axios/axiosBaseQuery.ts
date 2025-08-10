import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosRequestConfig, AxiosError } from 'axios';
import axiosInstance from './axiosInstance';

const axiosBaseQuery =
    (): BaseQueryFn<
        {
            url: string;
            method?: AxiosRequestConfig['method'];
            data?: AxiosRequestConfig['data'];
            params?: AxiosRequestConfig['params'];
            headers?: AxiosRequestConfig['headers'];
            contentType?: string;
        },
        unknown,
        unknown
    > =>
    async ({ url, method, data, params, headers, contentType }) => {
        try {
            const result = await axiosInstance({
                url: url,
                method,
                data,
                params,
                headers: {
                    'Content-Type': contentType || 'application/json',
                    ...headers,
                },
            });
            return result;
        } catch (axiosError) {
            const err = axiosError as AxiosError;
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            };
        }
    };

export default axiosBaseQuery;
