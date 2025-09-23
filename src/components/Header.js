import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToBooking = () => {
    const element = document.getElementById('agendamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '5511999999999'; // Substitua pelo número real
    const message = 'Olá! Gostaria de agendar um horário na Barbearia.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h1>Barbearia</h1>
          </motion.div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li>
                <a href="#inicio" onClick={() => scrollToSection('inicio')}>
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={() => scrollToSection('servicos')}>
                  Serviços
                </a>
              </li>
              <li>
                <a href="#precos" onClick={() => scrollToSection('precos')}>
                  Preços
                </a>
              </li>
              <li>
                <a href="#contato" onClick={() => scrollToSection('contato')}>
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <motion.button 
              className="whatsapp-btn header-booking-btn"
              onClick={scrollToBooking}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agende seu horário
            </motion.button>

            <button 
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;