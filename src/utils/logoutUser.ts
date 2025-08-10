import axiosInstance from '@/helpers/axios/axiosInstance';
import { removeFromLocalStorage } from './localStorage';
import { authKey } from '@/constants/auth.constant';

const userLogout = async () => {
    await axiosInstance.get('/auth/logout'); // remove refresh token
    removeFromLocalStorage(authKey); // remove access token

    return null;
};

export default userLogout;
