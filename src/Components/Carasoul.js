import React from 'react';

import Carousel from "framer-motion-carousel";
const Carasoul = () => {

    return (
        <div>

            <Carousel>
                {['wide1', 'wide2'].map((item, i) => (
                    <img
                        draggable="false"
                        src={require(`./Images/${item}.jpg`)}
                        key={i}
                        width="100%"
                        className='h-[80vh]'
                        alt=""
                    />
                ))}
            </Carousel>
        </div>
    );
}

export default Carasoul;
