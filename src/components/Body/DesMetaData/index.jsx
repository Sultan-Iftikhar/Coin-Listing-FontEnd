'use client'
import React, { useEffect, useState } from 'react'
import RoadMap from '../RoadMap/index'
import FAQs from '../FAQs/index'
import DoughnutChart from '../../DoughnutChart/index'
import LineChart from '../../LineChart/index'
import Nav from '../Nav/index'
import ProfileBanner from '../ProfileBanner/index'
import Image from 'next/image'
import Shield from '../../../../public/images/shield.png'


function index() {
    const [peiceCounter, setPriceCounter] = useState(0);
    const [marketcapCounter, setMarketcapCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPriceCounter((prevCounter) => (prevCounter < 990 ? prevCounter + 10 : 4440));
        }, 10); // Increment every second
        // Cleanup the interval when the component is unmounted
        return () => clearInterval(interval);

    }, []);
    return (
        <>
            <div class="grid bg-primary grid-cols-12 gap-4 p-4">
                <div class="col-span-12">
                    <ProfileBanner />
                </div>
            </div>
            <div class="grid bg-primary grid-cols-12 gap-4 p-4">
                <div class="col-span-12 lg:col-span-8">
                    <div className='grid-cols-12 my-2 border-2 border-gray-700 rounded-md p-4 bg-secondary'>
                        <h3 className='text-lg font-extrabold'>Description</h3>
                        <p className='text-gray-500 py-2'>Limocoin is a #GEM that will develop staking & P2P Exchange</p>
                        <ul className='text-xs font-medium text-gray-500'>
                            <li className='py-1'>🔥 Active Dev</li>
                            <li className='py-1'>🤵‍♂️ Doxxed team and Big Community</li>
                            <li className='py-1'>🚀 Several Usecases</li>
                        </ul>
                    </div>
                    <div className='grid-cols-12 my-2 border-2 border-gray-700 rounded-md p-4 bg-secondary'>
                        <h3 className='text-lg font-extrabold'>Market Data</h3>
                        <div class="overflow-x-auto">
                            <table class="min-w-full">
                                <thead>
                                    <tr className='text-gray-500'>
                                        <th class="py-2 text-start">Price</th>
                                        <th class="py-2 text-start">Price change ( 24h )</th>
                                        <th class="py-2 text-start">Marketcap</th>
                                        <th class="py-2 text-start">Total Liquidiy</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="py-2 text-start">$ 0.<span className='text-gray-500'>(0 X2)</span>2607</td>
                                        <td class="py-2 text-start text-[#FE0808] font-extrabold flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                                            </svg>

                                            0.37%
                                        </td>
                                        <td class="py-2 text-start">$ 4.31M</td>
                                        <td class="py-2 text-start">${peiceCounter}</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                <div class="col-span-12 lg:col-span-4 bg-secondary p-6 my-2 border-2 border-gray-700 rounded-md p-4 bg-secondary h-[210px]">
                    <div className='grid-cols-12 '>
                        <h3 className='text-lg font-extrabold'>Summary</h3>
                        <div className='flex justify-between border-b border-gray-600 py-2'>
                            <p className=''>Launch date</p>
                            <p className=''>December 1 2021</p>
                        </div>

                        <div className='flex justify-between border-b border-gray-600 py-2'>
                            <p className=''>Submitted</p>
                            <p className=''>January 7th 2022</p>
                        </div>

                        <div className='flex justify-between border-b border-gray-600 py-2'>
                            <p className=''>on watchlists</p>
                            <p className=''>3244 <span className='border border-green-600 rounded-lg px-2 py-1 cursor-pointer hover:bg-green-600 hover:bg-opacity-60'>⭐ Add to watchlists</span></p>
                        </div>
                    </div>

                </div>

            </div>

            <div class="grid bg-primary grid-cols-12 gap-4 p-4 lg:-mt-[20px]">
                <div class="col-span-12 lg:col-span-8">
                    <Nav />
                </div>

                <div className='col-span-12 lg:col-span-4 bg-secondary p-6 my-2 border-2 border-gray-700 rounded-md p-4 bg-secondary xl:h-[180px] lg:-mt-28'>
                    <div className='grid-cols-12 '>
                        <h3 className='text-lg font-extrabold'>KYC & Audit</h3>
                        <div className='flex justify-between items-center border-b border-gray-600 py-2'>
                            <p className=''>Launch date</p>
                            <div className='flex-col text-center'>
                                <p className=''>December 1 2021</p>
                                <span className='text-green-600'>Incorrect? Submited now</span>
                            </div>
                        </div>

                        <div className='flex justify-between py-2 items-center'>
                            <p className='text-base font-medium text-gray-400'>Audit</p>
                            <div className='flex items-center justify-between'>
                                <button className="xl:text-xm xl:font-normal  bg-[#0168BC]  text-white hover:text-white px-2 py-1 rounded flex gap-2 hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <span className="">Chatspace</span>
                                </button>
                                <div className='px-2 py-1 bg-gray-600 cursor-pointer rounded hover:scale-105 transition-transform duration-300 ease-in-out'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                                        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="grid bg-primary grid-cols-12 gap-4 p-4 lg:-mt-[20px]">
                <div class="col-span-12 lg:col-span-8">
                    <LineChart />
                </div>
                <div className='col-span-12 lg:col-span-4 bg-secondary p-6 my-2 border-2 border-gray-700 rounded-md p-4 bg-secondary  lg:-mt-[0px] xl:-mt-[10px]'>
                    <div className='grid-cols-12 '>
                        <div className='flex justify-between'>
                            <h3 className='text-lg font-extrabold'>Security info</h3>
                            <p className='text-xs font-medium'>🕗 Last Updated:3 weeks ago</p>
                        </div>
                        <p className='text-xs font-medium text-gray-400 my-4'>This security  scan is done by <span className='text-[#01AA73]'>Graphs</span> and is only an indication of
                            contract security. Not all potential threats and episode are
                            directed always DYOR.
                        </p>

                        <div className='flex justify-between items-center border-b border-gray-600 py-2'>
                            <p className=''><span className='bg-[#31394B] py-1 px-3 rounded-full'>!</span> Holder Count</p>
                            <p className=''>107811</p>
                        </div>
                        <div className='flex justify-between items-center border-b border-gray-600 py-2'>
                            <p className=''><span className='bg-[#31394B] py-1 px-3 rounded-full'>!</span> Buy / Sell Tax</p>
                            <p className=''>0.0% / 0.0% <span className='bg-green-600 py-1 px-2 rounded-full'>✓</span></p>
                        </div>
                        <div className='flex justify-between items-center border-b border-gray-600 py-2'>
                            <p className=''><span className='bg-[#31394B] py-1 px-3 rounded-full'>!</span> Own Hodings:</p>
                            <p className=''>0.0% of supply <span className='bg-green-600 py-1 px-2 rounded-full'>✓</span></p>
                        </div>
                        <div className='flex justify-between items-center border-b border-gray-600 py-2'>
                            <p className=''><span className='bg-[#31394B] py-1 px-3 rounded-full'>!</span> Top 10 Holders:</p>
                            <p className='text-[#C1483D]'>53.0% of supply 🔺</p>
                        </div>
                        <div className='flex justify-between items-center border-b border-gray-600 py-2'>
                            <p className=''><span className='bg-[#31394B] py-1 px-3 rounded-full'>!</span> Honeypot Check:</p>
                            <p className=''>Passed <span className='bg-green-600 py-1 px-2 rounded-full'>✓</span></p>
                        </div>
                        <div className='mt-6 mb-2'>
                            <button className="m-auto xl:text-xm xl:font-normal bg-transparent hover:bg-green-600 border border-green-400 hover:border-green-600 text-green-600 hover:text-white px-4 xl:px-10 py-2 rounded flex gap-2 hover:scale-105 transition-transform duration-300 ease-in-out">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                </svg>


                                <span className="hidden lg:inline">Request Security Scan</span>
                                <span className="lg:hidden">Request</span>
                            </button>
                        </div>
                    </div>
                </div>


            </div>


            {/* <div class="grid bg-primary grid-cols-12 gap-4 p-4 lg:-mt-[20px]">
                <div class="col-span-12 lg:col-span-8">
                    <Nav />
                </div>
            </div> */}


            <div class="grid bg-primary grid-cols-12 gap-4 p-4 lg:-mt-[20px]">
                <div class="col-span-12 lg:col-span-8">
                    <DoughnutChart />
                </div>

                

            </div>
            <div class="grid bg-primary grid-cols-12 gap-4 p-4 lg:-mt-[20px]">
                <div class="col-span-12 lg:col-span-8 ">
                    <RoadMap />
                </div>



            </div>
            <div class="grid bg-primary grid-cols-12 gap-4 p-4 lg:-mt-[20px]">
                <div class="col-span-12 lg:col-span-8">
                    <FAQs />
                </div>
            </div>

        </>
    )
}

export default index
