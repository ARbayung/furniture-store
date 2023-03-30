<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import About  from ./components/About;
import Team from ./components/Team;
=======
import Hero from './components/Hero';
import Results from "./components/Results-page";
import Footer from './components/Footer';
import Navbar from "./components/Navbar"
import './components/Navbar.css'
import './App.css';
import Body from "./components/body";
import Landing from './components/Landing';
import { Route, Routes } from 'react-router';
>>>>>>> b689691579cfe024f427b56bb8c8b59dedd708c3

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </header>
=======
      <Navbar />
      <div>
        <Routes>
           <Route path='/Landing' element={<Landing/>} /> 
          <Route path='/Results' element={<Results/>} /> 
        </Routes>
      </div>
      <Footer/>
>>>>>>> b689691579cfe024f427b56bb8c8b59dedd708c3
    </div>

  );
}

export default App;
