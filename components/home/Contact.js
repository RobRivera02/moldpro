"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Contact() {
	return (
		<section className="bg-black py-20" id="contact">
			<div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-5 mix-blend-overlay" />

			<div className="container mx-auto px-6 relative">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-24">
					<h2 className="text-[#ff8000] text-4xl md:text-5xl font-primary uppercase mb-10 text-center">
						Contáctanos
					</h2>
					<div className="w-24 h-[2px] bg-gradient-to-r from-blue-500/5 via-blue-500/30 to-blue-500/5 mx-auto mb-8" />
					<p className="text-white/80 max-w-2xl mx-auto font-tertiary text-lg leading-relaxed">
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
						<div className="bg-[#ff8000]/5 backdrop-blur-sm border border-[#ff8000]/20 rounded-xl p-8 hover:bg-[#ff8000]/10 transition-all duration-500">
							<div className="flex items-start gap-4">
								<div className="bg-[#ff8000]/10 p-3 rounded-lg">
									<Mail className="w-6 h-6 text-[#ff8000]" />
								</div>
								<div>
									<h3 className="text-white font-secondary text-xl mb-2 uppercase">Correo Electrónico</h3>
									<p className="text-white/80 font-tertiary">
										admin@moldpro.mx
									</p>
									<p className="text-white/60 font-tertiary text-sm mt-1">
										Respondemos en menos de 24 horas
									</p>
								</div>
							</div>
						</div>

						<div className="bg-[#ff8000]/5 backdrop-blur-sm border border-[#ff8000]/20 rounded-xl p-8 hover:bg-[#ff8000]/10 transition-all duration-500">
							<div className="flex items-start gap-4">
								<div className="bg-[#ff8000]/10 p-3 rounded-lg">
									<Phone className="w-6 h-6 text-[#ff8000]" />
								</div>
								<div>
									<h3 className="text-white font-secondary text-xl mb-2 uppercase">Teléfono</h3>
									<p className="text-white/80 font-tertiary">
										+52 614 353 0810
									</p>
									<p className="text-white/60 font-tertiary text-sm mt-1">
										Lunes a Viernes de 8:00 a 18:00
									</p>
								</div>
							</div>
						</div>

						<div className="bg-[#ff8000]/5 backdrop-blur-sm border border-[#ff8000]/20 rounded-xl p-8 hover:bg-[#ff8000]/10 transition-all duration-500">
							<div className="flex items-start gap-4">
								<div className="bg-[#ff8000]/10 p-3 rounded-lg">
									<MapPin className="w-6 h-6 text-[#ff8000]" />
								</div>
								<div>
									<h3 className="text-white font-secondary text-xl mb-2 uppercase">Ubicación</h3>
									<p className="text-white/80 font-tertiary">
										Av. Industrial 123
									</p>
									<p className="text-white/80 font-tertiary">
										Col. Parque Industrial
									</p>
									<p className="text-white/80 font-tertiary">
										La Casa de Sergio Carreon
									</p>
								</div>
							</div>
						</div>

						<div className="bg-[#ff8000]/5 backdrop-blur-sm border border-[#ff8000]/20 rounded-xl p-8 hover:bg-[#ff8000]/10 transition-all duration-500">
							<div className="flex items-start gap-4">
								<div className="bg-[#ff8000]/10 p-3 rounded-lg">
									<Clock className="w-6 h-6 text-[#ff8000]" />
								</div>
								<div>
									<h3 className="text-white font-secondary text-xl mb-2 uppercase">Horario de Atención</h3>
									<p className="text-white/80 font-tertiary">
										Lunes a Viernes: 8:00 - 18:00
									</p>
									<p className="text-white/80 font-tertiary">
										Sábados: 9:00 - 14:00
									</p>
									<p className="text-white/60 font-tertiary text-sm mt-1">
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
						className="bg-[#ff8000]/5 backdrop-blur-sm border border-[#ff8000]/20 rounded-xl p-8">
						<form className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-white font-secondary text-sm mb-2 uppercase">
									Nombre Completo
								</label>
								<input
									type="text"
									id="name"
									className="w-full bg-[#ff8000]/5 border border-[#ff8000]/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ff8000]/20 focus:border-transparent transition-all duration-300"
									placeholder="Ingresa tu nombre"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-white font-secondary text-sm mb-2 uppercase">
									Correo Electrónico
								</label>
								<input
									type="email"
									id="email"
									className="w-full bg-[#ff8000]/5 border border-[#ff8000]/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ff8000]/20 focus:border-transparent transition-all duration-300"
									placeholder="Ingresa tu correo"
								/>
							</div>

							<div>
								<label
									htmlFor="company"
									className="block text-white font-secondary text-sm mb-2 uppercase">
									Empresa
								</label>
								<input
									type="text"
									id="company"
									className="w-full bg-[#ff8000]/5 border border-[#ff8000]/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ff8000]/20 focus:border-transparent transition-all duration-300"
									placeholder="Ingresa el nombre de tu empresa"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-white font-secondary text-sm mb-2 uppercase">
									Mensaje
								</label>
								<textarea
									id="message"
									rows={4}
									className="w-full bg-[#ff8000]/5 border border-[#ff8000]/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#ff8000]/20 focus:border-transparent transition-all duration-300"
									placeholder="Describe tu proyecto o consulta"
								/>
							</div>

							<button
								type="submit"
								className="w-full mt-6 bg-[#ff8000] text-white font-bold py-3 rounded-full uppercase border-2 border-[#ff8000] hover:bg-white hover:text-[#ff8000] transition-all duration-200">
								Enviar mensaje
							</button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
