import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import DSA from '../components/Project/DSA';
import Animatedbg from '../components/AnimatedBG/Animatedbg';
import './projects.css';

const DSAPage = () => {
  return (
    <>
        <Animatedbg />
        <Header />
        <DSA />
        <Footer />
     
    </>
  )
}

export default DSAPage