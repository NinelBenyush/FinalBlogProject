import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Routes   } from 'react-router-dom';

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => {
        console.log('Data from  API:' + data.message);
      })
      .catch(error => {
      });
  }, []);

  return (
    <Router>
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Routes >
        <Route path="/" element={<Hero/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        </Routes >
      </div>
      <Footer />
    </div>
     </Router>
  )
}

export default App
