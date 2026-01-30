import { useLocation, useNavigate } from "react-router-dom";
import plants from "../data/plants.json";
import traits from "../data/traits.json";
import quizQuestions from "../data/quiz_questions.json";
import Navbar from "../components/Navbar";

export default function Results({ darkMode, toggleDarkMode }) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const selectedAnswers = state?.selectedAnswers || {};

  const selectedTraitIds = Object.entries(selectedAnswers).flatMap(
    ([qId, aId]) => {
      const question = quizQuestions.find((q) => q.id === Number(qId));
      const answer = question?.answers.find((a) => a.id === aId);
      return answer?.trait_ids || [];
    }
  );

  const bestMatch = plants.reduce((best, plant) => {
    const overlap = plant.traits.filter((t) => selectedTraitIds.includes(t)).length;
    if (!best || overlap > best.overlap) return { ...plant, overlap };
    return best;
  }, null);

  return (


  <div className={`flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8 py-10 transition-colors duration-500 ${darkMode ? 'bg-gradient-to-b from-[#210E4A] to-[#5A1B27]' : 'bg-gradient-to-b from-[#A75B2B] to-[#F4E5FB]'}`}>
    <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className={`max-w-xl w-full p-6 sm:p-8 rounded-lg shadow-2xl text-center mt-20 backdrop-blur-md border-2 ${
        darkMode
          ? 'bg-white/10 border-[#65F0CD]/30'
          : 'bg-white/30 border-[#210E4A]/30'
      }`}>
        <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-[#210E4A]'}`}>Your Plant Match</h2>
        {bestMatch ? (
          <div className={`p-4 sm:p-6 rounded-lg border-2 backdrop-blur-sm ${
            darkMode
              ? 'bg-white/10 border-[#65F0CD]/50'
              : 'bg-white/20 border-[#210E4A]/50'
          }`}>
            <h3 className={`font-semibold text-xl sm:text-2xl mb-2 ${darkMode ? 'text-[#65F0CD]' : 'text-[#210E4A]'}`}>{bestMatch.name}</h3>
            <p className={`mb-2 ${darkMode ? 'text-white' : 'text-[#210E4A]'}`}>{bestMatch.description}</p>
            <p className={`mt-2 text-sm sm:text-base ${darkMode ? 'text-white/80' : 'text-[#210E4A]/80'}`}>
              Traits: {bestMatch.traits.map((id) => traits.find((t) => t.id === id)?.name).join(", ")}
            </p>
          </div>
        ) : (
          //error/fallback message that shows if the quiz cannot find any matching plant for the user's answers
          <p className={darkMode ? 'text-white' : 'text-[#210E4A]'}>No plant match found.</p>
        )}
        <button
          onClick={() => navigate("/")}
          className={`mt-6 w-full sm:w-auto py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-200 border-2 ${
            darkMode
              ? 'bg-[#65F0CD] border-[#65F0CD] text-[#210E4A] hover:bg-[#4FD4B3] hover:border-[#4FD4B3]'
              : 'bg-[#210E4A] border-[#210E4A] text-[#65F0CD] hover:bg-[#2D1260]'
          }`}
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
