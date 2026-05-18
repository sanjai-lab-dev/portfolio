import React from 'react';

function Spin() {

  const images = [
     {

      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    {

      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {

      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
    },
    {

      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {

      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {

      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {

      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    {

      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {

      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
    }
  ];
  return (
    // Added flex-col to stack the two rows
    <div>

      {/* Row 1 */}
      <div className='bg-gray-700 h-35 flex w-screen overflow-x-auto  '>
        <div className='flex animate-[spini_15s_linear_infinite] bg-gray-800 my-4'>
          {images.map((item, index) => (
            <img
              src={item.logo}
              key={index}
              className='
               bg-gray-700 w-40 
               shrink-0 flex items-center 
               justify-center rounded-2xl  
               font-bold mr-3 my-2 p-5'
            />

          ))}
        </div>
        <div aria-hidden className='flex animate-[spini_15s_linear_infinite]  bg-stone-800 my-4'>

          {images.map((item, index) => (
            <img
              src={item.logo}
              key={index}
              className='bg-gray-700 w-40 shrink-0 
               flex items-center justify-center 
               rounded-2xl font-bold mr-3 my-2 p-5'
            />
          ))}
        </div>

      </div>
    </div>

  );
}

export default Spin;