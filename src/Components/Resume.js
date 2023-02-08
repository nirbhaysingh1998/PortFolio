import React from 'react';
import { BsDownload } from 'react-icons/bs'
import { motion } from 'framer-motion';
const Resume = () => {

    return (
        <>
            <div className='pl-9 pt-5'>
                <div className='text-3xl font-bold'>My Skills</div>
            </div>
            <div className='md:grid md:grid-cols-2 p-5'>
                <div className='h-50 p-5'>
                    <div className='flex '>

                        <div>
                            Javascript
                        </div>
                        <div className='grow' >
                            <p className='float-right'>90%</p>
                        </div>
                    </div>
                    <div class="w-full bg-gray-200 h-3 mb-6">

                        <motion.div className="bg-green-500 h-3" style={{ width: '90%' }}></motion.div>
                    </div>
                    <div className='flex '>

                        <div>
                            Python
                        </div>
                        <div className='grow' >
                            <p className='float-right'>80%</p>
                        </div>
                    </div>
                    <div className="w-full bg-gray-200 h-3 mb-6">
                        <div className="bg-blue-400 h-3" style={{ width: '80%' }}></div>
                    </div>
                    <div className='flex '>

                        <div>
                            Tailwind
                        </div>
                        <div className='grow' >
                            <p className='float-right'>90%</p>
                        </div>
                    </div>
                    <div class="w-full bg-gray-200 h-3 mb-6">
                        <div class="bg-yellow-500 h-3" style={{ width: '90%' }}></div>
                    </div>

                </div>
                <div className='p-5'>
                    <div className='h-50 '>
                        <div className='flex '>

                            <div>
                                Boostrap
                            </div>
                            <div className='grow' >
                                <p className='float-right'>90%</p>
                            </div>
                        </div>
                        <div class="w-full bg-gray-200 h-3 mb-6">

                            <div class="bg-green-500 h-3" style={{ width: '90%' }}></div>
                        </div>
                        <div className='flex '>

                            <div>
                                Html/Css
                            </div>
                            <div className='grow' >
                                <p className='float-right'>95%</p>
                            </div>
                        </div>
                        <div class="w-full bg-gray-200 h-3 mb-6">
                            <div class="bg-blue-400 h-3" style={{ width: '95%' }}></div>
                        </div>
                        <div className='flex '>

                            <div>
                                Redux
                            </div>
                            <div className='grow' >
                                <p className='float-right'>90%</p>
                            </div>
                        </div>
                        <div class="w-full bg-gray-200 h-3 mb-6">
                            <div class="bg-yellow-500 h-3" style={{ width: '90%' }}></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex justify-center p-3'>
                <button className='border-2 p-2 pl-5 pr-5 rounded-3xl text-2xl border-blue-500 hover:bg-blue-500 hover:font-bold hover:text-white flex'>Download CV  <BsDownload className='mt-1' /></button>
            </div>
        </>
    );
}

export default Resume;
