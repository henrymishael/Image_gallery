'use client';
import React, { useEffect, useState } from 'react'
import svg from '../../../../public/Images/black.png'
import cover from '../../../../public/Images/authbg.png'
import md from '../../../../public/Images/md.png'
import Image from 'next/image'
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"; 
import Link from 'next/link';
import { auth } from '@/app/utils/request';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

 


const SignUp = () => {
    const selectedFont = 'cabin'
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [viewPassword, setViewPassword] = useState(false)

    useEffect(() => {
        // Retrieve the username from local storage when the component mounts
        const savedUsername = localStorage.getItem('username');
        if (savedUsername) {
          setUsername(savedUsername);
        }
      }, []);
    
      const handleChange = (e) => {
        const newName = e.target.value;
        setUsername(newName);
        // Save the username to local storage whenever it changes
        localStorage.setItem('username', newName);
      };

    const router = useRouter()

    const handlePasswordVisibility = () => {
        setViewPassword((prevState) => !prevState);
    };

    // const handleSignUp = async (e) => {
    //     e.preventDefault();
    
    //     try {
    //       const response = await signUp(username, email, password);
    //       console.log('Signup successful', response);
    //     } catch (error) {
    //       console.error('Signup failed', error);
    //     }
    //   };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
          await createUserWithEmailAndPassword(auth, email, password)
          // Signed in
          .then((userCredential) => {
          const user = userCredential.user;
          
          console.log('User registered successfully!')
          router.push('../Home')
        })
        } catch (error) {
          console.error('Error registering user:', error.message);
        }
      };
    
     

  return (

<div className={`${cabin} flex flex-row w-[100vw] h-[100vh]`}>
<div className='md:w-[30%] lg:w-[50%] xsm:hidden md:block h-[100hv] bg-emerald-600'>
   <Image className='md:hidden lg:block bg-cover bg-center  h-[100%]' src={cover} />
        <Image className='lg:hidden bg-cover bg-center  h-[100%]' src={md} />
   </div>
   <div className='text-black flex flex-col justify-center items-center lg:w-[50%] md:w-[70%] xsm:w-[100%] h-[100hv] '>
        
        <span className='w-[100%] px-10 mt-10 flex justify-end'>
        <Link href='../'>
                <Image src={svg} />
                </Link>
            </span>
        
            <span className='xsm:mt-8 md:mt-24 lg:mt-0 flex flex-col items-center'>
            <h2 className='font-bold text-[24px]'>Sign Up</h2>
            <p className='text-slate-500 xsm:text-[12px] sm:text-[16px]'>Welcome to Cover, let's get you started!</p>
            </span>
            <div className=' w-[70%] h-[100%] flex flex-col lg:justify-center xsm:mt-16 sm:mt-24 lg:mt-0 xsm:justify-normal items-center gap-16'>
            
                <form onSubmit={handleSignUp} action='../Home' method='post' className='flex flex-col gap-6 items-center justify-center'>
                    <span>
                        <label for="name">Username</label><br />
                        <input className='focus:border-yellow-500 rounded-[100px] px-3 outline-none border-2 border-black border-solid sm:w-[350px] xsm:w-[250px] h-[40px]' for='name' 
                        id='name'  
                        type="text"
                        value={username}
                        onChange={handleChange}
                        required={true} />
                    </span>
                    <span>
                    <label for="email">Email</label><br />
                        <input className='focus:border-yellow-500 rounded-[100px] px-3 outline-none border-2 border-black border-solid sm:w-[350px] xsm:w-[250px] h-[40px]' for='email' 
                        id='email' 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  
                        required={true} />
                    </span>
                    
                    <div>
                    <label for="pass">Password</label><br />
                    <div className='focus:border-yellow-500 flex flex-row rounded-[100px] outline-none border-2 border-black border-solid sm:w-[350px] xsm:w-[250px] h-[40px] items-center px-3'>
                        <input   className={`   rounded-[100px] px-3 outline-none border-none   sm:w-[350px] xsm:w-[250px] `} 
                        id='pass' 
                        for='pass'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        type={viewPassword ? 'text' : 'password'} 
                        
                        required={true} />

                        <span onClick={handlePasswordVisibility} className=' flex items-center text-[20px]  '  >
                    {viewPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
        
                    </span>    
                    </div>
                    </div>
                    
                    
                    <button type='submit'  className='rounded-[100px] mt-8 text-white sm:w-[350px] xsm:w-[250px] h-[50px] bg-yellow-500 hover:bg-yellow-700'>Sign Up</button>
                    <h5>Already have an account?
                        <Link href='./Login'> <span className='text-yellow-500'>Login</span></Link></h5>
                </form>
                
            </div>
    </div>
   </div>
  
  )
}
export default SignUp
