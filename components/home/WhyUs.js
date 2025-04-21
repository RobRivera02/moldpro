import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const WhyUs = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Start with first card active
  const [reasons, setReasons] = useState([
    {
      icon: '☕',
      title: 'Café Premium',
      description: 'Seleccionamos los granos más finos de las regiones cafetaleras más exclusivas de México, garantizando un sabor excepcional en cada taza.',
    },
    {
      icon: '🌱',
      title: 'Sostenibilidad',
      description: 'Trabajamos directamente con productores locales, asegurando prácticas sostenibles que respetan tanto a las comunidades como al medio ambiente.',
    },
    {
      icon: '🍃',
      title: 'Artesanía',
      description: 'Cada lote de café es tostado artesanalmente en pequeñas cantidades, preservando los sabores únicos y aromas distintivos de cada origen.',
    },
    {
      icon: '🧪',
      title: 'Innovación',
      description: 'Constantemente exploramos nuevos métodos de preparación y sabores, ofreciendo experiencias únicas que van más allá de lo convencional.',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Comunidad',
      description: 'Creamos espacios donde las personas pueden conectarse, compartir y disfrutar momentos especiales alrededor de una buena taza de café.',
    },
    {
      icon: '🎨',
      title: 'Experiencia',
      description: 'Cada visita a Círculo Café es una inmersión sensorial completa, desde el aroma que te recibe hasta la última gota de tu bebida favorita.',
    },
  ]);

  useEffect(() => {
    if (activeIndex !== null) {
      const timer = setTimeout(() => {
        setActiveIndex((activeIndex + 1) % reasons.length);
      }, 7000); // Extended timeout for better reading experience
      return () => clearTimeout(timer);
    }
  }, [activeIndex, reasons.length]);

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-20">
          <h2 className="text-black text-5xl md:text-6xl font-primary mb-6 tracking-wide drop-shadow-sm">
            ¿Por Qué Somos Diferentes?
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-black/5 via-black/30 to-black/5 mx-auto mb-8" />
          <p className="text-black/80 font-quaternary text-lg max-w-3xl mx-auto italic">
            En Círculo Café, nos distinguimos por ofrecer experiencias únicas que van más allá de una simple taza de café.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-center">
          <div className="w-full md:w-1/2 md:pl-10 mb-10 md:mb-0 relative">
            <div className="w-full h-[480px] relative">
              {/* Stacked card container with perspective effect */}
              <div className="h-[400px] w-full relative perspective-1000 mb-6">
                {reasons.map((reason, index) => {
                  const isActive = index === activeIndex;
                  // Calculating z-index in reverse, so higher indices have lower z-index values
                  const zIndex = reasons.length - index;
                  const pctComplete = index / (reasons.length - 1);
                  const rotateY = isActive ? 0 : -15 + (30 * pctComplete);
                  
                  return (
                    <motion.div
                      key={index}
                      className="absolute inset-0 h-full w-full rounded-2xl overflow-hidden border border-black/10 shadow-lg hover:shadow-xl transition-all duration-500"
                      style={{
                        zIndex,
                        transformOrigin: "center right",
                        filter: isActive ? 'brightness(1)' : `brightness(${0.7 + (index * 0.05)})`,
                      }}
                      initial={false}
                      animate={{
                        rotateY,
                        scale: isActive ? 1 : 0.9 - (0.05 * (reasons.length - index)),
                        x: isActive ? 0 : `${-15 + (index * 3)}%`,
                        opacity: isActive ? 1 : 0.6 + (index * 0.08),
                      }}
                      transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 100,
                      }}
                    >
                      <div className="absolute inset-0 p-6 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm flex flex-col justify-between">
                        <div>
                          <div className="w-12 h-12 mb-4 rounded-full bg-black/5 flex items-center justify-center">
                            <div className="text-2xl">{reason.icon}</div>
                          </div>
                          <h3 className="text-black text-2xl font-tertiary mb-3 font-bold">{reason.title}</h3>
                          <p className="text-black/80 font-quaternary leading-relaxed">{reason.description}</p>
                        </div>
                        <div className="mt-6">
                          <button 
                            className="text-black font-tertiary flex items-center group"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setActiveIndex(index);
                            }}
                          >
                            Leer más{' '}
                            <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Navigation dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {reasons.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex
                        ? "bg-black w-6"
                        : "bg-black/30 hover:bg-black/50"
                    }`}
                    aria-label={`Ver razón ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side content */}
          <motion.div 
            className="w-full md:w-1/2 md:pr-10"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-amazon/10 blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-cactus/10 blur-xl"></div>
              
              <h3 className="text-3xl md:text-4xl font-primary text-amazon mb-6">
                Cada detalle cuenta
              </h3>
              
              <p className="text-lg mb-6 text-black/80 font-quaternary leading-relaxed">
                Nuestra filosofía se centra en la excelencia y la autenticidad en cada aspecto de nuestro negocio. Desde la cuidadosa selección de nuestros granos hasta la atención personalizada que brindamos a cada cliente.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Orígenes selectos de granos premium",
                  "Proceso de tostado artesanal",
                  "Métodos de preparación especializados",
                  "Espacios diseñados para la conexión",
                  "Compromiso con la sostenibilidad"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-amazon/20 flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-amazon"></div>
                    </div>
                    <span className="font-quaternary text-black/80">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="p-5 rounded-xl bg-gradient-to-br from-white to-black/5 border border-black/10 shadow-sm">
                <p className="text-black/80 italic font-quaternary">
                  "Nuestro compromiso es crear momentos memorables a través de experiencias extraordinarias de café, honrando nuestras raíces y mirando hacia el futuro con innovación."
                </p>
                <p className="text-right mt-3 text-amazon font-tertiary font-medium">— Fundador de Círculo Café</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 