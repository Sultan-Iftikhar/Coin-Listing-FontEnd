import React from 'react'
import Card from './Card/index'
function index() {
  return (
    <>
      <div className='grid md:grid-cols-3 gap-4 my-6 mx-4 xl:mx-0'>
        <Card className='bg-gray-300 p-4'/>
        <Card className='bg-gray-300 p-4'/>
        <Card className='bg-gray-300 p-4'/>
      </div>
    </>

  )
}

export default index
