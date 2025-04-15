"use client";

import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function About() {
	const [activeTab, setActiveTab] = useState(0);
	const sectionRef = useRef(null);
	const benefitsSectionRef = useRef(null);
	const benefitsRef = useRef([]);
	const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
	
	// Configuramos el ref array para cada beneficio
	const setBenefitRef = (el, index) => {
		benefitsRef.current[index] = el;
	};
	
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"]
	});
	
	// Usar IntersectionObserver en lugar de scrollYProgress para detectar qué beneficio está visible
	useEffect(() => {
		if (!benefitsSectionRef.current) return;
        
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						// Encontrar qué beneficio está intersectando
						const index = benefitsRef.current.findIndex(ref => ref === entry.target);
						if (index !== -1) {
							setActiveTab(index);
						}
					}
				});
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.6, // Que esté más de la mitad visible
			}
		);
        
		// Observar cada sección de beneficio
		benefitsRef.current.forEach(ref => {
			if (ref) observer.observe(ref);
		});
        
		return () => {
			benefitsRef.current.forEach(ref => {
				if (ref) observer.unobserve(ref);
			});
		};
	}, [benefitsRef.current]);
	
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
	const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);
	
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
		<section 
			className="bg-tan relative py-32 overflow-hidden"
			ref={sectionRef}
		>
			{/* Parallax Background Pattern */}
			<motion.div 
				className="absolute inset-0 bg-[url('/images/texture.png')] mix-blend-overlay"
				style={{ 
					opacity: useTransform(scrollYProgress, [0, 1], [0.05, 0.15]),
					scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]) 
				}}
			/>

			{/* Floating Coffee Beans (Decorative Elements) */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{[...Array(8)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-6 h-12 opacity-20 rounded-full bg-[#9c6644]"
						initial={{ 
							x: Math.random() * 100 - 50 + "%", 
							y: Math.random() * 100 + "%",
							rotate: Math.random() * 360
						}}
						animate={{ 
							y: ["-10%", "110%"],
							rotate: [0, 360]
						}}
						transition={{ 
							repeat: Infinity, 
							duration: Math.random() * 20 + 15,
							ease: "linear",
							delay: Math.random() * 5
						}}
					/>
				))}
			</div>

			<motion.div 
				style={{ opacity, y }}
				className="container mx-auto px-6 relative"
			>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-20">
					<motion.h2 
						initial={{ opacity: 0, y: -20 }} 
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-[#FFE4C7] text-5xl md:text-6xl font-primary mb-6 tracking-wide"
					>
						¿Por Qué Elegirnos?
					</motion.h2>
					<motion.div 
						initial={{ scaleX: 0 }}
						animate={isInView ? { scaleX: 1 } : {}}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="w-24 h-[1px] bg-[#FFE4C7]/30 mx-auto mb-8" 
					/>
					<motion.p 
						initial={{ opacity: 0 }}
						animate={isInView ? { opacity: 1 } : {}}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="text-[#FFE4C7]/80 max-w-2xl mx-auto font-tertiary text-lg leading-relaxed"
					>
						En Tierra y Café no solo vendemos café, creamos experiencias excepcionales
						que transformarán tu negocio y deleitarán a tus clientes.
					</motion.p>
				</motion.div>

				{/* Main Image with Hover Effect */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8 }}
					whileHover={{ scale: 1.02 }}
					className="relative h-[60vh] mb-24 rounded-lg overflow-hidden shadow-2xl cursor-pointer">
					<Image
						src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Tierra y Café"
						fill
						className="object-cover brightness-[0.85] transition-all duration-700 hover:brightness-[0.95]"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-tan via-tan/50 to-transparent" />
					<motion.div 
						className="absolute bottom-0 left-0 p-8 md:p-12"
						initial={{ y: 50, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<h3 className="text-[#FFE4C7] font-secondary text-3xl md:text-4xl mb-4 tracking-wide">
							Tu Socio en el Mundo del Café
						</h3>
						<p className="text-[#FFE4C7]/90 font-tertiary text-lg md:text-xl max-w-2xl leading-relaxed">
							Más que un proveedor, somos tu aliado estratégico para el éxito.
							Ponemos a tu disposición nuestra experiencia, conocimiento y pasión por el café.
						</p>
					</motion.div>
				</motion.div>

				{/* Scroll-triggered Benefits Section */}
				<div className="mb-32" ref={benefitsSectionRef}>
					{/* Scroll Progress Indicator */}
					<div className="flex justify-center mb-8 sticky top-4 z-10">
						<div className="flex items-center gap-3 bg-tan/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#FFE4C7]/10">
							{benefits.map((_, idx) => (
								<motion.div
									key={idx}
									className={`h-2 rounded-full bg-[#FFE4C7]/20 relative overflow-hidden`}
									style={{ width: idx === activeTab ? 50 : 30 }}
								>
									{idx <= activeTab && (
										<motion.div 
											className="absolute inset-0 bg-[#FFE4C7]/80"
											initial={{ scaleX: 0 }}
											animate={{ scaleX: 1 }}
											transition={{ duration: 0.4 }}
										/>
									)}
								</motion.div>
							))}
						</div>
					</div>

					{/* Beneficios en secciones separadas para scroll */}
					{benefits.map((benefit, idx) => (
						<div 
							key={idx}
							ref={(el) => setBenefitRef(el, idx)} 
							className="min-h-[70vh] py-20 flex items-center"
						>
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.6 }}
								className={`w-full flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center rounded-lg overflow-hidden`}
							>
								<div className="w-full md:w-1/2 p-6">
									<div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden group">
										<Image
											src={benefit.image}
											alt={benefit.title}
											fill
											className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85]"
										/>
										<motion.div 
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											className="absolute inset-0 bg-gradient-to-t from-tan/80 to-transparent opacity-60" 
										/>
									</div>
								</div>
								<div className="w-full md:w-1/2 p-6 md:p-12">
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: 0.2, duration: 0.5 }}
									>
										<div className="mb-6 flex items-center">
											<span className="text-4xl mr-4">{benefit.icon}</span>
											<h3 className="text-[#FFE4C7] font-secondary text-3xl">
												{benefit.title}
											</h3>
										</div>
										<p className="text-[#FFE4C7]/80 font-tertiary text-lg leading-relaxed">
											{benefit.description}
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
							</motion.div>
						</div>
					))}
					
					{/* Scroll indicator prompt */}
					<motion.div 
						className="text-center my-8 text-[#FFE4C7]/60 font-tertiary text-sm flex flex-col items-center"
						animate={{ y: [0, 5, 0] }}
						transition={{ repeat: Infinity, duration: 1.5 }}
					>
						<span>Sigue desplazándote para descubrir más</span>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
							<path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</motion.div>
				</div>

				{/* Animated Features List */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.8 }}
					className="bg-[#FFE4C7]/5 backdrop-blur-sm border border-[#FFE4C7]/10 rounded-lg p-8 md:p-12 relative"
				>
					<h3 className="text-[#FFE4C7] font-secondary text-3xl mb-8 text-center">
						Lo Que Ofrecemos
					</h3>
					
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{features.map((feature, index) => (
							<motion.div 
								key={index} 
								className="flex items-start gap-4"
								initial={{ opacity: 0, x: -10 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								whileHover={{ x: 5 }}
							>
								<div className="flex-shrink-0 mt-1">
									<motion.div 
										className="bg-[#FFE4C7]/10 p-1.5 rounded-full"
										whileHover={{ scale: 1.2, backgroundColor: "rgba(255, 228, 199, 0.2)" }}
									>
										<Check className="w-5 h-5 text-[#FFE4C7]" />
									</motion.div>
								</div>
								<p className="text-[#FFE4C7]/90 font-tertiary text-lg">{feature}</p>
							</motion.div>
						))}
					</div>
					
					<motion.div 
						className="mt-10 flex justify-center"
						whileInView={{ scale: [0.9, 1.05, 1] }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<motion.a 
							href="#contact" 
							className="bg-[#FFE4C7]/10 hover:bg-[#FFE4C7]/20 text-[#FFE4C7] py-3.5 px-8 rounded-full border border-[#FFE4C7]/20 font-tertiary transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<span className="relative z-10">Contáctanos para más información</span>
							<motion.div 
								className="absolute inset-0 bg-[#FFE4C7]/0 group-hover:bg-[#FFE4C7]/10"
								initial={{ x: "-100%" }}
								whileHover={{ x: "0%" }}
								transition={{ duration: 0.4 }}
							/>
							<motion.div
								className="relative z-10"
								animate={{ x: [0, 5, 0] }}
								transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
							>
								<ChevronRight className="w-5 h-5" />
							</motion.div>
						</motion.a>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
}
