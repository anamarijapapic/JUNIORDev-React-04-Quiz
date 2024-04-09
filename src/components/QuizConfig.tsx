import { useState, useEffect } from 'react';
import axios from 'axios';

const QuizConfig = ({
  onStart,
}: {
  onStart: (
    category: string,
    difficulty: string,
    numberOfQuestions: number
  ) => void;
}) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const difficulties = ['easy', 'medium', 'hard'];
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          'https://opentdb.com/api_category.php'
        );
        setCategories(response.data.trivia_categories);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  const handleStart = () => {
    onStart(selectedCategory, selectedDifficulty, numberOfQuestions);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Quiz Configuration ⚙️</h2>
      <p className="mb-6 italic">
        Quiz yourself with questions from various categories and difficulty -
        configure your quiz below.
      </p>
      <div className="mb-3">
        <label htmlFor="category">
          Category:
          <select
            id="category"
            className="block w-full p-2.5 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Any Category</option>
            {categories.map((category: { id: number; name: string }) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="difficulty">
          Difficulty:
          <select
            id="difficulty"
            className="block w-full p-2.5 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="">Any Difficulty</option>
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mb-3">
        <label>
          Number of Questions:
          <input
            type="number"
            min="1"
            max="50"
            className="block w-full p-2.5 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg"
            value={numberOfQuestions}
            onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
          />
        </label>
      </div>
      <button
        className="block mt-8 w-full p-2.5 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-xl text-center"
        onClick={handleStart}
      >
        Start
      </button>
      <p className="block mt-6 text-lg text-right italic font-bold">
        Happy quizzing! 🍀
      </p>
    </div>
  );
};

export default QuizConfig;
