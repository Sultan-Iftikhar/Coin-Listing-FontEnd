'use client'

import React, { useState } from 'react';
import Hamburgur from './Hamburgur';
import Close from './Close'
import Image from 'next/image';
import LogoImage from '../../../public/images/Logo.png'
import Link from 'next/link';
import SubNav from './SubNav'

function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [toggelSearch, setToggleSearch] = useState('hidden');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-primary p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left side: Logo and Hamburger menu */}
          <div className='flex align-center'>
            {/*  */}
            <button className=" focus:outline-none" onClick={toggleMenu}>
              {isOpen ? <Close /> : <Hamburgur />}
            </button>

            <Image
              src={LogoImage}
              // width={200}
              className='w-[150px] lg:w-[200px]'
            />
          </div>


          {/* Right side: Search icon and Button */}
          <div className="flex items-center gap-2">
            
            <input
              className={`${toggelSearch} border text-black border-gray-300 px-2 lg:px-4 py-2 rounded-l focus:outline-none focus:border-blue-500`}
              // ref={inputRef}
              type="text"
              placeholder="Search..."
            />

            <svg onClick={() => {
              toggelSearch == 'hidden' ? setToggleSearch('block') : setToggleSearch('hidden')
            }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hidden sm:block w-8 h-8 lg:w-12 lg:h-12 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

            <button className="hidden sm:block xl:text-xl xl:font-extrabold bg-[#627EEA] hover:bg-[#4b6ade] hover:text-white text-white px-4 xl:px-10 py-2 rounded hover:scale-105 transition-transform duration-300 ease-in-out">
              Submit Coin
            </button>
          </div>



          {/* Mobile menu */}
          {isOpen && (
            <>

              <div
                className={`md:rounded-bl-[50px] md:rounded-br-[50px] fixed inset-y-0 top-0 left-0 w-full md:h-1/2 bg-primary p-4 transform transition-transform duration-700 ${isOpen ? 'translate-x-0' : '-translate-y-full'
                  }`}
              >
                {/* Menu Links */}
                <nav className='w-[80%] m-auto'>
                  <div className='flex justify-between'>
                    <Image
                      src={LogoImage}
                      // width={200}
                      className='w-[150px] lg:w-[200px]'
                    />
                    <button className=" focus:outline-none text-white cursor-pointer" onClick={toggleMenu}>
                      {isOpen ? <Close /> : <Hamburgur />}
                    </button>
                  </div>
                  <ul className="space-y-4 mt-8 items-center text-xl lg:text-2xl text-center cursor-pointer">
                    <li className='hover:bg-profilebannercolor py-2 rounded-3xl'>
                      <Link
                        href="#"
                        className="text-white transition hover:duration-150 ease-in-outm-auto  hover:text-gray-300 transition-colors duration-300"
                      >
                        Page 1
                      </Link>
                    </li>
                    <li className='hover:bg-profilebannercolor py-2 rounded-3xl'>
                      <a
                        href="#"
                        className="text-white transition hover:duration-150 ease-in-out   hover:text-gray-300 transition-colors duration-300"
                      >
                        Page 2
                      </a>
                    </li>
                    <li className='hover:bg-profilebannercolor py-2 rounded-3xl'>
                      <a
                        href="#"
                        className="text-white transition hover:duration-150 ease-in-out   hover:text-gray-300 transition-colors duration-300"
                      >
                        Page 3
                      </a>
                    </li>
                  </ul>

                  {/* Right side: Search icon and Button */}
                  <div className="md:hidden mt-4 flex-col items-center mt-6 gap-2">
                    <input
                      className={`${toggelSearch} border my-2 m-auto text-black border-gray-300 px-2 lg:px-4 py-2 rounded focus:outline-none focus:border-blue-500`}
                      // ref={inputRef}
                      type="text"
                      placeholder="Search..."
                    />
                    <div className='flex justify-center gap-2'>
                      <svg onClick={() => {
                        toggelSearch == 'hidden' ? setToggleSearch('block') : setToggleSearch('hidden')
                      }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-8 h-8 lg:w-12 lg:h-12 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>

                      <button className="xl:text-xl xl:font-extrabold bg-[#627EEA] hover:bg-[#4b6ade] hover:text-white text-white px-4 xl:px-10 py-2 rounded">
                        <span className="hidden lg:inline">Submit Coin</span>
                        <span className="lg:hidden">Submit</span>
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </>
          )}
        </div>
        <SubNav />
      </nav>
    </>
  );
}

export default Index;
