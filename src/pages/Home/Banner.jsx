import React from 'react';
import { easeIn, motion } from 'framer-motion';
import team1 from '../../assets/team/team-1.png' 
import team2 from '../../assets/team/team-2.png' 

const Banner = () => {
    return (
        <div className="hero min-h-[400px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        // initial={{ y: -50 }}
                        animate={{ y: [50, 100, 50] }}
                        transition={{duration: 10, ease: 'linear', repeat: Infinity}}
                        src={team1}
                        className="max-w-sm w-64 rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-indigo-500 shadow-2xl" />
                    
                    <motion.img
                        // initial={{ x: 200 }}
                        animate={{ x: [200, 150, 200] }}
                        transition={{duration: 10, ease: 'linear', repeat: Infinity}}
                        src={team2}
                        className="max-w-sm w-64 rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-indigo-500 shadow-2xl" />
                    
                </div>
                <div className='flex-1'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: easeIn }}
                    >
                        <h1
                            className="text-5xl font-bold"
                        >
                            Find{' '}
                            <motion.span className=''
                                animate={{ color: ['#0284c7', '#2563eb', '#4f46e5', '#7c3aed', '#4f46e5', '#2563eb', '#0284c7'] }}
                                transition={{ duration: 1.5, delay: .5, repeat: Infinity }}
                            >
                                Latest Job
                            </motion.span>
                            {' '}for You!
                        </h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </motion.div>
                    <button className="h-12 w-24 rounded-md text-slate-100 font-semibold bg-indigo-600 hover:text-slate-50 hover:bg-gradient-to-r from-indigo-600 to-purple-700">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;