"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Building, Globe } from "lucide-react";

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
										C. Yeseros #215, Col. 2 de Junio
									</p>
									<p className="text-white/80 font-tertiary">
									    C.P. 31134 

									</p>
									<p className="text-white/80 font-tertiary">
										Chihuahua, Chih.
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
						className="space-y-8">
						<div className="bg-[#ff8000]/5 backdrop-blur-sm border border-[#ff8000]/20 rounded-xl p-8 hover:bg-[#ff8000]/10 transition-all duration-500">
							<div className="flex items-start gap-4">
								<div className="bg-[#ff8000]/10 p-3 rounded-lg">
									<Building className="w-6 h-6 text-[#ff8000]" />
								</div>
								<div>
									<h3 className="text-white font-secondary text-xl mb-2 uppercase">Nuestra Empresa</h3>
									<p className="text-white/80 font-tertiary">
										MoldPro es líder en maquinados industriales de alta precisión, ofreciendo soluciones integrales para la industria manufacturera.
									</p>
									
								</div>
							</div>
						</div>

					

						<div className="bg-[#ff8000]/5 backdrop-blur-sm border border-[#ff8000]/20 rounded-xl overflow-hidden">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.73163771811!2d-106.09217868928619!3d28.697673275527602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea43bf904b119b%3A0xe85de12051b029a4!2sYeseros%20215%2C%20Dos%20de%20Junio%2C%2031134%20Chihuahua%2C%20Chih.!5e0!3m2!1ses!2smx!4v1748457113334!5m2!1ses!2smx"
								width="100%"
								height="300"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="w-full h-[300px]"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
