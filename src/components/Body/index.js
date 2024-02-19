import React from 'react'
import AdsCard from './AdsCard/index'
import InfoCard from '../InfoCard/index'
import Image from 'next/image'
import Announce from '../../../public/images/announce.png'
import Like from '../../../public/images/like.png'
import FAQs from './FAQs/index'
import DesMetaData from './DesMetaData/index'


function index() {
  return (
    <>
      <AdsCard />
      <div className='bg-bodyColor  text-white'>

        {/* ****************** */}
        <DesMetaData />
        

        {/* ****************** */}
        <div className='flex gap-4 md:items-start md:justify-start items-center justify-center mt-4'>
          <Image src={Announce} />
          <h3 className='lg:text-3xl font-bold text-white'>PROMOTED</h3>
        </div>
        <InfoCard />
        <div className='flex gap-4  md:items-start md:justify-start items-center justify-center'>
          <Image src={Like} />
          <h3 className='lg:text-3xl font-bold text-white'>TODAY POPULAR COINS</h3>
        </div>
        <InfoCard />
        <AdsCard />
      </div>
    </>
  )
}

export default index