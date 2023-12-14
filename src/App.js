import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Prizes from './pages/Prizes';
import Projects from './pages/Projects';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prizes" element={<Prizes />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
    </Router>

  )
}

export default App