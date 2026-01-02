import { useLocation, useNavigate } from "react-router-dom";
import plants from "../data/plants.json";
import traits from "../data/traits.json";
import quizQuestions from "../data/quiz_questions.json";

export default function Results() {
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
    <div className="flex flex-col items-center min-h-screen px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-xl w-full bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Your Plant Match </h2>
        {bestMatch ? (
          <div className="border p-4 sm:p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl sm:text-2xl mb-2">{bestMatch.name}</h3>
            <p className="text-gray-700 mb-2">{bestMatch.description}</p>
            <p className="mt-2 text-sm sm:text-base text-gray-500">
              Traits: {bestMatch.traits.map((id) => traits.find((t) => t.id === id)?.name).join(", ")}
            </p>
          </div>
        ) : (
          <p>No plant match found.</p>
        )}
        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
