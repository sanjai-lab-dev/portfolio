import React from 'react'

function Contact() {
    return (
        <div className='w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-950 via-stone-800 to-gray-950 flex justify-center items-center text-white animate-[open_2s_ease-out]'>
            {/* Main Wrapper Container */}
            <div className='flex flex-col lg:flex-row w-full max-w-6xl justify-center items-stretch gap-8 lg:gap-12'>

                {/* Left Side: Form */}
                <div className='w-full lg:w-3/5 rounded-2xl bg-white/5 border border-white/10 p-6 md:p-10 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:bg-white/8'>
                    <form className='flex flex-col gap-6 w-full' onSubmit={(e) => e.preventDefault()}>
                        <div className='text-center lg:text-left mb-4'>
                            <h1 className='text-3xl md:text-4xl font-extrabold text-white'>Send a Message</h1>
                            <p className='text-stone-400 text-base mt-2'>I'd love to hear from you!</p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
                            <div className='flex flex-col gap-2'>
                                <label className='px-1 font-semibold text-stone-300'>Name</label>
                                <input
                                    className='p-3 bg-stone-900/50 text-white rounded-lg border border-stone-700 outline-none focus:ring-2 focus:ring-blue-500 hover:border-stone-500 transition-all'
                                    type="text"
                                    placeholder='Your Name'
                                    required
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='px-1 font-semibold text-stone-300'>E-mail</label>
                                <input
                                    className='p-3 bg-stone-900/50 text-white rounded-lg border border-stone-700 outline-none focus:ring-2 focus:ring-blue-500 hover:border-stone-500 transition-all'
                                    type="email"
                                    placeholder='example@mail.com'
                                    required
                                />
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 w-full'>
                            <label className='px-1 font-semibold text-stone-300'>Subject</label>
                            <input
                                className='p-3 bg-stone-900/50 text-white rounded-lg border border-stone-700 outline-none focus:ring-2 focus:ring-blue-500 hover:border-stone-500 transition-all'
                                type="text"
                                placeholder='How can I help?'
                            />
                        </div>

                        <div className='flex flex-col gap-2 w-full'>
                            <label className='px-1 font-semibold text-stone-300'>Message</label>
                            <textarea
                                rows="4"
                                className='p-3 bg-stone-900/50 text-white rounded-lg border border-stone-700 outline-none focus:ring-2 focus:ring-blue-500 hover:border-stone-500 transition-all resize-none'
                                placeholder='Write your message here...'
                                required
                            />
                        </div>

                        <button className='w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg active:scale-[0.98] cursor-pointer'>
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right Side: Info Section */}
                <div className='w-full lg:w-2/5 flex flex-col justify-between p-2 md:p-6'>
                    <div className='space-y-10'>
                        <h2 className='text-3xl font-bold text-blue-500 text-center lg:text-left'>Let's Connect</h2>
                        
                        {/* Contact Cards Grid */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8'>
                            {/* Email */}
                            <div className='flex items-center gap-4 group'>
                                <div className='p-3 bg-stone-800/50 rounded-lg group-hover:bg-blue-600 transition-all duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 group-hover:text-white"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>Email</h3>
                                    <p className='text-stone-400 break-all'>sanjaidhesihan@gmail.com</p>
                                    <p className='text-xs text-blue-400/60'>Response within 24 hours</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className='flex items-center gap-4 group'>
                                <div className='p-3 bg-stone-800/50 rounded-lg group-hover:bg-blue-600 transition-all duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 group-hover:text-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>Phone</h3>
                                    <p className='text-stone-400'>+91 6381042680</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className='flex items-center gap-4 group'>
                                <div className='p-3 bg-stone-800/50 rounded-lg group-hover:bg-blue-600 transition-all duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 group-hover:text-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>Location</h3>
                                    <p className='text-stone-400'>Krishnagiri, Tamil Nadu</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Socials - Sticks to bottom on desktop */}
                    <div className='pt-10 lg:pt-0 mt-10 border-t border-white/10'>
                        <h2 className='text-lg font-semibold mb-4 text-center lg:text-left'>Follow Me</h2>
                        <div className='flex justify-center lg:justify-start gap-4'>
                            <a href="#" className='p-3 bg-stone-800 rounded-full hover:bg-blue-600 hover:-translate-y-1 transition-all shadow-lg text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                            </a>
                            <a href="#" className='p-3 bg-stone-800 rounded-full hover:bg-blue-600 hover:-translate-y-1 transition-all shadow-lg text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact;