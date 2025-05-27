"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
	{
		title: "Servicios",
		links: [
			{ name: "Maquinado CNC", href: "/servicios/maquinado-cnc" },
			{ name: "Fresado y Torneado", href: "/servicios/fresado-torneado" },
			{ name: "Tratamiento Térmico", href: "/servicios/tratamiento-termico" },
			{ name: "Control de Calidad", href: "/servicios/control-calidad" },
		],
	},
	{
		title: "Empresa",
		links: [
			{ name: "Nosotros", href: "/nosotros" },
			{ name: "Equipo", href: "/equipo" },
			{ name: "Certificaciones", href: "/certificaciones" },
			{ name: "Trabaja con Nosotros", href: "/trabaja-con-nosotros" },
		],
	},
	{
		title: "Recursos",
		links: [
			{ name: "Blog", href: "/blog" },
			{ name: "Casos de Éxito", href: "/casos-de-exito" },
			{ name: "Catálogo", href: "/catalogo" },
			{ name: "FAQ", href: "/faq" },
		],
	},
];

const socialLinks = [
	{
		name: "Facebook",
		icon: Facebook,
		href: "https://facebook.com/moldpro",
	},
	{
		name: "Instagram",
		icon: Instagram,
		href: "https://instagram.com/moldpro",
	},
	{
		name: "LinkedIn",
		icon: Linkedin,
		href: "https://linkedin.com/company/moldpro",
	},
];

export function Footer() {
	return (
		<footer className="bg-black relative">
			<div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-5 mix-blend-overlay" />

			<div className="container mx-auto px-6 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
					{/* Logo y Descripción */}
					<div className="lg:col-span-2">
						<Link href="/" className="inline-block mb-6">
							<Image
								src="/images/logo.png"
								alt="MoldPro"
								width={180}
								height={60}
								className="h-12 w-auto"
							/>
						</Link>
						<p className="text-blue-400/80 font-tertiary text-sm leading-relaxed mb-8">
							MoldPro es líder en servicios de maquinado industrial, ofreciendo
							soluciones de alta precisión y calidad para la industria
							manufacturera. Nuestro compromiso con la excelencia y la innovación
							nos ha posicionado como un socio confiable para empresas líderes.
						</p>
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<Phone className="w-5 h-5 text-blue-400" />
								<a
									href="tel:+525512345678"
									className="text-blue-400/80 font-tertiary text-sm hover:text-blue-400 transition-colors">
									+52 (55) 1234-5678
								</a>
							</div>
							<div className="flex items-center gap-3">
								<Mail className="w-5 h-5 text-blue-400" />
								<a
									href="mailto:info@moldpro.com"
									className="text-blue-400/80 font-tertiary text-sm hover:text-blue-400 transition-colors">
									info@moldpro.com
								</a>
							</div>
							<div className="flex items-center gap-3">
								<MapPin className="w-5 h-5 text-blue-400" />
								<p className="text-blue-400/80 font-tertiary text-sm">
									Av. Industrial 123, Col. Parque Industrial, Ciudad de México
								</p>
							</div>
						</div>
					</div>

					{/* Enlaces */}
					{footerLinks.map((section, index) => (
						<div key={index}>
							<h3 className="text-blue-400 font-secondary text-lg mb-6">
								{section.title}
							</h3>
							<ul className="space-y-4">
								{section.links.map((link, linkIndex) => (
									<li key={linkIndex}>
										<Link
											href={link.href}
											className="text-blue-400/60 font-tertiary text-sm hover:text-blue-400 transition-colors">
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Línea Divisoria */}
				<div className="w-full h-[1px] bg-gradient-to-r from-blue-500/5 via-blue-500/30 to-blue-500/5 my-12" />

				{/* Redes Sociales y Copyright */}
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="flex items-center gap-6">
						{socialLinks.map((social, index) => (
							<a
								key={index}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400/60 hover:text-blue-400 transition-colors">
								<social.icon className="w-5 h-5" />
							</a>
						))}
					</div>
					<p className="text-blue-400/60 font-tertiary text-sm text-center md:text-right">
						© {new Date().getFullYear()} MoldPro. Todos los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
} 