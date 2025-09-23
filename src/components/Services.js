import React from 'react';
import { motion } from 'framer-motion';
import { FaCut, FaUserTie, FaPalette } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaCut />,
      title: 'Corte Masculino',
      description: 'Cortes modernos e clássicos, sempre alinhados com seu estilo pessoal.',
      price: 'R$ 40,00',
      features: ['Lavagem', 'Corte', 'Finalização']
    },
    {
      id: 2,
      icon: <FaUserTie />,
      title: 'Barba',
      description: 'Aparar, modelar e finalizar sua barba com técnicas profissionais.',
      price: 'R$ 30,00',
      features: ['Aparar', 'Modelar', 'Hidratação']
    },
    {
      id: 3,
      icon: <FaCut />,
      title: 'Corte + Barba',
      description: 'Pacote completo para um visual impecável e bem cuidado.',
      price: 'R$ 60,00',
      features: ['Corte completo', 'Barba modelada', 'Finalização premium'],
      popular: true
    },
    {
      id: 4,
      icon: <FaPalette />,
      title: 'Pigmentação',
      description: 'Camuflagem de fios brancos e pigmentação para um visual jovem.',
      price: 'R$ 80,00',
      features: ['Análise capilar', 'Pigmentação', 'Tratamento']
    }
  ];

  const handleWhatsAppClick = (serviceName) => {
    const message = `Olá! Gostaria de agendar um horário para ${serviceName} na Barbearia.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('agendamento');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="servicos" className="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="services-subtitle">
            Oferecemos uma gama completa de serviços para cuidar do seu visual
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`service-card ${service.popular ? 'popular' : ''}`}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {service.popular && (
                <div className="popular-badge">
                  Mais Popular
                </div>
              )}

              <div className="service-icon">
                {service.icon}
              </div>

              <h3 className="service-title">{service.title}</h3>
              
              <p className="service-description">{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <div className="service-price">
                <span className="price-value">{service.price}</span>
              </div>

              <motion.button 
                  className="service-btn"
                  onClick={scrollToBooking}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Agende seu horário
                </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Não encontrou o que procura?</h3>
          <p>Entre em contato conosco e vamos criar o visual perfeito para você!</p>
          <motion.button
            className="btn-secondary"
            onClick={() => handleWhatsAppClick('consulta personalizada')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp />
            Falar conosco
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;