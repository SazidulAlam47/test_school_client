import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ContactSection = () => {
    const contactMethods = [
        {
            title: 'Sales Inquiries',
            description: 'Interested in Test School for your institution?',
            action: 'Contact Sales',
            icon: '💼',
            variant: 'default' as const,
        },
        {
            title: 'Technical Support',
            description: 'Need help with your existing account?',
            action: 'Get Support',
            icon: '🛠️',
            variant: 'outline' as const,
        },
        {
            title: 'General Questions',
            description: 'Have questions about our platform?',
            action: 'Send Message',
            icon: '💬',
            variant: 'secondary' as const,
        },
    ];

    return (
        <section id="contact" className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4">
                        Contact Us
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Get in Touch
                        <span className="text-primary block mt-2">
                            We're Here to Help
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have questions about Test School? Our team is ready to
                        help you get started or assist with any questions you
                        might have.
                    </p>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {contactMethods.map((method, index) => (
                        <Card
                            key={index}
                            className="text-center hover:shadow-lg transition-all duration-300"
                        >
                            <CardHeader className="pb-4">
                                <div className="text-4xl mb-4">
                                    {method.icon}
                                </div>
                                <CardTitle className="text-xl">
                                    {method.title}
                                </CardTitle>
                                <CardDescription className="text-base">
                                    {method.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button
                                    variant={method.variant}
                                    className="w-full"
                                >
                                    {method.action}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Quick Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className="space-y-2">
                        <div className="text-2xl">📧</div>
                        <div className="font-semibold">Email</div>
                        <div className="text-sm text-muted-foreground">
                            hello@testschool.edu
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-2xl">📞</div>
                        <div className="font-semibold">Phone</div>
                        <div className="text-sm text-muted-foreground">
                            +1 (555) 123-4567
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-2xl">🕐</div>
                        <div className="font-semibold">Support Hours</div>
                        <div className="text-sm text-muted-foreground">
                            24/7 Online Support
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-2xl">📍</div>
                        <div className="font-semibold">Location</div>
                        <div className="text-sm text-muted-foreground">
                            Global Remote Team
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
