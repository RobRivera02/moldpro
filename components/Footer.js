"use client";

import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const navigation = [
	{ name: "Inicio", href: "#" },
	{ name: "Servicios", href: "#" },
	{ name: "Contacto", href: "#" },
];

export default function Footer() {
	return (
		<footer className="bg-azure text-white py-12">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="text-bisque font-secondary text-2xl mb-4 md:mb-0">
						Círculo Cafetero
					</div>
					<nav className="flex gap-8 font-secondary">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="hover:text-bisque transition-colors">
								{item.name}
							</a>
						))}
					</nav>
				</div>
				<div className="mt-8 text-center text-bisque/80 font-secondary text-sm">
					© {new Date().getFullYear()} Círculo Cafetero. Todos los derechos
					reservados.
				</div>
			</div>
		</footer>
	);
}
