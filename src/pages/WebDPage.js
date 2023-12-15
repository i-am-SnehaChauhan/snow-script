import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import WebD from '../components/Project/WebD';
import Animatedbg from '../components/AnimatedBG/Animatedbg';
import './projects.css';


const WebDPage = () => {
  return (
    <>
      <Animatedbg />
      <Header />
      <WebD />
      <Footer />
    </>
  )
}

export default WebDPage;