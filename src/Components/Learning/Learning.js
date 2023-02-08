import React, { useState } from 'react';
import { FiCopy } from 'react-icons/fi'
const Learning = () => {
    const [copy, setcopy] = useState(false)
    return (
        <>
            <div className='flex justify-center p-5 bg-white text-black' >
                <h1 className='text-5xl'>Page is still under develpmnet </h1>
            </div>
            <div className='h-[100vh] grid grid-cols-6 flxed '>
                <div className='cols-1 bg-slate-50 overflow-x-auto'>
                    <ul>
                        <li>React Home</li>
                        <li>React Home</li>
                        <li>React Home</li>
                        <li>React Home</li>
                        <li>React Home</li>
                        <li>React Home</li>



                    </ul>
                </div>



                <div className='bg-stone-800 col-span-5 text-white p-3'>
                    <div className='text-4xl font-bold  '>React Home</div>
                    <h2 className='text-2xl'>What is ReactJS?</h2>
                    <h5 className='text-l'>ReactJS is a JavaScript library Develped by <span className='bg-yellow-500 text-black'>FaceBook</span>, used to build User Interfaces(UI). It significantly decreases the code with it's components, states i.e. hooks, etc. </h5>
                    <h2 className='text-2xl'>Create React app</h2>
                    <h5 className='text-l'>Open your terminal in the directory you would like to create your application. Run this command to create a React application named my-react-app:</h5>
                    <div className=' bg-black h-10 p-2 rounded-l mt-2 flex group:'>
                        <p>npx create-react-app my-react-app</p><div className='flex-grow group'>{!copy ? <FiCopy className='float-right cursor-pointer invisible group-hover:visible' onClick={() => setcopy(true)} /> : <div className='float-right cursor-pointer invisible group-hover:visible bg-white text-black rounded-xl  text-xs p-1 font-bold'>copied</div>}</div>
                    </div>



                </div>
            </div >
        </>
    );
}

export default Learning;
