"use client";

import React, { useState } from 'react'
import cover from '../../public/Images/cover.png'
import svg from '../../public/Images/white.svg'
import Image from 'next/image';
import Link from 'next/link';
import xsm from '../../public/Images/xsmn.png'
import RootLayout
 from '@/app/layout'

const Home = () => {
  const selectedFont = 'gothic'

  return (
    <RootLayout font={selectedFont}>
    <div >
      <div className={`absolute text-white md:bg-[#0000001c] xsm:bg-[#00000077] z-10 w-[100vw] h-[100vh] `}>
        <Image className='mt-10 ml-10' src={svg}/>
        <span className='right-10 absolute flex sm:flex-row xsm:flex-col gap-3'>
        <Link href='../Auth/signUp'>
           <button  className=' xsm:w-[80px] xsm:h-[36px]  md:w-[150px] md:h-[48px] bg-black hover:bg-white hover:text-black '>Sign Up</button>
        </Link>
        <Link href='../Auth/Login'>
        <button className=' xsm:w-[80px] xsm:h-[36px]  md:w-[150px] md:h-[48px]  bg-slate-500 hover:bg-white hover:text-black '>Log In</button></Link>
        </span>
        <div className=' md:w-auto mt-20 absolute flex md:flex-row xsm:flex-col md:gap-12 xsm:gap-8 items-center  h-[325px] right-10  '>
            <span className='flex flex-col text-left border-b-[1px] border-s-white border-opacity-75 '>
              <h5>01</h5>
              <h2 className=' lg:text-[200px] sm:text-[120px] xsm:text-[90px] font-bold'>Henry</h2>
          </span>
          <span className=' flex flex-col text-left opacity-80 h-[100%] justify-end '>
            <h5>02</h5>
            <h2 className=' lg:text-[96px] xsm:text-[50px] sm:text-[70px] font-bold'>Mishael</h2>
          </span>
          <span className=' flex flex-col text-left opacity-60 h-[100%] justify-end '>
            <h5>03</h5>
            <h2 className=' lg:text-[72px] sm:text-[50px] xsm:text-[40px] font-bold'>Onyeka</h2>
          </span>
          <span className=' flex flex-col text-left opacity-40 h-[100%] justify-end '>
            <h5>04</h5>
            <h2 className=' lg:text-[60px] sm:text-[40px] xsm:text-[30px] font-bold'>.Dev</h2>
         </span>
        </div>
      </div>
      <div className=''>
        <Image className={`xsm:hidden md:block bg-cover w-[100%] h-[100vh]`} src={cover} />
        <Image className={`md:hidden xsm:block bg-cover w-[100%] h-[100vh]`} src={xsm} />
      </div>

 
    </div>
    </RootLayout>
  )
}
export default Home

