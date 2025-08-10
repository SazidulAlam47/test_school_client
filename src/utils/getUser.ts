import { authKey } from '@/constants/auth.constant';
import { getFromLocalStorage } from './localStorage';
import { jwtDecode } from 'jwt-decode';
import type { TDecodedUser } from '@/types/jwt.type';

const getUser = () => {
    const token = getFromLocalStorage(authKey);

    if (!token) return null;

    const decoded = jwtDecode(token) as TDecodedUser;

    return decoded;
};

export default getUser;
