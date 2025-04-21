"use client";

import { motion } from "framer-motion";
import { Coffee, Wrench, Lightbulb, Clock, Users, Heart, Book } from "lucide-react";
import Image from "next/image";

const features = [
	{
		title: "Café de Calidad",
		description:
			"Selección premium de granos de café de las mejores regiones del mundo, cuidadosamente seleccionados para garantizar la excelencia en cada taza.",
		icon: Coffee,
		details: ["Granos 100% arábica", "Tostado artesanal", "Origen certificado"],
		image:
			"https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Equipamiento",
		description:
			"Maquinaria y accesorios profesionales de última generación para optimizar tu operación y ofrecer la mejor experiencia cafetera.",
		icon: Wrench,
		details: ["Equipos certificados", "Garantía extendida", "Servicio técnico"],
		image:
			"https://images.unsplash.com/photo-1620807773206-49c1f2957417?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Asesoría",
		description:
			"Consultoría experta personalizada para optimizar tu operación y maximizar el potencial de tu negocio cafetero.",
		icon: Lightbulb,
		details: [
			"Planificación estratégica",
			"Optimización de procesos",
			"Soporte continuo",
		],
		image:
			"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Tiempo de Respuesta",
		description:
			"Servicio rápido y eficiente para mantener tu negocio funcionando sin interrupciones.",
		icon: Clock,
		details: [
			"Respuesta en 24h",
			"Entrega programada",
			"Monitoreo en tiempo real",
		],
		image:
			"https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Diseño de Menú",
		description:
			"Diseño de menús personalizados para tu negocio, adaptados a tus necesidades y preferencias.",
		icon: Book,
		details: [
			"Diseño de menús personalizados",
			"Diseño de menús para eventos",
			"Diseño de menús para cafeterías",
		],
		image:
			"https://images.unsplash.com/photo-1551489186-c892fa1428c9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Compromiso",
		description:
			"Nos dedicamos a brindar la mejor experiencia y calidad en cada interacción con nuestros clientes.",
		icon: Heart,
		details: [
			"Satisfacción garantizada",
			"Programa de fidelidad",
			"Feedback continuo",
		],
		image:
			"https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?q=80&w=2720&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

export function Features() {
	const MainFeature = features[0];
	const SecondaryFeature = features[1];
	const GridFeatures = features.slice(2);

	return (
		<section className="bg-white py-32 relative">
			<div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-5 mix-blend-overlay" />

			<div className="container mx-auto px-6 relative">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-24">
					<h2 className="text-black text-5xl md:text-6xl font-primary mb-6 tracking-wide drop-shadow-sm">
						Nuestros Servicios
					</h2>
					<div className="w-24 h-[2px] bg-gradient-to-r from-black/5 via-black/30 to-black/5 mx-auto mb-8" />
					<p className="text-black/80 max-w-2xl mx-auto font-tertiary text-lg leading-relaxed">
						Descubre cómo podemos ayudarte a llevar tu negocio cafetero al
						siguiente nivel con nuestros servicios integrales.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
					{/* Feature 1 - Large */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="lg:col-span-8 relative group overflow-hidden min-h-[600px] rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
						<Image
							src={MainFeature.image}
							alt={MainFeature.title}
							fill
							className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85] hover:brightness-[0.95]"
							quality={90}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500" />
						<div className="absolute bottom-0 left-0 p-10 w-full backdrop-blur-[1px]">
							<div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
								<MainFeature.icon className="w-12 h-12 text-white mb-6" />
								<h3 className="text-white font-secondary text-3xl mb-4 tracking-wide">
									{MainFeature.title}
								</h3>
								<p className="text-white/90 font-tertiary text-lg mb-6 leading-relaxed max-w-xl">
									{MainFeature.description}
								</p>
								<ul className="space-y-3">
									{MainFeature.details.map((detail, idx) => (
										<li
											key={idx}
											className="flex items-center text-white/80 font-tertiary">
											<span className="w-1 h-1 bg-white/60 rounded-full mr-3" />
											{detail}
										</li>
									))}
								</ul>
							</div>
						</div>
					</motion.div>

					{/* Feature 2 - Vertical */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="lg:col-span-4 relative group overflow-hidden min-h-[600px] rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
						<Image
							src={SecondaryFeature.image}
							alt={SecondaryFeature.title}
							fill
							className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85] hover:brightness-[0.95]"
							quality={90}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500" />
						<div className="absolute bottom-0 left-0 p-8 w-full">
							<div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
								<SecondaryFeature.icon className="w-10 h-10 text-white mb-4" />
								<h3 className="text-white font-secondary text-2xl mb-3 tracking-wide">
									{SecondaryFeature.title}
								</h3>
								<p className="text-white/90 font-tertiary mb-4 leading-relaxed">
									{SecondaryFeature.description}
								</p>
							</div>
						</div>
					</motion.div>

					{/* Features 3-6 - Grid */}
					{GridFeatures.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 * (index + 2) }}
							viewport={{ once: true }}
							className="lg:col-span-6 relative group overflow-hidden min-h-[400px] rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
							<Image
								src={feature.image}
								alt={feature.title}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85] hover:brightness-[0.95]"
								quality={90}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500" />
							<div className="absolute bottom-0 left-0 p-8 w-full">
								<div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
									<feature.icon className="w-10 h-10 text-white mb-4" />
									<h3 className="text-white font-secondary text-2xl mb-3 tracking-wide">
										{feature.title}
									</h3>
									<p className="text-white/90 font-tertiary leading-relaxed">
										{feature.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
