"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";
import { useState } from "react";

export function About() {
	const [activeTab, setActiveTab] = useState(0);
	
	const benefits = [
		{
			title: "Calidad Premium",
			description:
				"Seleccionamos cuidadosamente los mejores granos de café, garantizando una experiencia sensorial extraordinaria en cada taza.",
			image:
				"https://images.unsplash.com/photo-1551610290-e153ec567dd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			icon: "☕"
		},
		{
			title: "Servicio Personalizado",
			description:
				"Trabajamos contigo para entender tus necesidades específicas y diseñar soluciones que se adapten perfectamente a tu negocio.",
			image:
				"https://images.unsplash.com/photo-1577590835286-1c793e89d84f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			icon: "🤝"
		},
		{
			title: "Innovación Constante",
			description:
				"Nos mantenemos a la vanguardia de las tendencias y tecnologías del café para ofrecerte siempre lo mejor del mercado.",
			image:
				"https://images.unsplash.com/photo-1575376674538-21bd6b1503f1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			icon: "💡"
		},
	];

	const features = [
		"Granos cuidadosamente seleccionados",
		"Tostado artesanal en pequeños lotes",
		"Entrega rápida y puntual",
		"Capacitación para tu personal",
		"Soporte técnico para equipos",
		"Asesoría en menús y operaciones"
	];

	return (
		<section className="bg-tan relative py-32 overflow-hidden">
			{/* Textura de fondo simple */}
			<div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-5 mix-blend-overlay" />

			<div className="container mx-auto px-6 relative">
				{/* Encabezado */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-20">
					<h2 className="text-[#FFE4C7] text-5xl md:text-6xl font-primary mb-6 tracking-wide">
						¿Por Qué Elegirnos?
					</h2>
					<div className="w-24 h-[1px] bg-[#FFE4C7]/30 mx-auto mb-8" />
					<p className="text-[#FFE4C7]/80 max-w-2xl mx-auto font-tertiary text-lg leading-relaxed">
						En Tierra y Café no solo vendemos café, creamos experiencias excepcionales
						que transformarán tu negocio y deleitarán a tus clientes.
					</p>
				</motion.div>

				{/* Imagen principal con efecto hover */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					whileHover={{ scale: 1.02 }}
					className="relative h-[60vh] mb-24 rounded-lg overflow-hidden shadow-2xl">
					<Image
						src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Tierra y Café"
						fill
						className="object-cover brightness-[0.85] transition-all duration-500 hover:brightness-[0.95]"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-tan via-tan/50 to-transparent" />
					<div className="absolute bottom-0 left-0 p-8 md:p-12">
						<h3 className="text-[#FFE4C7] font-secondary text-3xl md:text-4xl mb-4 tracking-wide">
							Tu Socio en el Mundo del Café
						</h3>
						<p className="text-[#FFE4C7]/90 font-tertiary text-lg md:text-xl max-w-2xl leading-relaxed">
							Más que un proveedor, somos tu aliado estratégico para el éxito.
							Ponemos a tu disposición nuestra experiencia, conocimiento y pasión por el café.
						</p>
					</div>
				</motion.div>

				{/* Pestañas de beneficios simples y dinámicas */}
				<div className="mb-32">
					<div className="flex justify-center mb-8">
						<div className="flex bg-[#FFE4C7]/5 backdrop-blur-sm rounded-full p-1.5 border border-[#FFE4C7]/10 space-x-1">
							{benefits.map((benefit, idx) => (
								<motion.button
									key={idx}
									onClick={() => setActiveTab(idx)}
									className={`relative px-6 py-2.5 rounded-full font-tertiary transition-colors duration-300 ${
										activeTab === idx ? "text-[#FFE4C7]" : "text-[#FFE4C7]/60 hover:text-[#FFE4C7]/80"
									}`}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									{activeTab === idx && (
										<motion.div
											layoutId="activeBenefit"
											className="absolute inset-0 bg-[#FFE4C7]/10 rounded-full border border-[#FFE4C7]/20"
											initial={false}
											transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
										/>
									)}
									<span className="relative z-10 flex items-center">
										<span className="mr-2">{benefit.icon}</span> {benefit.title}
									</span>
								</motion.button>
							))}
						</div>
					</div>

					<motion.div 
						className="relative overflow-hidden rounded-lg"
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="flex flex-col md:flex-row items-center gap-8">
							<div className="w-full md:w-1/2 p-6">
								<div className="relative h-[350px] md:h-[400px] rounded-lg overflow-hidden group">
									<Image
										src={benefits[activeTab].image}
										alt={benefits[activeTab].title}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85]"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-tan/80 to-transparent opacity-60" />
								</div>
							</div>
							<div className="w-full md:w-1/2 p-6 md:p-12">
								<motion.div
									key={activeTab}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}
								>
									<div className="mb-6 flex items-center">
										<span className="text-4xl mr-4">{benefits[activeTab].icon}</span>
										<h3 className="text-[#FFE4C7] font-secondary text-3xl">
											{benefits[activeTab].title}
										</h3>
									</div>
									<p className="text-[#FFE4C7]/80 font-tertiary text-lg leading-relaxed">
										{benefits[activeTab].description}
									</p>
									<motion.button
										className="mt-8 bg-[#FFE4C7]/10 hover:bg-[#FFE4C7]/20 text-[#FFE4C7] py-2.5 px-5 rounded-full border border-[#FFE4C7]/20 font-tertiary flex items-center space-x-2"
										whileHover={{ scale: 1.05, x: 5 }}
										whileTap={{ scale: 0.95 }}
									>
										<span>Saber más</span>
										<ChevronRight className="w-4 h-4" />
									</motion.button>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Lista de características */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="bg-[#FFE4C7]/5 backdrop-blur-sm border border-[#FFE4C7]/10 rounded-lg p-8 md:p-12"
				>
					<h3 className="text-[#FFE4C7] font-secondary text-3xl mb-8 text-center">
						Lo Que Ofrecemos
					</h3>
					
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{features.map((feature, index) => (
							<motion.div 
								key={index} 
								className="flex items-start gap-4"
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								whileHover={{ x: 5 }}
							>
								<div className="flex-shrink-0 mt-1">
									<div className="bg-[#FFE4C7]/10 p-1.5 rounded-full">
										<Check className="w-5 h-5 text-[#FFE4C7]" />
									</div>
								</div>
								<p className="text-[#FFE4C7]/90 font-tertiary text-lg">{feature}</p>
							</motion.div>
						))}
					</div>
					
					<div className="mt-10 flex justify-center">
						<motion.a 
							href="#contact" 
							className="bg-[#FFE4C7]/10 hover:bg-[#FFE4C7]/20 text-[#FFE4C7] py-3 px-6 rounded-full border border-[#FFE4C7]/20 font-tertiary transition-all duration-300 flex items-center gap-2"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<span>Contáctanos para más información</span>
							<ChevronRight className="w-5 h-5" />
						</motion.a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
