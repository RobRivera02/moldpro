"use client";

export function Contact() {
	return (
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
	);
}
