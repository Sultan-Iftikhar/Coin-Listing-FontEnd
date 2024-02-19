import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function index() {
    return (
        <div className='bg-secondary p-4 grid-cols-12 border-2 border-gray-700 rounded-md p-4'>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <h3 className='font-bold text-lg'>Tokenomics</h3>
                </div>
                <div>
                    <button className="xl:text-xm xl:font-normal bg-transparent hover:bg-green-600 border border-green-400 hover:border-green-600 text-green-600 hover:text-white px-4 xl:px-10 py-2 rounded flex gap-2 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                        </svg>

                        <span className="hidden lg:inline">Update Takenomics</span>
                        <span className="lg:hidden">Update</span>
                    </button>
                </div>
            </div>

            <div className='flex justify-between'>
                <Doughnut />
            </div>
        </div>
    )
}

export default index
