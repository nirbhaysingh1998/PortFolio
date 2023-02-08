import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='bg-slate-800 text-white text-6xl p-10 md:pt-20 md:pl-80 font-serif justify-center md:pr-48'>
                Want to create something great? Shoot me an email
            </div>
            <div>
                <div className='md:grid md:grid-cols-2 bg-slate-800 p-20   text-white'>
                    <div className='font-serif text-5xl font-font-medium'>
                        Contact
                    </div>
                    <div>
                        <div className='font-bold p-2'>Name</div>
                        <div className='p-2'><input type='text' className='bg-transparent  border w-full p-0.5 focus:text-gray-700 focus:bg-black   focus:border-blue-600 focus:outline-none ' placeholder=" What's Your name?" />
                        </div>
                        <div className='font-bold p-2'>Email Address</div>
                        <div className='p-2'><input type='text' className='bg-transparent  border w-full p-0.5 focus:text-gray-700  focus:bg-black    focus:border-blue-600 focus:outline-none ' placeholder=" Email@example.com" />
                        </div>
                        <div className='font-bold p-2'>Name</div>
                        <div className='p-2'><textarea type='text' className='bg-transparent  border w-full p-0.5 focus:text-gray-700 focus:bg-black    focus:border-blue-600 focus:outline-none ' placeholder=" What's Your name?" />
                        </div>
                        <div className='p-2'>
                            <button class="   text-white text-2xl p-2 bg-black hover:bg-white   hover:text-black  px-4 border  border-white font-mono  hover:shadow-md hover:shadow-white"> Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
