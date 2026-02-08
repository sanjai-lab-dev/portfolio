import React, { useState } from 'react';

function Contact() {
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(e.target);

    try {
        const response = await fetch("https://formspree.io/f/mgolejwd", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            alert("Message sent successfully!");
            e.target.reset();
        } else {
            alert("Something went wrong. Try again.");
        }
    } catch (error) {
        alert("Network error.");
    }

    setIsSending(false);
};


    return (
        <div className='w-full min-h-screen py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950 flex justify-center items-center text-zinc-100 relative overflow-hidden'>
            
            {/* Background Decorative Element */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-800/20 blur-[120px] rounded-full"></div>

            <div className='relative z-10 flex flex-col lg:flex-row w-full max-w-6xl gap-10 lg:gap-16 items-center'>

                {/* Left Side: Modern Info Section */}
                <div className='w-full lg:w-2/5 flex flex-col space-y-8 order-1'>
                    <div className='text-center lg:text-left space-y-4'>
                        <h2 className='text-cyan-500 font-mono tracking-widest uppercase text-sm'>Contact</h2>
                        <h1 className='text-4xl md:text-5xl font-bold bg-linear-to-r from-white to-zinc-500 bg-clip-text text-transparent'>
                            Get in touch.
                        </h1>
                        <p className='text-zinc-400 text-lg max-w-md mx-auto lg:mx-0'>
                            Have a project in mind? Let's build something extraordinary together.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 gap-6 mt-8'>
                        {[
                            { label: 'Email', value: 'sanjaydhesigan@gmail.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                            { label: 'Location', value:'Krishnagiri, Tamil Nadu', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' }
                        ].map((item, idx) => (
                            <div key={idx} className='flex items-center gap-5 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 transition-all group'>
                                <div className='p-3 bg-zinc-800 rounded-lg group-hover:text-stone-400 transition-colors'>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                                    </svg>
                                </div>
                                <div>
                                    <p className='text-xs text-zinc-500 uppercase tracking-wider'>{item.label}</p>
                                    <p className='text-zinc-200 font-medium'>{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Minimal Socials */}
                    <div className='flex justify-center lg:justify-start gap-6 pt-6'>
                        <p className='text-zinc-500 text-sm self-center mr-2'>Socials /</p>
                        <a href="https://github.com/sanjai-lab-dev" className='text-zinc-400 hover:text-cyan-400 transition-colors'>Github</a>
                        <a href="https://www.linkedin.com/in/sanjai-d-217401381/" className='text-zinc-400 hover:text-cyan-400 transition-colors'>LinkedIn</a>
                    </div>
                </div>

                {/* Right Side: High-End Form Card */}
                <div className='w-full lg:w-3/5 order-2'>
                    <div className='bg-zinc-900/40 backdrop-blur-md border border-zinc-800 p-8 md:p-12 rounded-3xl shadow-2xl'>
                        <form className='space-y-6' onSubmit={handleSubmit}>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className='space-y-2'>
                                    <label className='text-xs font-mono uppercase text-zinc-500 ml-1'>Full Name</label>
                                    <input 
                                        name='name'
                                        type="text" 
                                        className='w-full bg-zinc-950/50 border border-zinc-800 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-zinc-700'
                                        placeholder="sanjai D"
                                        required
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <label className='text-xs font-mono uppercase text-zinc-500 ml-1'>Email Address</label>
                                    <input 
                                        name='mail'
                                        type="email" 
                                        className='w-full bg-zinc-950/50 border border-zinc-800 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-zinc-700'
                                        placeholder="sanjai@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className='space-y-2'>
                                <label className='text-xs font-mono uppercase text-zinc-500 ml-1'>Message</label>
                                <textarea
                                    name='message' 
                                    rows="5"
                                    className='w-full bg-zinc-950/50 border border-zinc-800 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all resize-none placeholder:text-zinc-700'
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>

                            <button 
                                disabled={isSending}
                                className={`w-full py-4 rounded-xl font-bold tracking-widest uppercase text-sm transition-all duration-300 flex justify-center items-center gap-2
                                    ${isSending ? 'bg-zinc-800 text-zinc-500' : 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-cyan-500/40'}`}
                            >
                                {isSending ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-zinc-500 border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : 'Initialize Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;