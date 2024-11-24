import React, { useState } from "react";
import { property } from "../assets/propertyAssets";
import { FaArrowLeft } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"

function PropertyCard() {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  }
  window.addEventListener('resize', checkSize);

  return (
    <div className="mt-14">
      <div className="grid grid-cols-1 place-items-center md:grid-cols-3">
        {size < 768 ? 
      //On Mobile
          property.slice(2).map((items) => {
            return (
              <div key={items.id} className="border border-gray-800 rounded-2xl p-10 w-[90%]">
                <img className="mx-auto w-full" src={items.propertyImage} alt="" />
                <h1 className="text-[#ffffff] font-semibold text-2xl mt-4">{items.propertyName}</h1>
                <p className="text-[#999999] mt-2 text-wrap text-lg">{items.propertyDetails}</p>
                <div className="flex flex-wrap gap-4 text-center mt-3">
                <div className="border border-gray-800 rounded-3xl bg-[#191919] px-3 py-2 flex flex-wrap gap-1"> <img src={items.bedlogo} alt="" /> {items.propertyKeyFeatures1}</div>
                <div className="border border-gray-800 rounded-3xl bg-[#191919] px-3 py-2 flex flex-wrap gap-1"> <img src={items.bathroomlogo} alt="" /> {items.propertyKeyFeatures2}</div>
                <div className="border border-gray-800 rounded-3xl bg-[#191919] px-3 py-2 flex flex-wrap gap-1"> <img src={items.villalogo}  alt="" /> {items.propertyKeyFeatures3}</div>
                </div>
                <div>
                  <div className="flex justify-between mt-8">
                    <div>
                    <p className="text-[#999999] text-lg font-semibold">Price</p>
                    <h1 className="text-[#ffffff] text-3xl font-semibold mt-2">{items.propertyPrice}</h1>
                    </div>
                    <div>
                  <button className="bg-[#703bf7] hover:bg-[#1a64ff] h-full px-10 rounded-xl text-lg">View Property Details</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }) 
          : 
          // On desktop
          property.map((items) => {
            return (
              <div key={items.id} className=" grid grid-cols-1 border border-gray-800 rounded-2xl p-10 h-full">
                <div>

                <img className="mx-auto w-full" src={items.propertyImage} alt="" />
                <h1 className="text-[#ffffff] font-semibold text-3xl mt-4">{items.propertyName}</h1>
                
                <p className="text-[#999999] mt-2 text-wrap text-lg">{items.propertyDetails}</p>
                
                </div>
                <div className="flex flex-wrap gap-4 text-center mt-3">
                <div className="border border-gray-800 rounded-3xl bg-[#191919] px-3 py-2 flex flex-wrap gap-1"> <img src={items.bedlogo} alt="" /> {items.propertyKeyFeatures1}</div>
                <div className="border border-gray-800 rounded-3xl bg-[#191919] px-3 py-2 flex flex-wrap gap-1"> <img src={items.bathroomlogo} alt="" /> {items.propertyKeyFeatures2}</div>
                <div className="border border-gray-800 rounded-3xl bg-[#191919] px-3 py-2 flex flex-wrap gap-1"> <img src={items.villalogo}  alt="" /> {items.propertyKeyFeatures3}</div>
                </div>
                <div className="flex justify-between mt-8">
                    <div>
                    <p className="text-[#999999] text-lg font-semibold">Price</p>
                    <h1 className="text-[#ffffff] text-3xl font-semibold mt-2">{items.propertyPrice}</h1>
                    </div>
                    <div>
                  <button className="bg-[#703bf7] hover:bg-[#1a64ff] h-full  rounded-xl text-lg md:px-2 lg:px-5 lx:px-10">View Property Details</button>
                    </div>
                  </div>
              </div>
            );
          }) 
          
        }
      </div>
        <hr className="w-[97%] mx-auto border-2 border-gray-800 mt-12" />
      <div>
        {size < 768 ?
          //mobile
           <div className="mt-9 flex justify-between mx-[3%] sm:visible md:hidden">
           <div>
           <button className="h-full border border-gray-800 bg-[#191919] p-6 text-lg text-[#ffffff] rounded-xl">View All Properties</button>
           </div>
         <div className="flex items-center justify-center gap-5">
         <button className="border border-gray-800 p-6 rounded-full"><FaArrowLeft /></button>
            <h1 className="text-lg">01 of 60</h1>
        <button className="border border-gray-800 p-6 rounded-full"><FaArrowRight /></button>
         </div>
          </div>
          :
  // desktop
          <div className="flex justify-between items-center mx-[5%] mt-5">
            <h1 className="text-xl">01 of 60</h1>
            <div className="flex items-center justify-center gap-5">
         <button className="border border-gray-800 p-6 rounded-full"><FaArrowLeft /></button>
        <button className="border border-gray-800 p-6 rounded-full"><FaArrowRight /></button>
         </div>
          </div>
        }
       
      </div>
    </div>
  );
}

export default PropertyCard;