import React from 'react'

function Cta() {
  return (
    <div className='bg-[#141414] pt-16 pb-14 '>
        <hr className=" mx-auto border-1 border-gray-800" />
        <div className='md:flex justify-between mx-6'>

        <div className='md:mr-[100px] mr-[10px]'>
        <h1 className='text-[#ffffff] pl-5 pt-14 text-3xl md:mr-[200px] leading-relaxed'>Start Your Real Estate Journey Today</h1>
        <p className='text-[#999999] pl-5  mt-2'>
        Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
        </p>
        </div>
        <div className='flex justify-center items-center'>
            <button className='text-[#ffffff] bg-[#703bf7] p-4 w-[94%] rounded-xl mt-8 md:w-max'>Explore Properties</button>
        </div>
        </div>
    </div>
  )
}

export default Cta