import { useLocation, useNavigate } from "react-router-dom";
import plants from "../data/plants.json";
import traits from "../data/traits.json";
import quizQuestions from "../data/quiz_questions.json";
import Navbar from "../components/Navbar";
import InteractivePlantImage from "../components/InteractivePlantImage";

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
    <div
      className={`relative h-screen overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-[#210E4A] to-[#5A1B27]"
          : "bg-gradient-to-b from-[#A75B2B] to-[#F4E5FB]"
      }`}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between relative px-4 sm:px-6 lg:px-12 pt-20 md:h-[calc(100vh-80px)]">

        {/* Left Side - Text */}
        <div className="md:w-1/2 z-10 flex flex-col space-y-4
                items-center text-center
                md:justify-center md:items-start md:text-left mb-6 md:mb-0">

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${
              darkMode ? "text-white" : "text-[#210E4A]"
            }`}
          >
            Your Plant Match
          </h2>

          {bestMatch ? (
            <>
              <h3
                className={`text-2xl sm:text-3xl lg:text-4xl font-semibold ${
                  darkMode ? "text-[#65F0CD]" : "text-[#210E4A]"
                }`}
              >
                {bestMatch.name}
              </h3>
              <p className={`${darkMode ? "text-white" : "text-[#210E4A]"}`}>
                {bestMatch.description}
              </p>
              <p className={`${darkMode ? "text-white/80" : "text-[#210E4A]/80"}`}>
                Traits: {bestMatch.traits.map((id) => traits.find((t) => t.id === id)?.name).join(", ")}
              </p>
              <button
                onClick={() => navigate("/")}
                className={`mt-4 py-2 px-6 rounded-full font-semibold border-2 transition-all duration-300 self-center md:self-start
 ${
                  darkMode
                    ? "bg-[#65F0CD] border-[#65F0CD] text-[#210E4A] hover:bg-[#4FD4B3] hover:border-[#4FD4B3]"
                    : "bg-[#210E4A] border-[#210E4A] text-[#65F0CD] hover:bg-[#2D1260]"
                }`}
              >
                Go Home
              </button>
            </>
          ) : (
            <p className={darkMode ? "text-white" : "text-[#210E4A]"}>No plant match found.</p>
          )}
        </div>

        {/* Right Side - Interactive Plant Image */}
        {bestMatch && (
          <div className="md:w-1/2 w-full relative flex-1 min-h-[50vh] md:min-h-0">
            <InteractivePlantImage
              plant={bestMatch}
              darkMode={darkMode}
              className="absolute bottom-0 left-0 right-0 w-full max-h-[50vh] md:max-h-[85vh]"
            />
          </div>
        )}
      </div>
    </div>
  );
}
