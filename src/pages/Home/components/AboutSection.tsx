import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div>
                            <Badge variant="outline" className="mb-4">
                                About Us
                            </Badge>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                Revolutionizing
                                <span className="text-primary block mt-2">
                                    Educational Assessment
                                </span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Test School is dedicated to transforming how
                                educational institutions assess and track
                                student competencies. Our platform combines
                                cutting-edge technology with proven pedagogical
                                approaches to create meaningful learning
                                experiences.
                            </p>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                Founded by educators for educators, we
                                understand the challenges of modern assessment
                                and provide solutions that actually work in real
                                classroom environments.
                            </p>
                        </div>

                        {/* Key Points */}
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                <p className="text-muted-foreground">
                                    <span className="font-medium text-foreground">
                                        Data-Driven Insights:
                                    </span>{' '}
                                    Make informed decisions with comprehensive
                                    analytics
                                </p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                <p className="text-muted-foreground">
                                    <span className="font-medium text-foreground">
                                        Personalized Learning:
                                    </span>{' '}
                                    Adaptive assessments that meet individual
                                    needs
                                </p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                <p className="text-muted-foreground">
                                    <span className="font-medium text-foreground">
                                        Easy Integration:
                                    </span>{' '}
                                    Seamlessly fits into existing educational
                                    workflows
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg">Start Quiz Test</Button>
                        </div>
                    </div>

                    {/* Visual Cards */}
                    <div className="space-y-6">
                        <Card className="p-6 border-0 bg-gradient-to-br from-primary/10 to-secondary/10">
                            <CardContent className="p-0">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">🎓</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            For Educators
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Streamlined assessment workflows
                                        </p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    Create, distribute, and grade assessments
                                    with powerful tools designed specifically
                                    for educators.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="p-6 border-0 bg-gradient-to-br from-secondary/10 to-accent/10">
                            <CardContent className="p-0">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">📚</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            For Students
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Engaging learning experiences
                                        </p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    Interactive assessments that provide instant
                                    feedback and personalized learning paths.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="p-6 border-0 bg-gradient-to-br from-accent/10 to-primary/10">
                            <CardContent className="p-0">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">🏫</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            For Institutions
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Comprehensive oversight
                                        </p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    Monitor performance across all levels with
                                    detailed analytics and reporting tools.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
