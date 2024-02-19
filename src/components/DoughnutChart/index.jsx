'use client'
import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

function Index() {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }

            const context = chartRef.current.getContext('2d');

            const newChart = new Chart(context, {
                type: 'doughnut',
                data: {
                    // labels: ['John', 'Jane', 'Dep'],
                    datasets: [
                        {
                            label: 'Info',
                            data: [8, 68, 10, 20, 43, 5],
                            backgroundColor: [
                                '#00A676',
                                '#006CB7',
                                '#FFA200',
                                '#C87064',
                                '#F0A7A0',
                                '#787B8D',
                            ],
                            //   borderColor: [
                            //     'rgb(255,99,132)',
                            //     'rgb(255,159,64)',
                            //     'rgb(255,205,86)',
                            //     'rgb(255,192,192)',
                            //     'rgb(54,162,235)',
                            //     'rgb(153,102,255)',
                            //     'rgb(201,203,207)',
                            //   ],
                            //   borderWidth: 1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            type: 'category',
                        },
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });

            chartRef.current.chart = newChart;
        }
    }, []);

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

            <div className='lg:flex justify-between gap-4 items-center'>
                <div style={{ position: 'relative' }} className='md:h-72 md:w-72 lg:h-80 lg:w-80 m-auto lg:m-0'>
                    <canvas ref={chartRef} />
                </div>

                <div className='flex-col w-full'>
                    <div className='flex justify-between text-base font-bold items-center border-b border-gray-600 py-4'>
                        <p className=''>Marketing</p>
                        <p className='bg-[#FFA200] py-1 px-4 rounded'>8%</p>
                    </div>
                    <div className='flex justify-between text-base font-bold items-center border-b border-gray-600 py-4'>
                        <p className=''>P2E Rewards</p>
                        <p className='bg-[#00A676] py-1 px-4 rounded'>10%</p>
                    </div>
                    <div className='flex justify-between text-base font-bold items-center border-b border-gray-600 py-4'>
                        <p className=''>CEX Liquidity</p>
                        <p className='bg-[#C87064] py-1 px-4 rounded'>20%</p>
                    </div>
                    <div className='flex justify-between text-base font-bold items-center border-b border-gray-600 py-4'>
                        <p className=''>Staking Rewads</p>
                        <p className='bg-[#F0A7A0] py-1 px-4 rounded'>43%</p>
                    </div>
                    <div className='flex justify-between text-base font-bold items-center border-b border-gray-600 py-4'>
                        <p className=''>Game Developement</p>
                        <p className='bg-[#787B8D] py-1 px-4 rounded'>5%</p>
                    </div>
                    


                </div>
            </div>
        </div>
    );
}

export default Index;

// '#00A676',
//     '#006CB7',
//     '#FFA200',
//     '#C87064',
//     '#F0A7A0',
//     '#787B8D',



