"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
	return (
		<section className="relative h-screen w-full overflow-hidden bg-black">
			{/* Background Image with Parallax Effect */}
			<div className="absolute inset-0 z-0">
				<Image
					src="https://images.unsplash.com/photo-1627807452502-0c8329fc710b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Maquinado industrial"
					fill
					className="object-cover brightness-[0.4] scale-110 transition-all duration-700 hover:scale-105"
					priority
					quality={100}
				/>
				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
			</div>

			{/* Animated Background Elements */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
				<div className="absolute top-40 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
				<div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
			</div>

			{/* Content */}
			<motion.div
				className="relative z-10 h-full flex items-center justify-center"
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { duration: 0.8 },
				}}>
				<div className="container mx-auto px-4">
					<div className="flex flex-col items-center text-center gap-8">
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{
								opacity: 1,
								scale: 1,
							}}
							transition={{
								duration: 0.8,
								delay: 0.7,
							}}>
							<motion.h1 className="font-primary text-7xl md:text-9xl text-blue-400 drop-shadow-lg relative">
								MoldPro
								<motion.span
									initial={{ width: 0 }}
									animate={{ width: "100%" }}
									transition={{ duration: 0.8, delay: 1.2 }}
									className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 rounded-full"
								/>
							</motion.h1>
						</motion.div>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{
								opacity: 1,
								y: 0,
							}}
							transition={{ duration: 0.8, delay: 1 }}
							className="font-tertiary text-2xl md:text-4xl max-w-3xl text-blue-400/90 drop-shadow-md leading-relaxed">
							Impulsando la innovación industrial con precisión y propósito
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{
								opacity: 1,
								y: 0,
							}}
							transition={{ duration: 0.8, delay: 1.2 }}
							className="mt-8">
							<Button
								variant="outline"
								className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/20 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105">
								Conoce Nuestros Servicios
							</Button>
						</motion.div>
					</div>
				</div>
			</motion.div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
				}}
				transition={{ delay: 1.8 }}
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
					<div className="w-8 h-8 border-r-4 border-b-4 border-blue-400 rotate-45 transform -translate-y-1/2" />
				</motion.div>
			</motion.div>
		</section>
	);
}
