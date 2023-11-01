// import React from "react";
import FeatureProduct from "../components/featured-product";
import HeroSection from "../components/hero-section";
import Services from "../components/services";
import Trusted from "../components/trusted";

const Home = () => {
  const data ={
    name :"Swift Mart",
    description: "Your seamless destination for trendy fashion, cutting-edge gadgets, and secure, swift shopping. Elevate your lifestyle with us today!"
  }


//  const featureProducts = products?.filter((m)=>m?.featured)



  return<>
  

  <HeroSection myData={data}/>
  <FeatureProduct/>
  <Services/>
  <Trusted/>
  
  
  </> 
};



export default Home;