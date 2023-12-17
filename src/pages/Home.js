import React from 'react'
import HeroSection from '../components/HeroSection';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
// import Event from "../components/Event/Event";
import AnimeComponent from '../components/AnimeComponent/AnimeComponent';
import FAQs from '../components/FAQs/FAQs';
import AboutUs from "../components/AboutUs/AboutUs";
import TimeLine from '../components/TimeLine';
import Animatedbg from '../components/AnimatedBG/Animatedbg';

const Home = () => {
  return (
    <>
      <Animatedbg/>
       <Header/>
       <HeroSection/>
       <AboutUs/>
       {/* <Event/> */}
       <AnimeComponent/>
       <TimeLine/>
       <FAQs/>
       <Footer/>
    </>
    
  )
}

export default Home;