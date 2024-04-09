import { useState } from 'react';
import AnswerButton from './AnswerButton';

const QuestionCard = ({
  questionNumber,
  question,
  answers,
  correctAnswer,
  onNext,
  totalQuestions,
  totalCorrectAnswers,
  onCorrectAnswer,
}: {
  questionNumber: number;
  question: string;
  answers: string[];
  correctAnswer: string;
  onNext: () => void;
  totalQuestions: number;
  totalCorrectAnswers: number;
  onCorrectAnswer: () => void;
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === correctAnswer) {
      onCorrectAnswer();
    }
    setTimeout(() => {
      setSelectedAnswer('');
      onNext();
    }, 1000);
  };

  return (
    <>
      <p className="text-lg font-semibold mb-2">
        Question {questionNumber} of {totalQuestions}
      </p>
      <h3 className="text-3xl font-bold mb-4">{question}</h3>
      <div className="space-y-2">
        {answers.map((answer, index) => (
          <AnswerButton
            key={index}
            onClick={() => handleSelectAnswer(answer)}
            $isCorrect={selectedAnswer !== '' ? answer === correctAnswer : null}
          >
            {answer}
          </AnswerButton>
        ))}
      </div>
      <p className="text-lg font-semibold mt-4">
        Correct Answers:{' '}
        <span className="text-2xl text-green-500">{totalCorrectAnswers}</span>
      </p>
    </>
  );
};

export default QuestionCard;
