
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Question } from './QuestionForm';
import { formatDistanceToNow } from 'date-fns';
import { Separator } from '@/components/ui/separator';

interface QuestionListProps {
  questions: Question[];
}

const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  if (questions.length === 0) {
    return (
      <div className="w-full max-w-2xl mx-auto mt-12 px-4 text-center animate-fade-in">
        <p className="text-muted-foreground italic">No questions yet. Be the first to ask!</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 px-4 animate-fade-in">
      <h2 className="text-xl font-semibold mb-6 tracking-tight">Recent Questions</h2>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <Card 
            key={question.id} 
            className="question-card overflow-hidden border-0 shadow-md"
            style={{ 
              animationDelay: `${index * 100}ms`,
              opacity: 0,
              animation: 'fade-in 0.5s ease forwards, slide-up 0.5s ease forwards',
              animationDelay: `${index * 100}ms`
            }}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Asked by <span className="font-medium text-foreground">{question.name}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatDistanceToNow(question.timestamp, { addSuffix: true })}
                  </p>
                </div>
              </div>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4">
              <p className="text-md leading-relaxed">{question.question}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
