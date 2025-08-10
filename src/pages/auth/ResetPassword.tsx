import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import UFrom from '../../components/form/UFrom';
import Logo from '../../components/shared/Logo';
import UInput from '@/components/form/UInput';
import { toast } from 'sonner';
import { resetPasswordSchema } from '../../schemas/auth.schema';
import { useResetPasswordMutation } from '@/redux/features/auth.api';
import { useEffect } from 'react';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [resetPassword] = useResetPasswordMutation();

    const id = searchParams.get('id');
    const token = searchParams.get('token');

    useEffect(() => {
        if (!id || !token) {
            navigate('/login');
        }
    }, [id, token, navigate]);

    const onSubmit = async (data: FieldValues) => {
        console.log(data);

        const toastId = toast.loading('Resetting password...');

        try {
            const resetPasswordData = {
                token,
                data: {
                    id,
                    password: data.password,
                },
            };

            await resetPassword(resetPasswordData).unwrap();

            toast.success('Password reset successfully!', { id: toastId });
            navigate('/login');
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
                    <h1 className="text-2xl font-bold">Reset Password</h1>
                    <p className="text-muted-foreground">
                        Enter your new password below
                    </p>
                </CardHeader>

                <CardContent className="space-y-6">
                    <UFrom
                        onSubmit={onSubmit}
                        resolver={zodResolver(resetPasswordSchema)}
                    >
                        <div className="space-y-4">
                            <UInput
                                name="password"
                                type="password"
                                label="New Password"
                                placeholder="Enter your new password"
                            />
                            <UInput
                                name="confirmPassword"
                                type="password"
                                label="Confirm New Password"
                                placeholder="Confirm your new password"
                            />

                            <Button type="submit" className="w-full" size="lg">
                                Reset Password
                            </Button>
                        </div>
                    </UFrom>

                    {/* Back to Login */}
                    <div className="text-center text-sm text-muted-foreground">
                        Remember your password?{' '}
                        <Link
                            to="/login"
                            className="text-primary hover:underline"
                        >
                            Back to login
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ResetPassword;
