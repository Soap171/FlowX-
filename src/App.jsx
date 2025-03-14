import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RealTimeFloodAnalysis from "./components/RealTimeFloodAnalysis";
import FloodImpactPrediction from "./components/FloodImpactPrediction";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <RealTimeFloodAnalysis />
      <FloodImpactPrediction />
      <Services />
      <AboutUs />
      <Contact />
    </>
  );
}

export default App;
