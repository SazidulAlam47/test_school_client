import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CTASection = () => {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <Card className="border-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 overflow-hidden">
                    <CardContent className="p-12 lg:p-16 text-center relative">
                        {/* Background Elements */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-full translate-y-12 -translate-x-12"></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                Ready to Transform
                                <span className="text-primary block mt-2">
                                    Your Assessment Process?
                                </span>
                            </h2>

                            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Join thousands of educators who are already
                                using Test School to improve student outcomes
                                and streamline their assessment workflows.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                                <Button size="lg" className="text-base px-8">
                                    Start Quiz Test
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="text-base px-8"
                                >
                                    Watch Demo
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default CTASection;
