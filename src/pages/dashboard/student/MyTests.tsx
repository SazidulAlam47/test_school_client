import { useGetMyAttemptsQuery } from '@/redux/features/testAttempt.api';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import type { ITestAttempt } from '@/types';

const MyTests = () => {
    const {
        data: testData,
        isLoading,
        error,
    } = useGetMyAttemptsQuery(undefined);

    const getStatusBadge = (status: string) => {
        const statusColors = {
            completed: 'bg-green-100 text-green-800 hover:bg-green-100',
            promoted: 'bg-blue-100 text-blue-800 hover:bg-blue-100',
            failed: 'bg-red-100 text-red-800 hover:bg-red-100',
            'in-progress': 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100',
        };

        return (
            <Badge
                className={
                    statusColors[status as keyof typeof statusColors] ||
                    'bg-gray-100 text-gray-800'
                }
            >
                {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
        );
    };

    const getStepDisplay = (step: number) => {
        const stepLabels = {
            1: 'Step 1',
            2: 'Step 2',
            3: 'Step 3',
        };
        return stepLabels[step as keyof typeof stepLabels] || `Step ${step}`;
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    if (isLoading) {
        return (
            <div className="space-y-6">
                <div>
                    <Skeleton className="h-8 w-48 mb-2" />
                    <Skeleton className="h-4 w-96" />
                </div>
                <Card>
                    <CardHeader>
                        <Skeleton className="h-6 w-32" />
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex space-x-4">
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-4 w-16" />
                                    <Skeleton className="h-4 w-32" />
                                    <Skeleton className="h-4 w-32" />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (error) {
        return (
            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        My Test History
                    </h1>
                    <p className="text-gray-600">
                        View your previous exam attempts and results
                    </p>
                </div>
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-center py-8">
                            <p className="text-red-600">
                                Failed to load test history. Please try again
                                later.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const testAttempts = testData || [];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    My Test History
                </h1>
                <p className="text-gray-600">
                    View your previous exam attempts and results
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Previous Exams</CardTitle>
                    <CardDescription>
                        Your exam history with step, status, and score
                        information
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {testAttempts.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-gray-500">
                                No exam attempts found. Take your first
                                assessment to see results here.
                            </p>
                        </div>
                    ) : (
                        <>
                            {/* Desktop Table View */}
                            <div className="hidden md:block overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="min-w-[100px]">
                                                Step
                                            </TableHead>
                                            <TableHead className="min-w-[120px]">
                                                Status
                                            </TableHead>
                                            <TableHead className="min-w-[80px]">
                                                Score
                                            </TableHead>
                                            <TableHead className="min-w-[100px]">
                                                Level
                                            </TableHead>
                                            <TableHead className="min-w-[140px]">
                                                Start Time
                                            </TableHead>
                                            <TableHead className="min-w-[140px]">
                                                End Time
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {testAttempts.map(
                                            (attempt: ITestAttempt) => (
                                                <TableRow key={attempt._id}>
                                                    <TableCell className="font-medium">
                                                        {getStepDisplay(
                                                            attempt.step,
                                                        )}
                                                    </TableCell>
                                                    <TableCell>
                                                        {getStatusBadge(
                                                            attempt.status,
                                                        )}
                                                    </TableCell>
                                                    <TableCell className="font-semibold">
                                                        {attempt.score !==
                                                        undefined ? (
                                                            <span
                                                                className={
                                                                    attempt.score >=
                                                                    70
                                                                        ? 'text-green-600'
                                                                        : 'text-red-600'
                                                                }
                                                            >
                                                                {attempt.score}%
                                                            </span>
                                                        ) : (
                                                            <span className="text-gray-400">
                                                                -
                                                            </span>
                                                        )}
                                                    </TableCell>
                                                    <TableCell>
                                                        {attempt.certifiedLevel ? (
                                                            <Badge
                                                                variant="outline"
                                                                className="font-mono"
                                                            >
                                                                {
                                                                    attempt.certifiedLevel
                                                                }
                                                            </Badge>
                                                        ) : (
                                                            <span className="text-gray-400">
                                                                -
                                                            </span>
                                                        )}
                                                    </TableCell>
                                                    <TableCell className="text-sm text-gray-600">
                                                        {formatDate(
                                                            attempt.startTime.toString(),
                                                        )}
                                                    </TableCell>
                                                    <TableCell className="text-sm text-gray-600">
                                                        {attempt.endTime ? (
                                                            formatDate(
                                                                attempt.endTime.toString(),
                                                            )
                                                        ) : (
                                                            <span className="text-gray-400">
                                                                In Progress
                                                            </span>
                                                        )}
                                                    </TableCell>
                                                </TableRow>
                                            ),
                                        )}
                                    </TableBody>
                                </Table>
                            </div>

                            {/* Mobile Card View */}
                            <div className="md:hidden space-y-4">
                                {testAttempts.map((attempt: ITestAttempt) => (
                                    <Card
                                        key={attempt._id}
                                        className="border-l-4 border-l-blue-500"
                                    >
                                        <CardContent className="p-4">
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-semibold text-lg">
                                                        {getStepDisplay(
                                                            attempt.step,
                                                        )}
                                                    </span>
                                                    {getStatusBadge(
                                                        attempt.status,
                                                    )}
                                                </div>
                                                {attempt.score !==
                                                    undefined && (
                                                    <span
                                                        className={`font-bold text-lg ${attempt.score >= 70 ? 'text-green-600' : 'text-red-600'}`}
                                                    >
                                                        {attempt.score}%
                                                    </span>
                                                )}
                                            </div>

                                            <div className="space-y-2 text-sm">
                                                {attempt.certifiedLevel && (
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-gray-600">
                                                            Level:
                                                        </span>
                                                        <Badge
                                                            variant="outline"
                                                            className="font-mono"
                                                        >
                                                            {
                                                                attempt.certifiedLevel
                                                            }
                                                        </Badge>
                                                    </div>
                                                )}

                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-600">
                                                        Started:
                                                    </span>
                                                    <span className="text-gray-900">
                                                        {formatDate(
                                                            attempt.startTime.toString(),
                                                        )}
                                                    </span>
                                                </div>

                                                <div className="flex justify-between items-center">
                                                    <span className="text-gray-600">
                                                        Ended:
                                                    </span>
                                                    <span className="text-gray-900">
                                                        {attempt.endTime ? (
                                                            formatDate(
                                                                attempt.endTime.toString(),
                                                            )
                                                        ) : (
                                                            <span className="text-yellow-600">
                                                                In Progress
                                                            </span>
                                                        )}
                                                    </span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default MyTests;
