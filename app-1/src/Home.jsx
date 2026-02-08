import React, { useState } from 'react';
import photo from './assets/Gemini_Generated_Image_h4q8rgh4q8rgh4q8.png';

function Home() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className='relative h-screen w-full overflow-hidden bg-[#0a0a0a] text-white'>
      
      {/* 1. INITIAL OVERLAY (The "Click to Enter" Screen) */}
      <div className={`absolute inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${isStarted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="absolute inset-0 bg-stone-950" />
        <button 
          onClick={() => setIsStarted(true)}
          className="group relative z-10 flex h-40 w-40 flex-col items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:scale-110 hover:border-stone-500"
        >
          <div className="absolute inset-0 animate-ping rounded-full bg-stone-500/20" />
          <span className="text-xs font-black tracking-[0.3em] text-stone-500 group-hover:text-stone-200">ENTER</span>
          <svg className="mt-2 h-6 w-6 text-stone-500 group-hover:text-stone-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* 2. MAIN CONTENT LAYER */}
      <div className={`clip-circle flex h-full w-full flex-col md:flex-row ${isStarted ? 'clip-circle-open' : ''}`}>
        
        {/* Left Section: Introduction */}
        <div className='flex h-full w-full flex-col justify-center bg-linear-to-br from-gray-950 via-neutral-900 to-gray-950 px-8 md:w-1/2 md:px-16 xl:px-24'>
          <div className={isStarted ? 'animate-reveal [animation-delay:0.5s] opacity-0' : 'opacity-0'}>
            <h1 className='mb-6 text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-stone-100 to-stone-500 md:text-7xl lg:text-8xl'>
              Welcome.
            </h1>
            <p className='max-w-md text-lg leading-relaxed text-stone-400 md:text-xl'>
              <span className='font-bold text-stone-200 uppercase tracking-widest text-sm block mb-2'>I'm Sanjai,</span>
              A <span className='text-stone-100 font-medium'>Junior Software Engineer</span> specializing in the 
              MERN Stack. I transform complex problems into elegant, scalable digital solutions.
            </p>
            <div className='mt-10 flex gap-6'>
              <button className='group relative overflow-hidden rounded-full border border-stone-700 px-8 py-3 transition-all hover:border-stone-200'>
                <a className='relative z-10 font-bold group-hover:text-black ' href="#project">View Projects</a>
                <div className='absolute inset-0 -translate-x-full bg-stone-200 transition-transform duration-300 group-hover:translate-x-0' />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Profile Card */}
        <div className='relative flex h-full w-full flex-col items-center justify-center bg-stone-900 md:w-1/2'>
          {/* Subtle Background Glow */}
          <div className="absolute h-96 w-96 rounded-full bg-stone-500/10 blur-[120px]" />

          <div className={`flex flex-col items-center transition-all duration-1000 delay-700 ${isStarted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Profile Image Container */}
            <div 
              className="group relative mb-8 h-64 w-64 overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-[1.02] hover:border-stone-500 xl:h-96 xl:w-80" 
              style={{ 
                backgroundImage: `url(${photo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors" />
            </div>

            <div className='text-center'>
              <span className='text-[10px] font-black tracking-[0.6em] text-stone-500 uppercase'>Software Engineer</span>
              <h2 className='text-5xl font-black tracking-tighter text-white md:text-7xl'>SANJAI.D</h2>
              <div className="mx-auto my-4 h-px w-12 bg-stone-700" />
              <h3 className='text-sm font-medium tracking-[0.2em] text-stone-400'>MERN STACK DEVELOPER</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;