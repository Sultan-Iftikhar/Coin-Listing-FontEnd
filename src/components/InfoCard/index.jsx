import React from 'react'
import Card from './Card/index'

function index() {
    return (
        <div className='my-6 mx-4 lg:mx-0'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 bg-bodyColor gap-3'>
                <Card className='p-4' />
                <Card className='p-4' />
                <Card className='p-4' />
                <Card className='p-4' />
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 mt-2 bg-bodyColor gap-3'>
                <Card className='p-4' />
                <Card className='p-4' />
                <Card className='p-4' />
                <Card className='p-4' />
            </div>
        </div>
    )
}

export default index
