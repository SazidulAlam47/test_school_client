import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FeaturesSection = () => {
    const features = [
        {
            title: 'Smart Assessment Engine',
            description:
                'AI-powered assessment tools that adapt to student learning patterns and provide personalized feedback.',
            icon: '🧠',
            badge: 'AI Powered',
        },
        {
            title: 'Real-time Analytics',
            description:
                'Comprehensive dashboards with detailed insights into student performance and learning progress.',
            icon: '📊',
            badge: 'Analytics',
        },
        {
            title: 'Competency Mapping',
            description:
                'Map skills and competencies to track student development across multiple learning objectives.',
            icon: '🎯',
            badge: 'Tracking',
        },
        {
            title: 'Collaborative Learning',
            description:
                'Foster collaboration between students, teachers, and parents with integrated communication tools.',
            icon: '👥',
            badge: 'Social',
        },
        {
            title: 'Mobile Compatible',
            description:
                'Access assessments and track progress on any device with our responsive mobile platform.',
            icon: '📱',
            badge: 'Mobile',
        },
        {
            title: 'Secure & Compliant',
            description:
                'Enterprise-grade security with full compliance to educational data protection standards.',
            icon: '🔒',
            badge: 'Security',
        },
    ];

    return (
        <section id="features" className="py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4">
                        Features
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Everything You Need for
                        <span className="text-primary block mt-2">
                            Effective Assessment
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our comprehensive platform provides all the tools needed
                        to create, manage, and analyze student assessments
                        effectively.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="relative hover:shadow-lg transition-all duration-300 border-0 bg-background/60 backdrop-blur"
                        >
                            <CardHeader className="pb-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="text-3xl">
                                        {feature.icon}
                                    </div>
                                    <Badge
                                        variant="secondary"
                                        className="text-xs"
                                    >
                                        {feature.badge}
                                    </Badge>
                                </div>
                                <CardTitle className="text-xl">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base leading-relaxed">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
