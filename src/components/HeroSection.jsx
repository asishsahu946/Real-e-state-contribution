import React from 'react'
import { image } from "../assets/images";
import { bottomPart, leftPart } from "../assets/homeAssets";

function HeroSection() {
  return (
    <div className="bg-[#141414] text-[#ffffff] pb-10">
        
      <div className="flex flex-col-reverse md:flex-row md:justify-between flex-shrink">

        {/* Left Section */}
        <div className="pt-28 px-7">
          <h1 className="text-5xl font-semibold leading-tight md:pr-16">
            Discover Your Dream <br /> Property with Estatein
          </h1>
          <p className="mt-9 text-xl text-[#999999] ">
            Your journey to finding the perfect property begins here. Explore
            our listing to find the home that matches your dreams.
          </p>
          <div className="md:flex md:gap-6 md:mt-7 justify-start md:pr-60">
          <button className="block border-2 border-gray-800 mx-auto py-4 w-full rounded-xl hover:bg-gray-800 mt-14 md:mt-0 ">Learn More</button>
          <button className="block mt-5 mx-auto py-4 w-full rounded-xl bg-[#703bf7] hover:bg-[#1a64ff] md:mt-0">Browse Properties</button>
          </div>

          <div>
            <div className="grid grid-cols-2 mt-12 gap-5 lg:grid-cols-3">
              {
                leftPart.map((item ,index) => 
                   <>
                   <div className={`${index === 2 ? "col-span-2 lg:col-span-1" : ""} border border-gray-800 bg-[#191919] rounded-xl text-center py-9`}>
                   <h1 className="text-3xl font-bold">{item.heading}</h1>
                   <p className="mt-4 text-[#999999]">{item.paragraph}</p>
                   </div>
                   </>
                )
              }
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="pt-14 px-8 md:px-0 md:pt-0 relative">
            <img className=" rounded-3xl md:rounded-none md:min-h-full md:min-w-[500px] " src={image.heroImage} alt=""/>
            {/* <img className="z" src={image.backgroundImage} alt="" /> */}
            <img className="absolute w-[142px] -bottom-10 md:top-[48px] md:left-[-90px] md:w-[180px]" src={image.centerImage} alt="" />
        </div>
      </div>

      {/* Button Section */}
      <div className="border border-gray-800 home-button-shadow rounded-2xl mx-6 grid grid-cols-2 lg:grid-cols-4 gap-3 mt-14 p-4">
              {
                bottomPart.map((item) => 
                <>
                  <div className="bg-[#191919] border border-gray-800 rounded-xl flex flex-col justify-center items-center py-9 relative">
                <img src={item.img} alt="" />
                <span className="text-5xl text-[#4c4c4c] absolute top-2 right-[15px] hover:text-white cursor-pointer ">&#8599;</span>
                <p className="mt-4 text-center text-lg font-semibold px-2">{item.paragraph}</p>
                  </div>

                </>
                )
              }
      </div>
    </div>
  )
}

export default HeroSection