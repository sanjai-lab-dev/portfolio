import React, { useState } from 'react';

function Contact() {
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formspree.io/f/mgolejwd", {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' },
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus('idle'), 5000); // Reset button after 5s
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className='relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#050505] px-4 py-16 text-zinc-100 sm:px-6 lg:px-8'>
            
            {/* 1. Cinematic Background */}
            <div className="absolute top-[-10%] right-[-5%] h-125 w-125 rounded-full bg-cyan-600/10 blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-5%] h-125 w-125 rounded-full bg-zinc-800/20 blur-[120px]" />

            <div className='relative z-10 flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-center'>

                {/* Left Side: Info */}
                <div className='flex w-full flex-col space-y-10 lg:w-2/5'>
                    <div className='space-y-4'>
                        <div className="flex items-center gap-2">
                            <span className="h-px w-8 bg-cyan-500"></span>
                            <h2 className='font-mono text-xs tracking-[0.3em] uppercase text-cyan-500'>Available for Projects</h2>
                        </div>
                        <h1 className='text-5xl font-black tracking-tighter md:text-7xl'>
                            Let's <span className="text-zinc-500">Talk.</span>
                        </h1>
                        <p className='max-w-sm text-lg leading-relaxed text-zinc-400'>
                            Have a vision? I have the stack. Let's collaborate to build something performant and beautiful.
                        </p>
                    </div>

                    <div className='space-y-4'>
                        {[
                            { label: 'Email', value: 'sanjaydhesigan@gmail.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                            { label: 'Location', value: 'Krishnagiri, TN', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' }
                        ].map((item, idx) => (
                            <div key={idx} className='group flex items-center gap-5 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:bg-white/10'>
                                <div className='rounded-xl bg-cyan-500/10 p-3 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all'>
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                                    </svg>
                                </div>
                                <div>
                                    <p className='text-[10px] font-bold uppercase tracking-widest text-zinc-500'>{item.label}</p>
                                    <p className='text-sm font-medium text-zinc-200'>{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Form Card */}
                <div className='w-full lg:w-3/5'>
                    <div className='relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/30 p-8 shadow-2xl backdrop-blur-2xl md:p-12'>
                        
                        {/* Success Overlay */}
                        {status === 'success' && (
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-zinc-950/90 text-center animate-in fade-in duration-500">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-black">
                                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold">Message Sent!</h3>
                                <p className="text-zinc-400">I'll get back to you shortly.</p>
                            </div>
                        )}

                        <form className='space-y-6' onSubmit={handleSubmit}>
                            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                                <div className='group space-y-2'>
                                    <label className='ml-1 text-[10px] font-black uppercase tracking-widest text-zinc-500 group-focus-within:text-cyan-500 transition-colors'>Name</label>
                                    <input 
                                        name='name'
                                        type="text" 
                                        className='w-full rounded-2xl border border-white/5 bg-zinc-950/50 p-4 outline-none ring-cyan-500/20 transition-all focus:border-cyan-500/50 focus:ring-4'
                                        placeholder="Sanjai D"
                                        required
                                    />
                                </div>
                                <div className='group space-y-2'>
                                    <label className='ml-1 text-[10px] font-black uppercase tracking-widest text-zinc-500 group-focus-within:text-cyan-500 transition-colors'>Email</label>
                                    <input 
                                        name='email'
                                        type="email" 
                                        className='w-full rounded-2xl border border-white/5 bg-zinc-950/50 p-4 outline-none ring-cyan-500/20 transition-all focus:border-cyan-500/50 focus:ring-4'
                                        placeholder="sanjai@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className='group space-y-2'>
                                <label className='ml-1 text-[10px] font-black uppercase tracking-widest text-zinc-500 group-focus-within:text-cyan-500 transition-colors'>Your Message</label>
                                <textarea
                                    name='message' 
                                    rows="4"
                                    className='w-full resize-none rounded-2xl border border-white/5 bg-zinc-950/50 p-4 outline-none ring-cyan-500/20 transition-all focus:border-cyan-500/50 focus:ring-4'
                                    placeholder="Briefly describe your project..."
                                    required
                                />
                            </div>

                            <button 
                                disabled={status === 'sending'}
                                className='group relative w-full overflow-hidden rounded-2xl bg-cyan-600 py-4 font-black uppercase tracking-[0.2em] text-black transition-all hover:bg-cyan-400 disabled:opacity-50'
                            >
                                <span className='relative z-10 flex items-center justify-center gap-3'>
                                    {status === 'sending' ? 'Transmitting...' : 'Send Message'}
                                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;