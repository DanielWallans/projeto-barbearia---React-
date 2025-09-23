import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Booking from './components/Booking';
import Location from './components/Location';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Booking />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;