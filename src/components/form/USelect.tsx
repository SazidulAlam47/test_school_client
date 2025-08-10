import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Controller } from 'react-hook-form';
import { cn } from '@/lib/utils';
import UFromError from './UFromError';

type SelectOption = {
    value: string;
    label: string;
};

type USelectProps = {
    name: string;
    label?: string;
    placeholder?: string;
    options: SelectOption[];
    disabled?: boolean;
    className?: string;
};

const USelect = ({
    name,
    label,
    placeholder = 'Select an option',
    options,
    disabled = false,
    className,
}: USelectProps) => {
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
                        <Select
                            value={field.value || ''}
                            onValueChange={field.onChange}
                            disabled={disabled}
                        >
                            <SelectTrigger
                                className={cn(
                                    'w-full',
                                    error &&
                                        'border-destructive focus-visible:ring-destructive',
                                )}
                            >
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                                {options.map((option) => (
                                    <SelectItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <UFromError error={error} />
                    </div>
                )}
            />
        </div>
    );
};

export default USelect;
