import React, { useState } from 'react';
import monkey from './Images/monkey.gif'
import GifPlayer from 'react-gif-player';
import monkey1 from './Images/monkey.png'

const Login = () => {
    const arr = [0, 100, 200]
    const surepass = 'abc123456';

    const [margin, setmargin] = useState(1)
    const [player, setplayer] = useState(true);
    const [pass, setpass] = useState('')
    const password = (event) => {

        setpass(event)
    }
    const checkPassword = () => {
        if (pass === surepass) {

        }
        else {

            setmargin(arr[Math.floor(Math.random() * 3)])
        }
        console.log(Math.ceil(margin))
    }
    return (
        <div className='h-[100vh] w-[100vw]  flex justify-center items-center'  >
            <div className='bg-blue-300 md:h-96 md:w-96'>
                <div className=' flex justify-center '>
                    <div className='h-36 w-36 rounded-full '>
                        {player ? <img src={monkey} alt="" /> : <img className='pt-5' src={monkey1} alt="" />}
                    </div>

                </div>
                <div className='flex flex-col p-3'>
                    <input className='border-2 m-3 ' placeholder='your email' onFocus={() => setplayer(true)} />
                    <input className='border-2 m-3 ' onChange={(event) => { password(event.target.value) }} placeholder='your password' onFocus={() => player ? setplayer(false) : ""} />

                </div>
                <button className='border-2' style={{ "margin-left": `${margin}px` }} onMouseOver={checkPassword} >Click me</button>


            </div>
        </div >
    );
}

export default Login;
