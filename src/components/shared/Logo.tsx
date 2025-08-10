import { cn } from '@/lib/utils';
import { Link } from 'react-router';

type LogoProps = {
    size?: 'sm' | 'md' | 'lg';
    showText?: boolean;
    className?: string;
    iconOnly?: boolean;
};

const Logo = ({
    size = 'md',
    showText = true,
    className,
    iconOnly = false,
}: LogoProps) => {
    const sizeClasses = {
        sm: {
            icon: 'w-8 h-8',
            text: 'text-sm',
            subtitle: 'text-xs',
        },
        md: {
            icon: 'w-10 h-10',
            text: 'text-xl',
            subtitle: 'text-xs',
        },
        lg: {
            icon: 'w-16 h-16',
            text: 'text-2xl',
            subtitle: 'text-sm',
        },
    };

    const currentSize = sizeClasses[size];

    if (iconOnly) {
        return (
            <Link to="/">
                <div
                    className={cn(
                        'flex items-center justify-center bg-primary rounded-lg',
                        currentSize.icon,
                        className
                    )}
                >
                    <span
                        className={cn(
                            'text-primary-foreground font-bold',
                            size === 'sm'
                                ? 'text-xs'
                                : size === 'md'
                                ? 'text-lg'
                                : 'text-2xl'
                        )}
                    >
                        TS
                    </span>
                </div>
            </Link>
        );
    }

    return (
        <Link to="/">
            <div className={cn('flex items-center space-x-3', className)}>
                <div
                    className={cn(
                        'flex items-center justify-center bg-primary rounded-lg',
                        currentSize.icon
                    )}
                >
                    <span
                        className={cn(
                            'text-primary-foreground font-bold',
                            size === 'sm'
                                ? 'text-xs'
                                : size === 'md'
                                ? 'text-lg'
                                : 'text-2xl'
                        )}
                    >
                        TS
                    </span>
                </div>
                {showText && (
                    <div>
                        <h1
                            className={cn(
                                'font-bold text-foreground',
                                currentSize.text
                            )}
                        >
                            Test School
                        </h1>
                        <p
                            className={cn(
                                'text-muted-foreground',
                                currentSize.subtitle
                            )}
                        >
                            Competency Assessment Platform
                        </p>
                    </div>
                )}
            </div>
        </Link>
    );
};

export default Logo;
