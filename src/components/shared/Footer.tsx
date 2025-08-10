import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Logo from './Logo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted/30 border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Logo size="sm" showText={true} />
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Empowering educators with intelligent assessment
                            tools that drive meaningful learning outcomes.
                        </p>
                        <div className="flex space-x-3">
                            <Button
                                variant="outline"
                                size="icon"
                                className="w-8 h-8"
                            >
                                <span className="text-xs">𝕏</span>
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="w-8 h-8"
                            >
                                <span className="text-xs">in</span>
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="w-8 h-8"
                            >
                                <span className="text-xs">f</span>
                            </Button>
                        </div>
                    </div>

                    {/* Product */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Integrations
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    API
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Support</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Contact Support
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Status
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
                        <span>
                            © {currentYear} Test School. All rights reserved.
                        </span>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="hover:text-foreground transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="hover:text-foreground transition-colors"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="hover:text-foreground transition-colors"
                            >
                                Cookies
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>Made with</span>
                        <span className="text-red-500">❤️</span>
                        <span>for educators</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
