import Results from "./components/Results-page";
import Footer from './components/Footer';
import Navbar from "./components/Navbar"
import './components/Navbar.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Results/>

      <Footer />
    </div>

  );
}

export default App;
