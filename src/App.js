import Hero from './components/Hero';
import Results from "./components/Results-page";
import Footer from './components/Footer';
import './App.css';
import Body from "./components/body";

function App() {
  return (
    <div className="App">
      <Hero />
      <Results/>
      <Body/>

      <Footer />
    </div>

  );
}

export default App;
