  import { useNavigate } from "react-router-dom";                                                                                 
  import Navbar from "../components/Navbar";                                                                                      
                                                                                                                                  
  export default function Home() {                                                                                                
    const navigate = useNavigate();                                                                                               
                                                                                                                                  
    return (                                                                                                                      
      <div className="relative h-screen overflow-hidden bg-gradient-to-b from-[#210E4A] to-[#5A1B27]">                            
        <Navbar />                                                                                                                
                                                                                                                                  
        {/* Desktop: Integrated plants framing content */}                                                                        
        <div className="hidden md:flex relative z-10 h-full items-start justify-center pt-32">                                    
          {/* Left side plants - SUBTLE GREEN */}
          <div className="absolute left-0 bottom-0 flex items-end gap-4 z-0">
            <img src="/images/desktop-images/desktop-plant-01.svg" alt="" className="h-80 lg:h-96 opacity-70 saturate-[0.3]" style={{ filter: 'saturate(0.3) brightness(0.9)' }} />
            <img src="/images/desktop-images/desktop-plant-02.svg" alt="" className="h-[450px] lg:h-[550px] opacity-70 saturate-[0.3]" style={{ filter: 'saturate(0.3) brightness(0.9)' }} />
          </div>

          {/* Right side plants - SUBTLE GREEN */}
          <div className="absolute right-0 bottom-0 flex items-end gap-4 z-0">
            <img src="/images/desktop-images/desktop-plant-04.svg" alt="" className="h-[450px] lg:h-[550px] opacity-70 saturate-[0.3]" style={{ filter: 'saturate(0.3) brightness(0.9)' }} />
            <img src="/images/desktop-images/desktop-plant-05.svg" alt="" className="h-80 lg:h-96 opacity-70 saturate-[0.3]" style={{ filter: 'saturate(0.3) brightness(0.9)' }} />
          </div>                                                                                                                  
                                                                                                                                  
          {/* Center plant behind content - KEEP BIG */}                                                                          
          <div className="absolute bottom-0 z-0 opacity-30">                                                                      
            <img src="/images/desktop-images/desktop-plant-03.svg" alt="" className="h-[650px] lg:h-[700px]" />                   
          </div>                                                                                                                  
                                                                                                                                  
          {/* Content in center - floating above plants */}                                                                       
          <div className="relative z-20 text-center max-w-3xl mx-auto px-8">                                                      
            <h1 className="font-heading text-6xl lg:text-7xl mb-6 text-white drop-shadow-2xl">                                    
              PlantMate+                                                                                                          
            </h1>                                                                                                                 
                                                                                                                                  
            <p className="font-sans text-lg lg:text-xl mb-10 text-white drop-shadow-lg">                                          
              PlantMate matches you with plants that fit your lifestyle, personality, and home. No guilt. No guesswork. Just      
  plants you'll actually keep alive.                                                                                              
              Take our quick quiz and meet your perfect plant match.                                                              
            </p>                                                                                                                  
                                                                                                                                  
            <button                                                                                                               
              onClick={() => navigate("/quiz")}                                                                                   
              className="px-16 py-5 text-lg bg-[#20083D]/80 backdrop-blur-sm border-2 border-[#65F0CD] text-[#65F0CD] font-bold   
  rounded-full hover:bg-[#65F0CD] hover:text-[#20083D] transition-all duration-300 shadow-2xl hover:scale-105"                    
            >                                                                                                                     
              Find Your Plant Match                                                                                               
            </button>                                                                                                             
          </div>                                                                                                                  
        </div>                                                                                                                    
                                                                                                                                  
        {/* Mobile view - unchanged */}                                                                                           
        <div className="md:hidden relative flex flex-col items-center text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">  
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
          <img src="/images/mobile-images/desktop-mobile-01.svg" alt="Plants" className="w-full" />                               
                                                                                                                                  
          <button                                                                                                                 
            onClick={() => navigate("/quiz")}                                                                                     
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] px-6 py-4 bg-[#20083D]/75    
  backdrop-blur-sm border-2 border-[#65F0CD] text-[#65F0CD] font-semibold rounded-full hover:bg-[#65F0CD] hover:text-[#20083D]    
  transition-all duration-300 shadow-2xl whitespace-nowrap"                                                                       
          >                                                                                                                       
            Find Your Plant Match                                                                                                 
          </button>                                                                                                               
        </div>                                                                                                                    
      </div>                                                                                                                      
    );                                                                                                                            
  }  