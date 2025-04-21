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
		<section className="bg-white relative py-32 overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-5 mix-blend-overlay" />

			<div className="container mx-auto px-6 relative">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-20">
					<h2 className="text-black text-5xl md:text-6xl font-primary mb-6 tracking-wide drop-shadow-sm">
						Dirigido a...
					</h2>
					<div className="w-24 h-[2px] bg-gradient-to-r from-black/5 via-black/30 to-black/5 mx-auto mb-8" />
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{clients.map((client, index) => (
						<motion.div
							key={index}
							{...fadeInUp}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="relative group">
							<div className="bg-black/5 backdrop-blur-sm border border-black/10 rounded-xl overflow-hidden hover:bg-black/10 transition-all duration-300 h-full shadow-md hover:shadow-lg transform hover:translate-y-[-4px]">
								<div className="relative h-64 w-full overflow-hidden">
									<Image
										src={client.image}
										alt={client.name}
										fill
										className="object-cover transition-all duration-500 hover:scale-105 group-hover:brightness-110"
										quality={90}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-50 transition-opacity duration-300" />
									<div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent opacity-30" />
								</div>
								<div className="p-6 relative">
									<div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-full w-16 h-16 flex items-center justify-center border-4 border-white">
										<div className="text-2xl">{index === 0 ? '☕' : index === 1 ? '🍽️' : index === 2 ? '🏢' : '🥂'}</div>
									</div>
									
									<h3 className="text-black font-quaternary text-xl mb-3 mt-4 text-center">
										{client.name}
									</h3>
									<p className="text-black/70 font-quaternary text-center">
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
