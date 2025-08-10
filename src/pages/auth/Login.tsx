import { Link } from 'react-router-dom';
import { type FieldValues } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import UFrom from '../../components/form/UFrom';
import Logo from '../../components/shared/Logo';
import UInput from '@/components/form/UInput';

// import { loginSchema } from '../../schemas/auth.schema'; // TODO: Uncomment when schema is ready
// import { TLogin, TResponse } from '../../types'; // TODO: Uncomment when types are ready

const Login = () => {
    // TODO: Add actual navigation when routing is set up
    // const navigate = useNavigate();

    // TODO: Add Redux dispatch when store is ready
    // const dispatch = useAppDispatch();

    // TODO: Add actual login mutation when API is ready
    // const [login] = useLoginMutation();

    const onSubmit = async (data: FieldValues) => {
        console.log(data);

        // const toastId = toast.loading('Logging in...');
        // // TODO: Replace with actual API call when backend is ready
        // try {
        //     console.log('Login data:', data);
        //     // Simulate API call
        //     await new Promise(resolve => setTimeout(resolve, 1000));
        //     // TODO: Replace with actual API response handling
        //     const mockResponse: TResponse<TLogin> = {
        //         data: {
        //             data: {
        //                 accessToken: 'mock-token',
        //                 needsPasswordChange: false
        //             },
        //             message: 'Login successful!'
        //         }
        //     };
        //     if (mockResponse.data) {
        //         // TODO: Add actual token verification and user dispatch
        //         // const token = mockResponse.data.data.accessToken;
        //         // const user = verifyToken(token) as IUser;
        //         // dispatch(setUser({ user, token }));
        //         if (mockResponse.data.data.needsPasswordChange) {
        //             // TODO: navigate('/change-password');
        //             console.log('Should navigate to change password');
        //         } else {
        //             // TODO: navigate('/');
        //             console.log('Should navigate to home');
        //         }
        //         toast.success(mockResponse.data.message, { id: toastId });
        //     }
        // } catch {
        //     toast.error('Login failed. Please try again.', { id: toastId });
        // }
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

                        // TODO: Add resolver when Zod schema is ready
                        // resolver={zodResolver(loginSchema)}
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
