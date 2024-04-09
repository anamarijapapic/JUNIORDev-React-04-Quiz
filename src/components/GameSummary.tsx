const GameSummary = ({
  totalQuestions,
  totalCorrectAnswers,
  onRestart,
}: {
  totalQuestions: number;
  totalCorrectAnswers: number;
  onRestart: () => void;
}) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Thanks for playing!</h2>
      <p className="text-lg mb-4">
        You answered{' '}
        <span className="font-semibold">{totalCorrectAnswers}</span> out of{' '}
        <span className="font-semibold">{totalQuestions}</span> questions
        correctly.
      </p>
      <p className="mb-4 italic">
        Click the button below to test your knowledge again. Practice makes
        perfect! 🧠
      </p>
      <button
        onClick={onRestart}
        className="block mt-6 w-full p-2.5 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-xl text-center"
      >
        Play Again
      </button>
    </>
  );
};

export default GameSummary;
