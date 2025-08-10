// This file contains Redux types to avoid circular dependencies
export interface AuthState {
    token: string | null;
}

export interface RootState {
    auth: AuthState;
    baseApi: any; // Will be properly typed later
}
