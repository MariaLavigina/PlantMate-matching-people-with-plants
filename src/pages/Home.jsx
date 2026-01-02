import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero2.png')" }}
    >
  
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>

     
      <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-6 text-white">
          Discover Your Perfect Plant
        </h1>

        <p className="font-sans text-base sm:text-lg lg:text-xl mb-8 text-white">
          Personalized plant recommendations designed to thrive with your habits, space, and style.
        </p>

        <button
          onClick={() => navigate("/quiz")}
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-lg hover:from-green-500 hover:to-blue-600 transition"
        >
          Find Your Plant Match
        </button>
      </div>
    </div>
  );
}
