import { useNavigate, useSearchParams } from 'react-router-dom';
import { type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import UFrom from '../../components/form/UFrom';
import Logo from '../../components/shared/Logo';
import UOtpInput from '@/components/form/UOtpInput';
import { toast } from 'sonner';
import { verifyOtpSchema } from '../../schemas/auth.schema';
import { useVerifyOtpMutation } from '@/redux/features/auth.api';

const VerifyOtp = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const id = searchParams.get('id');

    const [verifyOtp] = useVerifyOtpMutation();

    const onSubmit = async (data: FieldValues) => {
        console.log({ id, data });

        const toastId = toast.loading('Verifying OTP...');

        try {
            await verifyOtp({ id, data }).unwrap();

            toast.success('OTP verified successfully!', { id: toastId });
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
                    <h1 className="text-2xl font-bold">Test School</h1>
                    <p className="text-muted-foreground">
                        Enter the verification code sent to your email
                    </p>
                </CardHeader>

                <CardContent className="space-y-6">
                    <UFrom
                        onSubmit={onSubmit}
                        resolver={zodResolver(verifyOtpSchema)}
                    >
                        <div className="space-y-4">
                            <UOtpInput
                                name="otp"
                                label="Verification Code"
                                maxLength={6}
                            />

                            <Button type="submit" className="w-full" size="lg">
                                Verify OTP
                            </Button>
                        </div>
                    </UFrom>
                </CardContent>
            </Card>
        </div>
    );
};

export default VerifyOtp;
