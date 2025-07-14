import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import MobileMenu from './Components/MobileMenu';
import Hero from './Components/Hero';
import About from './Components/About';
import Team from './Components/Team';
import Vehicles from './Components/Vehicles';
import Projects from './Components/Projects';
import Sponsors from './Components/Sponsors';
import News from './Components/News';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import JoinModal from './Components/JoinModal';
import './App.css';


function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  
  const [modalOpen, setModalOpen] = useState(false);

  

  return (
    <div className="App">

      <Navbar onMenuToggle={() => setMenuOpen(true)} />

      {/* Mobile navigation menu (shown only on small screens) */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Website Sections */}
      <Hero />
      <About />
      <News />
      <Vehicles />
      <Projects />
      <Sponsors />
      <Team />
      <Contact />
      <Footer />

      {/* Join Team Modal (optional trigger) */}
      <JoinModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
