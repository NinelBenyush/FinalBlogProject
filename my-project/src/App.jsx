import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes   } from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Routes >
        <Route path="/" element={<Hero/>} />
        </Routes >
      </div>
      <Footer />
    </div>
     </Router>
  )
}

export default App
