import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { useState } from 'react';
import Logo from './Logo';
import getUser from '@/utils/getUser';
import userLogout from '@/utils/userLogout';
import { toast } from 'sonner';

const Header = () => {
    const [, forceUpdate] = useState({});
    const decodedUser = getUser();

    const handleLogout = async () => {
        await userLogout();
        toast.success('Logged out successfully');
        forceUpdate({}); // Force re-render
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <Logo size="md" showText={true} />

                    {/* Navigation - Hidden on mobile */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a
                            href="#features"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Features
                        </a>
                        <a
                            href="#about"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#testimonials"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Reviews
                        </a>
                        <a
                            href="#contact"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Contact
                        </a>
                    </nav>

                    <div className="flex items-center space-x-3">
                        {decodedUser ? (
                            <>
                                <Link to="/dashboard">
                                    <Button size="sm">Dashboard</Button>
                                </Link>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="hidden sm:inline-flex"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="hidden sm:inline-flex"
                                >
                                    Sign Up
                                </Button>
                                <Link to="/login">
                                    <Button size="sm">Login</Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
