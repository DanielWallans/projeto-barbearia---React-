import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebook, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock,
  FaCut,
  FaHeart
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      url: 'https://wa.me/5511999999999',
      color: '#d4af37'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://instagram.com/barbeariawallans',
      color: '#E4405F'
    },
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      url: 'https://facebook.com/barbeariawallans',
      color: '#1877F2'
    }
  ];

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Agendamento', href: '#agendamento' },
    { name: 'Localização', href: '#localizacao' }
  ];

  const services = [
    'Corte Masculino',
    'Barba Tradicional',
    'Corte + Barba',
    'Sobrancelha Masculina'
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+5511999999999';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:contato@barbeariawallans.com.br';
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Logo e Descrição */}
            <motion.div
              className="footer-section footer-brand"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="footer-logo">
                <FaCut className="logo-icon" />
                <h3>Barbearia</h3>
              </div>
              <p className="footer-description">
                Tradição e modernidade em cada corte. Sua satisfação é nossa prioridade.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={index}
                    className="social-link"
                    onClick={() => handleSocialClick(social.url)}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ '--social-color': social.color }}
                  >
                    {social.icon}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Links Rápidos */}
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4>Links Rápidos</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="footer-link"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Serviços */}
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>Nossos Serviços</h4>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="service-item">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contato */}
            <motion.div
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4>Contato</h4>
              <div className="contact-info">
                <motion.button
                  className="contact-item"
                  onClick={handlePhoneClick}
                  whileHover={{ x: 5 }}
                >
                  <FaPhone className="contact-icon" />
                  <span>(11) 99999-9999</span>
                </motion.button>
                
                <motion.button
                  className="contact-item"
                  onClick={handleEmailClick}
                  whileHover={{ x: 5 }}
                >
                  <FaEnvelope className="contact-icon" />
                  <span>contato@barbeariawallans.com.br</span>
                </motion.button>
                
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Rua das Flores, 123<br />Centro - São Paulo/SP</span>
                </div>
                
                <div className="contact-item">
                  <FaClock className="contact-icon" />
                  <span>Seg-Sex: 09h-19h<br />Sáb: 08h-17h</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Barbearia Wallans. Todos os direitos reservados.
            </p>
            <p className="made-with">
              Feito com <FaHeart className="heart-icon" /> para nossos clientes
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;