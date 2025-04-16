"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		// Simular tiempo de carga
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2500);
		
		return () => clearTimeout(timer);
	}, []);
	
	return (
		<section className="relative h-screen w-full overflow-hidden">
			{/* Animación de carga */}
			<AnimatePresence>
				{loading && (
					<motion.div
						initial={{ opacity: 1 }}
						exit={{ 
							opacity: 0,
							transition: { duration: 0.8, ease: "easeInOut" }
						}}
						className="absolute inset-0 z-50 bg-gradient-to-b from-amazon via-amazon/95 to-amazon/90 flex items-center justify-center overflow-hidden"
					>
						{/* Elementos decorativos de fondo */}
						<div className="absolute inset-0 overflow-hidden">
							{/* Granos de café flotantes */}
							{[...Array(12)].map((_, i) => (
								<motion.div
									key={i}
									className="absolute opacity-10"
									initial={{ 
										x: Math.random() * 100 + "%", 
										y: Math.random() * 100 + "%",
										scale: 0.5 + Math.random() * 0.5
									}}
									animate={{ 
										y: [
											`${Math.random() * 100}%`, 
											`${Math.random() * 100}%`
										],
										rotate: [
											Math.random() * 180,
											Math.random() * 360
										]
									}}
									transition={{ 
										duration: 10 + Math.random() * 20,
										ease: "linear",
										repeat: Infinity,
										repeatType: "reverse"
									}}
								>
									<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0ZM20 30C14.477 30 10 25.523 10 20C10 14.477 14.477 10 20 10C25.523 10 30 14.477 30 20C30 25.523 25.523 30 20 30Z" fill="bisque"/>
									</svg>
								</motion.div>
							))}
							
							{/* Ondas de fondo */}
							<div className="absolute inset-0">
								{[...Array(3)].map((_, i) => (
									<motion.div 
										key={i}
										className="absolute inset-x-0 h-[50vh] rounded-full bg-gradient-to-r from-lightSea/10 via-[bisque]/5 to-lightSea/10"
										style={{
											top: `${i * 30}vh`, 
											left: `-20vw`, 
											right: `-20vw`,
										}}
										animate={{
											y: [0, 20, 0],
											opacity: [0.1, 0.2, 0.1],
										}}
										transition={{
											duration: 8 + i * 2,
											ease: "easeInOut",
											repeat: Infinity,
											delay: i * 0.5,
										}}
									/>
								))}
							</div>
						</div>
						
						{/* Partículas flotantes */}
						<div className="absolute inset-0 pointer-events-none">
							{[...Array(20)].map((_, i) => (
								<motion.div
									key={i}
									className="absolute w-1 h-1 rounded-full bg-[bisque]/30"
									initial={{ 
										x: Math.random() * 100 + "%", 
										y: Math.random() * 100 + "%",
										scale: Math.random() * 0.5,
										opacity: 0
									}}
									animate={{ 
										y: [0, "100%"],
										opacity: [0, 0.8, 0],
										scale: [0, Math.random() + 0.2, 0]
									}}
									transition={{ 
										duration: 5 + Math.random() * 5,
										repeat: Infinity,
										delay: Math.random() * 5,
										ease: "easeInOut"
									}}
								/>
							))}
						</div>
						
						{/* Desenfoque radial */}
						<div className="absolute inset-0 bg-radial-gradient pointer-events-none" 
							style={{
								background: "radial-gradient(circle at center, transparent 20%, #0F1012 100%)",
								opacity: 0.4
							}}
						/>
						
						{/* Contenedor del logo con iluminación */}
						<motion.div 
							className="relative flex flex-col items-center z-10"
							exit={{ y: -50, opacity: 0 }}
							transition={{ duration: 0.5 }}
						>
							{/* Resplandor detrás del logo */}
							<motion.div 
								className="absolute w-40 h-40 rounded-full bg-lightSea/20 blur-xl"
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.5, 0.8, 0.5]
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut"
								}}
							/>
							
							{/* Logo */}
							<motion.div
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.7 }}
								className="mb-10 relative"
							>
								<Image 
									src="/images/clients/logo7.png"
									alt="Tierra y Café Logo" 
									width={120} 
									height={120}
									className="object-contain relative z-10" 
								/>
								
								{/* Borde brillante alrededor del logo */}
								<motion.div 
									className="absolute inset-0 border-2 border-[bisque]/30 rounded-full"
									animate={{ 
										scale: [1, 1.1, 1],
										opacity: [0.1, 0.3, 0.1] 
									}}
									transition={{ 
										duration: 2.5, 
										repeat: Infinity,
										ease: "easeInOut" 
									}}
								/>
							</motion.div>
							
							{/* Barra de progreso con efecto */}
							<div className="relative">
								<motion.div 
									className="w-56 h-1.5 bg-[#111]/20 rounded-full overflow-hidden backdrop-blur-sm"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.3 }}
								>
									<motion.div 
										className="h-full bg-gradient-to-r from-lightSea via-[bisque] to-lightSea"
										initial={{ width: "0%" }}
										animate={{ width: "100%" }}
										transition={{ 
											duration: 2, 
											ease: "easeInOut",
											delay: 0.3
										}}
									/>
								</motion.div>
								
								{/* Destello que recorre la barra */}
								<motion.div 
									className="absolute top-0 bottom-0 w-10 bg-white/40 blur-sm"
									initial={{ left: "-10%" }}
									animate={{ left: "100%" }}
									transition={{ 
										duration: 2,
										delay: 0.3,
										ease: "easeInOut" 
									}}
								/>
							</div>
							
							{/* Texto con animación de escritura */}
							<motion.div 
								className="mt-5 text-[bisque]/80 font-tertiary text-sm"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.6 }}
							>
								<motion.span
									initial={{ width: 0 }}
									animate={{ width: "auto" }}
									transition={{ duration: 1, delay: 0.7 }}
									className="overflow-hidden inline-block whitespace-nowrap"
								>
									Preparando tu experiencia...
								</motion.span>
							</motion.div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
			
			{/* Background Image with Parallax Effect */}
			<div className="absolute inset-0 z-0">
				<Image
					src="https://images.unsplash.com/photo-1619860703338-9c70a1af6a63?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Café de fondo"
					fill
					className="object-cover brightness-[0.3] scale-110"
					priority
				/>
				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
			</div>

			{/* Animated Background Elements */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-20 left-10 w-72 h-72 bg-lightSea/10 rounded-full blur-3xl animate-blob" />
				<div className="absolute top-40 right-10 w-72 h-72 bg-[#FFE4C7]/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
				<div className="absolute bottom-20 left-1/2 w-72 h-72 bg-lightSea/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
			</div>

			{/* Content */}
			<motion.div 
				className="relative z-10 h-full flex items-center justify-center"
				initial={{ opacity: 0 }}
				animate={{ 
					opacity: loading ? 0 : 1,
					transition: { delay: 0.5, duration: 0.8 }
				}}
			>
				<div className="container mx-auto px-4">
					<div className="flex flex-col items-center text-center gap-8">
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ 
								opacity: loading ? 0 : 1,
								scale: loading ? 0.9 : 1 
							}}
							transition={{ 
								duration: 0.8,
								delay: 0.7
							}}
						>
							<motion.h1
								className="font-primary text-6xl md:text-8xl text-[bisque] drop-shadow-lg relative">
								Tierra y Café
								<motion.span
									initial={{ width: 0 }}
									animate={{ width: "100%" }}
									transition={{ duration: 0.8, delay: 1.2 }}
									className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-lightSea rounded-full" 
								/>
							</motion.h1>
						</motion.div>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ 
								opacity: loading ? 0 : 1,
								y: loading ? 20 : 0 
							}}
							transition={{ duration: 0.8, delay: 1 }}
							className="font-tertiary text-xl md:text-3xl max-w-2xl text-[bisque]/90 drop-shadow-md">
							Proveeduría para bebidas - Tu socio confiable en el mundo del café
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ 
								opacity: loading ? 0 : 1,
								y: loading ? 20 : 0 
							}}
							transition={{ duration: 0.8, delay: 1.2 }}
							className="flex flex-col items-center gap-4">
							<Button className="bg-lightSea hover:bg-lightSea/90 text-white text-lg px-12 py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
								<span className="relative z-10">Descubre Más</span>
								<div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
							</Button>
							<div className="flex gap-2">
								<div className="w-2 h-2 rounded-full bg-lightSea animate-bounce" />
								<div className="w-2 h-2 rounded-full bg-lightSea animate-bounce animation-delay-200" />
								<div className="w-2 h-2 rounded-full bg-lightSea animate-bounce animation-delay-400" />
							</div>
						</motion.div>
					</div>
				</div>
			</motion.div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ 
					opacity: loading ? 0 : 1,
				}}
				transition={{ delay: 1.8 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
				<motion.div
					animate={{
						y: [0, 10, 0],
						opacity: [1, 0.5, 1],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="relative">
					<div className="w-8 h-8 border-r-4 border-b-4 border-[bisque] rotate-45 transform -translate-y-1/2" />
				</motion.div>
			</motion.div>
		</section>
	);
}