import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from './components/pages/home';
import About from './components/pages/about';
import Navbar from './components/pages/subcomponents/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/#contact-us"/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
