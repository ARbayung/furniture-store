import Results from "./components/Results-page";
import Footer from './components/Footer';
import Navbar from "./components/Navbar"
import './components/Navbar.css'
import './App.css';
import Body from "./components/body";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Results/>
      <Body/>

      <Footer />
    </div>

  );
}

export default App;
