import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home/Home';
import Login from '@/pages/auth/Login';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
]);

export default router;
