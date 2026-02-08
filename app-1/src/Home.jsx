import React, { useState } from 'react';
// Assuming the path to your photo is correct
import photo from './assets/Gemini_Generated_Image_h4q8rgh4q8rgh4q8.png';

function Home() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className='relative flex h-screen w-full flex-col overflow-hidden bg-linear-to-br from-gray-950 via-neutral-900 to-gray-950 text-white md:flex-row'>
      
      {/* Left Section: Introduction */}
      <div className='flex h-full w-full flex-col justify-center px-8 md:w-1/2 md:px-16 xl:px-24'>
        <div className='max-w-2xl'>
          <h1 className='mb-6 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-stone-200 to-stone-500 md:text-6xl lg:text-7xl xl:text-8xl'>
            Welcome.
          </h1>
          <p className='text-lg leading-relaxed text-stone-400 md:text-xl'>
            <span className='font-bold text-stone-200'>I'm Sanjai,</span> a dedicated 
            <span className='text-stone-200'> Junior Software Engineer</span> specializing in the 
            MERN Stack. I transform complex problems into elegant, scalable digital solutions.
          </p>
          <div className='mt-8 flex gap-4'>
            <button className='rounded-full border border-stone-600 px-6 py-2 transition-all hover:bg-stone-200 hover:text-black'>
              View Projects
            </button>
          </div>
        </div>
      </div>

      {/* Right Section: Profile Card */}
      <div className={`${isStarted ? "animate-[three_1s_linear_forwards]" : ""} relative z-0 flex h-full w-full flex-col items-center justify-center bg-stone-500 text-black md:w-1/2 md:rounded-l-[10%]`}>
        
        {/* Profile Image Container */}
        <div 
          className="group relative m-5 h-56 w-56 overflow-hidden rounded-3xl border-4 border-white/50 bg-cover bg-center shadow-2xl  duration-400 hover:scale-105 xl:h-80 xl:w-80" 
          style={{ backgroundImage: `url(${photo})` }}
        >
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
        </div>

        <div className='flex flex-col items-center gap-1'>
          <span className='text-sm font-bold tracking-[0.3em] text-stone-300 uppercase'>Software Engineer</span>
          <h2 className='text-4xl font-black md:text-6xl'>SANJAI.D</h2>
          <h3 className='text-xl font-medium text-stone-700'>MERN STACK DEVELOPER</h3>
        </div>
      </div>

      {/* Interaction Layer / Intro Overlay */}
      <div className={`absolute inset-0 z-10 pointer-events-none ${isStarted ? 'hidden' : 'block'}`}>
        <div className={`absolute left-0 top-0 h-screen w-1/2 bg-stone-800 transition-transform duration-1000 ${isStarted ? "-translate-x-full" : ""}`} />
        <div className={`absolute right-0 top-0 h-screen w-1/2 bg-stone-700 transition-transform duration-1000 ${isStarted ? "translate-x-full" : ""}`} />
      </div>

      {/* Floating Action Button (SVG) */}
      <div className='absolute inset-0 z-40 flex items-center justify-center pointer-events-none'>
        <svg 
           className={`h-40 w-40 cursor-pointer pointer-events-auto ${isStarted ? 'animate-[cir_1s_forwards]' : ' animate-[move_5s_forwards]'}`}
           viewBox="0 0 100 100" 
           onClick={() => setIsStarted(!isStarted)}
        >
          <circle 
            
            cx="50" cy="50" r="30" fill="#00433e" 
          />
          <text x="50" y="55" fontSize="10" textAnchor="middle" fill="white" className="pointer-events-none">CLICK</text>
        </svg>
      </div>
    </div>
  );
}

export default Home;