import Navbar from "../components/Navbar";

export default function About({ darkMode, toggleDarkMode }) {
  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-[#210E4A] to-[#5A1B27]"
          : "bg-gradient-to-b from-[#A75B2B] to-[#F4E5FB]"
      }`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-12 pt-20">
        <div className="max-w-3xl">
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-[#210E4A]"
            }`}
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            About Me
          </h1>
          <p
            className={`text-lg sm:text-xl mb-4 ${
              darkMode ? "text-white" : "text-[#210E4A]"
            }`}
            style={{ fontFamily: "'Comic Relief', system-ui" }}
          >
            Welcome to PlantMate! This project was created to help people find their perfect plant match.
          </p>
          <p
            className={`text-lg sm:text-xl ${
              darkMode ? "text-white" : "text-[#210E4A]"
            }`}
            style={{ fontFamily: "'Comic Relief', system-ui" }}
          >
            Add your content here about yourself and the project.
          </p>
        </div>
      </div>
    </div>
  );
}
