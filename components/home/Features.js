"use client";

import { Card } from "@/components/ui/card";

const features = [
	{
		title: "Café de Calidad",
		description: "Selección premium de granos de café de las mejores regiones.",
	},
	{
		title: "Equipamiento",
		description: "Maquinaria y accesorios profesionales para tu negocio.",
	},
	{
		title: "Asesoría",
		description: "Consultoría experta para optimizar tu operación.",
	},
];

export function Features() {
	return (
		<section className="bg-white py-24">
			<div className="container mx-auto px-4">
				<h2 className="text-azure text-4xl md:text-5xl font-primary text-center mb-16">
					Nuestros Servicios
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<Card key={index} className="p-6 bg-bisque/10">
							<h3 className="text-azure font-secondary text-2xl mb-4">
								{feature.title}
							</h3>
							<p className="text-gray-600 font-tertiary">
								{feature.description}
							</p>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
