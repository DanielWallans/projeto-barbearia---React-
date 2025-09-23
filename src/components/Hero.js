import React from 'react';
import { motion } from 'framer-motion';
import { FaCut } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('agendamento');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="hero-icons"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FaCut className="hero-icon" />
              <FaCut className="hero-icon" />
            </motion.div>

            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Bem-vindo à <span className="highlight">Barbearia</span>
            </motion.h1>

            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Cortes modernos, barba alinhada e atendimento de primeira.
            </motion.p>

            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button 
                className="btn-primary hero-btn-primary"
                onClick={scrollToBooking}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Agende seu horário
              </motion.button>

              <motion.button 
                className="btn-secondary hero-btn-secondary"
                onClick={scrollToServices}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver serviços
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Clientes satisfeitos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Anos de experiência</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Qualidade garantida</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;