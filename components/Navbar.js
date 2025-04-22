"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Control de scroll para cambiar la apariencia de la barra de navegación
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Lista de secciones del sitio
  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "¿Por Qué Elegirnos?", href: "#about" },
    { name: "Servicios", href: "#features" },
    { name: "Nuestro Café", href: "#why-us" },
    { name: "Clientes", href: "#clients" },
    { name: "Mensaje", href: "#message" },
    { name: "Contacto", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    // Pequeño delay para permitir que el menú se cierre antes de navegar
    setTimeout(() => {
      document.body.style.overflow = 'unset';
    }, 300);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
        : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="#home" className="relative z-10 flex items-center">
          <Image 
            src="/images/clients/logo7.png" 
            alt="Tierra y Café Logo" 
            width={50} 
            height={50} 
            className="mr-2"
          />
          <span className={`font-primary text-xl md:text-2xl ${
            scrolled || isOpen 
              ? "text-amazon" 
              : "text-white"
          }`}>
            Tierra y Café
          </span>
        </Link>

        {/* Menú de escritorio */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`font-tertiary hover:text-amazon transition-colors ${
                scrolled 
                  ? "text-black/80" 
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Botón de menú móvil */}
        <button 
          className="lg:hidden relative z-10 focus:outline-none w-10 h-10 flex items-center justify-center" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? (
            <X className={`w-7 h-7 ${scrolled ? "text-black" : "text-white"}`} />
          ) : (
            <Menu className={`w-7 h-7 ${scrolled ? "text-black" : "text-white"}`} />
          )}
        </button>

        {/* Menú móvil */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="fixed inset-0 bg-white z-40 flex flex-col pt-20 pb-8 px-6 overflow-y-auto"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex-1 flex flex-col">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className="py-3 border-b border-black/10"
                    >
                      <Link 
                        href={link.href}
                        className="text-amazon text-xl font-quaternary hover:text-black/80 transition-colors flex justify-between items-center w-full"
                        onClick={handleLinkClick}
                      >
                        <span>{link.name}</span>
                        <ChevronRight className="w-5 h-5 text-amazon/70" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
              
              <div className="mt-auto pt-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="bg-amazon/5 rounded-lg p-4"
                >
                  <p className="text-center text-amazon font-tertiary font-medium mb-2">
                    ¿Listo para empezar?
                  </p>
                  <Link 
                    href="#contact"
                    className="block w-full py-3 bg-amazon text-white text-center rounded-lg font-tertiary transition-colors hover:bg-amazon/90"
                    onClick={handleLinkClick}
                  >
                    Contáctanos
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-6 text-center"
                >
                  <p className="text-sm text-black/60 font-tertiary">
                    Tierra y Café - Proveeduría para bebidas
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 