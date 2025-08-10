import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'High School Principal',
            school: 'Lincoln Academy',
            content:
                'Test School has transformed how we approach student assessment. The insights we get help us identify learning gaps early and provide targeted support.',
            rating: 5,
            avatar: 'SJ',
        },
        {
            name: 'Michael Chen',
            role: 'Mathematics Teacher',
            school: 'Riverside Middle School',
            content:
                'The platform is incredibly intuitive. My students are more engaged with assessments, and I can track their progress in real-time.',
            rating: 5,
            avatar: 'MC',
        },
        {
            name: 'Dr. Emily Rodriguez',
            role: 'Curriculum Director',
            school: 'Metro School District',
            content:
                'Implementation was seamless, and the analytics have been invaluable for our district-wide competency tracking initiatives.',
            rating: 5,
            avatar: 'ER',
        },
        {
            name: 'James Wilson',
            role: 'Science Department Head',
            school: 'Oakwood High School',
            content:
                'The collaborative features have improved communication between teachers and students. Assessment feedback is now more meaningful and actionable.',
            rating: 5,
            avatar: 'JW',
        },
        {
            name: 'Lisa Thompson',
            role: 'Special Education Coordinator',
            school: 'Valley Elementary',
            content:
                'The adaptive assessment features are perfect for our diverse learners. We can customize assessments to meet individual student needs.',
            rating: 5,
            avatar: 'LT',
        },
        {
            name: 'David Park',
            role: 'Technology Coordinator',
            school: 'Central High School',
            content:
                'The technical integration was smooth, and the platform scales perfectly with our growing student population.',
            rating: 5,
            avatar: 'DP',
        },
    ];

    return (
        <section id="testimonials" className="py-20 lg:py-32 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4">
                        Testimonials
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Trusted by Educators
                        <span className="text-primary block mt-2">
                            Worldwide
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        See what educators are saying about their experience
                        with Test School's assessment platform.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="border-0 bg-background/60 backdrop-blur hover:shadow-lg transition-all duration-300"
                        >
                            <CardContent className="p-6">
                                {/* Stars */}
                                <div className="flex items-center space-x-1 mb-4">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <span
                                                key={i}
                                                className="text-yellow-500 text-lg"
                                            >
                                                ⭐
                                            </span>
                                        )
                                    )}
                                </div>

                                {/* Content */}
                                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                                    "{testimonial.content}"
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-medium text-primary">
                                            {testimonial.avatar}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {testimonial.school}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
