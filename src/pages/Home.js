import React from 'react'
import HeroSection from '../components/HeroSection';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer"
import Project from "../components/Project/Project";

const Home = () => {
  return (
    <>
       <Header/>
       <HeroSection/>
       <Project/>
       <Footer/>
    </>
    
  )
}

export default Home;