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
                                                                                                                                  
                {/* This is the desktop-only section that displays 2 plant images positioned at the bottom-left of the screen. */}                                                         
        <div className="hidden md:flex relative z-10 h-full items-start justify-center pt-32">                                    
          <div className="absolute left-0 bottom-0 flex items-end gap-4 z-0">
            <PlantImage plantNumber="01" darkMode={darkMode} className="h-80 lg:h-96 opacity-70" />
            <PlantImage plantNumber="02" darkMode={darkMode} className="h-[450px] lg:h-[550px] opacity-70" />
          </div>

          {/* This displays 2 plant images positioned at the bottom-right of the screen (mirror of the left side) */}
          <div className="absolute right-0 bottom-0 flex items-end gap-4 z-0">
            <PlantImage plantNumber="04" darkMode={darkMode} className="h-[450px] lg:h-[550px] opacity-70" />
            <PlantImage plantNumber="05" darkMode={darkMode} className="h-80 lg:h-96 opacity-70" />
          </div>                                                                                                                  
                                                                                                                                  
          {/* This displays a large, faded plant image (30% opacity) positioned at the bottom-center behind all other content as a background element.  */}
          <div className="absolute bottom-0 z-0 opacity-30">
            <PlantImage plantNumber="03" darkMode={darkMode} className="h-[650px] lg:h-[700px]" />
          </div>                                                                                                                  
                                                                                                                                  
          {/* text */}
          <div className="relative z-20 text-center max-w-3xl mx-auto px-8">
            <h1 className={`font-heading text-6xl lg:text-7xl mb-6 drop-shadow-2xl ${darkMode ? 'text-white' : 'text-[#210E4A]'}`}>
              PlantMate+
            </h1>

            <p className={`font-sans text-lg lg:text-xl mb-10 drop-shadow-lg ${darkMode ? 'text-white' : 'text-[#3D1952]'}`}>                                          
              PlantMate matches you with plants that fit your lifestyle, personality, and home. No guilt. No guesswork. Just      
              plants you'll actually keep alive.                                                                                              
              Take our quick quiz and meet your perfect plant match.                                                              
            </p>                                                                                                                  

               {/** Glassmorphism effect with backdrop blur */}
            <button
              onClick={() => navigate("/quiz")}
              className={`px-16 py-5 text-lg border-2 font-bold rounded-full transition-all duration-300 shadow-2xl hover:scale-105 backdrop-blur-md ${
                darkMode
                  ? 'bg-[#20083D]/40 border-[#65F0CD] text-[#65F0CD] hover:bg-[#65F0CD]/80 hover:text-[#20083D]'
                  : 'bg-white/30 border-[#20083D] text-[#20083D] hover:bg-[#20083D]/80 hover:text-white'
              }`}
            >
              Find Your Plant Match
            </button>                                                                                                             
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
            className="w-full scale-90 origin-bottom"
          />

          <button
            onClick={() => navigate("/quiz")}
            className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] px-6 py-4 border-2 font-semibold rounded-full transition-all duration-300 shadow-2xl whitespace-nowrap backdrop-blur-md ${
              darkMode
                ? 'bg-[#20083D]/40 border-[#65F0CD] text-[#65F0CD] hover:bg-[#65F0CD]/80 hover:text-[#20083D]'
                : 'bg-white/30 border-[#20083D] text-[#20083D] hover:bg-[#20083D]/80 hover:text-white'
            }`}
          >
            Find Your Plant Match
          </button>

          <button
            onClick={() => navigate("/quiz")}
            className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] px-6 py-4 border-2 font-semibold rounded-full transition-all duration-300 shadow-2xl whitespace-nowrap backdrop-blur-md ${
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