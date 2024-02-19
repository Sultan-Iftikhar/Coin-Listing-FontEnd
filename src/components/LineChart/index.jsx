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
                type: 'line',
                data: {
                    labels: [20, 20, 30,40,50],
                    datasets: [
                        {
                            label: 'Info',
                            data: [8, 68, 10, 20, 43, 5],
                            backgroundColor: [
                                '#00A676',
                                // '#006CB7',
                                // '#FFA200',
                                // '#C87064',
                                // '#F0A7A0',
                                // '#787B8D',
                            ],
                              borderColor: [
                                'rgb(255,99,132)',
                                // 'rgb(255,159,64)',
                                // 'rgb(255,205,86)',
                                // 'rgb(255,192,192)',
                                // 'rgb(54,162,235)',
                                // 'rgb(153,102,255)',
                                // 'rgb(201,203,207)',
                              ],
                              borderWidth: 1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            type: 'linear',
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

                <div style={{ position: 'relative' }} className='w-full h-full'>
                    <canvas ref={chartRef} />
                </div>

               
        </div>
    );
}

export default Index;