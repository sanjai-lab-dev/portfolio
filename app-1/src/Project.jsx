import React from 'react';

function Project() {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      title: "Portfolio Website",
      info: "Personal portfolio built with React and Tailwind CSS showcasing my projects and skills.",
      git_link: "http://sanjai-lab-dev.github.io/portfolio"
    },
    {
      img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
      title: "Chat Application",
      info: "Real-time chat app using React, WebSocket, and Node.js with multiple users support.",
      git_link: "https://github.com/yourusername/chat-app"
    },
    {
      img: "https://images.unsplash.com/photo-1557821552-17105176677c",
      title: "E-Commerce App",
      info: "Full-stack e-commerce application with product listing, cart, and checkout features.",
      git_link: "https://github.com/yourusername/ecommerce-app"
    },
    {
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      title: "Todo Manager",
      info: "Todo application with CRUD operations, local storage, and clean UI using Tailwind.",
      git_link: "https://github.com/yourusername/todo-app"
    },
    {
      img: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b",
      title: "Weather App",
      info: "Weather forecast app using OpenWeather API with location-based search.",
      git_link: "https://github.com/yourusername/weather-app"
    }
  ];

  return (
    <div className='relative flex h-screen w-full items-center justify-center overflow-hidden bg-linear-to-br from-gray-950 via-stone-800 to-gray-950 px-4 py-10 text-white'>
      {/* Background Decorative Element */}
      <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      
      <div className='flex h-[85%] w-full max-w-6xl snap-x snap-mandatory flex-row overflow-x-auto rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm scrollbar-hide'>
        {data.map((item, index) => (
          <div 
            key={index} 
            className='flex h-full w-full shrink-0 snap-center flex-col items-center justify-center p-6 md:p-12 lg:flex-row lg:gap-12'
          >
            {/* Project Image with Hover Effect */}
            <div className='group relative w-full overflow-hidden rounded-2xl border border-white/20 shadow-lg lg:w-1/2'>
              <img 
                className='aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110' 
                src={item.img} 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            {/* Project Content */}
            <div className='mt-8 flex w-full flex-col items-start text-left lg:mt-0 lg:w-1/2'>
              <span className='mb-2 text-xs font-bold uppercase tracking-widest text-blue-400'>Project {index + 1}</span>
              <h2 className='mb-4 text-3xl font-black md:text-5xl'>{item.title}</h2>
              <p className='mb-8 text-lg leading-relaxed text-stone-300/80 md:text-xl'>
                {item.info}
              </p>
              <a 
                href={item.git_link} 
                target="_blank" 
                rel="noreferrer"
                className='group flex items-center gap-3 rounded-full bg-white px-8 py-3 font-bold text-black transition-all hover:bg-blue-400 hover:scale-105 active:scale-95'
              >
                View on GitHub
                <svg className="transition-transform group-hover:rotate-12" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;