import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className='flex justify-between mx-16 my-16'>
            <div className='flex flex-col items-start w-1/2 mx-12'>
                <h1 className='text-black text-5xl font-extrabold'>
                    Home
                </h1>
                <h1 className='text-black text-xl font-bold mb-8'>
                    Your digital autograph page.
                </h1>
                <h1 className='text-red text-xl font-regular mb-8'>
                    Stanford Class of 2020
                </h1>
                <p className='text-black text-sm'>
                    Senior spring is gone, and unfortunetely for us, so is the time to appreciate the friendships that
                    we had worked so hard to foster over our four years at Stanford.
                    <br/>
                    <br/>
                    However, we believe that this isn’t the end. We believe that the friendships that you have, both
                    small and large, can continue on in a meaninful way throughout your life. And it starts by taking
                    the time to appreciate each other in this time of extreme uncertainty.
                </p>

            </div>
            <div className='flex flex-col items-end w-1/2 mx-12 mt-4 justify-center'>

            </div>
        </div>
    );
}

export default Home;
