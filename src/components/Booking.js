import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: ''
  });

  const services = [
    'Corte Masculino',
    'Barba Tradicional',
    'Corte + Barba',
    'Sobrancelha Masculina'
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppBooking = () => {
    const phoneNumber = '5511999999999'; // Substitua pelo número real
    const message = `Olá! Gostaria de agendar um horário na Barbearia Wallans.

*Dados do agendamento:*
Nome: ${formData.name}
Telefone: ${formData.phone}
Email: ${formData.email}
Serviço: ${formData.service}
Data: ${formData.date}
Horário: ${formData.time}

Aguardo confirmação!`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    handleWhatsAppBooking();
  };

  const handleQuickWhatsApp = () => {
    const phoneNumber = '5511999999999';
    const message = 'Olá! Gostaria de agendar um horário na Barbearia. Podemos conversar?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="agendamento" className="booking-section">
      <div className="container">
        <motion.div
          className="booking-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Agende seu Horário</h2>
          <p className="section-subtitle">
            Reserve seu horário de forma rápida e prática
          </p>
        </motion.div>

        <div className="booking-content">
          <motion.div
            className="booking-options"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="quick-booking">
              <h3>Agendamento Rápido</h3>
              <p>Prefere agendar pelo WhatsApp? Clique no botão abaixo e fale diretamente conosco!</p>
              <motion.button
                className="whatsapp-btn"
                onClick={handleQuickWhatsApp}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp />
                Agendar pelo WhatsApp
              </motion.button>
            </div>

            <div className="booking-info">
              <h4>Horários de Funcionamento</h4>
              <div className="schedule">
                <div className="schedule-item">
                  <span>Segunda a Sexta</span>
                  <span>09:00 - 19:00</span>
                </div>
                <div className="schedule-item">
                  <span>Sábado</span>
                  <span>08:00 - 17:00</span>
                </div>
                <div className="schedule-item">
                  <span>Domingo</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="booking-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form className="booking-form" onSubmit={handleFormSubmit}>
              <h3>Formulário de Agendamento</h3>
              
              <div className="form-group">
                <label htmlFor="name">
                  <FaUser />
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">
                    <FaPhone />
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <FaEnvelope />
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">
                  Serviço Desejado *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">
                    <FaCalendarAlt />
                    Data *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time">
                    <FaClock />
                    Horário *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecione um horário</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp />
                Confirmar Agendamento
              </motion.button>

              <p className="form-note">
                * Campos obrigatórios. Após enviar, você será redirecionado para o WhatsApp para confirmar o agendamento.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;