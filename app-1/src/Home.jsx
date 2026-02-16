import React, { useState } from 'react';
import photo from './assets/Gemini_Generated_Image_h4q8rgh4q8rgh4q8.png';

function Home(props) {


  return (
    <div className='relative h-screen w-full overflow-hidden bg-[#0a0a0a] text-white'>



      {/* 2. MAIN CONTENT LAYER */}
      <div className={`clip-circle flex h-full w-full flex-col md:flex-row ${props.action ? 'clip-circle-open' : ''}`}>

        {/* Left Section: Introduction */}
        <div className='flex h-full w-full flex-col justify-center bg-linear-to-br from-gray-950 via-neutral-900 to-gray-950 px-8 md:w-1/2 md:px-16 xl:px-24'>
          <div className={props.action ? 'animate-reveal [animation-delay:0.5s]' : 'opacity-0'}>
            <h1 className='mb-6 text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-stone-100 to-stone-500 sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl'>
              Welcome.
            </h1>
            <p className='max-w-md text-lg leading-relaxed text-stone-400 md:text-xl'>
              <span className='font-bold text-stone-200 uppercase tracking-widest  block mb-2 text-md'>I'm Sanjai,</span>
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

          <div className={`flex flex-col items-center transform transition-all duration-1000 linear delay-1000 ${props.action
              ? "animate-[open_0.4s_linear_forwards]"
              : ""
            }`}>
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