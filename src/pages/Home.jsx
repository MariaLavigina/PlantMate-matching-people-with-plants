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
        <div className="hidden md:grid md:grid-cols-[1.2fr_1fr] lg:grid-cols-[1fr_1fr] h-full items-center">
          {/* Left side - Text content */}
          <div className="relative z-20 h-full flex flex-col justify-center pl-8 md:pl-12 lg:pl-16 xl:pl-20 2xl:pl-28 pr-6 md:pr-8 lg:pr-12">
            <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl">
              <h1 className={`font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-5 md:mb-6 lg:mb-8 leading-tight drop-shadow-2xl ${darkMode ? 'text-white' : 'text-[#210E4A]'}`}>
                PlantMate+
              </h1>

              <p className={`font-sans text-base md:text-lg lg:text-xl xl:text-2xl mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-lg lg:max-w-xl xl:max-w-2xl drop-shadow-lg ${darkMode ? 'text-white' : 'text-[#3D1952]'}`}>
                PlantMate matches you with plants that fit your lifestyle, personality, and home. No guilt. No guesswork. Just
                plants you'll actually keep alive.
              </p>

              <p className={`font-sans text-base md:text-lg lg:text-xl mb-10 md:mb-12 lg:mb-14 leading-relaxed max-w-lg lg:max-w-xl xl:max-w-2xl drop-shadow-lg ${darkMode ? 'text-white' : 'text-[#3D1952]'}`}>
                Take our quick quiz and meet your perfect plant match.
              </p>

              {/** Glassmorphism effect with backdrop blur */}
              <button
                onClick={() => navigate("/quiz")}
                className={`px-10 md:px-12 lg:px-16 xl:px-20 py-4 md:py-5 lg:py-6 xl:py-7 text-base md:text-lg lg:text-xl xl:text-2xl border-2 md:border-3 font-bold rounded-full transition-all duration-300 shadow-2xl hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-md ${
                  darkMode
                    ? 'bg-[#20083D]/40 border-[#65F0CD] text-[#65F0CD] hover:bg-[#65F0CD]/80 hover:text-[#20083D]'
                    : 'bg-white/30 border-[#20083D] text-[#20083D] hover:bg-[#20083D]/80 hover:text-white'
                }`}
              >
                Find Your Plant Match
              </button>
            </div>
          </div>

          {/* Right side - Plants */}
          <div className="relative h-full flex items-end justify-end overflow-hidden">
            <img
              src={darkMode ? "/images/desktop-images/plants-desktop-light.svg" : "/images/desktop-images/plants-desktop-dark.svg"}
              alt="Plants"
              className="h-[85vh] md:h-[90vh] lg:h-[95vh] w-auto object-contain object-bottom transition-transform duration-500 plant-hover-animation"
            />
          </div>
        </div>                                                                                                                    
                                                                                                                                  
        {/* Mobile view - unchanged */}
        <div className="md:hidden relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl mb-6 mt-10 text-white">
            PlantMate+
          </h1>

          <p className="font-sans text-lg sm:text-xl lg:text-2xl mb-8 text-white">
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
          >
            Find Your Plant Match
          </button>
        </div>                                                                                                                    
      </div>                                                                                                                      
    );                                                                                                                            
  }  