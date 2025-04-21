"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock, MessageSquare } from "lucide-react";

export function Contact() {
	const contactInfo = [
		{
			icon: Phone,
			title: "Llámanos",
			description: "Estamos disponibles para atenderte",
			action: "tel:+526142550283",
		},
		{
			icon: Clock,
			title: "Horario",
			description: "Lun - Vie: 9:00 - 18:00",
			details: "Sáb: 9:00 - 14:00",
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
						Contáctanos
					</h2>
					<div className="w-24 h-[2px] bg-gradient-to-r from-black/5 via-black/30 to-black/5 mx-auto mb-8" />
					<p className="text-black/80 max-w-2xl mx-auto font-tertiary text-lg leading-relaxed">
						¿Listo para llevar tu negocio al siguiente nivel? Estamos aquí para
						ayudarte a hacer realidad tu visión cafetera.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
					{contactInfo.map((info, index) => (
						<motion.div
							key={index}
							{...fadeInUp}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="relative group">
							<div className="bg-black/5 backdrop-blur-sm border border-black/10 rounded-xl p-8 hover:bg-black/10 transition-all duration-300 h-full shadow-md hover:shadow-lg transform hover:translate-y-[-4px]">
								<div className="flex flex-col items-center text-center">
									<div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-amazon to-amazon/80 shadow-md mb-6">
										<info.icon className="w-8 h-8 text-white" />
									</div>
									<h3 className="text-black font-quaternary text-2xl mb-3 tracking-wide">
										{info.title}
									</h3>
									<p className="text-black/70 font-quaternary mb-2">
										{info.description}
									</p>
									{info.details && (
										<p className="text-black/70 font-quaternary">
											{info.details}
										</p>
									)}
								</div>
								{info.action && (
									<div className="mt-6 text-center">
										<a
											href={info.action}
											className="inline-flex items-center text-amazon hover:text-amazon/80 transition-colors font-quaternary group">
											Contactar
											<span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
										</a>
									</div>
								)}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					{...fadeInUp}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="text-center">
					<a
						href="https://wa.me/526142550283"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c55e] hover:to-[#128C7E] text-white font-quaternary text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
						<MessageSquare className="w-6 h-6" />
						Contáctanos por WhatsApp
					</a>
				</motion.div>
			</div>
		</section>
	);
}
