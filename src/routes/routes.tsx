import DashboardLayout from '@/layouts/DashboardLayout';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home/Home';
import Login from '@/pages/auth/Login';
import Dashboard from '@/pages/dashboard/Dashboard';
import Certificate from '@/pages/dashboard/student/Certificate';
import MyTests from '@/pages/dashboard/student/MyTests';
import Quiz from '@/pages/dashboard/student/Quiz';
import { createBrowserRouter } from 'react-router';
import ProtectedRoute from './ProtectedRoute';
import CreateQuiz from '@/pages/dashboard/admin/CreateQuiz';

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
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: (
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'student',
                children: [
                    {
                        path: 'quiz',
                        element: (
                            <ProtectedRoute role="student">
                                <Quiz />
                            </ProtectedRoute>
                        ),
                    },
                    {
                        path: 'certificate',
                        element: (
                            <ProtectedRoute role="student">
                                <Certificate />
                            </ProtectedRoute>
                        ),
                    },
                    {
                        path: 'my-tests',
                        element: (
                            <ProtectedRoute role="student">
                                <MyTests />
                            </ProtectedRoute>
                        ),
                    },
                ],
            },
            {
                path: 'admin',
                children: [
                    {
                        path: 'create-quiz',
                        element: (
                            <ProtectedRoute role="admin">
                                <CreateQuiz />
                            </ProtectedRoute>
                        ),
                    },
                ],
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
]);

export default router;
