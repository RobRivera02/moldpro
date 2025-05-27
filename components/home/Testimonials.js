"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
	{
		name: "Carlos Rodríguez",
		role: "Director de Producción",
		company: "Industrias Metálicas del Norte",
		content:
			"MoldPro ha sido un socio estratégico fundamental para nuestro crecimiento. Su capacidad de maquinado CNC y la precisión en sus trabajos nos ha permitido optimizar nuestros procesos y mejorar la calidad de nuestros productos.",
		image:
			"https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		rating: 5,
	},
	{
		name: "Ana Martínez",
		role: "Gerente de Ingeniería",
		company: "Tecnología Industrial Avanzada",
		content:
			"La calidad del trabajo de MoldPro es excepcional. Su equipo técnico nos ha ayudado a resolver desafíos complejos en el desarrollo de nuevos componentes, siempre manteniendo los más altos estándares de calidad.",
		image:
			"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		rating: 5,
	},
	{
		name: "Miguel Sánchez",
		role: "Supervisor de Calidad",
		company: "Precisión Industrial S.A.",
		content:
			"El servicio de tratamiento térmico de MoldPro ha sido fundamental para mejorar la durabilidad de nuestros componentes. Su atención al detalle y compromiso con la calidad son realmente impresionantes.",
		image:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		rating: 5,
	},
];

export function Testimonials() {
	return (
		<section className="bg-black py-32 relative">
			<div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-5 mix-blend-overlay" />

			<div className="container mx-auto px-6 relative">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-24">
					<h2 className="text-blue-400 text-5xl md:text-6xl font-primary mb-6 tracking-wide drop-shadow-sm">
						Lo Que Dicen Nuestros Clientes
					</h2>
					<div className="w-24 h-[2px] bg-gradient-to-r from-blue-500/5 via-blue-500/30 to-blue-500/5 mx-auto mb-8" />
					<p className="text-blue-400/80 max-w-2xl mx-auto font-tertiary text-lg leading-relaxed">
						Descubre por qué las empresas líderes en la industria confían en
						MoldPro para sus necesidades de maquinado y tratamiento térmico.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 * index }}
							viewport={{ once: true }}
							className="bg-blue-500/5 backdrop-blur-sm border border-blue-500/10 rounded-xl p-8 hover:bg-blue-500/10 transition-all duration-500 group">
							<div className="flex items-center gap-4 mb-6">
								<div className="relative w-16 h-16 rounded-full overflow-hidden">
									<Image
										src={testimonial.image}
										alt={testimonial.name}
										fill
										className="object-cover"
									/>
								</div>
								<div>
									<h3 className="text-blue-400 font-secondary text-xl mb-1">
										{testimonial.name}
									</h3>
									<p className="text-blue-400/60 font-tertiary text-sm">
										{testimonial.role}
									</p>
									<p className="text-blue-400/60 font-tertiary text-sm">
										{testimonial.company}
									</p>
								</div>
							</div>
							<div className="flex gap-1 mb-4">
								{[...Array(testimonial.rating)].map((_, i) => (
									<Star
										key={i}
										className="w-5 h-5 text-blue-400 fill-blue-400"
									/>
								))}
							</div>
							<p className="text-blue-400/80 font-tertiary leading-relaxed">
								{testimonial.content}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
} 