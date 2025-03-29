import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
	return (
		<main className="min-h-screen bg-[#4284BA] text-white">
			{/* Hero Section */}
			<section className="container mx-auto px-4 py-24">
				<div className="flex flex-col items-center text-center gap-8">
					<h1 className="font-primary text-6xl md:text-7xl text-[#FFE4C7]">
						Círculo Cafetero
					</h1>
					<p className="font-tertiary text-xl md:text-2xl max-w-2xl text-[#FFE4C7]/90">
						Proveeduría para bebidas - Tu socio confiable en el mundo del café
					</p>
					<Button className="bg-[#2EBFA5] hover:bg-[#2EBFA5]/90 text-white text-lg px-8 py-6 rounded-full">
						Descubre Más
					</Button>
				</div>
			</section>

			{/* Features Section */}
			<section className="bg-white py-24">
				<div className="container mx-auto px-4">
					<h2 className="text-[#4284BA] text-4xl md:text-5xl font-primary text-center mb-16">
						Nuestros Servicios
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<Card className="p-6 bg-[#FFE4C7]/10">
							<h3 className="text-[#4284BA] font-secondary text-2xl mb-4">
								Café de Calidad
							</h3>
							<p className="text-gray-600 font-tertiary">
								Selección premium de granos de café de las mejores regiones.
							</p>
						</Card>
						<Card className="p-6 bg-[#FFE4C7]/10">
							<h3 className="text-[#4284BA] font-secondary text-2xl mb-4">
								Equipamiento
							</h3>
							<p className="text-gray-600 font-tertiary">
								Maquinaria y accesorios profesionales para tu negocio.
							</p>
						</Card>
						<Card className="p-6 bg-[#FFE4C7]/10">
							<h3 className="text-[#4284BA] font-secondary text-2xl mb-4">
								Asesoría
							</h3>
							<p className="text-gray-600 font-tertiary">
								Consultoría experta para optimizar tu operación.
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="bg-[#2EBFA5] py-24">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-white text-4xl md:text-5xl font-primary mb-8">
						Contáctanos
					</h2>
					<p className="text-white/90 font-tertiary text-xl mb-12 max-w-2xl mx-auto">
						¿Listo para llevar tu negocio al siguiente nivel? Estamos aquí para
						ayudarte.
					</p>
					<button className="bg-white text-[#2EBFA5] hover:bg-white/90 text-lg px-8 py-4 rounded-full transition-colors">
						Agenda una Consulta
					</button>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-[#4284BA] text-white py-12">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="text-[#FFE4C7] font-primary text-2xl mb-4 md:mb-0">
							Círculo Cafetero
						</div>
						<div className="flex gap-8 font-tertiary">
							<a href="#" className="hover:text-[#FFE4C7]">
								Inicio
							</a>
							<a href="#" className="hover:text-[#FFE4C7]">
								Servicios
							</a>
							<a href="#" className="hover:text-[#FFE4C7]">
								Contacto
							</a>
						</div>
					</div>
					<div className="mt-8 text-center text-[#FFE4C7]/80 font-tertiary text-sm">
						{new Date().getFullYear()} Círculo Cafetero. Todos los derechos
						reservados.
					</div>
				</div>
			</footer>
		</main>
	);
}
