'use client';
import React, { useEffect, useRef, useState } from 'react'
import bg from '../../../public/Images/Homebg.png'
import xsm from '../../../public/Images/xsmn.png'
import Image from 'next/image'
import SearchField from '../components/searchField';
import { Reorder } from "framer-motion"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { auth } from '../utils/request';
import { signOut } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { FaFacebookSquare  } from "react-icons/fa";
import { FaInstagram  } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


// function cn(...classes: string[]) {
//     return classes.filter(Boolean).join(' ');
// }




const HomePage = () => {
    const [images, setImages] = useState([])
    const [error, setError] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [name , setName] =useState('')
    

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    const API_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY 
    
    const IMAGES_PER_PAGE = 30

    

    const router = useRouter()
  

      

    // useEffect(() => {
    //    onDragEnd()
    // })

    const handleSignOut = async (e) => {
      e.preventDefault();
      try {
        await signOut(auth)
        // Signed in
        .then(() => {
        console.log('User signed out successfully!')
        router.push('../')
      })
      } catch (error) {
        console.error('Error Occured', error);
      }
    };
    

    function cn(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    useEffect(() => {
        const fetchImages = async() => {
            const response = await fetch(`https://api.unsplash.com/photos?page=1&per_page=${IMAGES_PER_PAGE}&client_id=CIvuLKpSZSlJunlMfJrAhi-P6wVskWQpDrXc_9U-O2w`)
            const data = await response.json()
            
            setImages(data)
            console.log(data)
        }
        fetchImages()
        
}, [])

const API_URL = 'https://api.unsplash.com/search/photos'


{
  
  const searchInput = useRef(null)

  

const fetchImages = async () => {
  try{
    setLoading(true)
    const response = await fetch(`${API_URL}?query=${searchInput.current.value}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=CIvuLKpSZSlJunlMfJrAhi-P6wVskWQpDrXc_9U-O2w`)
    const data = await response.json()
    setSearchResults(data.results)
    setImages(data.results)
    
    console.log(data.results)
    } catch(error){
      console.error('message:Error getting images:', error.message);
    }
}

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchInput.current.value)
    setLoading(true)
    fetchImages();
   
  };
  const handleSelection = (selection) => {
    searchInput.current.value = selection;
    setLoading(true)
    fetchImages();
    
  }

if (typeof window !== 'undefined') {
   // Retrieve the username from local storage when the component mounts
   const savedUsername = localStorage.getItem('username');
   
}

 
  
  const handleDragDrop = (results) => {
    const {source, destination, type} = results

    if(!destination) return;

    if(source.droppableId === destination.droppableId && source.index === destination.index
    )
      return;

      if (type === 'group'){
        const reorderedImages = [...images];

        const sourceIndex = source.index;
        const destinationIndex = destination.index;

        const [removedImage] = reorderedImages.splice(sourceIndex, 1);
        reorderedImages.splice(destinationIndex, 0, removedImage);

        return setImages(reorderedImages)
      }
  };

  // const handleDragDrop = (result) => {
  //   if (!result.destination) return;
  
  //   const reorderedImages = Array.from(images);
  //   const [movedImage] = reorderedImages.splice(result.source.index, 1);
  //   reorderedImages.splice(result.destination.index, 0, movedImage);
  
  //   setImages(reorderedImages);
  // };
  



   
  return (

    <div className='flex flex-col'>
        <div className='relative'>
        <button onClick={handleSignOut} className='absolute xsm:w-[80px] xsm:h-[36px]  lg:w-[150px] lg:h-[48px] bg-slate-500 hover:bg-red-500 hover:text-white text-white right-4 top-8 '>Sign Out</button>
        <h2 className='md:top-[20%] centered-name  absolute text-white lg:text-[50px] xsm:text-[40px]'>Welcome {name}</h2>
        <div className='centered-div absolute w-[100%] items-center flex justify-center'>
        <div className='flex flex-col items-center'>
      <div className='w-[100%] h-[50px] items-center flex flex-row justify-center gap-3'>
      <form onSubmit={handleSearch}>
        <input 
        className='px-3 lg:w-[300px] h-[38px] xsm:w-[160px] sm:w-[240px] border-none outline-none'
        type="search"
        ref={searchInput}
        placeholder='Search anything...' />
        <button type='submit' className='lg:w-[120px] xsm:w-[80px] h-[38px] bg-yellow-500'>Search</button>
        </form>
    </div>
      <div className='flex flex-rows  w-[100%] mt-4 xsm:gap-3 sm:gap-6 justify-center'>
        <button onClick={() => handleSelection('Minimal')} className='md:w-[70px] xsm:w-[50px] h-[36px] bg-purple-700 text-white rounded-md'>Minimal</button>
        <button onClick={() => handleSelection('Birds')} className='md:w-[70px] xsm:w-[50px] h-[36px] bg-purple-700 text-white rounded-md'>Birds</button>
        <button onClick={() => handleSelection('Cats')} className='md:w-[70px] xsm:w-[50px] h-[36px] bg-purple-700 text-white rounded-md'>Cats</button>
        <button onClick={() => handleSelection('nature')} className='md:w-[70px] xsm:w-[50px] h-[36px] bg-purple-700 text-white rounded-md'>Nature</button>
      </div>
  </div>
            </div>
            <div className='w-[100vw] '>
            <Image className='xsm:hidden md:block   ' src={bg} alt='bg'/>
            <Image className=' md:hidden w-[100%] h-[60vh] top-0 left-0  ' src={xsm} alt='bg'/>
            </div>
            
        </div>
        <div  className=' mt-8  '>
            
          <h2 className='md:text-[40px] xsm:text-[30px] font-bold ml-8'>Recommended for you</h2>
      <DragDropContext onDragEnd={handleDragDrop}>
        <Droppable droppableId="ROOT" type='group'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
        <div 
        className='mt-8 grid grid-cols-1 gap-y-10 gap-x-6  xsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 px-8'>
         
            
          {images ? (
           images.map((image, index) => (
           
             <Draggable draggableId={image.id} key={image.id} index={index}>
              {(provided) => (
              <div className='relative group' {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                 <div 
                 key={index} {...image} className=' item group aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8   w-full overflow-hidden rounded-lg bg-gray-200'>
                 <Image 
                 src={image.urls.small}
                 alt={image.name} 
                 priority={false}
                 layout='fill'
                 objectFit='cover'
                 className={cn('group-hover:opacity-75 duration-700 ease-in-out', 
                 isLoading 
                     ? 'grayscale blur-2xl scale-110'
                     : 'grayscale-0 blur-0 scale-100'
                 )}
                 onLoadingComplete={() => setLoading(false)}
                     />
             </div>
             
             <div className='hover:delay-75 hidden px-3 bg-[#00000091] absolute top-0 group-hover:flex items-center text-white h-[100%] w-[100%] text-[16px] rounded-lg '>
             <h2>{image.alt_description}</h2>
            </div>
            </div>
            )}
            </Draggable>)
          
           ))
          
             : 
            (

             searchResults.map((result, index) => (
              <div key={index} {...result} className="item group aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
                 
                <Image
                  src={result.urls.small}
                  alt={result.name}
                  priority={false}
                  layout="fill"
                  objectFit="cover"
                  className={cn('group-hover:opacity-75 duration-700 ease-in-out', 
                    isLoading 
                      ? 'grayscale blur-2xl scale-110'
                      : 'grayscale-0 blur-0 scale-100'
                  )}
                  onLoadingComplete={() => setLoading(false)}
                />
              </div>
            )))}
            
        </div>
        </div> )}
        
        </Droppable>
        </DragDropContext>
        <footer className='w-[100vw] h-[40vh] bg-black text-white mt-10 flex justify-center'>
            <article className='flex flex-col items-center justify-center md:gap-12 xsm:gap-6'>
                <div className='flex flex-row items-center md:text-[24px] xsm:text-[16px] md:gap-12 xsm:gap-6'>
                  <span>
                      <FaFacebookSquare/>
                  </span>
                  <span>
                      <FaInstagram/>
                  </span>
                  <span>
                      <FaTwitter/>
                  </span>
                  <span>
                      <FaYoutube/>
                  </span>
                </div>
                <div className='md:text-[24px] xsm:text-[12px] flex md:flex-row xsm:flex-col items-center  justify-center md:gap-4 xsm:gap-1'>
                  <p>Conditions of Use</p>
                  <p>Privacy & Policy</p>
                  <p>Press Room</p>
                </div>
                <p className='md:text-[24px] xsm:text-[12px]'>&copy; 2023 Image Gallery by Henry Mishael</p>
            </article>
        </footer>
    </div>
</div>







)
}}
export default HomePage


