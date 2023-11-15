import React from 'react'
import HeroSection from '../components/HeroSection';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer"
import Project from "../components/Project/Project";
import AboutUs from "../components/AboutUs/AboutUs";

const Home = () => {
  return (
    <>
       <Header/>
       <HeroSection/>
       <AboutUs/>
       <Project/>
       <Footer/>
    </>
    
  )
}

export default Home;