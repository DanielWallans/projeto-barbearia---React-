import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp, FaDirections } from 'react-icons/fa';
import './Location.css';

const Location = () => {
  const address = {
    street: 'Rua das Flores, 123',
    neighborhood: 'Centro',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01234-567'
  };

  const phone = '(11) 99999-9999';
  const whatsappNumber = '5511999999999';

  const schedule = [
    { day: 'Segunda-feira', hours: '09:00 - 19:00' },
    { day: 'Terça-feira', hours: '09:00 - 19:00' },
    { day: 'Quarta-feira', hours: '09:00 - 19:00' },
    { day: 'Quinta-feira', hours: '09:00 - 19:00' },
    { day: 'Sexta-feira', hours: '09:00 - 19:00' },
    { day: 'Sábado', hours: '08:00 - 17:00' },
    { day: 'Domingo', hours: 'Fechado' }
  ];

  const handleDirectionsClick = () => {
    const fullAddress = `${address.street}, ${address.neighborhood}, ${address.city}, ${address.state}, ${address.zipCode}`;
    const encodedAddress = encodeURIComponent(fullAddress);
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phone.replace(/\D/g, '')}`;
  };

  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de mais informações sobre a Barbearia Wallans.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Coordenadas de exemplo (substitua pelas coordenadas reais)
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6333824!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzgnMDAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr`;

  return (
    <section id="localizacao" className="location-section">
      <div className="container">
        <motion.div
          className="location-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nossa Localização
          </motion.h2>
          
          <motion.p 
            className="location-note"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <strong>Nota:</strong> Este endereço é fictício, criado apenas para fins de demonstração deste projeto exemplo.
          </motion.p>
          
          <p className="section-subtitle">
            Venha nos visitar e conheça nosso espaço
          </p>
        </motion.div>

        <div className="location-content">
          <motion.div
            className="location-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="address-card">
              <div className="card-header">
                <FaMapMarkerAlt className="card-icon" />
                <h3>Endereço</h3>
              </div>
              <div className="address-details">
                <p>{address.street}</p>
                <p>{address.neighborhood} - {address.city}/{address.state}</p>
                <p>CEP: {address.zipCode}</p>
                <small style={{color: '#888', fontSize: '0.8rem'}}>*Endereço fictício para demonstração</small>
              </div>
              <motion.button
                className="directions-btn"
                onClick={handleDirectionsClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDirections />
                Como Chegar
              </motion.button>
            </div>

            <div className="schedule-card">
              <div className="card-header">
                <FaClock className="card-icon" />
                <h3>Horários de Funcionamento</h3>
              </div>
              <div className="schedule-list">
                {schedule.map((item, index) => (
                  <div key={index} className="schedule-item">
                    <span className="day">{item.day}</span>
                    <span className={`hours ${item.hours === 'Fechado' ? 'closed' : ''}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-card">
              <div className="card-header">
                <FaPhone className="card-icon" />
                <h3>Contato</h3>
              </div>
              <div className="contact-buttons">
                <motion.button
                  className="contact-btn phone-btn"
                  onClick={handlePhoneClick}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhone />
                  {phone}
                </motion.button>
                <motion.button
                  className="contact-btn whatsapp-btn"
                  onClick={handleWhatsAppClick}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp />
                  WhatsApp
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="location-map"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="map-container">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Barbearia Wallans"
              ></iframe>
              <div className="map-overlay">
                <div className="map-info">
                  <h4>Barbearia Wallans</h4>
                  <p>{address.street}</p>
                  <p>{address.neighborhood} - {address.city}/{address.state}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="location-features"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="feature-item">
            <div className="feature-icon"></div>
            <h4>Estacionamento</h4>
            <p>Vagas disponíveis na rua</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"></div>
            <h4>Transporte Público</h4>
            <p>Próximo ao metrô e pontos de ônibus</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"></div>
            <h4>Acessibilidade</h4>
            <p>Local adaptado para todos</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"></div>
            <h4>Wi-Fi Gratuito</h4>
            <p>Internet liberada para clientes</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;