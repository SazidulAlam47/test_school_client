import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Controller } from 'react-hook-form';
import { cn } from '@/lib/utils';
import UFromError from './UFromError';

type RadioOption = {
    value: string;
    label: string;
};

type URadioSelectProps = {
    name: string;
    label?: string;
    options: RadioOption[];
    disabled?: boolean;
    className?: string;
    orientation?: 'horizontal' | 'vertical';
};

const URadioSelect = ({
    name,
    label,
    options,
    disabled = false,
    className,
    orientation = 'vertical',
}: URadioSelectProps) => {
    return (
        <div
            className={cn('space-y-2', className)}
            style={{ margin: '12px 0' }}
        >
            <Controller
                name={name}
                render={({ field, fieldState: { error } }) => (
                    <div className="space-y-3">
                        {label && (
                            <Label
                                htmlFor={name}
                                className="text-sm font-medium"
                            >
                                {label}
                            </Label>
                        )}
                        <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            value={field.value || ''}
                            disabled={disabled}
                            className={cn(
                                orientation === 'horizontal'
                                    ? 'flex flex-row flex-wrap gap-4'
                                    : 'flex flex-col',
                                error && 'text-destructive',
                            )}
                        >
                            {options.map((option) => (
                                <div
                                    key={option.value}
                                    className="flex items-center gap-3"
                                >
                                    <RadioGroupItem
                                        value={option.value}
                                        id={`${name}-${option.value}`}
                                        disabled={disabled}
                                        className={cn(
                                            error &&
                                                'border-destructive text-destructive',
                                        )}
                                    />
                                    <Label
                                        htmlFor={`${name}-${option.value}`}
                                        className={cn(
                                            'font-normal cursor-pointer',
                                            disabled &&
                                                'cursor-not-allowed opacity-50',
                                            error && 'text-destructive',
                                        )}
                                    >
                                        {option.label}
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                        <UFromError error={error} />
                    </div>
                )}
            />
        </div>
    );
};

export default URadioSelect;
