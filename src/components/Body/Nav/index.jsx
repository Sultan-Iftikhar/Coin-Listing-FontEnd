import React from 'react'

function index() {
    const btnsCss = "text-xs xl:font-normal border border-gray-400 bg-transperent hover:bg-[#05A672] hover:border-[#05A672] text-white hover:text-white rounded flex gap-2 px-2 py-1 hover:scale-105 transition-transform duration-300 ease-in-out px-1 py-1 rounded m-1"
    return (
        <>
            {/* Mobile responsive */}
            <div className="block xl:hidden grid grid-cols-1 lg:grid-cols-2 gap-4 bg-secondary rounded-lg p-4">
                <div className="lg:col-span-1 md:flex items-center">
                    <button className={btnsCss}>About</button>
                    <button className={btnsCss}>Presaleinfo</button>
                    <button className={btnsCss}>Tweets</button>
                    <button className={btnsCss}>Takenmics</button>
                    <button className={btnsCss}>Roadmap</button>
                    <button className={btnsCss}>FAQs</button>
                </div>

                <div className="lg:col-span-1">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="bg-[#333A4C] px-6 py-4 rounded-xl flex gap-2 px-2 justify-between">
                            <div className="items-center">
                                <h3 className="text-gray-500 text-sm font-bold">Total_votes</h3>
                                <p className="text-sm font-bold text-center pt-2">6</p>
                            </div>

                            <div className="items-center">
                                <h3 className="text-gray-500 text-sm font-bold">Votes_Today</h3>
                                <p className="text-sm font-bold text-center pt-2">6</p>
                            </div>

                            <div>
                                <button className="text-sm xl:font-normal border border-gray-400 bg-[#05A672] hover:border-[#05A672] text-white hover:text-white rounded flex gap-2 px-2 py-1 hover:scale-105 transition-transform duration-300 ease-in-out px-2 py-1 rounded m-1">Vote</button>
                            </div>
                        </div>

                        {/* <div className="bg-[#333A4C] p-4 rounded"> */}
                        <div className="bg-[#333A4C] px-6 py-4 rounded-xl flex gap-2 px-2 justify-between">
                            <div className="items-center">
                                <h3 className="text-gray-500 text-sm font-bold">Total_boosts</h3>
                                <p className="text-sm font-bold text-center pt-2">🚀 1778</p>
                            </div>

                            <div className="items-center">
                                <h3 className="text-gray-500 text-sm font-bold">Boosts_Today</h3>
                                <p className="text-sm font-bold text-center pt-2">-0</p>
                            </div>

                            <div>
                                <button className="text-sm xl:font-normal border border-gray-400 bg-[#05A672] hover:border-[#05A672] text-white hover:text-white rounded flex gap-2 px-2 py-1 hover:scale-105 transition-transform duration-300 ease-in-out px-2 py-1 rounded m-1">Boost</button>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>



            {/* desktop */}

            <div className="hidden lg:block lg:flex flex-col lg:flex-row lg:gap-1 bg-secondary rounded-lg p-4">
                <div className="flex flex-wrap items-center">
                    <button className={btnsCss}>About</button>
                    <button className={btnsCss}>Presaleinfo</button>
                    <button className={btnsCss}>Tweets</button>
                    <button className={btnsCss}>Takenmics</button>
                    <button className={btnsCss}>Roadmap</button>
                    <button className={btnsCss}>FAQs</button>
                </div>

                <div className="lg:flex-1">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                        <div className="bg-[#333A4C] px-2 py-2 items-center rounded-lg flex gap-1 justify-between">
                            <div className="items-center">
                                <h3 className="text-gray-500 text-xs font-bold">Total_votes</h3>
                                <p className="text-xs font-bold text-center pt-2">6</p>
                            </div>

                            <div className="items-center">
                                <h3 className="text-gray-500 text-xs font-bold">Votes_Today</h3>
                                <p className="text-xs font-bold text-center pt-2">6</p>
                            </div>

                            <div>
                                <button className="text-xs xl:font-normal border border-gray-400 bg-[#05A672] hover:border-[#05A672] text-white hover:text-white rounded flex gap-2 px-2 py-1 hover:scale-105 transition-transform duration-300 ease-in-out py-1 rounded m-1">Vote</button>
                            </div>
                        </div>

                        <div className="bg-[#333A4C] px-2 py-2 items-center rounded-lg flex justify-between">
                            <div className="items-center">
                                <h3 className="text-gray-500 text-xs font-bold">Total_boosts</h3>
                                <p className="text-xs font-bold text-center pt-2">🚀 1778</p>
                            </div>

                            <div className="items-center">
                                <h3 className="text-gray-500 text-xs font-bold">Boosts_Today</h3>
                                <p className="text-xs font-bold text-center pt-2">-0</p>
                            </div>

                            <div>
                                <button className="text-xs xl:font-normal border border-gray-400 bg-[#05A672] hover:border-[#05A672] text-white hover:text-white rounded flex gap-2 px-2 py-1 hover:scale-105 transition-transform duration-300 ease-in-out px-2 py-1 rounded m-1">Boost</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>




    )
}

export default index


// <div className='grid-cols-6 flex gap-2 bg-[#333A4C] p-2 rounded-lg'>
//                     <div className='flex-col text-center  text-xs font-bold text-gray-500'>
//                         <h3>Total votes</h3>
//                         <p className="font-bold text-xs">6</p>
//                     </div>

//                     <div className='flex-col text-center  text-xs font-bold text-gray-500'>
//                         <h3>Votes Today</h3>
//                         <p className="font-bold text-xs">-0</p>
//                     </div>
//                     <div className='flex items-center'>
//                         <button className="xl:text-xm xl:font-normal bg-[#05A672] hover:border-[#05A672] text-white hover:text-white rounded flex gap-2 px-2 py-1 hover:scale-105 transition-transform duration-300 ease-in-out">
//                             <span className="font-bold text-xs">Vote</span>
//                         </button>
//                     </div>
//                 </div>