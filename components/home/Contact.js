"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Contact() {
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
						Contáctanos
					</h2>
					<div className="w-24 h-[2px] bg-gradient-to-r from-blue-500/5 via-blue-500/30 to-blue-500/5 mx-auto mb-8" />
					<p className="text-blue-400/80 max-w-2xl mx-auto font-tertiary text-lg leading-relaxed">
						Estamos aquí para ayudarte con tus necesidades de maquinado y
						tratamiento térmico. Contáctanos para una consulta personalizada.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="space-y-8">
						<div className="bg-blue-500/5 backdrop-blur-sm border border-blue-500/10 rounded-xl p-8 hover:bg-blue-500/10 transition-all duration-500">
							<div className="flex items-start gap-4">
								<div className="bg-blue-500/10 p-3 rounded-lg">
									<Mail className="w-6 h-6 text-blue-400" />
								</div>
								<div>
									<h3 className="text-blue-400 font-secondary text-xl mb-2">
										Correo Electrónico
									</h3>
									<p className="text-blue-400/80 font-tertiary">
										info@moldpro.com
									</p>
									<p className="text-blue-400/60 font-tertiary text-sm mt-1">
										Respondemos en menos de 24 horas
									</p>
								</div>
							</div>
						</div>

						<div className="bg-blue-500/5 backdrop-blur-sm border border-blue-500/10 rounded-xl p-8 hover:bg-blue-500/10 transition-all duration-500">
							<div className="flex items-start gap-4">
								<div className="bg-blue-500/10 p-3 rounded-lg">
									<Phone className="w-6 h-6 text-blue-400" />
								</div>
								<div>
									<h3 className="text-blue-400 font-secondary text-xl mb-2">
										Teléfono
									</h3>
									<p className="text-blue-400/80 font-tertiary">
										+52 (55) 1234-5678
									</p>
									<p className="text-blue-400/60 font-tertiary text-sm mt-1">
										Lunes a Viernes de 8:00 a 18:00
									</p>
								</div>
							</div>
						</div>

						<div className="bg-blue-500/5 backdrop-blur-sm border border-blue-500/10 rounded-xl p-8 hover:bg-blue-500/10 transition-all duration-500">
							<div className="flex items-start gap-4">
								<div className="bg-blue-500/10 p-3 rounded-lg">
									<MapPin className="w-6 h-6 text-blue-400" />
								</div>
								<div>
									<h3 className="text-blue-400 font-secondary text-xl mb-2">
										Ubicación
									</h3>
									<p className="text-blue-400/80 font-tertiary">
										Av. Industrial 123
									</p>
									<p className="text-blue-400/80 font-tertiary">
										Col. Parque Industrial
									</p>
									<p className="text-blue-400/80 font-tertiary">
										Ciudad de México, México
									</p>
								</div>
							</div>
						</div>

						<div className="bg-blue-500/5 backdrop-blur-sm border border-blue-500/10 rounded-xl p-8 hover:bg-blue-500/10 transition-all duration-500">
							<div className="flex items-start gap-4">
								<div className="bg-blue-500/10 p-3 rounded-lg">
									<Clock className="w-6 h-6 text-blue-400" />
								</div>
								<div>
									<h3 className="text-blue-400 font-secondary text-xl mb-2">
										Horario de Atención
									</h3>
									<p className="text-blue-400/80 font-tertiary">
										Lunes a Viernes: 8:00 - 18:00
									</p>
									<p className="text-blue-400/80 font-tertiary">
										Sábados: 9:00 - 14:00
									</p>
									<p className="text-blue-400/60 font-tertiary text-sm mt-1">
										Servicio de emergencia 24/7 para clientes registrados
									</p>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="bg-blue-500/5 backdrop-blur-sm border border-blue-500/10 rounded-xl p-8">
						<form className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-blue-400 font-secondary text-sm mb-2">
									Nombre Completo
								</label>
								<input
									type="text"
									id="name"
									className="w-full bg-blue-500/5 border border-blue-500/10 rounded-lg px-4 py-3 text-blue-400 placeholder-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-transparent transition-all duration-300"
									placeholder="Ingresa tu nombre"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-blue-400 font-secondary text-sm mb-2">
									Correo Electrónico
								</label>
								<input
									type="email"
									id="email"
									className="w-full bg-blue-500/5 border border-blue-500/10 rounded-lg px-4 py-3 text-blue-400 placeholder-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-transparent transition-all duration-300"
									placeholder="Ingresa tu correo"
								/>
							</div>

							<div>
								<label
									htmlFor="company"
									className="block text-blue-400 font-secondary text-sm mb-2">
									Empresa
								</label>
								<input
									type="text"
									id="company"
									className="w-full bg-blue-500/5 border border-blue-500/10 rounded-lg px-4 py-3 text-blue-400 placeholder-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-transparent transition-all duration-300"
									placeholder="Ingresa el nombre de tu empresa"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-blue-400 font-secondary text-sm mb-2">
									Mensaje
								</label>
								<textarea
									id="message"
									rows={4}
									className="w-full bg-blue-500/5 border border-blue-500/10 rounded-lg px-4 py-3 text-blue-400 placeholder-blue-400/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-transparent transition-all duration-300"
									placeholder="Describe tu proyecto o consulta"
								/>
							</div>

							<button
								type="submit"
								className="w-full bg-blue-500 text-white font-secondary py-4 rounded-lg hover:bg-blue-600 transition-all duration-300">
								Enviar Mensaje
							</button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
