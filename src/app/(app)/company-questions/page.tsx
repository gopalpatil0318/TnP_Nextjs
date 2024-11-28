  "use client"
import { useState } from 'react';
import debounce from 'lodash/debounce';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Plus } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

interface AddQuestionFormProps {
    onSubmit: (question: { company: string; questions: string[]; studentName: string; review: string }) => void;
    onClose: () => void;
}

export function AddQuestionForm({ onSubmit, onClose }: AddQuestionFormProps) {
    const [company, setCompany] = useState('');
    const [questions, setQuestions] = useState(['']);
    const [studentName, setStudentName] = useState('');
    const [suggestedStudents, setSuggestedStudents] = useState<string[]>([]);
    const [review, setReview] = useState('');
    const [loading, setLoading] = useState(false);

    const handleAddQuestion = () => setQuestions([...questions, '']);
    const handleRemoveQuestion = (index: number) => setQuestions(questions.filter((_, i) => i !== index));
    const handleQuestionChange = (index: number, value: string) => {
        const newQuestions = [...questions];
        newQuestions[index] = value;
        setQuestions(newQuestions);
    };

    // Function to fetch students dynamically by either firstName or username
    const fetchSuggestedStudents = async (query: string) => {
        if (!query) {
            setSuggestedStudents([]);
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(`/api/fetch-student-name?query=${query}`);
            const data = await response.json();

            if (data.success) {
                setSuggestedStudents(
                    data.users.map((user: { firstName: string; lastName: string, username: string }) => {
                        return `${user.firstName} ${user.lastName} (${user.username})`;
                    })
                );
            } else {
                setSuggestedStudents([]);
            }
        } catch (error) {
            console.error('Error fetching students:', error);
        } finally {
            setLoading(false);
        }
    };

    const debouncedFetch = debounce(fetchSuggestedStudents, 300);

    const handleStudentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setStudentName(value);
        debouncedFetch(value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newQuestion = {
            company,
            questions: questions.filter(q => q.trim() !== ''),
            studentName,
            review,
        };

        try {
            const response = await fetch('/api/questions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newQuestion),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Failed to add question:', errorText);
                alert(`Error: ${errorText || 'Unknown error'}`);
                return;
            }

            onSubmit(newQuestion);
        } catch (error) {
            console.error('An error occurred:', error);
            alert(`An error occurred while submitting your question: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-[#244855]">Add Questions</h2>
                <Button variant="ghost" size="icon" onClick={onClose}>
                    <X className="h-5 w-5 text-gray-500" />
                </Button>
            </div>

            <div className="relative">
                <Input
                    value={studentName}
                    onChange={handleStudentNameChange}
                    placeholder="Search student name or username..."
                />
                {loading && <p>Loading...</p>}
                {suggestedStudents.length > 0 && (
                    <div className="absolute bg-white border border-gray-300 rounded-md shadow-lg w-full max-h-48 overflow-y-auto">
                        {suggestedStudents.map((name, index) => (
                            <div
                                key={index}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => {
                                    setStudentName(name);
                                    setSuggestedStudents([]);
                                }}
                            >
                                {name}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Select onValueChange={setCompany} required>
                <SelectTrigger className="border-gray-300 focus:ring-[#244855] focus:border-[#244855]">
                    <SelectValue placeholder="Select company" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Microsoft">Microsoft</SelectItem>
                    <SelectItem value="Google">Google</SelectItem>
                    <SelectItem value="RecruitCRM">RecruitCRM</SelectItem>
                </SelectContent>
            </Select>

            <ScrollArea className="h-[200px] pr-4">
                {questions.map((question, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-4">
                        <Textarea
                            placeholder={`Question ${index + 1}`}
                            value={question}
                            onChange={(e) => handleQuestionChange(index, e.target.value)}
                            required
                            className="flex-grow"
                        />
                        {index > 0 && (
                            <Button type="button" onClick={() => handleRemoveQuestion(index)} variant="destructive" size="icon">
                                <X className="h-4 w-4 text-black" />
                            </Button>
                        )}
                    </div>
                ))}
            </ScrollArea>

            <Button type="button" onClick={handleAddQuestion} variant="outline" className="w-full border-[#244855] text-[#244855] hover:bg-[#FBE9D0]">
                <Plus className="h-4 w-4 mr-2" /> Add Another Question
            </Button>

            <Textarea
                placeholder="Review (optional)"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="mt-4"
            />

            <Button type="submit" className="w-full bg-[#E64833] hover:bg-[#C93C2B] text-white">
                Submit
            </Button>
        </form>
    );
}
