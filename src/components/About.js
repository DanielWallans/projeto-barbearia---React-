import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaClock, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    {
      icon: <FaUsers />,
      number: '500+',
      label: 'Clientes Satisfeitos'
    },
    {
      icon: <FaAward />,
      number: '5+',
      label: 'Anos de Experiência'
    },
    {
      icon: <FaClock />,
      number: '24h',
      label: 'Agendamento Online'
    },
    {
      icon: <FaHeart />,
      number: '100%',
      label: 'Satisfação Garantida'
    }
  ];

  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="about-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Sobre a Barbearia
            </motion.h2>
            
            <motion.p 
              className="about-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <strong>Nota:</strong> Este é um projeto exemplo desenvolvido para demonstração de habilidades em desenvolvimento web. 
              A Barbearia é uma marca fictícia criada para fins educacionais e de portfólio.
            </motion.p>
            
            <motion.p 
              className="about-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Nossa barbearia combina tradição e modernidade, oferecendo serviços de qualidade 
              em um ambiente acolhedor e sofisticado. Cada corte é uma obra de arte, 
              cada cliente é tratado com excelência.
            </motion.p>
              
            <div className="about-values">
              <h3>Nossos Valores</h3>
              <ul>
                <li>
                  <strong>Qualidade:</strong> Utilizamos apenas produtos premium e técnicas refinadas
                </li>
                <li>
                  <strong>Tradição:</strong> Respeitamos a arte clássica da barbearia
                </li>
                <li>
                  <strong>Inovação:</strong> Sempre atualizados com as últimas tendências
                </li>
                <li>
                  <strong>Excelência:</strong> Cada detalhe importa para nós
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="image-container">
              <div className="team-photo">
                {/* Placeholder para foto da equipe - usando SVG */}
                <svg viewBox="0 0 400 300" className="team-svg">
                  <defs>
                    <linearGradient id="teamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d4af37" />
                      <stop offset="100%" stopColor="#f4e4a6" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="300" fill="#1a1a1a" />
                  <rect x="50" y="50" width="300" height="200" fill="url(#teamGrad)" opacity="0.1" />
                  <circle cx="150" cy="120" r="30" fill="#d4af37" opacity="0.3" />
                  <circle cx="250" cy="120" r="30" fill="#d4af37" opacity="0.3" />
                  <rect x="120" y="160" width="60" height="80" fill="#d4af37" opacity="0.2" />
                  <rect x="220" y="160" width="60" height="80" fill="#d4af37" opacity="0.2" />
                  <text x="200" y="280" textAnchor="middle" fill="#d4af37" fontSize="16" fontWeight="bold">
                    Nossa Equipe
                  </text>
                </svg>
              </div>
              
              <div className="image-overlay">
                <h4>Profissionais Experientes</h4>
                <p>Equipe dedicada ao seu visual perfeito</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-content">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;