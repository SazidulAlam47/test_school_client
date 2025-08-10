import { useGetMeQuery } from '@/redux/features/user.api';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import {
    User,
    Mail,
    Shield,
    CheckCircle,
    XCircle,
    Key,
    Award,
    TrendingUp,
    AlertCircle,
    Users,
} from 'lucide-react';

const Dashboard = () => {
    const { data: user, isLoading, error } = useGetMeQuery(undefined);

    const getStepProgress = (currentStep?: number) => {
        if (!currentStep) return 0;
        return (currentStep / 3) * 100;
    };

    const getStepLabel = (step?: number) => {
        const stepLabels = {
            1: 'Step 1 - Basic',
            2: 'Step 2 - Intermediate',
            3: 'Step 3 - Advanced',
        };
        return stepLabels[step as keyof typeof stepLabels] || 'Not Started';
    };

    const getRoleDisplay = (role: string) => {
        return role.charAt(0).toUpperCase() + role.slice(1);
    };

    const getLevelColor = (level?: string) => {
        const levelColors = {
            A1: 'bg-green-100 text-green-800 hover:bg-green-100',
            A2: 'bg-blue-100 text-blue-800 hover:bg-blue-100',
            B1: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100',
            B2: 'bg-orange-100 text-orange-800 hover:bg-orange-100',
            C1: 'bg-purple-100 text-purple-800 hover:bg-purple-100',
            C2: 'bg-red-100 text-red-800 hover:bg-red-100',
        };
        return (
            levelColors[level as keyof typeof levelColors] ||
            'bg-gray-100 text-gray-800'
        );
    };

    if (isLoading) {
        return (
            <div className="space-y-6 p-4 sm:p-6">
                <div>
                    <Skeleton className="h-8 w-64 mb-2" />
                    <Skeleton className="h-4 w-96" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <Card key={i}>
                            <CardHeader>
                                <Skeleton className="h-6 w-32" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-16 w-full" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 sm:p-6">
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                        Failed to load user data. Please try refreshing the
                        page.
                    </AlertDescription>
                </Alert>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="p-4 sm:p-6">
                <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>No user data available.</AlertDescription>
                </Alert>
            </div>
        );
    }

    return (
        <div className="space-y-6 p-4 sm:p-6">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    Welcome, {user.name}
                </h1>
                <p className="text-muted-foreground">
                    Manage your profile and track your assessment progress
                </p>
            </div>

            {user.needPasswordChange && (
                <Alert variant="destructive">
                    <Key className="h-4 w-4" />
                    <AlertDescription>
                        You need to change your password for security reasons.
                    </AlertDescription>
                </Alert>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-2">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-base font-medium">
                            Profile Information
                        </CardTitle>
                        <User className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm font-medium">
                                    {user.email}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-muted-foreground" />
                                <Badge variant="outline">
                                    {getRoleDisplay(user.role)}
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-2">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-base font-medium">
                            Account Status
                        </CardTitle>
                        <Shield className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                    Verification
                                </span>
                                <div className="flex items-center gap-1">
                                    {user.isVerified ? (
                                        <>
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                            <span className="text-sm font-medium text-green-600">
                                                Verified
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <XCircle className="h-4 w-4 text-red-600" />
                                            <span className="text-sm font-medium text-red-600">
                                                Unverified
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                    Password Status
                                </span>
                                <div className="flex items-center gap-1">
                                    {user.needPasswordChange ? (
                                        <>
                                            <AlertCircle className="h-4 w-4 text-yellow-600" />
                                            <span className="text-sm font-medium text-yellow-600">
                                                Change Required
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                            <span className="text-sm font-medium text-green-600">
                                                Secure
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {user.role === 'student' && (
                    <Card className="border-2">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-base font-medium">
                                Assessment Progress
                            </CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-muted-foreground">
                                            Current Step
                                        </span>
                                        <span className="text-sm font-medium">
                                            {user.currentStep
                                                ? `${user.currentStep}/3`
                                                : '0/3'}
                                        </span>
                                    </div>
                                    <Progress
                                        value={getStepProgress(
                                            user.currentStep,
                                        )}
                                        className="h-2"
                                    />
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {getStepLabel(user.currentStep)}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {user.role === 'student' && user.certificationLevel && (
                    <Card className="border-2">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-base font-medium">
                                Certification Level
                            </CardTitle>
                            <Award className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-center">
                                <Badge
                                    className={`text-lg px-4 py-2 font-mono ${getLevelColor(user.certificationLevel)}`}
                                >
                                    {user.certificationLevel}
                                </Badge>
                            </div>
                            <p className="text-xs text-center text-muted-foreground mt-2">
                                Digital Competency Level
                            </p>
                        </CardContent>
                    </Card>
                )}

                {(user.otp || user.otpExpiresAt) && (
                    <Card className="border-2 border-yellow-200">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-base font-medium">
                                OTP Information
                            </CardTitle>
                            <Key className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                {user.otp && (
                                    <div>
                                        <span className="text-sm text-muted-foreground">
                                            OTP Status:{' '}
                                        </span>
                                        <span className="text-sm font-medium">
                                            Active
                                        </span>
                                    </div>
                                )}
                                {user.otpExpiresAt && (
                                    <div>
                                        <span className="text-sm text-muted-foreground">
                                            Expires:{' '}
                                        </span>
                                        <span className="text-sm font-medium">
                                            {new Date(
                                                user.otpExpiresAt,
                                            ).toLocaleString()}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                )}

                <Card className="md:col-span-2 lg:col-span-3 border-2">
                    <CardHeader>
                        <CardTitle>Account Summary</CardTitle>
                        <CardDescription>
                            Complete overview of your account details and
                            progress
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div
                            className={`grid gap-4 ${user.role === 'student' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'}`}
                        >
                            <div className="text-center p-4 bg-muted/50 rounded-lg">
                                <User className="h-8 w-8 mx-auto mb-2 text-primary" />
                                <p className="text-sm font-medium">Name</p>
                                <p className="text-lg font-bold">{user.name}</p>
                            </div>
                            <div className="text-center p-4 bg-muted/50 rounded-lg">
                                <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                                <p className="text-sm font-medium">Role</p>
                                <p className="text-lg font-bold">
                                    {getRoleDisplay(user.role)}
                                </p>
                            </div>
                            {user.role === 'student' && (
                                <>
                                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                                        <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                                        <p className="text-sm font-medium">
                                            Current Step
                                        </p>
                                        <p className="text-lg font-bold">
                                            {user.currentStep || 0}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Dashboard;
