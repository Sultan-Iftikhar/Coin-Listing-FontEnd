import React from 'react';

const index = () => {
    return (
        <>
            <div className='bg-secondary p-4 grid-cols-12 border-2 border-gray-700 rounded-md p-4'>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                        </svg>

                        <h3 className='font-bold text-lg'>Roadmap ( Locked )</h3>
                    </div>
                    <div>
                        <button className="xl:text-xm xl:font-normal bg-transparent hover:bg-green-600 border border-green-400 hover:border-green-600 text-green-600 hover:text-white px-4 xl:px-10 py-2 rounded flex gap-2 hover:scale-105 transition-transform duration-300 ease-in-out">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>


                            <span className="hidden lg:inline">Unlock and submited</span>
                            <span className="lg:hidden">Update</span>
                        </button>
                    </div>
                </div>
                <div className='px-4 py-6'>
                    <ol className="relative text-gray-500 border-s border-green-200 dark:border-green-700 dark:text-gray-400">
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-4 ring-4 ring-white dark:ring-green-900 dark:bg-secondary">
                                {/* <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
          </svg> */}
                            </span>
                            <h3 className="font-sm leading-tight text-white font-normal">Phase 2-Developement</h3>
                            <p className="text-sm">info not submitted</p>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-4 ring-4 ring-white dark:ring-green-900 dark:bg-secondary">
                                {/* <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
          </svg> */}
                            </span>
                            <h3 className="font-sm leading-tight text-white font-normal">Phase 1-Presale</h3>
                            <p className="text-sm">info not submitted</p>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -start-4 ring-4 ring-white dark:ring-green-900 dark:bg-secondary">
                                {/* <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
          </svg> */}
                            </span>
                            <h3 className="font-sm  text-white font-normal">Phase 3-Launch</h3>
                            <p className="text-sm">info not submitted</p>
                        </li>
                        {/* Repeat the same structure for other list items */}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default index;
