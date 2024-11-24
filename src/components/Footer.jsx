import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function FooterSec() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-5 sm:gap-6">
            <div>
              <Footer.Title title="Home" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Hero Section</Footer.Link>
                <Footer.Link href="#">Features</Footer.Link>
                <Footer.Link href="#">Properties</Footer.Link>
                <Footer.Link href="#">Testimonials</Footer.Link>
                <Footer.Link href="#">FAQ's</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="About us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Our Story</Footer.Link>
                <Footer.Link href="#">Our Works</Footer.Link>
                <Footer.Link href="#">How It Works</Footer.Link>
                <Footer.Link href="#">Our Team</Footer.Link>
                <Footer.Link href="#">Our Clints</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Properties" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Portfolio</Footer.Link>
                <Footer.Link href="#">Categories</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Services" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Valuation Mastery</Footer.Link>
                <Footer.Link href="#">Strategic Marketing</Footer.Link>
                <Footer.Link href="#">Negotiation Wizardry</Footer.Link>
                <Footer.Link href="#">Closing Success</Footer.Link>
                <Footer.Link href="#">Property Management</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Contact From</Footer.Link>
                <Footer.Link href="#">Our Office</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default FooterSec