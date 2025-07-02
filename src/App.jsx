import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from './components/Services';
import DataSolutionHero from './components/Data';
import VisionMission from './components/VisionMission';
import CompanyInfo from './components/CompanyInfo';


import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Services />
      <DataSolutionHero />
      <VisionMission/>
      <CompanyInfo />
    </div>
  );
}

export default App;
