import React, { useState, useRef } from 'react';
import Home from './Home';
import Skills from './Skills';
import Project from './Project';
import Contect from './Contect';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  
  // Create a Reference for the Project Section
  const projectRef = useRef(null);

  // Function to handle smooth scrolling to Projects
  const scrollToProject = () => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  return (
    <div className="bg-stone-950">
      {!isStarted ? (
        // 🔹 Enter Screen
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950">
          <button
            onClick={() => setIsStarted(true)}
            className="group relative flex h-40 w-40 flex-col items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:scale-110 hover:border-stone-500"
          >
            <div className="absolute inset-0 animate-ping rounded-full bg-stone-500/20" />
            <span className="text-xs font-black tracking-[0.3em] text-stone-500 group-hover:text-stone-200">
              ENTER
            </span>
            <svg
              className="mt-2 h-6 w-6 text-stone-500 group-hover:text-stone-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      ) : (
        // 🔹 Main Portfolio Container
        <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth scrollbar-hide">
          
          {/* Home Section - We pass the scroll function as a prop */}
          <section className="h-screen snap-center">
            <Home action={isStarted} onScrollToProject={scrollToProject} />
          </section>

          <section className="h-screen snap-center">
            <Skills />
          </section>

          {/* Project Section - We attach the projectRef here */}
          <section ref={projectRef} className="h-screen snap-center">
            <Project />
          </section>

          <section className="h-screen snap-center">
            <Contect />
          </section>
          
        </div>
      )}
    </div>
  );
}

export default App;