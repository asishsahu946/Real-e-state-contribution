import React from 'react'
import { image } from '../assets/images'
import PropertyCard from './PropertyCard'

function Properties() {
  return (
    <div className='bg-[#141414] text-white py-12'>
      <img className='w-16 ml-5' src={image.starDesign} alt="" />
      <h1 className='text-[#ffffff] text-5xl font-semibold ml-5 mt-4'>Featured Properties</h1>
      <div className='flex justify-between mr-6'>
      <p className='text-[#999999] sm:font-medium md:font-semibold md:text-lg ml-6 mt-5 leading-7 mr-10'>Explore our handpicked selection of featured properties. Each listing offer a glimpse into exceptional homes and investments available through Estatein</p>
      <button className="h-full border border-gray-800 bg-[#191919] p-6 text-lg text-[#ffffff] rounded-xl sm:hidden md:block">View All Properties</button>
      </div>
      <PropertyCard/>
    </div>
  )
}

export default Properties