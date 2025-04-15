"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Clients() {
	const clients = [
		{
			name: "Cafeterías Independientes",
			description: "Apoyamos a cafeterías locales con productos de alta calidad y asesoría personalizada para su crecimiento.",
			image: "/images/clients/cafeteria.jpg",
		},
		{
			name: "Restaurantes y Hoteles",
			description: "Proveemos café de especialidad para establecimientos que buscan ofrecer una experiencia gastronómica premium.",
			image: "/images/clients/restaurantes.jpg",
		},
		{
			name: "Oficinas Corporativas",
			description: "Mejoramos el ambiente laboral con café de calidad y soluciones personalizadas para espacios de trabajo.",
			image: "/images/clients/oficinas.jpg",
		},
		{
			name: "Bares y Pubs",
			description: "Creamos experiencias únicas con nuestro café.",
			image: "/images/clients/eventos.jpg",
		},
	];

	const fadeInUp = {
		initial: { opacity: 0, y: 20 },
		whileInView: { opacity: 1, y: 0 },
		viewport: { once: true },
		transition: { duration: 0.6 },
	};

	return (
		<section className="bg-azure relative py-32 overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-5 mix-blend-overlay" />

			<div className="container mx-auto px-6 relative">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-20">
					<h2 className="text-[bisque] text-5xl md:text-6xl font-primary mb-6 tracking-wide">
						Target
					</h2>
					<div className="w-24 h-[1px] bg-[bisque]/30 mx-auto mb-8" />
					<p className="text-[bisque]/80 max-w-2xl mx-auto font-tertiary text-lg leading-relaxed">
						Comparte nuestra pasión por el café de calidad
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{clients.map((client, index) => (
						<motion.div
							key={index}
							{...fadeInUp}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="relative group">
							<div className="bg-[bisque]/5 backdrop-blur-sm border border-[bisque]/10 rounded-lg overflow-hidden hover:bg-[bisque]/10 transition-all duration-300 h-full">
								<div className="relative h-64 w-full">
									<Image
										src={client.image}
										alt={client.name}
										fill
										className="object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-amazon/60 to-transparent" />
								</div>
								<div className="p-6">
									<h3 className="text-[bisque] font-quaternary text-xl mb-3">
										{client.name}
									</h3>
									<p className="text-[bisque]/70 font-quaternary">
										{client.description}
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
