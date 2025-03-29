"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
	const storyPoints = [
		{
			year: "2010",
			title: "Nuestros Inicios",
			description:
				"Comenzamos con una simple pero poderosa visión: transformar la cultura del café en Chihuahua.",
			image:
				"https://images.unsplash.com/photo-1734989251994-de774eed808f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			year: "2015",
			title: "Crecimiento",
			description:
				"Expandimos nuestros servicios para ayudar a más negocios a alcanzar la excelencia en café.",
			image:
				"https://images.unsplash.com/photo-1556740767-414a9c4860c1?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			year: "2023",
			title: "Innovación",
			description:
				"Incorporamos tecnología de vanguardia y métodos sostenibles en nuestros procesos.",
			image:
				"https://images.unsplash.com/photo-1690383921984-585d6e6a6793?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	];

	return (
		<section className="bg-tan relative py-32 overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-5 mix-blend-overlay" />

			<div className="container mx-auto px-6 relative">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-20">
					<h2 className="text-[#FFE4C7] text-5xl md:text-6xl font-primary mb-6 tracking-wide">
						Nuestra Historia
					</h2>
					<div className="w-24 h-[1px] bg-[#FFE4C7]/30 mx-auto mb-8" />
					<p className="text-[#FFE4C7]/80 max-w-2xl mx-auto font-tertiary text-lg leading-relaxed">
						Más de una década transformando la cultura del café en Chihuahua,
						creando experiencias únicas y apoyando el crecimiento de negocios
						locales.
					</p>
				</motion.div>

				{/* Main Image */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="relative h-[60vh] mb-24 rounded-lg overflow-hidden">
					<Image
						src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Círculo Café"
						fill
						className="object-cover brightness-[0.85]"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-tan via-tan/50 to-transparent" />
					<div className="absolute bottom-0 left-0 p-8 md:p-12">
						<h3 className="text-[#FFE4C7] font-secondary text-3xl md:text-4xl mb-4 tracking-wide">
							Pasión por el Café
						</h3>
						<p className="text-[#FFE4C7]/90 font-tertiary text-lg md:text-xl max-w-2xl leading-relaxed">
							Nuestra pasión por el café nos impulsa a buscar la excelencia en
							cada grano, en cada taza y en cada servicio que ofrecemos.
						</p>
					</div>
				</motion.div>

				{/* Timeline */}
				<div className="space-y-32">
					{storyPoints.map((point, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className={`flex flex-col ${
								index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
							} items-center gap-8 md:gap-16`}>
							<div className="w-full md:w-1/2">
								<div className="relative h-[400px] rounded-lg overflow-hidden group">
									<Image
										src={point.image}
										alt={point.title}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85]"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-tan/80 to-transparent opacity-60" />
								</div>
							</div>
							<div className="w-full md:w-1/2 text-center md:text-left">
								<span className="text-[#FFE4C7]/60 font-tertiary text-lg mb-2 block">
									{point.year}
								</span>
								<h3 className="text-[#FFE4C7] font-secondary text-3xl mb-4">
									{point.title}
								</h3>
								<p className="text-[#FFE4C7]/80 font-tertiary text-lg leading-relaxed">
									{point.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Values Grid */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="bg-[#FFE4C7]/5 backdrop-blur-sm border border-[#FFE4C7]/10 rounded-lg p-8 text-center">
						<h4 className="text-[#FFE4C7] font-secondary text-2xl mb-4">
							Calidad
						</h4>
						<p className="text-[#FFE4C7]/70 font-tertiary">
							Compromiso inquebrantable con la excelencia en cada detalle.
						</p>
					</div>
					<div className="bg-[#FFE4C7]/5 backdrop-blur-sm border border-[#FFE4C7]/10 rounded-lg p-8 text-center">
						<h4 className="text-[#FFE4C7] font-secondary text-2xl mb-4">
							Innovación
						</h4>
						<p className="text-[#FFE4C7]/70 font-tertiary">
							Constantemente buscando nuevas formas de mejorar y crecer.
						</p>
					</div>
					<div className="bg-[#FFE4C7]/5 backdrop-blur-sm border border-[#FFE4C7]/10 rounded-lg p-8 text-center">
						<h4 className="text-[#FFE4C7] font-secondary text-2xl mb-4">
							Comunidad
						</h4>
						<p className="text-[#FFE4C7]/70 font-tertiary">
							Construyendo relaciones duraderas con nuestros clientes y
							partners.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
