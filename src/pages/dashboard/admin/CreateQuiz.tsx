import { useNavigate } from 'react-router-dom';
import { type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import UFrom from '@/components/form/UFrom';
import UInput from '@/components/form/UInput';
import USelect from '@/components/form/USelect';
import { toast } from 'sonner';
import { createQuestionFormSchema } from '@/schemas/question.schema';
import {
    levelOptions,
    correctAnswerOptions,
} from '@/constants/question.constant';
import { useCreateQuestionMutation } from '@/redux/features/question.api';
import { Plus, Save } from 'lucide-react';

const CreateQuiz = () => {
    const navigate = useNavigate();
    const [createQuestion, { isLoading }] = useCreateQuestionMutation();

    const onSubmit = async (data: FieldValues) => {
        console.log(data);

        const toastId = toast.loading('Creating question...');

        try {
            const payload = {
                text: data.text,
                options: [
                    data.option1,
                    data.option2,
                    data.option3,
                    data.option4,
                ],
                correctAnswer: parseInt(data.correctAnswer),
                level: data.level,
            };

            await createQuestion(payload).unwrap();
            toast.success('Question created successfully!', { id: toastId });
            navigate('/dashboard/admin/questions');
        } catch (error: any) {
            toast.error(error.message || error.data || 'Something went wrong', {
                id: toastId,
            });
        }
    };

    return (
        <div className="space-y-6 p-4 sm:p-6">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    Create Question
                </h1>
                <p className="text-muted-foreground">
                    Add a new question to the quiz database
                </p>
            </div>

            <Card className="max-w-2xl">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Plus className="h-5 w-5" />
                        New Question
                    </CardTitle>
                    <CardDescription>
                        Fill in the details to create a multiple choice question
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <UFrom
                        onSubmit={onSubmit}
                        resolver={zodResolver(createQuestionFormSchema)}
                    >
                        <div className="space-y-6">
                            <UInput
                                name="text"
                                label="Question Text"
                                placeholder="Enter the question"
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <UInput
                                    name="option1"
                                    label="Option 1"
                                    placeholder="First option"
                                />
                                <UInput
                                    name="option2"
                                    label="Option 2"
                                    placeholder="Second option"
                                />
                                <UInput
                                    name="option3"
                                    label="Option 3"
                                    placeholder="Third option"
                                />
                                <UInput
                                    name="option4"
                                    label="Option 4"
                                    placeholder="Fourth option"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <USelect
                                    name="correctAnswer"
                                    label="Correct Answer"
                                    placeholder="Select correct option"
                                    options={correctAnswerOptions}
                                />
                                <USelect
                                    name="level"
                                    label="Difficulty Level"
                                    placeholder="Select level"
                                    options={levelOptions}
                                />
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="flex-1"
                                    size="lg"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                            Creating...
                                        </>
                                    ) : (
                                        <>
                                            <Save className="h-4 w-4 mr-2" />
                                            Create Question
                                        </>
                                    )}
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => navigate('/dashboard')}
                                    size="lg"
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </UFrom>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreateQuiz;
