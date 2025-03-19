
import React, { useState } from 'react';
import QuestionForm, { Question } from '@/components/QuestionForm';
import QuestionList from '@/components/QuestionList';

const Index = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleSubmitQuestion = (questionData: Omit<Question, 'id' | 'timestamp'>) => {
    // In a real application, this would be sent to a backend
    const newQuestion: Question = {
      id: Math.random().toString(36).substr(2, 9),
      name: questionData.name,
      question: questionData.question,
      timestamp: new Date(),
    };
    
    setQuestions((prevQuestions) => [newQuestion, ...prevQuestions]);
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-medium text-primary mb-2 inline-block px-3 py-1 rounded-full bg-primary/10">Community Questions</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Ask Anything</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Submit your questions and see what others are asking. 
            Your contribution helps build our knowledge base.
          </p>
        </div>
        
        <QuestionForm onSubmit={handleSubmitQuestion} />
        <QuestionList questions={questions} />
      </div>
    </div>
  );
};

export default Index;
