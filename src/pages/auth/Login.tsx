import { Link, useNavigate } from 'react-router-dom';
import { type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import UFrom from '../../components/form/UFrom';
import Logo from '../../components/shared/Logo';
import UInput from '@/components/form/UInput';
import { useLoginMutation } from '@/redux/features/auth/auth.api';
import { toast } from 'sonner';
import { setToLocalStorage } from '@/utils/localStorage';
import { authKey } from '@/constants/auth.constant';
import { loginSchema } from '../../schemas/auth.schema';

const Login = () => {
    const navigate = useNavigate();

    const [login] = useLoginMutation();

    const onSubmit = async (data: FieldValues) => {
        console.log(data);

        const toastId = toast.loading('Logging in...');

        try {
            const res = await login(data).unwrap();

            const token = res.accessToken;
            if (token) {
                setToLocalStorage(authKey, token);
                if (res.needPasswordChange) {
                    navigate('/change-password');
                } else {
                    navigate('/');
                }
                toast.success('Login successful!', { id: toastId });
            }
        } catch (error: any) {
            toast.error(error.message || error.data || 'Something went wrong', {
                id: toastId,
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center pb-6">
                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <Logo size="lg" showText={false} iconOnly={true} />
                    </div>
                    <h1 className="text-2xl font-bold">Test School</h1>
                    <p className="text-muted-foreground">
                        Sign in to your account
                    </p>
                </CardHeader>

                <CardContent className="space-y-6">
                    <UFrom
                        onSubmit={onSubmit}
                        resolver={zodResolver(loginSchema)}
                    >
                        <div className="space-y-4">
                            <UInput
                                name="email"
                                label="Email"
                                placeholder="Enter your email"
                            />
                            <UInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="Enter your password"
                            />

                            <Button type="submit" className="w-full" size="lg">
                                Sign In
                            </Button>
                        </div>
                    </UFrom>

                    {/* Forgot Password Link */}
                    <div className="text-center">
                        <Link
                            to="/forgot-password"
                            className="text-sm text-primary hover:underline"
                        >
                            Forgot your password?
                        </Link>
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center text-sm text-muted-foreground">
                        Don't have an account?{' '}
                        <Link
                            to="/register"
                            className="text-primary hover:underline"
                        >
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
