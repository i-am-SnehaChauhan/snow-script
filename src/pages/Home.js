import React from 'react'
import HeroSection from '../components/HeroSection';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer"
import Project from "../components/Project/Project";
import FAQs from '../components/FAQs/FAQs';

const Home = () => {
  return (
    <>
       <Header/>
       <HeroSection/>
       <Project/>
       <FAQs/>
       <Footer/>
    </>
    
  )
}

export default Home;