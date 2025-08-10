import { Label } from '@/components/ui/label';
import { Controller } from 'react-hook-form';
import { cn } from '@/lib/utils';
import UFromError from './UFromError';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp';

type UOtpInputProps = {
    name: string;
    label?: string;
    disabled?: boolean;
    className?: string;
    maxLength?: number;
    pattern?: string;
};

const UOtpInput = ({
    name,
    label,
    disabled = false,
    className,
    maxLength = 6,
    pattern = REGEXP_ONLY_DIGITS_AND_CHARS,
}: UOtpInputProps) => {
    return (
        <div
            className={cn('space-y-2', className)}
            style={{ margin: '12px 0' }}
        >
            <Controller
                name={name}
                render={({ field, fieldState: { error } }) => (
                    <div className="space-y-2">
                        {label && (
                            <Label
                                htmlFor={name}
                                className="text-sm font-medium"
                            >
                                {label}
                            </Label>
                        )}
                        <InputOTP
                            {...field}
                            value={field.value || ''}
                            maxLength={maxLength}
                            pattern={pattern}
                            disabled={disabled}
                            className={cn(
                                'flex justify-center',
                                error && 'border-destructive',
                            )}
                        >
                            <InputOTPGroup>
                                {Array.from({ length: maxLength }).map(
                                    (_, index) => (
                                        <InputOTPSlot
                                            key={index}
                                            index={index}
                                        />
                                    ),
                                )}
                            </InputOTPGroup>
                        </InputOTP>
                        <UFromError error={error} />
                    </div>
                )}
            />
        </div>
    );
};

export default UOtpInput;
