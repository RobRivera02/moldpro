"use client";

import { motion } from "framer-motion";
import { Settings, Wrench, Lightbulb, Shield, Tool, Users } from "lucide-react";
import Image from "next/image";

const features = [
	{
		title: "Maquinado CNC",
		description:
			"Tecnología CNC de última generación para maquinados de alta precisión y complejidad, garantizando la máxima calidad en cada pieza.",
		icon: "Settings",
		details: ["Control numérico avanzado", "Precisión micrométrica", "Software CAD/CAM"],
		image:
			"https://images.unsplash.com/photo-1711418235334-8895331a6cf9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Fresado y Torneado",
		description:
			"Servicios especializados de fresado y torneado para piezas de alta precisión, utilizando maquinaria de última generación.",
		icon: "Wrench",
		details: ["Fresado 5 ejes", "Torneado CNC", "Control dimensional"],
		image:
			"https://images.unsplash.com/photo-1581093458791-9d15482442f6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Tratamiento Térmico",
		description:
			"Servicios especializados de templado y tratamiento térmico para mejorar las propiedades mecánicas de los materiales.",
		icon: "Lightbulb",
		details: [
			"Templado y revenido",
			"Endurecimiento superficial",
			"Control de temperatura",
		],
		image:
			"https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Control de Calidad",
		description:
			"Rigurosos procesos de control de calidad y metrología para garantizar la precisión y confiabilidad de cada pieza.",
		icon: "Shield",
		details: [
			"Inspección dimensional",
			"Pruebas de dureza",
			"Certificación de calidad",
		],
		image:
			"https://images.unsplash.com/photo-1581093458791-9d15482442f6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Asesoría Técnica",
		description:
			"Asesoría especializada en selección de materiales, procesos y optimización de diseños para tu proyecto.",
		icon: "Tool",
		details: [
			"Selección de materiales",
			"Optimización de procesos",
			"Soporte técnico",
		],
		image:
			"https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Servicio al Cliente",
		description:
			"Atención personalizada y soporte continuo para garantizar la satisfacción total de nuestros clientes.",
		icon: "Users",
		details: [
			"Atención personalizada",
			"Seguimiento de proyectos",
			"Soporte continuo",
		],
		image:
			"https://images.unsplash.com/photo-1581093458791-9d15482442f6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

const IconComponent = ({ name, className }) => {
	const icons = {
		Settings,
		Wrench,
		Lightbulb,
		Shield,
		Tool,
		Users,
	};

	const Icon = icons[name];
	return Icon ? <Icon className={className} /> : null;
};

export function Features() {
	const MainFeature = features[0];
	const SecondaryFeature = features[1];
	const GridFeatures = features.slice(2);

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
						Nuestros Servicios
					</h2>
					<div className="w-24 h-[2px] bg-gradient-to-r from-blue-500/5 via-blue-500/30 to-blue-500/5 mx-auto mb-8" />
					<p className="text-blue-400/80 max-w-2xl mx-auto font-tertiary text-lg leading-relaxed">
						Descubre cómo podemos ayudarte a llevar tu proyecto al siguiente nivel
						con nuestros servicios especializados en maquinado industrial.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
					{/* Feature 1 - Large */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="lg:col-span-8 relative group overflow-hidden min-h-[600px] rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
						<Image
							src={MainFeature.image}
							alt={MainFeature.title}
							fill
							className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85] hover:brightness-[0.95]"
							quality={90}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500" />
						<div className="absolute bottom-0 left-0 p-10 w-full backdrop-blur-[1px]">
							<div className="bg-blue-500/10 p-4 rounded-xl backdrop-blur-sm border border-blue-500/10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
								<IconComponent name={MainFeature.icon} className="w-12 h-12 text-blue-400 mb-6" />
								<h3 className="text-blue-400 font-secondary text-3xl mb-4 tracking-wide">
									{MainFeature.title}
								</h3>
								<p className="text-blue-400/90 font-tertiary text-lg mb-6 leading-relaxed max-w-xl">
									{MainFeature.description}
								</p>
								<ul className="space-y-3">
									{MainFeature.details.map((detail, idx) => (
										<li
											key={idx}
											className="flex items-center text-blue-400/80 font-tertiary">
											<span className="w-1 h-1 bg-blue-400/60 rounded-full mr-3" />
											{detail}
										</li>
									))}
								</ul>
							</div>
						</div>
					</motion.div>

					{/* Feature 2 - Vertical */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="lg:col-span-4 relative group overflow-hidden min-h-[600px] rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
						<Image
							src={SecondaryFeature.image}
							alt={SecondaryFeature.title}
							fill
							className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85] hover:brightness-[0.95]"
							quality={90}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500" />
						<div className="absolute bottom-0 left-0 p-8 w-full">
							<div className="bg-blue-500/10 p-4 rounded-xl backdrop-blur-sm border border-blue-500/10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
								<IconComponent name={SecondaryFeature.icon} className="w-10 h-10 text-blue-400 mb-4" />
								<h3 className="text-blue-400 font-secondary text-2xl mb-3 tracking-wide">
									{SecondaryFeature.title}
								</h3>
								<p className="text-blue-400/90 font-tertiary mb-4 leading-relaxed">
									{SecondaryFeature.description}
								</p>
							</div>
						</div>
					</motion.div>

					{/* Features 3-6 - Grid */}
					{GridFeatures.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 * (index + 2) }}
							viewport={{ once: true }}
							className="lg:col-span-6 relative group overflow-hidden min-h-[400px] rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
							<Image
								src={feature.image}
								alt={feature.title}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85] hover:brightness-[0.95]"
								quality={90}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500" />
							<div className="absolute bottom-0 left-0 p-8 w-full">
								<div className="bg-blue-500/10 p-4 rounded-xl backdrop-blur-sm border border-blue-500/10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
									<IconComponent name={feature.icon} className="w-10 h-10 text-blue-400 mb-4" />
									<h3 className="text-blue-400 font-secondary text-2xl mb-3 tracking-wide">
										{feature.title}
									</h3>
									<p className="text-blue-400/90 font-tertiary leading-relaxed">
										{feature.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
