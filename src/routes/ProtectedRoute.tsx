import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import type { TDecodedUser } from '@/types/jwt.type';
import { getFromLocalStorage } from '@/utils/localStorage';
import { authKey } from '@/constants/auth.constant';
import type { ReactNode } from 'react';

type ProtectedRouteProps = {
    children: ReactNode;
    role?: 'admin' | 'faculty' | 'student';
};

const ProtectedRoute = ({ children, role }: ProtectedRouteProps) => {
    const token = getFromLocalStorage(authKey);

    if (!token) {
        return <Navigate to="/login" />;
    }

    const user = jwtDecode(token) as TDecodedUser;

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (role && user?.role !== role) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;
