import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo and Brand */}
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                            <span className="text-primary-foreground font-bold text-lg">
                                TS
                            </span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-foreground">
                                Test School
                            </h1>
                            <p className="text-xs text-muted-foreground">
                                Competency Assessment Platform
                            </p>
                        </div>
                    </div>

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

                    {/* CTA Buttons */}
                    <div className="flex items-center space-x-3">
                        <Badge
                            variant="secondary"
                            className="hidden sm:inline-flex"
                        >
                            New Platform
                        </Badge>
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
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
