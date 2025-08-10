import { Link, useNavigate } from 'react-router-dom';
import { type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import UFrom from '../../components/form/UFrom';
import Logo from '../../components/shared/Logo';
import UInput from '@/components/form/UInput';
import { toast } from 'sonner';
import { registerSchema } from '../../schemas/auth.schema';
import { useRegisterMutation } from '@/redux/features/auth.api';

const Register = () => {
    const navigate = useNavigate();

    const [register] = useRegisterMutation();

    const onSubmit = async (data: FieldValues) => {
        console.log(data);

        const toastId = toast.loading('Creating account...');

        try {
            const res = await register(data).unwrap();

            toast.success('Account created successfully!', { id: toastId });
            navigate(`/verify-otp?id=${res._id}`);
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
                    <div className="flex justify-center mb-6">
                        <Logo size="lg" showText={false} iconOnly={true} />
                    </div>
                    <h1 className="text-2xl font-bold">Test School</h1>
                    <p className="text-muted-foreground">Create your account</p>
                </CardHeader>

                <CardContent className="space-y-6">
                    <UFrom
                        onSubmit={onSubmit}
                        resolver={zodResolver(registerSchema)}
                    >
                        <div className="space-y-4">
                            <UInput
                                name="name"
                                label="Full Name"
                                placeholder="Enter your full name"
                            />
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
                                Create Account
                            </Button>
                        </div>
                    </UFrom>

                    <div className="text-center text-sm text-muted-foreground">
                        Already have an account?{' '}
                        <Link
                            to="/login"
                            className="text-primary hover:underline"
                        >
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Register;
