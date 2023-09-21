import React, { useEffect, useRef } from 'react'

const API_URL = 'https://api.unsplash.com/search/photos'

const IMAGES_PER_PAGE = 20
const SearchField = () => {
  
  const searchInput = useRef(null)

  

const fetchImages = async () => {
  try{
    const response = await fetch(`${API_URL}?query=${searchInput.current.value}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=CIvuLKpSZSlJunlMfJrAhi-P6wVskWQpDrXc_9U-O2w`)
    const data = await response.json()
    
    
    console.log(data.results)
    } catch(error){
      console.error('message:Error getting images:', error.message);
    }
}

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchInput.current.value)
    fetchImages();
  };
  const handleSelection = (selection) => {
    searchInput.current.value = selection;
    fetchImages();
  }
  

  return (
    
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
  )
}

export default SearchField