// import React from 'react'

import HeroSection from "../components/hero-section"

 const About = () => {
  const data = {
    name : "Swift Store",
    description: "At SwiftMart, we strive to provide an exceptional online shopping experience. With a carefully curated collection of fashion, gadgets, and more, we aim to elevate your lifestyle. Our commitment to quality, security, and customer satisfaction drives us to deliver excellence. Join us on this shopping journey and discover the joy of SwiftMart. Happy shopping!"
  }
  return (
    <HeroSection myData={data}/>
  )
}
export default About
