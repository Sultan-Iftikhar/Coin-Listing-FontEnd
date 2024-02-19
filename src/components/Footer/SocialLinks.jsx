import React from 'react';
import Image from 'next/image';
import Fb from '../../../public/images/Fb.png';
import Twitter from '../../../public/images/Twitter.png';
import Telegram from '../../../public/images/Telegram.png';
import Discord from '../../../public/images/Discord.png';

function SocialLinks() {
  return (
    <>
      <div className='flex-col justify-end w-full'>
        <div className='flex justify-center md:justify-end'>
          <div className='text-center lg:text-xl lg:font-bold'>
            <span className='mx-auto'>Join the Community</span>
            <div className='flex mt-2 lg:gap-2'>
              <Image src={Fb} />
              <Image src={Telegram} />
              <Image src={Twitter} />
              <Image src={Discord} />
            </div>
          </div>
        </div>

      </div>
    </>


  );
}

export default SocialLinks;
