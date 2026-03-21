import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Events from "./sections/Events";
import Venue from "./sections/Venue";
import Footer from "./sections/Footer";
import Gallery from './sections/Gallery';
import FAQ from './sections/FAQ';
import Intro from './components/Intro.jsx';
import "./App.css";

function App() {

  return (
    
    <div className="realm-container">
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <Events />
        <Gallery />
        <Venue />
      </main>
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;