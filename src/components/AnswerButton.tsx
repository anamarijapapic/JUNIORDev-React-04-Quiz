import tw from 'tailwind-styled-components';

interface AnswerButtonProps {
  $isCorrect: boolean | null;
}

const AnswerButton = tw.button<AnswerButtonProps>`
    block w-full text-gray-900 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2
    ${({ $isCorrect }) =>
      $isCorrect === null &&
      `
        bg-gradient-to-r from-blue-200 via-blue-300 to-green-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-100
    `}
    ${({ $isCorrect }) =>
      $isCorrect === true &&
      `
        bg-gradient-to-r from-green-200 via-green-300 to-green-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-100
    `}
    ${({ $isCorrect }) =>
      $isCorrect === false &&
      `
        bg-gradient-to-r from-red-200 via-red-300 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100
    `}
`;

export default AnswerButton;
