"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
	return (
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
	);
}
