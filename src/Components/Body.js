import React, { useState } from 'react'
import logo from './Images/main_image.jpg';
import { motion } from 'framer-motion';
import Typewriter from "typewriter-effect";
import Carousel from "./Carasoul";
import Resume from './Resume';

const Body = () => {
    // const myStyle = {
    //     backgroundImage: `url(${background})`,
    // }
    const [move, setmove] = useState({});


    return (
        <>

            <div className=''>
                <div className=' bg-black border-t-2 border-gray-400 '>
                    <div className='md:grid md:grid-cols-2'>

                        <div className='mt-20 md:mx-20 md:w-1/2'>
                            <h1 className='md:text-7xl text-5xl p-2 text-white font-serif md:p-10 md:space-x-10 tracking-widest'> HI,I’M <Typewriter
                                options={{
                                    strings: ['NIRBHAY', 'SINGH'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />React Developer</h1>
                            <button class="h-10   text-white bg-transparent hover:bg-white   font-semibold hover:text-black my-10 mx-10 border px-5  border-white   hover:shadow-md hover:shadow-white">View PortFolio</button>
                            <button class="h-10   text-white bg-transparent hover:bg-white  font-semibold hover:text-black  px-4 border  border-white   hover:shadow-md hover:shadow-white">   Contact Me</button>
                        </div>
                        <div className='text-white w-auto  md:w-3/4'>
                            <motion.img animate={move} onHoverStart={() => setmove({ x: Math.random() * 100, y: Math.random() * 100 })} onHoverEnd={() => { setmove({}) }} src={logo} alt="my logo" className=' aspect-[1/1] md:m-10 rounded-full p-10' />
                        </div>
                    </div>
                </div >
                <Resume />
                <div className='bg-gray-900 border-t-4 '>


                    <div className='font-serif font-bold text-5xl mt-20 md:ml-10 text-center text-white' > <Typewriter
                        options={{
                            strings: ['PORTFOLIO'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></div  >
                    <div className='md:grid md:grid-cols-4'>
                        <div className=' p-5 mix-blend-difference  flex-col -space-y-10 overflow-hidden group cursor-pointer  '><img className='rounded-xl group-focus:opacity-40  group-focus:-top-5 aspect-[2/1.5] group-hover:opacity-40  relative group-hover:-top-5 ' src={require('./Images/portfolio1.jpg')} alt="" />
                            <span className='invisible group-hover:visible font-semibold p-2  text-2xl text-white -space-x-52 -top-36 relative border-2 -top left-28  border-white'>Portfolio 1</span></div>
                        <div className=' p-5  flex-col -space-y-10 overflow-hidden group cursor-pointer  '><img className='rounded-xl group-focus:opacity-40  group-focus:-top-5 aspect-[2/1.5] group-hover:opacity-40  relative group-hover:-top-5' src={require('./Images/portfolio2.jpg')} alt="" />
                            <span className='invisible group-hover:visible font-semibold p-2  text-2xl text-white -space-x-52 -top-28 relative border-2 -top left-28  border-white'>Portfolio 2</span></div>
                        <div className=' p-5  flex-col -space-y-10 overflow-hidden group cursor-pointer  '><img className='rounded-xl group-focus:opacity-40  group-focus:-top-5 aspect-[2/1.5] group-hover:opacity-40  relative group-hover:-top-5' src={require('./Images/portfolio3.jpg')} alt="" />
                            <span className='invisible group-hover:visible font-semibold p-2  text-2xl text-white -space-x-52 -top-28 relative border-2 -top left-28  border-white'>Portfolio 3</span></div>
                        <div className=' p-5  flex-col -space-y-10 overflow-hidden group cursor-pointer  '><img className='rounded-xl group-focus:opacity-40  group-focus:-top-5 aspect-[2/1.5] group-hover:opacity-40  relative group-hover:-top-5' src={require('./Images/portfolio4.jpg')} alt="" />
                            <span className='invisible group-hover:visible font-semibold p-2  text-2xl text-white -space-x-52 -top-28 relative border-2 -top left-28  border-white'>Portfolio 4</span></div>
                        <div className=' p-5  flex-col -space-y-10 overflow-hidden group cursor-pointer  '><img className='rounded-xl group-focus:opacity-40  group-focus:-top-5 aspect-[2/1.5] group-hover:opacity-40  relative group-hover:-top-5' src={require('./Images/portfolio5.jpg')} alt="" />
                            <span className='invisible group-hover:visible font-semibold p-2  text-2xl text-white -space-x-52 -top-28 relative border-2 -top left-28  border-white'>Portfolio 5</span></div>
                        <div className=' p-5  flex-col -space-y-10 overflow-hidden group cursor-pointer  '><img className='rounded-xl group-focus:opacity-40  group-focus:-top-5 aspect-[2/1.5] group-hover:opacity-40  relative group-hover:-top-5' src={require('./Images/portfolio6.jpg')} alt="" />
                            <span className='invisible group-hover:visible font-semibold p-2  text-2xl text-white -space-x-52 -top-28 relative border-2 -top left-28  border-white'>Portfolio 6</span></div>

                    </div>
                    {/* <Carousel /> <div className='md:grid md:grid-cols-3 gap-6 p-2'>

                        <div className=' p-2 flex flex-col' >
                            <div className='group'>
                                <div style={myStyle} className=' group-hover:opacity-60  relative  rounded-lg p-1  l    h-80 justify-center items-center flex   bg-cover   ' onMouseOver={() => setshow(true)} onMouseOut={() => setshow(false)}>
                                    <p className=' invisible group-hover:visible group-hover:text-2xl group-hover:text-white group-hover:font-bold group-hover:z-10'>Port Folio 1</p>
                                </div>
                            </div>
                            <div className='group flex flex-col  '>
                                <img className='p-2 group-hover:opacity-30  relative' src={require('./Images/portfolio1.jpg')} alt="" />
                                <div className=' justify-center -top-60 invisible group-hover:visible transition duration-150 group-hover:text-white flex relative group-hover:font-bold group-hover:text-3xl'>PortFolio 2</div>
                            </div>
                            <div className='group flex flex-col  '>
                                <img className='p-2 group-hover:opacity-30  relative' src={require('./Images/portfolio4.jpg')} alt="" />
                                <div className=' justify-center -top-[20vh] invisible group-hover:visible transition duration-150 group-hover:text-white flex relative group-hover:font-bold group-hover:text-3xl'>PortFolio 4</div>
                            </div>

                        </div>
                        <div className=''>
                            <div className='group flex flex-col  '>
                                <img className='p-2 group-hover:opacity-30  relative' src={require('./Images/portfolio3.jpg')} alt="" />
                                <div className=' justify-center -top-[70vh] invisible group-hover:visible transition duration-150 group-hover:text-white flex relative group-hover:font-bold group-hover:text-3xl'>PortFolio 2</div>
                            </div>
                        </div>
                        <div>
                            <div className='group flex flex-col   '>
                                <img className='p-2 group-hover:opacity-30' relative src={require('./Images/portfolio2.jpg')} alt="" />
                                <div className=' justify-center -top-52 invisible group-hover:visible transition duration-150 group-hover:text-white flex relative group-hover:font-bold group-hover:text-3xl'>PortFolio 2</div>
                            </div>
                            <img className='p-2' src={require('./Images/portfolio5.jpg')} alt="" />
                        </div>
                    </div>

 */}

                </div>


            </div >

        </>
    )
}

export default Body;
