'use client'

import { motion } from "framer-motion";
import Image from "next/image";

export function Message() {
  return (
    <section className="bg-amazon py-24 sm:py-32 relative overflow-hidden">
      {/* Fondo estilizado con textura y gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-amazon to-amazon/80" />
      <div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-10 mix-blend-overlay" />
      
      {/* Elementos decorativos */}
      <motion.div 
        className="absolute left-0 right-0 top-0 h-[2px] bg-[bisque]/10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      
      {/* Granos de café decorativos */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i} 
          className="absolute opacity-20"
          initial={{ 
            x: Math.random() * 100 - 50 + "%", 
            y: Math.random() * 100 + "%",
            scale: 0.5 + Math.random() * 0.5
          }}
          animate={{ 
            y: ["0%", "100%"],
            rotate: [0, 360]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: Math.random() * 15 + 20,
            ease: "linear",
            delay: Math.random() * 5
          }}
        >
          <svg width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 0C6.716 0 0 8.954 0 20C0 31.046 6.716 40 15 40C23.284 40 30 31.046 30 20C30 8.954 23.284 0 15 0ZM15 30C10.029 30 6 25.523 6 20C6 14.477 10.029 10 15 10C19.971 10 24 14.477 24 20C24 25.523 19.971 30 15 30Z" fill="bisque"/>
          </svg>
        </motion.div>
      ))}

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div 
          className="flex flex-col items-center justify-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[bisque] text-4xl sm:text-5xl font-primary mt-2 tracking-wide">
            Mensaje del Fundador
          </h2>
          <motion.div 
            className="w-24 h-[1px] bg-[bisque]/30 mt-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-x-12 gap-y-12 lg:items-start">
          {/* Imagen del fundador (más pequeña y estilizada) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="shrink-0 lg:order-2"
          >
            <div className="relative w-[200px] h-[250px] lg:w-[250px] lg:h-[300px]">
              <div className="absolute inset-4 bg-[bisque]/5 rounded-lg transform rotate-6 border border-[bisque]/10"></div>
              <div className="absolute inset-0 rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 shadow-xl">
                <Image
                  src="/images/adrian.png"
                  alt="Fundador de Tierra y Café"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amazon to-transparent opacity-30"></div>
              </div>
              <motion.div 
                className="absolute -bottom-3 -right-3 p-2 bg-amazon border border-[bisque]/20 rounded-md shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >

              
              </motion.div>
            </div>
          </motion.div>

          {/* Contenido del mensaje */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 lg:order-1"
          >
            <div className="relative isolate">
              <svg
                fill="none"
                viewBox="0 0 162 128"
                aria-hidden="true"
                className="absolute -left-3 top-0 h-24 stroke-[bisque]/10"
              >
                <path
                  d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                />
              </svg>
              
              <div className="pl-4 border-l-2 border-[bisque]/10 lg:max-w-2xl">
                <blockquote className="text-lg/8 font-tertiary text-[bisque]/90 sm:text-xl/9 space-y-6">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="leading-relaxed"
                  >
                    "En <span className="text-[bisque]">Tierra y Café</span>, no solo servimos café; cultivamos experiencias y construimos relaciones.
                    Desde nuestros humildes comienzos, siempre hemos creído que el café tiene el poder de unir personas
                    y crear momentos extraordinarios."
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="leading-relaxed"
                  >
                    "Nuestra <span className="text-[bisque]">pasión por el café</span> de especialidad y nuestro compromiso con la calidad nos han llevado a colaborar
                    con los mejores productores y a perfeccionar cada aspecto de nuestro proceso, desde la selección del grano
                    hasta la taza que llega a tus manos."
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="leading-relaxed"
                  >
                    "A todos nuestros clientes y colaboradores, gracias por ser parte de este <span className="text-[bisque]">círculo</span>. Seguimos comprometidos a
                    ofrecer lo mejor de nosotros en cada grano, en cada servicio y en cada interacción."
                  </motion.p>
                </blockquote>
                
                <motion.div 
                  className="mt-8 flex items-center gap-x-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="h-px flex-1 bg-[bisque]/10"></div>
                  <div>
                    <div className="font-secondary italic text-2xl text-[bisque]">Adrián Rodríguez</div>
                    <div className="mt-1 text-[bisque]/60 font-tertiary text-sm">Fundador</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
  