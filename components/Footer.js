"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Facebook, Linkedin } from "lucide-react";

const contactInfo = [
	{
		icon: Phone,
		text: "+52 (55) 1234-5678",
		href: "tel:+525512345678",
	},
	{
		icon: Mail,
		text: "admin@moldpro.mx",
		href: "mailto:admin@moldpro.mx",
	},
	{
		icon: MapPin,
		text: "La casa de Sergio Carreon",
		href: "https://maps.google.com",
	},
	{
		icon: Clock,
		text: "Lun - Vie: 8:00 AM - 6:00 PM",
	},
];

const socialLinks = [
	{
		icon: Facebook,
		href: "https://www.facebook.com/moldprodynamics",
		label: "Facebook",
	},
	{
		icon: Linkedin,
		href: "https://www.linkedin.com/company/moldprodynamics/",
		label: "LinkedIn",
	},
];

export default function Footer() {
	return (
		<footer className="bg-black text-blue-400 py-12 relative">
			<div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-5 mix-blend-overlay" />
			
			<div className="container mx-auto px-4 relative">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					{/* Logo y Redes Sociales */}
					<div className="space-y-6">
						<Link href="#home" className="flex items-center">
							<Image
								src="/images/logo.png"
								alt="MoldPro Logo"
								width={50}
								height={50}
								className="mr-2"
							/>
							<span className="font-primary text-2xl">MoldPro</span>
						</Link>
						<div className="flex items-center space-x-6">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-400/60 hover:text-blue-300 transition-colors"
									aria-label={social.label}>
									<social.icon className="w-6 h-6" />
								</a>
							))}
						</div>
					</div>

					{/* Contacto */}
					<div>
						<h3 className="text-blue-400 font-secondary text-lg mb-6">Contacto</h3>
						<ul className="space-y-4">
							{contactInfo.map((item, index) => (
								<li key={index} className="flex items-start space-x-4">
									<item.icon className="w-6 h-6 text-blue-400/60 mt-0.5" />
									{item.href ? (
										<a
											href={item.href}
											className="text-blue-400/80 hover:text-blue-300 transition-colors font-tertiary text-base">
											{item.text}
										</a>
									) : (
										<span className="text-blue-400/80 font-tertiary text-base">
											{item.text}
										</span>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Línea divisoria */}
				<div className="w-full h-[1px] bg-gradient-to-r from-blue-500/5 via-blue-500/30 to-blue-500/5 my-8" />

				{/* Copyright */}
				<div className="text-center">
					<p className="text-blue-400/60 font-tertiary text-sm">
						© {new Date().getFullYear()} MoldPro. Todos los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
