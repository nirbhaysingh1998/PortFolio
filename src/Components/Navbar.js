import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FiMenu } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { motion } from "framer-motion"
import logo from './Images/White logo - no background.svg'
const Navbar = () => {

    const [Mobile, setMobile] = useState(false);
    return (
        <> <div className='bg-black z-50'>

            <nav className='text-white  p-7  md:grid md:grid-cols-3 gap-4 hidden' >
                <div className='col-span-2 px-20'>
                    <img src={logo} alt="" className='h-14' />

                </div>
                <div className='md:flex space-x-4 px-5 '>
                    <Link to="/" className="   text-white px-3 hover:text-2xl py-2 rounded-md text-sm font-medium">Dashboard</Link>

                    <Link to="About" className="text-gray-300  hover:text-2xl   hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>

                    <Link to="Contact" className="text-gray-300 hover:text-2xl  hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>

                    <Link to="Learning" className="text-gray-300 hover:text-2xl hover:text-white px-3 py-2 rounded-md text-sm font-medium">Learning</Link>
                </div>

            </nav>
            <nav className='md:hidden z-10  text-white cursor-pointer'>
                <div className=' grid grid-cols-2 p-2 pt-10 font-serif text-3xl'>
                    <div className=''>
                        <img src={logo} alt="" className='h-14' />
                    </div>
                    <div className='  '>
                        {Mobile ?
                            <RxCross2 onClick={() => setMobile(false)} className='float-right' />
                            : <FiMenu onClick={() => setMobile(true)} className='float-right ' />
                        }
                    </div>
                </div>
                {Mobile ?
                    <motion.div className='h-screen bg-stone-800 z-50 overflow-none'>
                        <ul className='flex flex-col justify-center text-center  text-2xl  pt-14 '>
                            <li><Link onClick={() => setMobile(false)} to="/" className="hover:bg-gray-700    text-white px-3 py-2 rounded-md text-lg font-medium" >Dashboard</Link></li>
                            <li><Link onClick={() => setMobile(false)} to="About" className="text-gray-300   hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link></li>
                            <li><Link onClick={() => setMobile(false)} to="Contact" className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link></li>
                            <li><Link onClick={() => setMobile(false)} to="Learning" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Learning</Link></li>
                        </ul>
                    </motion.div>
                    : ""}
            </nav>
        </div >
        </>
    )
}

export default Navbar
