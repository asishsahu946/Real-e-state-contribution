import React from 'react'
import { image } from '../assets/images'
import  { useState } from "react";
import { FaArrowLeft } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"
import faq from '../assets/faq.js'

function Faq() {
    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () => {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', checkSize);
  
  return (
    <div className='bg-[#141414] text-[#ffffff]'>
    <div className='bg-[#141414] text-white py-12 md:py-0'>
      <img className='w-16 ml-5' src={image.starDesign} alt="" />
      <h1 className='text-[#ffffff] text-4xl font-semibold ml-5 mt-4'>Frequently Asked Questions</h1>
      <div className='flex justify-between mr-6'>
      <p className='text-[#999999] sm:font-medium md:font-semibold md:text-lg ml-6 mt-5 leading-7 mr-10'>Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
      <button className="h-full border border-gray-800 bg-[#191919] p-6 text-lg text-[#ffffff] rounded-xl sm:hidden md:block">View All FAQ's</button>
      </div>
    </div>
    {/* Testimonials cards */}
    <div className="mt-4">
      <div className="grid grid-cols-1 place-items-center md:grid-cols-3">
        {size < 768 ? 
      //On Mobile
          faq.slice(2).map((items) => {
            return (
              <div key={items.id} className="border border-gray-800 rounded-2xl p-10 w-[90%]">
               
               <h1 className='text-xl md:text-2xl font-semibold mt0'>{items.heading}</h1>
               <p className='mt-3 text-[#999999]'>{items.paragraph}</p>
              <button className='mt-8 bg-[#191919] border border-gray-800 rounded-xl w-full py-4 font-semibold text-lg'>Read More</button>
              </div>
            );
          }) 
          : 
          // On desktop
          faq.map((items) => {
            return (
              <div key={items.id} className=" grid grid-cols-1 mx-14 md:mx-8 border border-gray-800 rounded-2xl p-10 h-full max-w-[500px]">
                
               <h1 className='text-xl md:text-2xl font-semibold mt-6'>{items.heading}</h1>
               <p className='mt-3 text-[#999999]'>{items.paragraph}</p>
               <button className='mt-8 bg-[#191919] border border-gray-800 rounded-xl w-full md: md:max-w-[200px] py-4 font-semibold text-lg'>Read More</button>
              </div>
            );
          }) 
          
        }
      </div>
        <hr className="w-[97%] mx-auto border-2 border-gray-800 mt-12" />
        {/* Testimonials Bottom section */}
      <div>
        {size < 768 ?
          //mobile
           <div className="mt-9 flex justify-between mx-[3%] sm:visible md:hidden">
           <div>
           <button className="h-full border border-gray-800 bg-[#191919] p-6 text-lg text-[#ffffff] rounded-xl">View All Testimonials</button>
           </div>
         <div className="flex items-center justify-center gap-5">
         <button className="border border-gray-800 p-6 rounded-full"><FaArrowLeft /></button>
            <h1 className="text-lg">01 of 10</h1>
        <button className="border border-gray-800 p-6 rounded-full"><FaArrowRight /></button>
         </div>
          </div>
          :
  // desktop
          <div className="flex justify-between items-center mx-[5%] mt-5">
            <h1 className="text-xl">01 of 10</h1>
            <div className="flex items-center justify-center gap-5">
         <button className="border border-gray-800 p-6 rounded-full"><FaArrowLeft /></button>
        <button className="border border-gray-800 p-6 rounded-full"><FaArrowRight /></button>
         </div>
          </div>
        }
       
      </div>
    </div>
    </div>
  )
}

export default Faq