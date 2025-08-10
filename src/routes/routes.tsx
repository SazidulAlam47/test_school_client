import DashboardLayout from '@/layouts/DashboardLayout';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home/Home';
import Login from '@/pages/auth/Login';
import Certificate from '@/pages/dashboard/student/Certificate';
import MyTests from '@/pages/dashboard/student/MyTests';
import Quiz from '@/pages/dashboard/student/Quiz';
import StudentDashboard from '@/pages/dashboard/student/StudentDashboard';
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
        path: '/dashboard/student',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <StudentDashboard />,
            },
            {
                path: 'quiz',
                element: <Quiz />,
            },
            {
                path: 'certificate',
                element: <Certificate />,
            },
            {
                path: 'my-tests',
                element: <MyTests />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
]);

export default router;
