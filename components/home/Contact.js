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
			icon: Mail,
			title: "Escríbenos",
			description: "Te responderemos a la brevedad",
			action: "mailto:contacto@circulocafe.com",
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
		<section className="bg-amazon relative py-32 overflow-hidden">
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
						Contáctanos
					</h2>
					<div className="w-24 h-[1px] bg-[bisque]/30 mx-auto mb-8" />
					<p className="text-[bisque]/80 max-w-2xl mx-auto font-tertiary text-lg leading-relaxed">
						¿Listo para llevar tu negocio al siguiente nivel? Estamos aquí para
						ayudarte a hacer realidad tu visión cafetera.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					{contactInfo.map((info, index) => (
						<motion.div
							key={index}
							{...fadeInUp}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="relative group">
							<div className="bg-[bisque]/5 backdrop-blur-sm border border-[bisque]/10 rounded-lg p-8 hover:bg-[bisque]/10 transition-all duration-300">
								<div className="mb-6">
									<info.icon className="w-12 h-12 text-[bisque] mb-4" />
									<h3 className="text-[bisque] font-quaternary text-2xl mb-2">
										{info.title}
									</h3>
									<p className="text-[bisque]/70 font-quaternary">
										{info.description}
									</p>
									{info.details && (
										<p className="text-[bisque]/70 font-quaternary mt-1">
											{info.details}
										</p>
									)}
								</div>
								{info.action && (
									<a
										href={info.action}
										className="inline-flex items-center text-[bisque]/90 hover:text-[bisque] transition-colors font-quaternary">
										Contactar
										<span className="ml-2">→</span>
									</a>
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
						className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#22c55e] text-white font-quaternary text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
						<MessageSquare className="w-6 h-6" />
						Contáctanos por WhatsApp
					</a>
				</motion.div>
			</div>
		</section>
	);
}
