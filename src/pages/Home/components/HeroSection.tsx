import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

const HeroSection = () => {
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>

            <div className="container mx-auto px-4 relative">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}

                    {/* Main heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Transform Learning with
                        <span className="text-primary block mt-2">
                            Smart Assessments
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Empower educators and students with our comprehensive
                        competency assessment platform. Track progress, identify
                        gaps, and accelerate learning outcomes.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Link to="/dashboard/student/quiz">
                            <Button size="lg" className="text-base px-8">
                                Start Quiz Test
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-base px-8"
                        >
                            Watch Demo
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-primary">
                                10K+
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Students
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-primary">
                                500+
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Schools
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-primary">
                                95%
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Success Rate
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-primary">
                                24/7
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Support
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
