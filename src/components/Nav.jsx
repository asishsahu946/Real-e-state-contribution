import React from 'react'
import { Button, Navbar } from "flowbite-react";
import { image } from '../assets/images';
import { NavLink, useNavigate } from "react-router-dom";

function Nav() {
 const navigate = useNavigate()
  return (
    <Navbar fluid  className='bg-[#191919] text-white sticky top-0 z-50'>
    <Navbar.Brand onClick={() => navigate('/')} className='cursor-pointer' >
      <img src={image.logo} className="mr-3 h-6 md:h-12 md:w-[190px] pl-2 " alt="" />
    </Navbar.Brand>
    <div className="flex lg:order-2">
      <Button onClick={() => navigate('/contact')} className='border border-white font-semibold md:font-extrabold hover:bg-[#703bf7] hidden xl:block md:px-6 md:py-2 md:text-2xl' color="">Contact Us</Button>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link active>
      <NavLink to="/" className='text-white font-bold text-lg md:text-xl md:px-1'>Home</NavLink>
      </Navbar.Link>
      <Navbar.Link><NavLink to="/about" className='text-white font-bold text-lg md:text-xl md:px-1'>About Us</NavLink></Navbar.Link>
      <Navbar.Link><NavLink to="/properties" className='text-white font-bold text-lg md:text-xl md:px-1'>Properties</NavLink></Navbar.Link>
      <Navbar.Link><NavLink to="/services" className='text-white font-bold text-lg md:text-xl md:px-1'>Services</NavLink></Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Nav