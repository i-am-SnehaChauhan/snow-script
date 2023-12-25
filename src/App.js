import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Prizes from './pages/Prizes';
import Projects from './pages/Projects';
import WebDPage from './pages/WebDPage';
import AppDPage from './pages/AppDPage';
import ARVRPage from './pages/ARVRPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prizes" element={<Prizes />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/webD" element={<WebDPage />} />
        <Route path="/projects/appD" element={<AppDPage/>} />
        <Route path="/projects/arvr" element={<ARVRPage/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
    </Router>

  )
}

export default App