import React from 'react'

const About = () => {
    return (
        <div>
            <div className='md:grid md:grid-cols-2 bg-gray-800 text-white'>
                <div className=' p-10 '>
                    <img src={require('./Images/About_Poster.jpg')} className='rounded-2xl sticky top-10 border-4 border-white' alt='about_poster' />
                </div>
                <div className='p-10'>
                    <div className='text-5xl text-left font-mono'>A Brand Strategist From Sweden</div>
                    <div className='  text-2xl font-extralight'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat sapien sit amet magna fermentum, ut auctor mi tempus. Pellentesque id massa lacus.

                        Vestibulum pellentesque malesuada enim, eget gravida elit finibus sit amet. In ipsum elit, vulputate eu arcu quis, dictum lobortis ex.Nullam nibh augue, dapibus ut commodo vel, tempor eget tellus.

                        Donec interdum venenatis ipsum, eu congue nibh. Mauris fringilla, metus et porttitor iaculis, orci nibh malesuada est, sed posuere felis orci vel ipsum. Sed id varius nisi. Nullam feugiat ex ex, sed laoreet est dapibus eget. Vivamus quis elit id leo ullamcorper aliquet. Nullam ut velit justo. Ut faucibus felis libero, a venenatis elit finibus nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                        Ut volutpat sapien sit amet magna fermentum, ut auctor mi tempus. Pellentesque id massa lacus. Vestibulum pellentesque malesuada enim, eget gravida elit finibus sit amet. In ipsum elit, vulputate eu arcu quis, dictum lobortis ex.

                        Donec interdum venenatis ipsum, eu congue nibh. Mauris fringilla, metus et porttitor iaculis, orci nibh malesuada est, sed posuere felis orci vel ipsum. Sed id varius nisi. Nullam feugiat ex ex, sed laoreet est dapibus eget. Vivamus quis elit id leo ullamcorper aliquet. Nullam ut velit justo. Ut faucibus felis libero, a venenatis elit finibus nec.Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                        Ut volutpat sapien sit amet magna fermentum, ut auctor mi tempus. Pellentesque id massa lacus. Vestibulum pellentesque malesuada enim, eget gravida elit finibus sit amet. In ipsum elit, vulputate eu arcu quis, dictum lobortis ex.
                    </div>
                </div>
            </div>
            <div className=' md:grid md:grid-cols-2 bg-gray-900 text-white md:p-20 '>
                <div className='p-10'>
                    <div className='text-5xl italic font-mono underline sticky top-0 '>Experience</div>
                </div>


                <div className='divide-y-2 p-10'>
                    <div className='pb-20 pt-10'>
                        <h1 className='text-3xl font-serif font-thin'>Company Name</h1>
                        <h1 className='text-2xl font-sans'>Job title</h1>
                        <h1 className='text-2xl'>August 2019–today</h1>
                    </div>
                    <div className='pb-20 pt-10'>
                        <h1 className='text-3xl font-serif font-thin'>Company Name</h1>
                        <h1 className='text-2xl font-sans'>Job title</h1>
                        <h1 className='text-2xl'>August 2019–today</h1>
                    </div>
                    <div className='pb-20 pt-10'>
                        <h1 className='text-3xl font-serif font-thin'>Company Name</h1>
                        <h1 className='text-2xl font-sans'>Job title</h1>
                        <h1 className='text-2xl'>August 2019–today</h1>
                    </div>
                    <div className='pb-20 pt-10'>
                        <h1 className='text-3xl font-serif font-thin'>Company Name</h1>
                        <h1 className='text-2xl font-sans'>Job title</h1>
                        <h1 className='text-2xl'>August 2019–today</h1>
                    </div>

                    <div>

                    </div>
                </div>

            </div>
            <div className='p-20 bg-gray-900'>

            </div>
            <div className='bg-gray-900 text-white pt-10'>
                <div className='p-6  text-5xl font-mono flex justify-center items-center'>Lets Create Something Great!</div>
                <div className='flex justify-center items-center p-5'>  <button class="   text-white bg-black text-xl p-3 font-serif  hover:bg-white  font-semibold hover:text-black  px-4 border  border-white   hover:shadow-md hover:shadow-white">   Contact Me</button>
                </div>
            </div>

        </div>

    )
}

export default About
