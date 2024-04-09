import { useState } from 'react';
import axios from 'axios';
import QuizConfig from './components/QuizConfig';
import QuestionCard from './components/QuestionCard';
import GameSummary from './components/GameSummary';

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const decodeHtml = (html: string) => {
    const domParser = new DOMParser();
    const decodedString = domParser.parseFromString(html, 'text/html').body
      .textContent;
    return decodedString;
  };

  interface Question {
    question: string;
    incorrect_answers: string[];
    correct_answer: string;
  }

  const fetchQuestions = async (
    category: string,
    difficulty: string,
    numberOfQuestions: number
  ) => {
    const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}`;
    try {
      const response = await axios.get(url);
      const data = response.data.results;
      setQuestions(data.map((q: Question) => decodeHtml(q.question)));
      setAnswers(
        data.map((q: Question) =>
          [...q.incorrect_answers, q.correct_answer]
            .map(decodeHtml)
            .sort(() => Math.random() - 0.5)
        )
      );
      setCorrectAnswers(
        data.map((q: Question) => decodeHtml(q.correct_answer))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleCorrectAnswer = () => {
    setTotalCorrectAnswers(totalCorrectAnswers + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  const handleRestart = () => {
    setQuestions([]);
    setAnswers([]);
    setCorrectAnswers([]);
    setCurrentQuestionIndex(0);
    setTotalCorrectAnswers(0);
    setGameOver(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 flex items-center">
      <div className="w-full max-w-lg mx-auto p-10 bg-white border border-gray-300 rounded-lg shadow">
        {gameOver && (
          <GameSummary
            totalQuestions={questions.length}
            totalCorrectAnswers={totalCorrectAnswers}
            onRestart={handleRestart}
          />
        )}

        {questions.length === 0 && <QuizConfig onStart={fetchQuestions} />}

        {questions.length > 0 && !gameOver && (
          <QuestionCard
            questionNumber={currentQuestionIndex + 1}
            question={questions[currentQuestionIndex]}
            answers={answers[currentQuestionIndex]}
            correctAnswer={correctAnswers[currentQuestionIndex]}
            onNext={handleNextQuestion}
            totalQuestions={questions.length}
            totalCorrectAnswers={totalCorrectAnswers}
            onCorrectAnswer={handleCorrectAnswer}
          />
        )}
      </div>
    </div>
  );
}

export default App;
