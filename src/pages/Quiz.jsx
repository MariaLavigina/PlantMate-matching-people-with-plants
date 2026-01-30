import { useState } from "react";
import { useNavigate } from "react-router-dom";
import quizQuestions from "../data/quiz_questions.json";
import Navbar from "../components/Navbar";

export default function Quiz() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleSelect = (answerId) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion.id]: answerId });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/results", { state: { selectedAnswers } });
    }
  };

  return (
   <div className="flex flex-col min-h-screen px-4 sm:px-6 lg:px-8 py-10 bg-gradient-to-b from-[#210E4A] to-[#5A1B27]">
      <Navbar />
      <div className="max-w-xl w-full mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md mt-20">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Question {currentQuestionIndex + 1} of {quizQuestions.length}
        </h2>
        <p className="mb-6 text-base sm:text-lg">{currentQuestion.question}</p>

        <div className="flex flex-col gap-3">
          {currentQuestion.answers.map((answer) => (
            <button
              key={answer.id}
              onClick={() => handleSelect(answer.id)}
              className={`text-left p-3 sm:p-4 border rounded-lg hover:bg-green-50 
                ${selectedAnswers[currentQuestion.id] === answer.id
                  ? "bg-green-100 border-green-500"
                  : "bg-white"
                }`}
            >
              {answer.text}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={!selectedAnswers[currentQuestion.id]}
          className={`mt-6 w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-white font-semibold 
            ${selectedAnswers[currentQuestion.id] 
              ? "bg-green-500 hover:bg-green-600" 
              : "bg-gray-300 cursor-not-allowed"
            }`}
        >
          {currentQuestionIndex < quizQuestions.length - 1 ? "Next Question" : "See My Plant Match"}
        </button>
      </div>
    </div>
  );
}
