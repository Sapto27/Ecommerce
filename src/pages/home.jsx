// import React from "react";
import HeroSection from "../components/hero-section";
import Services from "../components/services";
import Trusted from "../components/trusted";

const Home = () => {
  const data ={
    name :"Swift Mart",
    description: "Your seamless destination for trendy fashion, cutting-edge gadgets, and secure, swift shopping. Elevate your lifestyle with us today!"
  }
  return<>
  <HeroSection myData={data}/>
  <Services/>
  <Trusted/>
  
  </> 
};



export default Home;