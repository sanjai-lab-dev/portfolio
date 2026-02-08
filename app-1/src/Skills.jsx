import React from 'react';
import Spin from './Spin';

function Skills({ className }) {
    const images = [
        { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "hover:drop-shadow-[0_0_15px_rgba(227,79,38,0.5)]" },
        { name: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "hover:drop-shadow-[0_0_15px_rgba(21,114,182,0.5)]" },
        { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "hover:drop-shadow-[0_0_15px_rgba(247,223,30,0.5)]" },
        { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "hover:drop-shadow-[0_0_15px_rgba(97,218,251,0.5)]" },
        { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "hover:drop-shadow-[0_0_15px_rgba(51,153,70,0.5)]" },
        { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "invert hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" },
        { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "hover:drop-shadow-[0_0_15px_rgba(71,162,72,0.5)]" },
        { name: "Tailwind", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]" },
        // Updated GitHub URL to white version for dark mode
        { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "invert hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" },
        { name: "Postman", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-plain.svg", color: "hover:drop-shadow-[0_0_15px_rgba(255,108,55,0.5)]" }
    ];

    return (
        <div className={`relative w-screen h-screen bg-[#0a0a0a] flex justify-center items-center overflow-hidden ${className}`}>
            
            {/* Background Ambient Glows */}
            <div className='absolute inset-0 pointer-events-none'>
                <div className='absolute top-[-10%] left-[-10%] w-96 h-96 bg-sky-900/20 blur-[120px] rounded-full' />
                <div className='absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-stone-800/20 blur-[120px] rounded-full' />
                <div className="flex flex-wrap justify-around items-center h-full opacity-20">
                    <Spin /><Spin /><Spin /><Spin /><Spin />
                </div>
            </div>

            {/* Main Skills Card */}
            <div className="z-10 w-[92vw] max-w-5xl p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl">
                
                <div className="text-center mb-12">
                    <h2 className='text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic'>
                        Tech <span className="text-stone-500">Stack</span>
                    </h2>
                    <div className="h-1 w-20 bg-sky-500 mx-auto mt-4 rounded-full" />
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8'>
                    {images.map((img, index) => (
                        <div 
                            key={index} 
                            className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-stone-900/50 border border-white/5 transition-all duration-300 hover:bg-stone-800 hover:-translate-y-2 hover:border-white/20`}
                        >
                            {/* Skill Icon */}
                            <img 
                                className={`w-12 h-12 md:w-16 md:h-16 mb-4 transition-all duration-300 ${img.color}`} 
                                src={img.image} 
                                alt={img.name} 
                            />
                            
                            {/* Skill Name */}
                            <span className='text-[10px] md:text-xs font-bold tracking-widest text-stone-500 group-hover:text-white transition-colors uppercase'>
                                {img.name}
                            </span>

                            {/* Subtle background glow on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white blur-xl transition-opacity rounded-2xl" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;