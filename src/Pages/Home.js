import React from 'react';
import { Link } from 'react-router-dom';
import homePic from '../Assets/homePic.jpg'

const Home = () => {

    return (
        <div>

            <h1>Hello from home</h1>
            <div className=''>


                <img src={homePic} alt="home" className='min-h-screen' />

                <div className=' absolute top-1/4 left-2/4 bg-[#00000098] md:py-20 py-10 md:px-10 px-5 text-white flex flex-col gap-3 rounded-lg '>

                    <h1 className='text-2xl text-center'> SignIn to go Dashboard</h1>
                    <h1>email:  <span className=' text-xl text-yellow-400'>example@gmail.com</span></h1>
                    <h1>password:  <span className=' text-xl text-yellow-400'>example</span></h1>
                </div>

            </div>

        </div>
    );
};

export default Home;