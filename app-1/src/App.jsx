import React, { useState } from 'react'
import Skills from './Skills'
import Home from './Home'
import Contect from './Contect'
import Project from './Project'
import Theme from './Theme'


function App() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <>
      {!isStarted ? (
        // 🔹 Enter Screen
        <div className="absolute inset-0 z-50 flex items-center justify-center transition-opacity duration-1000">
          <div className="absolute inset-0 bg-stone-950" />

          <button
            onClick={() => setIsStarted(true)}
            className="group relative z-10 flex h-40 w-40 flex-col items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:scale-110 hover:border-stone-500"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      ) : (
        // 🔹 Main Portfolio
        <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-stone-800">
          <div className="m-0 snap-center p-0">
            <Home action={isStarted} />
          </div>

          <div className="snap-center">
            <Skills />
          </div>
    

          <div className="snap-center">
            <Project />
          </div>

          <div className="snap-center">
            <Contect />
          </div>

          
        </div>
      )}
    </>
  );
}

export default App;
