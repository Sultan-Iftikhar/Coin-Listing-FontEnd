import React from 'react'
import Image from 'next/image'
import LimoIcon from '../../../../public/images/limo.png'
import UndoIcon from '../../../../public/images/undo.png'
import BlockIcon from '../../../../public/images/block.png'
import DoubleArrowIcon from '../../../../public/images/doublearrow.png'
import MouseArrow from '../../../../public/images/mouse.png'
import TwitterSolidIcon from '../../../../public/images/twittersolid.png'
import Globe from '../../../../public/images/globe.png'
import HardDiskIcon from '../../../../public/images/harddisk.png'
import Plus from '../../../../public/images/plus.png'
import Minus from '../../../../public/images/minus.png'
import Infinite from '../../../../public/images/infinit.png'

function index() {
    return (
        <>
            <div className='hidden xl:block'>
                <div className='bg-profilebannercolor p-6 flex items-center justify-center rounded-t-xl'>
                    <div className='text-center'>
                        <h2 className='text-xl font-bold'>Custom Profile Banner (Locked)</h2>
                        <button className="text-xs xl:font-normal border border-[#63B9F8] bg-transparent hover:border-white 
                text-[#63B9F8] hover:text-white rounded flex gap-2 px-2 py-1 hover:scale-105 transition-transform duration-300 ease-in-out mx-auto mt-4">🚀 Boost to unlock</button>
                    </div>
                </div>
                <div>
                    <div className=' bg-secondary grid items-center grid-cols-12 p-4 gap-4 rounded-b-xl'>
                        <div class="col-span-4 md:col-span-1">
                            <Image
                                src={LimoIcon}
                                className='w-full'
                            />
                        </div>





                        <div class="col-span-8 md:col-span-8">
                            <div className='flex gap-2 items-center'>
                                <h3 className='text-lg lg:text-2xl font-bold'>limocoin swap</h3>
                                <span className='bg-[#78829B] p-1 rounded-lg'>LMCSWAP</span>
                                <span className='text-[#78829B] text-lg xl:text-xl border border-[#78829B] p-1 rounded-lg font-bold'><span className='text-gray-500'>🛡️</span> KYC</span>
                                <span className='text-white text-lg xl:text-xl bg-[#1565A0] p-1 rounded-lg xl:font-bold'><span className='text-gray-500'>🛡️</span> 4udt</span>
                                <div className='flex bg-[#1565A0] p-2 rounded-full'>
                                    <Image
                                        src={UndoIcon}
                                        className='w-4'
                                    />
                                </div>
                                <div className='flex  bg-[#455050] p-2 rounded-full'>
                                    <Image
                                        src={BlockIcon}
                                        className='w-4'
                                    />
                                </div>
                            </div>

                            <div className='flex my-1'>
                                <div className='flex gap-1 bg-[#333C4A] rounded-lg p-1'>
                                    <Image
                                        src={DoubleArrowIcon}
                                        className='w-6 bg-primary cursor-pointer p-1 rounded-full'
                                    />
                                    <p className='text-gray-400'>
                                        BSC: <span className='text-white'>0.3830_c83f</span>
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                    </svg>
                                </div>
                            </div>
                            <div className='flex my-2'>
                                <div className='flex justify-between gap-4 bg-secondary rounded-lg'>
                                    <div className='flex bg-[#333C4A] rounded-lg justify-between gap-2 items-center'>
                                        <div className='px-2'>
                                            <Image src={MouseArrow}
                                                className='w-6 h-6 cursor-pointer'
                                            />
                                        </div>
                                        <span className='text-2xl font-bold bg-[#06A676] px-4 py-2 cursor-pointer rounded-lg'>
                                            <Image
                                                src={Plus}
                                                className='w-6 h-6 cursor-pointer'
                                            />
                                        </span>

                                    </div>

                                    <div className='flex bg-[#333C4A] rounded-lg justify-between gap-2 items-center'>
                                        <div className='px-2'>
                                            <Image src={TwitterSolidIcon}
                                                className='w-6 h-6 cursor-pointer'
                                            />
                                        </div>
                                        <span className='bg-[#06A676] px-4 py-2 cursor-pointer rounded-lg'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-2xl font-extrabold ">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                            </svg>

                                        </span>

                                    </div>

                                    <div className='flex bg-[#333C4A] rounded-lg justify-between gap-2 items-center'>
                                        <div className='px-2'>
                                            <Image src={Globe}
                                                className='w-6 h-6 cursor-pointer'
                                            />
                                        </div>
                                        <span className='text-2xl font-bold bg-[#06A676] px-4 py-2 cursor-pointer rounded-lg'>
                                            <Image
                                                src={Infinite}
                                                className='w-8 h-6 cursor-pointer'
                                            />
                                        </span>

                                    </div>

                                    <div className='flex bg-[#333C4A] rounded-lg justify-between gap-2 items-center'>
                                        <div className='px-2'>
                                            <Image src={HardDiskIcon}
                                                className='w-6 h-6 cursor-pointer'
                                            />
                                        </div>
                                        <span className='text-xs font-medium bg-[#06A676] px-4 py-3 cursor-pointer rounded-lg'>
                                            Whitepaper
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 md:col-span-3">
                            <h3 className='font-bold text-xl'>Limocoin swap price (USD ):</h3>

                            <div className='flex justify-between'>
                                <h3 className='font-bold text-xl'>$ 0. (0x2) 260 </h3>
                                <div class="py-1 text-[#FE0808] items-center font-bold text-xl flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                                    </svg>

                                    0.37%
                                </div>
                            </div>

                            <div className='lg:flex gap-2 justify-between'>
                                <div className='flex cursor-pointer'>
                                    <span className='border border-green-600 flex gap-2 rounded-lg px-2 py-1 hover:bg-green-600 hover:bg-opacity-60'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-300 font-bold text-lg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg>
                                        Add to watchlists</span>
                                </div>
                                <div className='flex cursor-pointer'>
                                    <span className='flex rounded-lg px-2 py-1 bg-[#06A674] items-center gap-2'>
                                        Charts
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* *********************************** */}

            <div className='block xl:hidden'>
                <div className='bg-profilebannercolor p-6 flex items-center justify-center rounded-t-xl'>
                    <div className='text-center'>
                        <h2 className='text-xl font-bold'>Custom Profile Banner (Locked)</h2>
                        <button className="text-xs xl:font-normal border border-[#63B9F8] bg-transparent hover:border-white 
                text-[#63B9F8] hover:text-white rounded flex gap-2 px-2 py-1 hover:scale-105 transition-transform duration-300 ease-in-out mx-auto mt-4">🚀 Boost to unlock</button>
                    </div>
                </div>
                <div>
                    <div className=' bg-secondary grid items-center grid-cols-12 p-4 gap-4 rounded-b-xl'>
                        <div class="col-span-12 md:col-span-4">
                            <Image
                                src={LimoIcon}
                                className='w-full'
                            />
                        </div>





                        <div class="hidden md:block col-span-8">
                            <div className='flex gap-2 items-center'>
                                <h3 className='text-lg lg:text-2xl font-bold'>limocoin swap</h3>
                                <span className='bg-[#78829B] p-1 rounded-lg'>LMCSWAP</span>
                                <span className='text-[#78829B] text-lg xl:text-xl border border-[#78829B] p-1 rounded-lg font-bold'><span className='text-gray-500'>🛡️</span> KYC</span>
                                <span className='text-white text-lg xl:text-xl bg-[#1565A0] p-1 rounded-lg xl:font-bold'><span className='text-gray-500'>🛡️</span> 4udt</span>
                                <div className='flex bg-[#1565A0] p-2 rounded-full'>
                                    <Image
                                        src={UndoIcon}
                                        className='w-4'
                                    />
                                </div>
                                <div className='flex  bg-[#455050] p-2 rounded-full'>
                                    <Image
                                        src={BlockIcon}
                                        className='w-4'
                                    />
                                </div>
                            </div>

                            <div className='flex my-1'>
                                <div className='flex gap-1 bg-[#333C4A] rounded-lg p-1'>
                                    <Image
                                        src={DoubleArrowIcon}
                                        className='w-6 bg-primary cursor-pointer p-1 rounded-full'
                                    />
                                    <p className='text-gray-400'>
                                        BSC: <span className='text-white'>0.3830_c83f</span>
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                    </svg>
                                </div>
                            </div>
                            <div className='flex my-2'>
                                <div className='md:flex w-full md:w-auto justify-between gap-4 bg-secondary rounded-lg'>
                                    <div className='flex bg-[#333C4A] mt-2 md:mt-0 rounded-lg justify-between gap-2 items-center'>
                                        <div className='px-2'>
                                            <Image src={MouseArrow}
                                                className='w-4 h-4 cursor-pointer'
                                            />
                                        </div>
                                        <span className='text-2xl font-bold bg-[#06A676] px-4 py-2 cursor-pointer rounded-lg'>
                                            <Image
                                                src={Plus}
                                                className='w-4 h-4 cursor-pointer'
                                            />
                                        </span>

                                    </div>

                                    <div className='flex bg-[#333C4A] mt-2 md:mt-0 rounded-lg justify-between gap-2 items-center'>
                                        <div className='px-2'>
                                            <Image src={TwitterSolidIcon}
                                                className='w-4 h-4 cursor-pointer'
                                            />
                                        </div>
                                        <span className='bg-[#06A676] px-4 py-2 cursor-pointer rounded-lg'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-2xl font-extrabold ">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                            </svg>

                                        </span>

                                    </div>

                                    <div className='flex bg-[#333C4A] mt-2 md:mt-0 rounded-lg justify-between gap-2 items-center'>
                                        <div className='px-2'>
                                            <Image src={Globe}
                                                className='w-4 h-4 cursor-pointer'
                                            />
                                        </div>
                                        <span className='text-2xl font-bold bg-[#06A676] px-4 py-2 cursor-pointer rounded-lg'>
                                            <Image
                                                src={Infinite}
                                                className='w-8 h-6 cursor-pointer'
                                            />
                                        </span>

                                    </div>

                                    <div className='flex bg-[#333C4A] mt-2 md:mt-0 rounded-lg justify-between gap-2 items-center'>
                                        <div className='px-2'>
                                            <Image src={HardDiskIcon}
                                                className='w-4 h-4 cursor-pointer'
                                            />
                                        </div>
                                        <span className='text-xs font-medium bg-[#06A676] px-4 py-3 cursor-pointer rounded-lg'>
                                            Whitepaper
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Mobile responsive */}
                        <div class="block md:hidden col-span-8">

                            {/* <div className='flex justify-between'> */}
                            <h3 className='text-lg lg:text-2xl font-bold'>Limocoin swap</h3>
                            <span className='mx-[1px] bg-[#78829B] p-1 rounded-lg'>LMCSWAP</span>
                            <span className='mx-[1px] text-[#78829B] text-lg xl:text-xl border border-[#78829B] p-1 rounded-lg font-bold'><span className='mx-[1px] text-gray-500'>🛡️</span> KYC</span>
                            <br />
                            <span className='mx-[1px] mt-8 text-white text-lg xl:text-xl bg-[#1565A0] p-1 rounded-lg xl:font-bold'><span className='text-gray-500'>🛡️</span> 4udt</span>

                            {/* </div> */}

                            <div className='items-center my-2'>

                                <div className='flex gap-2'>
                                    <div className='flex bg-[#1565A0] p-2 rounded-full'>
                                        <Image
                                            src={UndoIcon}
                                            className='w-4'
                                        />
                                    </div>
                                    <div className='flex  bg-[#455050] p-2 rounded-full'>
                                        <Image
                                            src={BlockIcon}
                                            className='w-4'
                                        />
                                    </div>
                                </div>

                            </div>

                            <div className='flex my-1'>
                                <div className='flex gap-1 bg-[#333C4A] rounded-lg p-1'>
                                    <Image
                                        src={DoubleArrowIcon}
                                        className='w-8 bg-primary cursor-pointer p-1 rounded-full'
                                    />
                                    <p className='text-gray-400'>
                                        BSC: <span className='text-white'>0.3830_c83f</span>
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                    </svg>
                                </div>
                            </div>
                            <div className='flex my-2'>
                                <div className='md:flex w-full md:w-auto justify-between gap-4 bg-secondary rounded-lg'>
                                    <div className='flex bg-[#333C4A] mt-2 md:mt-0 rounded-lg justify-between gap-2 items-center'>
                                        <div className='px-2'>
                                            <Image src={MouseArrow}
                                                className='w- h-8 cursor-pointer'
                                            />
                                        </div>
                                        <span className='text-2xl font-bold bg-[#06A676] px-4 py-2 cursor-pointer rounded-lg'>
                                            <Image
                                                src={Plus}
                                                className='w- h-8 cursor-pointer'
                                            />
                                        </span>

                                    </div>

                                    <div className='flex bg-[#333C4A] mt-2 md:mt-0 rounded-lg justify-between gap-2 items-center'>
                                        <div className='px-2'>
                                            <Image src={TwitterSolidIcon}
                                                className='w- h-8 cursor-pointer'
                                            />
                                        </div>
                                        <span className='bg-[#06A676] px-4 py-2 cursor-pointer rounded-lg'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w- h-8 text-2xl font-extrabold ">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                            </svg>

                                        </span>

                                    </div>

                                    <div className='flex bg-[#333C4A] mt-2 md:mt-0 rounded-lg justify-between gap-2 items-center'>
                                        <div className='px-2'>
                                            <Image src={Globe}
                                                className='w- h-8 cursor-pointer'
                                            />
                                        </div>
                                        <span className='text-2xl font-bold bg-[#06A676] px-4 py-2 cursor-pointer rounded-lg'>
                                            <Image
                                                src={Infinite}
                                                className='w-8 h-6 cursor-pointer'
                                            />
                                        </span>

                                    </div>

                                    <div className='flex bg-[#333C4A] mt-2 md:mt-0 rounded-lg justify-between gap-2 items-center'>
                                        <div className='px-2'>
                                            <Image src={HardDiskIcon}
                                                className='w- h-8 cursor-pointer'
                                            />
                                        </div>
                                        <span className='text-xs font-medium bg-[#06A676] px-4 py-3 cursor-pointer rounded-lg'>
                                            Whitepaper
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-span-12">


                            <div className='flex justify-between'>
                                <h3 className='text-sm md:font-bold md:text-xl'>Limocoin swap price (USD ):</h3>
                                <div class="py-1 text-[#FE0808] items-center font-bold md:text-xl flex">
                                    <h3 className='text-sm md:font-bold md:text-xl'>$ 0. (0x2) 260 </h3>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                                    </svg>

                                    0.37%
                                </div>
                            </div>


                            <div className='md:flex  gap-2 justify-between'>
                                <div className='flex cursor-pointer'>
                                    <span className='border border-green-600 flex gap-2 rounded-lg px-2 py-1 hover:bg-green-600 hover:bg-opacity-60'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-300 font-bold text-lg">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg>
                                        Add to watchlists</span>
                                </div>
                                <div className='flex cursor-pointer mt-2 md:mt-0'>
                                    <span className='flex rounded-lg px-2 py-1 bg-[#06A674] items-center gap-2'>
                                        Charts
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w- h-8">
                                            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index