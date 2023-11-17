import React from 'react'
import HeroSection from '../components/HeroSection';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer"
import Project from "../components/Project/Project";
import FAQs from '../components/FAQs/FAQs';
import AboutUs from "../components/AboutUs/AboutUs";

const Home = () => {
  return (
    <>
       <Header/>
       <HeroSection/>
       <AboutUs/>
       <Project/>
       <FAQs/>
       <Footer/>
    </>
    
  )
}

export default Home;