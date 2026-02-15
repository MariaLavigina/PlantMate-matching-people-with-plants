  import { useNavigate } from "react-router-dom";
  import Navbar from "../components/Navbar";
  import PlantImage from "../components/PlantImage";                                                                                      
                                                                                                                                  
  export default function Home({ darkMode, toggleDarkMode }) {
    // sending users to the quiz page
    const navigate = useNavigate();                                                                                               
                                                                                                                                  
    return (   
      // conditional bg colors for dark/light mode                                                                                                                   
      <div className={`relative h-screen overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-gradient-to-b from-[#210E4A] to-[#5A1B27]' : 'bg-gradient-to-b from-[#A75B2B] to-[#F4E5FB]'}`}>
        {/*  displays the Navbar & gives it the current dark mode and the function to switch between dark/light modes.  */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />                                                                                                                
                                                                                                                                  
                {/* Desktop split-screen layout: text on left, plants on right */}
       <div className="hidden md:grid md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1fr_1fr] h-full items-center
                px-12 md:px-20 lg:px-28 xl:px-36 2xl:px-48
">

          {/* Left side - Text content */}
<div className="relative z-20 h-full flex flex-col justify-center">


 <div className="max-w-md lg:max-w-lg xl:max-w-xl">
    <h1
      className={`font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl mb-4 md:mb-5 lg:mb-6 leading-snug drop-shadow-2xl ${darkMode ? 'text-white' : 'text-[#210E4A]'}`}
      style={{ fontFamily: "'Caveat', cursive", fontOpticalSizing: "auto" }}
    >
      PlantMate+
    </h1>

    <p
      className={`font-sans text-sm md:text-base lg:text-lg xl:text-xl mb-6 md:mb-8 leading-relaxed drop-shadow-lg ${darkMode ? 'text-white' : 'text-[#3D1952]'}`}
      style={{ fontFamily: "'Comic Relief', system-ui" }}
    >
      PlantMate matches you with plants that fit your lifestyle, personality, and home. No guilt. No guesswork. Just
      plants you'll actually keep alive.
    </p>

    <p
      className={`font-sans text-sm md:text-base lg:text-lg xl:text-xl mb-8 md:mb-10 leading-relaxed drop-shadow-lg ${darkMode ? 'text-white' : 'text-[#3D1952]'}`}
      style={{ fontFamily: "'Comic Relief', system-ui" }}
    >
      Take our quick quiz and meet your perfect plant match.
    </p>

<button
  onClick={() => navigate("/quiz")}
  className={`px-4 md:px-6 lg:px-8 xl:px-10 py-2 md:py-3 lg:py-4 xl:py-5 text-xs md:text-sm lg:text-base xl:text-lg border-2 font-bold rounded-full transition-all duration-300 shadow-2xl hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-md ${
    darkMode
      ? 'bg-[#20083D]/40 border-[#65F0CD] text-[#65F0CD] hover:bg-[#65F0CD]/80 hover:text-[#20083D]'
      : 'bg-white/30 border-[#20083D] text-[#20083D] hover:bg-[#20083D]/80 hover:text-white'
  }`}
  style={{ fontFamily: "'Comic Relief', system-ui" }}
>
  Find Your Plant Match
</button>

            </div>
          </div>

          {/* Right side - Plants */}

<div className="relative w-full  items-center justify-end overflow-hidden pr-8 lg:pr-12">
  <img
    src={darkMode ? "/images/desktop-images/dark-mode-plants.svg" : "/images/desktop-images/light-mode-plants.svg"}
    alt="Plants"
    
  />
</div>
        </div>                                                                                                                    
                                                                                                                                  
        {/* Mobile view - unchanged */}
        <div className="md:hidden relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl mb-6 mt-10 text-white" style={{ fontFamily: "'Caveat', cursive", fontOpticalSizing: "auto" }}>
            PlantMate+
          </h1>

          <p className="font-sans text-lg sm:text-xl lg:text-2xl mb-8 text-white" style={{ fontFamily: "'Comic Relief', system-ui" }}>
            PlantMate matches you with plants that fit your lifestyle, personality, and home. No guilt. No guesswork. Just plants
            you'll actually keep alive.
            Take our quick quiz and meet your perfect plant match.
          </p>
        </div>                                                                                                                    
                                                                                                                                  
        {/* Mobile image at bottom */}
        <div className="block md:hidden absolute bottom-0 left-0 right-0">
          <img
            src={darkMode ? "/images/mobile-images/dark-mobile.svg" : "/images/mobile-images/light-mobile.svg"}
            alt="Plants"
            className="w-full scale-90 origin-bottom plant-hover-animation"
          />

          <button
            onClick={() => navigate("/quiz")}
            className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] px-6 py-5 text-lg border-2 font-semibold rounded-full transition-all duration-300 shadow-2xl whitespace-nowrap backdrop-blur-md ${
              darkMode
                ? 'bg-[#20083D]/40 border-[#65F0CD] text-[#65F0CD] hover:bg-[#65F0CD]/80 hover:text-[#20083D]'
                : 'bg-white/30 border-[#20083D] text-[#20083D] hover:bg-[#20083D]/80 hover:text-white'
            }`}
            style={{ fontFamily: "'Comic Relief', system-ui" }}
          >
            Find Your Plant Match
          </button>
        </div>                                                                                                                    
      </div>                                                                                                                      
    );                                                                                                                            
  }  