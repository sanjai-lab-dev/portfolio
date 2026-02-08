import React from 'react';

function Project() {
  const data = [

    {
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      title: "Portfolio Website",
      tags: ["React", "Tailwind"],
      info: "Personal portfolio built with React and Tailwind CSS showcasing my projects and skills.",
      git_link: "http://sanjai-lab-dev.github.io/portfolio"
    },
        {

      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      title: "Todo Manager",
      tags: ["React", "Tailwind"],
      info: "Todo application with CRUD operations, local storage, and clean UI using Tailwind.",
      git_link: "https://github.com/yourusername/todo-app"
    },
    {
      img: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b",
      title: "Weather App",
      tags: ["React", "Tailwind", "Weather API"],
      info: "Weather forecast app using OpenWeather API with location-based search.",
      git_link: "https://github.com/yourusername/weather-app"
    },
    {
      img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
      title: "Chat Application",
      tags: ["Socket.io", "Node.js", "Express"],
      info: "Real-time chat app using React, WebSocket, and Node.js with multiple users support.",
      git_link: "https://github.com/yourusername/chat-app"
    },
    {
      img: "https://images.unsplash.com/photo-1557821552-17105176677c",
      title: "E-Commerce App",
      tags: ["MongoDB", "Express", "Stripe"],
      info: "Full-stack e-commerce application with product listing, cart, and checkout features.",
      git_link: "https://github.com/yourusername/ecommerce-app"
    },

    

  ];

  return (
    <div className='relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] text-white'>

      {/* 1. Ambient Background Effects */}
      <div className="absolute top-[-10%] right-[-10%] h-125 w-125 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] h-125 w-125 rounded-full bg-stone-600/10 blur-[120px]" />

      {/* 2. Header Section */}
      <div className="z-10 mb-8 text-center">
        <h2 className="text-sm font-black tracking-[0.5em] text-stone-500 uppercase">Featured Work</h2>
        <div className="h-px w-12 bg-stone-700 mx-auto mt-2" />
      </div>

      {/* 3. Main Project Slider */}
      <div className='z-10 flex h-[75%] w-full max-w-7xl snap-x snap-mandatory flex-row overflow-x-auto scroll-smooth scrollbar-hide px-4 md:px-10'>
        {data.map((item, index) => (
          <div
            key={index}
            className='flex h-full w-full shrink-0 snap-center flex-col items-center justify-center p-4 md:p-8 lg:flex-row lg:gap-16'
          >
            {/* Image Section with "Floating" Drop Shadow */}
            <div className='group relative w-full lg:w-1/2'>
              {/* This is the glow behind the image */}
              <div className="absolute -inset-2 rounded-3xl bg-blue-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className='relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl'>
                <img
                  className='aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105'
                  src={item.img}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>

            {/* Content Section */}
            <div className='mt-8 flex w-full flex-col items-start lg:mt-0 lg:w-1/2'>
              <div className="flex gap-2 mb-4">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-1 rounded-md border border-stone-700 bg-stone-900/50 text-stone-400 font-bold uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className='mb-4 text-4xl font-black tracking-tighter md:text-6xl lg:text-7xl'>
                {item.title}
              </h2>

              <p className='mb-8 max-w-lg text-lg font-light leading-relaxed text-stone-400'>
                {item.info}
              </p>

              <div className="flex items-center gap-6">
                <a
                  href={item.git_link}
                  target="_blank"
                  rel="noreferrer"
                  className='group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-3 font-bold text-black transition-all hover:pr-12'
                >
                  <span className="relative z-10">Case Study</span>
                  <svg className="absolute right-4 translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <a href={item.git_link} className="text-stone-500 hover:text-white transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Scroll Indicator */}
      <div className="absolute bottom-10 flex gap-2">
        <div className="h-1 w-8 rounded-full bg-white" />
        <div className="h-1 w-2 rounded-full bg-stone-700" />
        <div className="h-1 w-2 rounded-full bg-stone-700" />
      </div>

    </div>
  );
}

export default Project;