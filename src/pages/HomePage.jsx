import React from "react";
import HeroSection from "../components/HeroSection";
import Properties from "../components/Properties";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Cta from "../components/Cta";

import FooterSec from "../components/Footer";


function HomePage() {
  
  return (
    <>
    <HeroSection/>
    <Properties/>
    <Testimonials/>
    <Faq/>
    <Cta/>
    <FooterSec/>
    </>
  );
}

export default HomePage;
