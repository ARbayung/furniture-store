import Hero from './components/Hero';
import Results from "./components/Results-page";
import Footer from './components/Footer';
import Navbar from "./components/Navbar"
import './components/Navbar.css'
import './App.css';
import Body from "./components/body";
import Landing from './components/Landing';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
           <Route path='/Landing' element={<Landing/>} /> 
          <Route path='/Results' element={<Results/>} /> 
        </Routes>
      </div>
      <Footer/>
    </div>

  );
}

export default App;
