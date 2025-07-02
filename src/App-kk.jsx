import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from './components/Services';
import DataSolutionHero from './components/Data';
import "./index.css";

function App() {
  return (
    <div className="min-h-screen  font-sans">
      <Navbar />
      <Hero />
      <Services />
      <DataSolutionHero />
    </div>
  );
}

export default App;
