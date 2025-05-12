import { useState } from "react";
import Home from './components/Home';
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Philosophy from "./components/Philosophy";
import Portfolio from './components/Portfolio';
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './App.css';
function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      {showNavbar && <Navbar />}
      <Home onVisibleChange={(visible) => setShowNavbar(!visible)} />
      <Philosophy />
      <Services />
      <Benefits />
      <Portfolio />
      <Testimonials />
      <Blog />
      <FAQ />
      <LandingPage />
      <Footer />
    </>
  );
}

export default App;



