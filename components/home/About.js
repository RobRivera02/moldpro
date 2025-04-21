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
				"https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			icon: "🤝"
		},
		{
			title: "Empresa Responsable",
			description:
				"Nos comprometemos a contribuir positivamente a la comunidad y al medio ambiente.",
			image:
				"https://images.unsplash.com/photo-1586095516671-d085ff58cdd4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			icon: "🌱"
		},
		{
			title: "Farm to Table",
			description:
				"Trabajamos directamente con los agricultores para garantizar la calidad y el origen de nuestros granos.",
			image:
				"https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			icon: "🌾"
		},
	];

	const features = [
		"Granos cuidadosamente seleccionados",
		"Tostado artesanal en pequeños lotes",
		"Entrega rápida y puntual",
		"Capacitación y certificación para tu personal",
		"Soporte técnico para equipos",
		"Asesoría en menús y operaciones"
	];

	return (
		<section className="bg-white relative py-16 md:py-32 overflow-hidden">
			{/* Textura de fondo simple */}
			<div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-5 mix-blend-overlay" />

			<div className="container mx-auto px-4 sm:px-6 relative">
				{/* Encabezado */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-12 md:mb-20">
					<h2 className="text-black text-4xl sm:text-5xl md:text-6xl font-primary mb-4 md:mb-6 tracking-wide filter drop-shadow-sm">
						¿Por Qué Elegirnos?
					</h2>
					<div className="w-20 md:w-24 h-[2px] bg-gradient-to-r from-black/5 via-black/30 to-black/5 mx-auto mb-6 md:mb-8" />
					<p className="text-black/80 max-w-2xl mx-auto font-tertiary text-base sm:text-lg leading-relaxed px-2 italic">
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
					className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] mb-16 md:mb-24 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all duration-700">
					<Image
						src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Tierra y Café"
						fill
						className="object-cover brightness-[0.85] transition-all duration-700 hover:brightness-[1] hover:scale-105"
						quality={90}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
					<div className="absolute bottom-0 left-0 p-6 sm:p-8 md:p-12 bg-gradient-to-t from-black/40 via-black/20 to-transparent w-full">
						<h3 className="text-white font-secondary text-2xl sm:text-3xl md:text-4xl mb-2 md:mb-4 tracking-wide drop-shadow-md">
							Tu Socio en el Mundo del Café
						</h3>
						<p className="text-white/90 font-tertiary text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed backdrop-blur-[2px] p-2 rounded-md bg-black/10">
							Más que un proveedor, somos tu aliado estratégico para el éxito.
							Ponemos a tu disposición nuestra experiencia, conocimiento y pasión por el café.
						</p>
					</div>
				</motion.div>

				{/* Visualización de beneficios - Móvil: secuencial, Desktop: tabs */}
				<div className="mb-16 md:mb-32">
					{/* Pestañas horizontales solo para desktop */}
					<div className="hidden md:flex justify-center mb-8">
						<div className="flex flex-wrap bg-black/5 backdrop-blur-sm rounded-full p-1.5 border border-black/10">
							{benefits.map((benefit, idx) => (
								<motion.button
									key={idx}
									onClick={() => setActiveTab(idx)}
									className={`relative px-4 sm:px-6 py-2.5 rounded-full font-tertiary transition-colors duration-300 ${
										activeTab === idx ? "text-black" : "text-black/60 hover:text-black/80"
									}`}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									{activeTab === idx && (
										<motion.div
											layoutId="activeBenefit"
											className="absolute inset-0 bg-black/10 rounded-full border border-black/20"
											initial={false}
											transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
										/>
									)}
									<span className="relative z-10 flex items-center text-sm sm:text-base">
										<span className="mr-2">{benefit.icon}</span> {benefit.title}
									</span>
								</motion.button>
							))}
						</div>
					</div>

					{/* Vista para desktop - cambio de pestañas */}
					<div className="hidden md:block">
						<motion.div 
							className="relative overflow-hidden rounded-lg"
							animate={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
						>
							<div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
								<div className="w-full md:w-1/2">
									<div className="relative h-[400px] rounded-xl overflow-hidden group">
										<Image
											src={benefits[activeTab].image}
											alt={benefits[activeTab].title}
											fill
											className="object-cover transition-transform duration-700 group-hover:scale-105 filter hover:saturate-[1.2]"
											quality={90}
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-tan/80 to-transparent opacity-60" />
									</div>
								</div>
								<div className="w-full md:w-1/2 p-8">
									<motion.div
										key={activeTab}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5 }}
									>
										<div className="mb-6 flex items-center">
											<span className="text-4xl mr-4">{benefits[activeTab].icon}</span>
											<h3 className="text-black font-secondary text-3xl">
												{benefits[activeTab].title}
											</h3>
										</div>
										<p className="text-black/80 font-tertiary text-lg leading-relaxed">
											{benefits[activeTab].description}
										</p>
										<motion.button
											className="mt-8 bg-black/10 hover:bg-black/20 text-black py-2.5 px-5 rounded-full border border-black/20 font-tertiary flex items-center"
											whileHover={{ scale: 1.05, x: 5 }}
											whileTap={{ scale: 0.95 }}
										>
											<span>Saber más</span>
											<ChevronRight className="w-4 h-4 ml-2" />
										</motion.button>
									</motion.div>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Vista para móvil - mostrar todos los beneficios */}
					<div className="md:hidden space-y-10">
						{benefits.map((benefit, idx) => (
							<motion.div 
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{ duration: 0.5, delay: idx * 0.1 }}
								className="bg-black/5 backdrop-blur-sm border border-black/10 rounded-xl overflow-hidden"
							>
								<div className="relative h-[200px] overflow-hidden">
									<Image
										src={benefit.image}
										alt={benefit.title}
										fill
										className="object-cover brightness-[0.85] hover:brightness-100 transition-all duration-500 hover:scale-105"
										quality={85}
									/>
									<div className="absolute top-0 left-0 m-4 bg-tan/50 backdrop-blur-sm p-2 rounded-full">
										<span className="text-2xl">{benefit.icon}</span>
									</div>
								</div>
								<div className="p-5">
									<h3 className="text-black font-secondary text-2xl mb-3 flex items-center">
										{benefit.title}
									</h3>
									<p className="text-black/80 font-tertiary text-sm leading-relaxed mb-4">
										{benefit.description}
									</p>
									<motion.button
										className="bg-black/10 hover:bg-black/20 text-black py-2 px-4 text-sm rounded-full border border-black/20 font-tertiary flex items-center"
										whileHover={{ x: 5 }}
										whileTap={{ scale: 0.95 }}
									>
										<span>Saber más</span>
										<ChevronRight className="w-3.5 h-3.5 ml-2" />
									</motion.button>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Lista de características */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="bg-black/5 backdrop-blur-sm border border-black/10 rounded-xl p-6 sm:p-8 md:p-12 shadow-md hover:shadow-lg transition-all duration-300"
				>
					<h3 className="text-black font-secondary text-2xl sm:text-2xl md:text-3xl mb-6 md:mb-8 text-center">
						Lo Que Ofrecemos
					</h3>
					
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
						{features.map((feature, index) => (
							<motion.div 
								key={index} 
								className="flex items-start gap-3 md:gap-4"
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								whileHover={{ x: 5 }}
							>
								<div className="flex-shrink-0 mt-0.5 md:mt-1">
									<div className="bg-black/10 p-1 md:p-1.5 rounded-full">
										<Check className="w-3.5 h-3.5 md:w-5 md:h-5 text-black" />
									</div>
								</div>
								<p className="text-black/90 font-tertiary text-sm sm:text-base md:text-lg">{feature}</p>
							</motion.div>
						))}
					</div>
					
					<div className="mt-8 md:mt-10 flex justify-center">
						<motion.a 
							href="#contact" 
							className="bg-black/10 hover:bg-black/20 text-black py-2.5 px-5 md:py-3 md:px-6 rounded-full border border-black/20 font-tertiary transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<span>Contáctanos para más información</span>
							<ChevronRight className="w-4 h-4" />
						</motion.a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
