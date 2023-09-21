'use client';

import React, { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export const Eye = () => {
const [viewPassword, setViewPassword] = useState(false)

    const handlePasswordVisibility = () => {
        setViewPassword((prevState) => !prevState);
    };
  return (
    <div>
        <span className=' relative flex items-center ml-[90%] md:text-2xl xsm:text-[16px] z-[2]' onClick={handlePasswordVisibility} >
            {viewPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        
        </span>
    </div>
  )
}
