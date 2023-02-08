import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    return (
        <div className='bg-black h-200 md:flex'>
            <div div className=' md:w-2/5 '>

                <div className='text-white  md:m-5 p-10 flex '>Designed by <p className='text-blue-400 mx-2'>Nirbhay Singh with ❤️</p></div>
            </div>
            <div className='md:w-1/5'>
                <div className='text-white md:m-5 text-xl font-italic font-serif p-10'>
                    <h1>About</h1>
                    <h1>Contact</h1>
                    <h1>Work</h1>
                </div>
            </div>
            <div className='text-white m-5 p-10 text-xl  font-serif italic'>
                <h1>Style Guide</h1>
                <h1>Licences</h1>
                <h1>404</h1>
                <h1>Password</h1>
            </div>
            <div className='text-white md:m-5 p-10 text-xl  font-serif'>
                <div className='flex'>  <i className='fa brands fa-facebook p-2'></i><h1>Facebook</h1></div>
                <div className='flex'>  <i className='fa brands fa-instagram p-2'></i><h1>Instagram</h1></div>
                <div className='flex'>  <i className='fa brands fa-twitter p-2'></i><h1>Twitter</h1></div>
            </div>

        </div>


    )
}

export default Footer
