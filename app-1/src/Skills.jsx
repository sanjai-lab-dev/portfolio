
import React from 'react';
import Spin from './Spin'; // Assuming Spin is your animation component

function Skills({ className }) {
    const images = [
        {
            name: "HTML5",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
            name: "CSS3",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        {
            name: "JavaScript",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
},
        {
            name: "Node.js",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        },
        {
            name: "Express",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        },
        {
            name: "MongoDB",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        },
        {
            name: "Tailwind CSS",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
        },
          {
            name: "Postman",
            image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-plain.svg"

        }

    ];

    return (
        // Added ${className} to allow snap-start to work from App.js
        // Changed bg-linear to bg-gradient (standard v3 syntax)
        <div className={`relative w-screen h-screen bg-linear-to-br from-gray-950 via-stone-800 to-gray-950 flex justify-center items-center overflow-hidden ${className}`}>

            {/* Background Decorative Layer */}
            <div className='absolute inset-0 opacity-10 pointer-events-none'>
                {/* The blur should be behind the content, not z-50 */}
                <div className='absolute inset-0 backdrop-blur-sm'></div>

                {/* Randomly positioned Spins or a grid */}
                <div className="flex flex-wrap justify-around items-center h-full">
                    <Spin />
                    <Spin />
                    <Spin />
                    <Spin />
                    <Spin />
                
                </div>
            </div>

            {/* Foreground Content (Your Skills Title/Icons) */}
            <div className="z-10 text-white">
                 
                <div className='w-[90vw] h-[90vh] xl:w-[60vw] xl:h[90vh] border-2 border-stone-700 backdrop-blur-sm flex flex-col items-center justify-center xl:py-20 rounded-2xl'>
                       <div className='font-extrabold text-6xl md:m-5 bg-linear-65 from-sky-500 to-yellow-500/50 p-4 bg-clip-text text-transparent underline hover:decoration-slate-600'>My Skills</div>
                    <div className='flex flex-row flex-wrap w-full justify-center'>
                        {images.map((img, index) => (
                            <div  className=" hover:bg-gray-400/10 rounded-xl xl:p-4  animate-[start_5s_ease-out_infinite]" key={index} >
                                <img className='w-15 h-15 p-3 m-4 md:w-20 md:h-20 lg:w-25 lg:h-25 xl:w-25 xl:h-25' src={img.image} alt="loading..." />
                                <h1 className='text-center font-extrabold'>{img.name}</h1>
                            </div>
                        ))}
                    </div>

                </div>
              
            </div> 
        </div >
    );
}

export default Skills;



