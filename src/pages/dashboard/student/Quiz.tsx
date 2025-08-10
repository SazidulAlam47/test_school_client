import {
    useStartTestMutation,
    useSubmitAnswersMutation,
} from '@/redux/features/testAttempt.api';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Clock, FileText, Play, Users, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useGetMeQuery } from '@/redux/features/user.api';
import { useGetQuestionsByStepQuery } from '@/redux/features/question.api';
import { useState, useEffect } from 'react';
import UFrom from '@/components/form/UFrom';
import URadioSelect from '@/components/form/URadioSelect';
import { type FieldValues } from 'react-hook-form';
import type { IQuestion } from '@/types/question.type';
import formatTime from '@/utils/formatTime';
import { useNavigate } from 'react-router';

const Quiz = () => {
    const navigate = useNavigate();
    const [isStarted, setIsStarted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(44 * 60);
    const [quizId, setQuizId] = useState('');

    const { data: user } = useGetMeQuery(undefined);
    const [startTest, { isLoading: isStartLoading }] = useStartTestMutation();
    const { data: questions, isLoading: isQuestionsLoading } =
        useGetQuestionsByStepQuery(user?.currentStep, {
            skip: !isStarted || !user?.currentStep,
        });
    const [submitAnswers] = useSubmitAnswersMutation();

    useEffect(() => {
        if (isStarted && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            toast.error('Time is up! Quiz will be auto-submitted.');
            handleAutoSubmit();
        }
    }, [isStarted, timeLeft]);

    const handleAutoSubmit = async () => {
        const formElement = document.querySelector('form');
        if (formElement) {
            const formData = new FormData(formElement);
            const data: FieldValues = {};

            questions?.forEach((_, index: number) => {
                const fieldName = `question_${index}`;
                const value = formData.get(fieldName);
                if (value) {
                    data[fieldName] = value.toString();
                }
            });

            const payload = {
                answers:
                    questions?.map((question: IQuestion, index: number) => ({
                        questionId: question._id,
                        selectedOption: data[`question_${index}`]
                            ? parseInt(data[`question_${index}`])
                            : undefined,
                    })) || [],
            };

            try {
                await submitAnswers({ id: quizId, data: payload }).unwrap();
                toast.success('Quiz auto-submitted successfully!');
                navigate('/dashboard/student/my-tests');
            } catch (error: any) {
                toast.error(
                    error.message || error.data || 'Failed to auto-submit quiz',
                );
            }
        }
    };

    const handleStartTest = async () => {
        try {
            const quizTest = await startTest(undefined).unwrap();
            setIsStarted(true);
            setQuizId(quizTest._id);
            console.log(quizTest);
            toast.success('Quiz started successfully!');
        } catch (error: any) {
            toast.error(error.message || error.data || 'Something went wrong');
        }
    };

    const handleSubmitQuiz = async (data: FieldValues) => {
        const payload = {
            answers:
                questions?.map((question: IQuestion, index: number) => ({
                    questionId: question._id,
                    selectedOption: data[`question_${index}`]
                        ? parseInt(data[`question_${index}`])
                        : undefined,
                })) || [],
        };

        console.log(payload);

        const toastId = toast.loading('Submitting...');
        try {
            await submitAnswers({ id: quizId, data: payload }).unwrap();
            toast.success('Quiz submitted successfully!', {
                id: toastId,
            });
            navigate('/dashboard/student/my-tests');
        } catch (error: any) {
            toast.error(error.message || error.data || 'Something went wrong', {
                id: toastId,
            });
        }
    };

    if (isStarted) {
        return (
            <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
                <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b mb-4 sm:mb-6 pb-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold text-foreground">
                                Quiz Assessment
                            </h1>
                            <p className="text-sm sm:text-base text-muted-foreground">
                                Step {user?.currentStep || 0} - Digital
                                Competency Assessment
                            </p>
                        </div>
                        <div className="text-left sm:text-right">
                            <div className="flex items-center gap-2 text-lg font-semibold">
                                <Clock className="h-5 w-5 text-destructive" />
                                <span
                                    className={
                                        timeLeft < 300
                                            ? 'text-destructive'
                                            : 'text-foreground'
                                    }
                                >
                                    {formatTime(timeLeft)}
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Time Remaining
                            </p>
                        </div>
                    </div>
                </div>

                {isQuestionsLoading ? (
                    <div className="text-center py-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                        <p>Loading questions...</p>
                    </div>
                ) : questions && questions?.length > 0 ? (
                    <div className="max-w-4xl mx-auto">
                        <UFrom onSubmit={handleSubmitQuiz}>
                            <div className="space-y-6 sm:space-y-8">
                                {questions?.map(
                                    (question: IQuestion, index: number) => (
                                        <Card key={index} className="border-2">
                                            <CardHeader className="pb-4">
                                                <CardTitle className="text-base sm:text-lg">
                                                    Question {index + 1}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <URadioSelect
                                                    name={`question_${index}`}
                                                    label={question.text}
                                                    options={question.options.map(
                                                        (
                                                            option,
                                                            optionIndex,
                                                        ) => ({
                                                            value: optionIndex.toString(),
                                                            label: option,
                                                        }),
                                                    )}
                                                />
                                            </CardContent>
                                        </Card>
                                    ),
                                )}

                                <div className="flex justify-center pt-6 sm:pt-8">
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full sm:w-auto px-8 sm:px-12"
                                    >
                                        <CheckCircle className="h-5 w-5 mr-2" />
                                        Submit Quiz
                                    </Button>
                                </div>
                            </div>
                        </UFrom>
                    </div>
                ) : (
                    <div className="text-center py-8 max-w-2xl mx-auto">
                        <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p className="text-lg font-medium mb-2">
                            No Questions Available
                        </p>
                        <p className="text-muted-foreground">
                            No questions found for Step {user?.currentStep || 0}
                        </p>
                        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                            <p className="text-sm text-muted-foreground">
                                Debug: User Step = {user?.currentStep},
                                Questions = {questions?.length || 0}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    Quiz Assessment
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground">
                    Test your knowledge and skills
                </p>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-primary" />
                            Digital Competency Assessment
                        </CardTitle>
                        <CardDescription>
                            Test your digital skills and competency abilities
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span>44 minutes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-muted-foreground" />
                                <span>44 questions</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>Step: {user?.currentStep || 0}</span>
                        </div>

                        <div className="pt-2">
                            <Button
                                onClick={handleStartTest}
                                disabled={isStartLoading}
                                className="w-full"
                                size="lg"
                            >
                                {isStartLoading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                        Starting Quiz...
                                    </>
                                ) : (
                                    <>
                                        <Play className="h-4 w-4 mr-2" />
                                        Start Quiz
                                    </>
                                )}
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle className="text-primary">
                            Quiz Instructions
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <p>
                                    Each test session is timed and must be
                                    completed within the allocated timeframe
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <p>
                                    Questions will only include multiple choice
                                    formats.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <p>
                                    You must achieve a minimum score to pass and
                                    receive certification
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <p>
                                    Test results and progress tracking are
                                    available after completion
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <p>
                                    Ensure stable internet connection before
                                    starting the assessment
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Quiz;
