import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Controller } from 'react-hook-form';
import { cn } from '@/lib/utils';
import UFromError from './UFromError';

type UInputProps = {
    type?: string;
    placeholder?: string;
    name: string;
    label?: string;
    disabled?: boolean;
    className?: string;
};

const UInput = ({
    type = 'text',
    placeholder,
    name,
    label,
    disabled = false,
    className,
}: UInputProps) => {
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
                        <Input
                            {...field}
                            value={field.value || ''}
                            type={type}
                            id={name}
                            placeholder={placeholder || ''}
                            disabled={disabled}
                            className={cn(
                                error &&
                                    'border-destructive focus-visible:ring-destructive'
                            )}
                        />
                        <UFromError error={error} />
                    </div>
                )}
            />
        </div>
    );
};

export default UInput;
