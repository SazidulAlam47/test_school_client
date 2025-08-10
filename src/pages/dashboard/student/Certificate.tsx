import { useGetMyCertificateQuery } from '@/redux/features/certificate.api';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import {
    Award,
    Calendar,
    Mail,
    User,
    AlertCircle,
    Trophy,
    CheckCircle,
} from 'lucide-react';
import { useEffect } from 'react';

const Certificate = () => {
    const {
        data: certificate,
        isLoading,
        error,
    } = useGetMyCertificateQuery(undefined);

    useEffect(() => {
        if (certificate) {
            toast.success('Certificate has been sent to your email address!', {
                icon: <Mail className="h-4 w-4" />,
                duration: 5000,
            });
        }
    }, [certificate]);

    const getLevelColor = (level?: string) => {
        const levelColors = {
            A1: 'bg-green-100 text-green-800 border-green-300',
            A2: 'bg-blue-100 text-blue-800 border-blue-300',
            B1: 'bg-yellow-100 text-yellow-800 border-yellow-300',
            B2: 'bg-orange-100 text-orange-800 border-orange-300',
            C1: 'bg-purple-100 text-purple-800 border-purple-300',
            C2: 'bg-red-100 text-red-800 border-red-300',
        };
        return (
            levelColors[level as keyof typeof levelColors] ||
            'bg-gray-100 text-gray-800 border-gray-300'
        );
    };

    const getLevelDescription = (level?: string) => {
        const descriptions = {
            A1: 'Basic User - Beginner',
            A2: 'Basic User - Elementary',
            B1: 'Independent User - Intermediate',
            B2: 'Independent User - Upper Intermediate',
            C1: 'Proficient User - Advanced',
            C2: 'Proficient User - Mastery',
        };
        return (
            descriptions[level as keyof typeof descriptions] ||
            'Digital Competency Level'
        );
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    if (isLoading) {
        return (
            <div className="space-y-6 p-4 sm:p-6">
                <div>
                    <Skeleton className="h-8 w-64 mb-2" />
                    <Skeleton className="h-4 w-96" />
                </div>

                <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                        <Skeleton className="h-6 w-48" />
                        <Skeleton className="h-4 w-64" />
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <Skeleton className="h-32 w-full" />
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Skeleton className="h-20 w-full" />
                                <Skeleton className="h-20 w-full" />
                                <Skeleton className="h-20 w-full" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (error) {
        return (
            <div className="space-y-6 p-4 sm:p-6">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                        My Certificate
                    </h1>
                    <p className="text-muted-foreground">
                        View and download your digital competency certificate
                    </p>
                </div>

                <Alert variant="destructive" className="max-w-4xl mx-auto">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                        Failed to load certificate. You may not have earned a
                        certificate yet or there was an error loading your data.
                    </AlertDescription>
                </Alert>
            </div>
        );
    }

    if (!certificate) {
        return (
            <div className="space-y-6 p-4 sm:p-6">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                        My Certificate
                    </h1>
                    <p className="text-muted-foreground">
                        View and download your digital competency certificate
                    </p>
                </div>

                <Card className="max-w-4xl mx-auto">
                    <CardContent className="pt-8">
                        <div className="text-center py-12">
                            <Trophy className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                            <h3 className="text-lg font-semibold mb-2">
                                No Certificate Available
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Complete your digital competency assessment to
                                earn your certificate.
                            </p>
                            <Button
                                onClick={() =>
                                    (window.location.href =
                                        '/dashboard/student/quiz')
                                }
                            >
                                Take Assessment
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="space-y-6 p-4 sm:p-6">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    My Certificate
                </h1>
                <p className="text-muted-foreground">
                    View and download your digital competency certificate
                </p>
            </div>

            <Alert className="max-w-4xl mx-auto border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                    <strong>Congratulations!</strong> Your certificate has been
                    automatically sent to your email address.
                </AlertDescription>
            </Alert>

            <Card className="max-w-4xl mx-auto border-2">
                <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-purple-50 border-b">
                    <div className="flex justify-center mb-4">
                        <div className="p-4 bg-primary rounded-full">
                            <Award className="h-8 w-8 text-primary-foreground" />
                        </div>
                    </div>
                    <CardTitle className="text-2xl sm:text-3xl text-primary">
                        Digital Competency Certificate
                    </CardTitle>
                    <CardDescription className="text-lg">
                        This certifies that the below named person has
                        successfully completed the digital competency assessment
                    </CardDescription>
                </CardHeader>

                <CardContent className="pt-8">
                    <div className="space-y-8">
                        <div className="text-center space-y-4">
                            <div className="space-y-2">
                                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                                    This certificate is awarded to
                                </p>
                                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                                    {certificate.name}
                                </h2>
                            </div>

                            <div className="flex justify-center">
                                <Badge
                                    className={`text-2xl px-6 py-3 font-mono border-2 ${getLevelColor(certificate.level)}`}
                                    variant="outline"
                                >
                                    Level {certificate.level}
                                </Badge>
                            </div>

                            <p className="text-lg text-muted-foreground">
                                {getLevelDescription(certificate.level)}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <User className="h-8 w-8 mx-auto mb-3 text-primary" />
                                    <p className="text-sm font-medium text-muted-foreground">
                                        Recipient
                                    </p>
                                    <p className="text-lg font-semibold">
                                        {certificate.name}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <Trophy className="h-8 w-8 mx-auto mb-3 text-primary" />
                                    <p className="text-sm font-medium text-muted-foreground">
                                        Achievement
                                    </p>
                                    <p className="text-lg font-semibold">
                                        Level {certificate.level}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {getLevelDescription(certificate.level)}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <Calendar className="h-8 w-8 mx-auto mb-3 text-primary" />
                                    <p className="text-sm font-medium text-muted-foreground">
                                        Date Issued
                                    </p>
                                    <p className="text-lg font-semibold">
                                        {formatDate(
                                            certificate.issuedAt.toString(),
                                        )}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Certificate Date
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Certificate;
