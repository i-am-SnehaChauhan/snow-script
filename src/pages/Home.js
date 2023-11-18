import React from 'react'
import HeroSection from '../components/HeroSection';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
import Event from "../components/Event/Event";
import Contribute from "../components/Contribution/contribute";
import Project from "../components/Project/Project";
import FAQs from '../components/FAQs/FAQs';
import AboutUs from "../components/AboutUs/AboutUs";

const Home = () => {
  return (
    <>
       <Header/>
       <HeroSection/>
       <AboutUs/>
       <Event/>
       <Contribute/>
       <Project/>
       <FAQs/>
       <Footer/>
    </>
    
  )
}

export default Home;