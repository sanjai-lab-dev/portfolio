import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    title: "Portfolio Website",
    tags: ["React", "Tailwind", "Framer"],
    info: "A high-performance personal portfolio featuring smooth transitions and dark-mode aesthetics.",
    git_link: "http://sanjai-lab-dev.github.io/portfolio"
  },
  {
    img: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b",
    title: "Weather App",
    tags: ["React", "Tailwind", "API"],
    info: "Real-time weather tracking with dynamic backgrounds based on local climate conditions.",
    git_link: "https://github.com/sanjai-lab-dev/Weather_app"
  },
  {
    img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
    title: "AI-Chat App",
    tags: ["Socket.io", "Node.js", "Express"],
    info: "Real-time AI Assistant using WebSockets for instantaneous, low-latency conversations.",
    git_link: "https://github.com/sanjai-lab-dev/Assistant_Ai"
  },
  {
    img: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa",
    title: "AI Interviewer",
    tags: ["MongoDB", "Express", "Stripe"],
    info: "A full-stack SaaS platform providing mock interviews and automated candidate feedback.",
    git_link: "https://github.com/sanjai-lab-dev/Ai_interviewer"
  },
   {
    img: "data:image/jpeg;base64,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",
     title: "Flappy Bird",
    tags: ["Game Engine","Godot"],
    info: "",
    git_link: "https://github.com/sanjai-lab-dev/Godot_Flappy-Bird"
  },
   {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBkWkce8Si9jchfuvjcPjrBINQ5eS_aSe3Nw&s",
    title: "Mario-game",
    tags: ["Game Engine","Godot"],
    info: "",
    git_link: "https://github.com/sanjai-lab-dev/Godot_Mario-game"
  }
];

const Project = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    // Loop back to start/end
    let nextStep = page + newDirection;
    if (nextStep < 0) nextStep = projects.length - 1;
    if (nextStep >= projects.length) nextStep = 0;
    setPage([nextStep, newDirection]);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95
    })
  };

  const currentProject = projects[page];

  return (
    <div className='relative h-screen w-full overflow-hidden bg-[#050505] text-white selection:bg-blue-500/30'>
      
      {/* 1. Static Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-900/10 blur-[120px]" />
      </div>

      {/* 2. Header */}
      <nav className="absolute top-0 w-full z-50 flex items-center justify-between px-8 py-8">
        <span className="text-xl font-black tracking-tighter">SANJAI.LAB</span>
        <div className="flex gap-4">
            {projects.map((_, i) => (
                <div key={i} className={`h-1 transition-all duration-500 ${i === page ? 'w-8 bg-blue-500' : 'w-2 bg-white/20'}`} />
            ))}
        </div>
      </nav>

      {/* 3. Interactive Content Layer */}
      <div className="relative flex h-full w-full items-center justify-center px-6 md:px-20">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 }
            }}
            className="flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-20"
          >
            {/* Image Section */}
            <div className='group relative w-full lg:w-1/2'>
              <div className="absolute -inset-4 rounded-[2rem] bg-blue-600/20 blur-2xl" />
              <div className='relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-stone-900 shadow-2xl transition-transform delay-100 ease-in-out hover:scale-110'>
                <img
                  className='h-full w-full object-cover '
                  src={currentProject.img}
                  alt={currentProject.title}
                />
              </div>
            </div>

            {/* Text Content */}
            <div className='flex w-full flex-col items-start lg:w-1/2'>
              <div className="flex gap-2 mb-6">
                {currentProject.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-3 py-1 rounded-full border border-white/10 bg-white/5 text-blue-400 font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className='mb-6 text-5xl font-black tracking-tighter md:text-7xl lg:text-8xl'>
                {currentProject.title}
              </h2>

              <p className='mb-10 text-xl font-light leading-relaxed text-stone-400 max-w-lg'>
                {currentProject.info}
              </p>

              <div className="flex items-center gap-6">
                <a
                  href={currentProject.git_link}
                  target="_blank"
                  className='rounded-full bg-white px-10 py-4 font-bold text-black transition-transform hover:scale-105 active:scale-95'
                >
                  View Case Study
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. Controls */}
      <div className="absolute bottom-10 left-[50%] flex gap-4 z-50 scale-150">
        <button 
          onClick={() => paginate(-1)}
          className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:bg-white hover:text-black"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button 
          onClick={() => paginate(1)}
          className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:bg-white hover:text-black"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>

      <div className="absolute top-10 left-70 hidden md:block scale-150">
          <p className="text-[10px] font-black tracking-[0.5em] text-stone-500 uppercase">
            Project {page + 1} / {projects.length}
          </p>
      </div>
    </div>
  );
};

export default Project;