{/* <div className='flex flex-col'>
<div className='relative'>
<button onClick={handleSignOut} className='absolute w-[150px] h-[48px] bg-slate-500 hover:bg-red-500 hover:text-white text-white right-8 top-8 '>Sign Out</button>
<h2 className=' centered-name  absolute text-white text-[50px]'>Welcome {savedUsername}</h2>
<div className='centered-div absolute'>
<div className='flex flex-col items-center'>
<div className='w-[100%] h-[50px] items-center flex flex-row gap-3'>
<form onSubmit={handleSearch}>
<input 
className='px-3 w-[300px] h-[38px] border-none outline-none'
type="search"
ref={searchInput}
placeholder='Search anything...' />
<button type='submit' className='w-[120px] h-[38px] bg-yellow-500'>Search</button>
</form>
</div>
<div className='flex flex-rows justify-around w-[100%] mt-4'>
<button onClick={() => handleSelection('Minimal')} className='w-[70px] h-[36px] bg-purple-700 text-white rounded-md'>Minimal</button>
<button onClick={() => handleSelection('Birds')} className='w-[70px] h-[36px] bg-purple-700 text-white rounded-md'>Birds</button>
<button onClick={() => handleSelection('Cats')} className='w-[70px] h-[36px] bg-purple-700 text-white rounded-md'>Cats</button>
<button onClick={() => handleSelection('nature')} className='w-[70px] h-[36px] bg-purple-700 text-white rounded-md'>Nature</button>
</div>
</div>
    </div>
    <Image className='' src={bg}/>
    
</div>
<div  className=' mt-8 px-8 '>
    
  <h2 className='text-[40px] font-bold'>Recommended for you</h2>
<DragDropContext onDragEnd={onDragEnd}>
<Droppable droppableID="imageGrid" direction='horizontal'>
  {(provided) => (


<div {...provided.droppableProps} ref={provided.innerRef}
className='mt-8 grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8'>
 
    
  {images ? (
   images.map((image, index) => (
   
     <Draggable draggableId={index.toString} key={index} index={index}>
      {(provided) => (
      <div className='relative group' {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
         <div 
         key={index} {...image} className=' item group aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8   w-full overflow-hidden rounded-lg bg-gray-200'>
         <Image 
         src={image.urls.small}
         alt={image.name} 
         priority={false}
         layout='fill'
         objectFit='cover'
         className={cn('group-hover:opacity-75 duration-700 ease-in-out', 
         isLoading 
             ? 'grayscale blur-2xl scale-110'
             : 'grayscale-0 blur-0 scale-100'
         )}
         onLoadingComplete={() => setLoading(false)}
             />
     </div>
     
     <div className='hover:delay-75 hidden px-3 bg-[#00000091] absolute top-0 group-hover:flex items-center text-white h-[100%] w-[100%] text-[30px] rounded-lg '>
     <h2>{image.alt_description}</h2>
    </div>
    </div>
    )}
    </Draggable>)
  
   ))
  
     : 
    (

     searchResults.map((result, index) => (
      <div key={index} {...result} className="item group aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200 draggable-image">
         
        <Image
          src={result.urls.small}
          alt={result.name}
          priority={false}
          layout="fill"
          objectFit="cover"
          className={cn('group-hover:opacity-75 duration-700 ease-in-out', 
            isLoading 
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    )))}
    {provided.placeholder}
    
</div> )}
</Droppable>
</DragDropContext>
<footer className='w-[100%] h-[40vh] bg-black text-white mt-10 flex justify-center'>
    <article className='flex flex-col items-center justify-center md:gap-12 xsm:gap-6'>
        <div className='flex flex-row items-center md:text-[24px] xsm:text-[16px] md:gap-12 xsm:gap-6'>
          <span>
              <FaFacebookSquare/>
          </span>
          <span>
              <FaInstagram/>
          </span>
          <span>
              <FaTwitter/>
          </span>
          <span>
              <FaYoutube/>
          </span>
        </div>
        <div className='md:text-[24px] xsm:text-[12px] flex md:flex-row xsm:flex-col items-center  justify-center md:gap-4 xsm:gap-1'>
          <p>Conditions of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>
        <p className='md:text-[24px] xsm:text-[12px]'>&copy; 2023 Image Gallery by Henry Mishael</p>
    </article>
</footer>
</div>
</div> */}

