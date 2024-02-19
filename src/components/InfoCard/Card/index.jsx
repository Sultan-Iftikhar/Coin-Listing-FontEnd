
'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Icon from '../../../../public/images/Icon.png'
import Like from '../../../../public/images/like.png'
// import Tick from '../../../../public/images/tick.png'
// import Sandclock from '../../../../public/images/sandclock.png'

function index({ }) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => (prevCounter < 990 ? prevCounter + 10 : 1000));
        }, 10); // Increment every second
        // Cleanup the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);
    return (
        <div className='bg-primary text-white lg:text-lg font-light  rounded-lg cursor-pointer shadow-text-gray-600 p-4 border-white hover:relative hover:scale-105 transform transition-transform duration-300 ease-in-out'>
            <div className='flex justify-between'>
                <Image src={Icon} />
                <p>Coin Listing</p>
                <p className='text-gray-400'>CLT</p>
            </div>
            <div className='flex justify-center mb-2'>
                {/* <Image src={Sandclock} className='w-4' /> */}
                <p className='text-sm font-semibold text-[#A06715]'>⏳ Presale</p>
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-1'>
                    <p>KYC <span className='text-green-400 font-extrabold'>✓</span></p>
                    {/* <Image src={Tick} className='w-full' /> */}
                </div>
                <div className='flex gap-1'>
                    <p className=''>Audit <span className='text-green-400 font-extrabold'>✓</span></p>
                    {/* <Image src={Tick} className='w-full' /> */}
                </div>
                <div className='flex gap-1 items-center justify-center'>
                    <p className=''>{counter}</p>
                    <Image src={Like} className='w-1/2' />
                </div>
            </div>
        </div>
    )
}

export default index
