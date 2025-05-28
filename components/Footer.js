"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Clock, Facebook, Linkedin } from "lucide-react";

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
		<footer className="w-full bg-black border-t-2 border-[#ff8000] py-10 px-4">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
				<div className="flex flex-col items-center md:items-start gap-3">
					<Image src="/images/moldpro/pro.jpg" alt="MoldPro Logo" width={60} height={60} />
					<span className="text-2xl font-bold text-white tracking-widest uppercase font-primary">MOLDPRO MACHINE & TOOLS</span>
					<div className="flex gap-4 mt-2">
						{socialLinks.map((link) => (
							<a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-[#ff8000] hover:text-white text-2xl transition-colors duration-200">
								<link.icon />
							</a>
						))}
					</div>
				</div>
				<div className="text-white text-center md:text-right font-secondary">
					<p className="mb-2">Tel: <span className="text-[#ff8000] font-bold">+52 614 353 0810</span></p>
					<p className="mb-2">Email: <span className="text-[#ff8000] font-bold">contacto@moldpro.com</span></p>
					<p className="mb-2">Dirección: <span className="text-[#ff8000] font-bold">C. Yeseros #215, Col. 2 de Junio
					C.P. 31134 Chihuahua, Chih.</span></p>
					<p className="text-xs text-[#ff8000] mt-4">&copy; {new Date().getFullYear()} MoldPro. Todos los derechos reservados.</p>
				</div>
			</div>
		</footer>
	);
}
