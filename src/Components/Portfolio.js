import React from 'react'


const Portfolio = () => {
    return (
        <div className='bg-gray-900 border-t-4 '>


            <div div className='font-serif font-bold text-5xl mt-20 ml-10 text-white' > PortFolio</div  >

            <div className='md:grid md:grid-cols-2 '>

                <div className='  md:ml-20 '>
                    <img src={require('./Images/long2.jpg')} style={{ height: 600 }} alt="my logo" className='md:m-2 rounded-xl md:scale-120 hover:md:scale-75 duration-500' />
                    <img src={require('./Images/long3.jpg')} style={{ height: 600 }} alt="my logo" className='rounded-xl md:scale-120 hover:md:scale-75 duration-500 ' />
                </div>
                <div className='md:mr-20 '>
                    <img src={require('./Images/wide2.jpg')} style={{ height: 300 }} alt="my logo" className=' md:m-3 rounded-xl md:scale-120 hover:md:scale-75 duration-500' />
                    <img src={require('./Images/wide2.jpg')} style={{ height: 300 }} alt="my logo" className='md:m-3 rounded-xl md:scale-120 hover:md:scale-75 duration-500' />
                    <img src={require('./Images/wide2.jpg')} style={{ height: 300 }} alt="my logo" className='md:m-3 rounded-xl md:scale-120 hover:md:scale-75 duration-500' />
                </div>
            </div>


        </div >


    )
}

export default Portfolio