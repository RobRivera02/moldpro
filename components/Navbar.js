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
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	// Lista de secciones del sitio
	const navLinks = [
		{ name: "Inicio", href: "#home" },
		
		{ name: "Servicios", href: "#about" },
		
		{ name: "Contacto", href: "#contact" },
	];

	const handleLinkClick = () => {
		setIsOpen(false);
		setTimeout(() => {
			document.body.style.overflow = "unset";
		}, 300);
	};

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				scrolled
					? "bg-black/90 backdrop-blur-md shadow-sm py-3"
					: "bg-transparent py-5"
			}`}>
			<div className="container mx-auto px-4 flex justify-between items-center">
				{/* Logo */}
				<Link href="#home" className="relative z-10 flex items-center">
					<Image
						src="/images/moldpro/pro.jpg"
						alt="MoldPro Logo"
						width={50}
						height={50}
						className="mr-2"
					/>
					<span
						className={`font-primary text-xl md:text-2xl text-white`}>
						MoldPro
					</span>
				</Link>

				{/* Menú de escritorio */}
				<nav className="hidden lg:flex items-center space-x-8">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className="font-tertiary text-white hover:text-[#ff8000] transition-colors">
							{link.name}
						</Link>
					))}
				</nav>

				{/* Botón de menú móvil */}
				<button
					className="lg:hidden relative z-10 focus:outline-none w-10 h-10 flex items-center justify-center"
					onClick={() => setIsOpen(!isOpen)}
					aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}>
					{isOpen ? (
						<X className="w-7 h-7 text-[#ff8000]" />
					) : (
						<Menu
							className={`w-7 h-7 text-white`}
						/>
					)}
				</button>

				{/* Menú móvil */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							className="fixed inset-0 bg-black z-[100] flex flex-col overflow-y-auto"
							initial={{ opacity: 0, x: "100%" }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: "100%" }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							style={{
								position: "fixed",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								height: "100vh",
								width: "100vw",
								maxHeight: "100vh",
								maxWidth: "100vw",
								margin: 0,
								padding: 0,
							}}>
							{/* Botón de cerrar fijo en la esquina */}
							<button
								className="absolute top-4 right-4 focus:outline-none w-10 h-10 flex items-center justify-center z-[110]"
								onClick={() => setIsOpen(false)}
								aria-label="Cerrar menú">
								<X className="w-7 h-7 text-[#ff8000]" />
							</button>

							<div className="flex-1 flex flex-col p-6 pt-16">
								<nav className="flex flex-col space-y-4 mt-8">
									{navLinks.map((link, index) => (
										<motion.div
											key={link.name}
											initial={{ opacity: 0, x: 50 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.1 + index * 0.1 }}
											className="py-3 border-b border-[#ff8000]/10">
											<Link
												href={link.href}
												className="text-white text-xl font-quaternary hover:text-[#ff8000] transition-colors flex justify-between items-center w-full"
												onClick={handleLinkClick}>
												<span>{link.name}</span>
												<ChevronRight className="w-5 h-5 text-[#ff8000]/70" />
											</Link>
										</motion.div>
									))}
								</nav>
							</div>

							<div className="mt-auto p-6">
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.8 }}
									className="bg-[#ff8000]/5 rounded-lg p-4">
									<p className="text-center text-white font-tertiary font-medium mb-2">
										¿Necesitas nuestros servicios?
									</p>
									<Link
										href="#contact"
										className="block w-full py-3 bg-[#ff8000] text-white text-center rounded-lg font-tertiary transition-colors hover:bg-white hover:text-[#ff8000]"
										onClick={handleLinkClick}>
										Contáctanos
									</Link>
								</motion.div>

								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 1 }}
									className="mt-6 text-center">
									<p className="text-sm text-[#ff8000]/80 font-tertiary">
										MoldPro - Excelencia en Maquinados Industriales
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
