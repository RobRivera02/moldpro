"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Message() {
	return (
		<section className="py-24 bg-amazon relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-5 mix-blend-overlay" />

			<div className="container mx-auto px-6 relative">
				<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
					{/* Founder Image */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="w-full md:w-1/3 relative"
					>
						<div className="relative aspect-[3/4] w-full max-w-md mx-auto">
							<div className="absolute inset-0 rounded-lg overflow-hidden">
								<Image
									src="/images/adrian.png"
									alt="Fundador de Tierra y Café"
									fill
									className="object-cover"
								/>
							</div>
							<div className="absolute inset-0 rounded-lg border-2 border-[bisque]/20" />
						</div>
					</motion.div>

					{/* Message */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="w-full md:w-2/3"
					>
						<h2 className="text-[bisque] text-5xl font-primary mb-6 tracking-wide">
							Mensaje del Fundador
						</h2>
						<div className="w-24 h-[1px] bg-[bisque]/30 mb-8" />
						
						<div className="font-tertiary text-[bisque]/80 text-lg md:text-xl leading-relaxed space-y-6">
							<p>
								"En Tierra y Café, no solo servimos café; cultivamos experiencias y construimos relaciones.
								Desde nuestros humildes comienzos, siempre hemos creído que el café tiene el poder de unir personas
								y crear momentos extraordinarios."
							</p>
							<p>
								"Nuestra pasión por el café de especialidad y nuestro compromiso con la calidad nos han llevado a colaborar
								con los mejores productores y a perfeccionar cada aspecto de nuestro proceso, desde la selección del grano
								hasta la taza que llega a tus manos."
							</p>
							<p>
								"A todos nuestros clientes y colaboradores, gracias por ser parte de este círculo. Seguimos comprometidos a
								ofrecer lo mejor de nosotros en cada grano, en cada servicio y en cada interacción."
							</p>
						</div>
						
						<div className="mt-8">
							<div className="flex items-center">
								<h3 className="text-[bisque] text-2xl font-secondary italic">Adrián Rodríguez</h3>
							</div>
							<p className="text-[bisque]/60 font-tertiary">Fundador de Tierra y Café</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
} 