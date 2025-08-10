import { Link, useNavigate } from 'react-router-dom';
import { type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import UFrom from '../../components/form/UFrom';
import Logo from '../../components/shared/Logo';
import UInput from '@/components/form/UInput';
import { toast } from 'sonner';
import { forgotPasswordSchema } from '../../schemas/auth.schema';
import { useForgotPasswordMutation } from '@/redux/features/auth.api';

const ForgotPassword = () => {
    const navigate = useNavigate();

    const [forgotPassword] = useForgotPasswordMutation();

    const onSubmit = async (data: FieldValues) => {
        console.log(data);

        const toastId = toast.loading('Sending reset email...');

        try {
            await forgotPassword(data).unwrap();

            toast.success('Password reset email sent successfully!', {
                id: toastId,
            });
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
                    <h1 className="text-2xl font-bold">Forgot Password</h1>
                    <p className="text-muted-foreground">
                        Enter your email to receive password reset instructions
                    </p>
                </CardHeader>

                <CardContent className="space-y-6">
                    <UFrom
                        onSubmit={onSubmit}
                        resolver={zodResolver(forgotPasswordSchema)}
                    >
                        <div className="space-y-4">
                            <UInput
                                name="email"
                                label="Email"
                                placeholder="Enter your email address"
                            />

                            <Button type="submit" className="w-full" size="lg">
                                Send Reset Email
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

export default ForgotPassword;
