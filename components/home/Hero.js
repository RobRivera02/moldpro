"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
	return (
		<section className="relative h-screen w-full overflow-hidden">
			{/* Background Image with Parallax Effect */}
			<div className="absolute inset-0 z-0">
				<Image
					src="https://images.unsplash.com/photo-1619860703338-9c70a1af6a63?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Café de fondo"
					fill
					className="object-cover brightness-[0.3] scale-110"
					priority
				/>
				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
			</div>

			{/* Animated Background Elements */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-20 left-10 w-72 h-72 bg-lightSea/10 rounded-full blur-3xl animate-blob" />
				<div className="absolute top-40 right-10 w-72 h-72 bg-[#FFE4C7]/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
				<div className="absolute bottom-20 left-1/2 w-72 h-72 bg-lightSea/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
			</div>

			{/* Content */}
			<div className="relative z-10 h-full flex items-center justify-center">
				<div className="container mx-auto px-4">
					<div className="flex flex-col items-center text-center gap-8">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="font-primary text-6xl md:text-8xl text-[#FFE4C7] drop-shadow-lg relative">
							Círculo Cafetero
							<span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-lightSea rounded-full" />
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="font-tertiary text-xl md:text-3xl max-w-2xl text-[#FFE4C7]/90 drop-shadow-md">
							Proveeduría para bebidas - Tu socio confiable en el mundo del café
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="flex flex-col items-center gap-4">
							<Button className="bg-lightSea hover:bg-lightSea/90 text-white text-lg px-12 py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
								<span className="relative z-10">Descubre Más</span>
								<div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
							</Button>
							<div className="flex gap-2">
								<div className="w-2 h-2 rounded-full bg-lightSea animate-bounce" />
								<div className="w-2 h-2 rounded-full bg-lightSea animate-bounce animation-delay-200" />
								<div className="w-2 h-2 rounded-full bg-lightSea animate-bounce animation-delay-400" />
							</div>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
				<motion.div
					animate={{
						y: [0, 10, 0],
						opacity: [1, 0.5, 1],
					}}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="relative">
					<div className="w-8 h-8 border-r-4 border-b-4 border-[#FFE4C7] rotate-45 transform -translate-y-1/2" />
				</motion.div>
			</motion.div>
		</section>
	);
}
