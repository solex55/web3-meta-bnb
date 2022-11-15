import React from 'react'

function Hero() {
  return (
    <header className='flex items-center justify-between gap-12 px-12 sm:px-24 py-12 mb-24 flex-col xl:flex-row'>
        <div className='flex flex-col gap-5 w-full xl:w-3/5'>
          <h1 className='text-3xl sm:text-[56px] text-[#434343] hero-head'>Rent a <span className='text-purple font-bold'>Place</span> away from <span className='text-purple font-bold'>Home</span> in the <span className='text-purple font-bold'>Metaverse</span></h1>
          <p className=' w-11/12 sm:text-2xl text-[#434343]'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
          
          <div className='border flex rounded-md overflow-hidden'>
                  <input type="text" placeholder='Search for location' className="w-full px-4 py-4 text-[
                #B8B8B8]  basis-2/3" />
                  <button className='bg-purple border-transparent py-4 px-4 basis-1/3 text-white w-48  hover:opacity-75'>Search</button>
                </div>
        </div>
        <div className=' w-full xl:w-2/5 xl:block'>
        <img src="img/hero-img.png" alt="" className='object-contain w-full'/>
        </div>
    </header>
  )
}

export default Hero