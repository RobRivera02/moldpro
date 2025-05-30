"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Carousel() {
	const clientLogos = [
		{ name: "Cliente 1", logo: "/images/moldpro/l1.png" },
		{ name: "Cliente 2", logo: "/images/moldpro/l2.png" },
		{ name: "Cliente 3", logo: "/images/moldpro/l3.png" },
		{ name: "Cliente 4", logo: "/images/moldpro/l4.png" },
		{ name: "Cliente 5", logo: "/images/moldpro/l5.png" },
		{ name: "Cliente 6", logo: "/images/moldpro/l6.png" },
		{ name: "Cliente 7", logo: "/images/moldpro/l7.png" },
	
	];
	
	// Duplicate the logos for seamless looping
	const logosDuplicated = [...clientLogos, ...clientLogos];
	
	return (
		<section className="py-16 overflow-hidden bg-black relative">
			{/* Background subtle pattern */}
			<div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-5 mix-blend-overlay" />
			
			<div className="container mx-auto px-6 relative mb-8">
				<h2 className="text-[#ff8000] text-3xl md:text-4xl font-primary text-center mb-10 uppercase">
					Nuestros Clientes Y Proyectos
				</h2>
			</div>
			
			{/* Logos marquee - single row */}
			<div className="relative w-full overflow-hidden">
				<motion.div
					className="flex items-center gap-16 py-6"
					animate={{ x: ["0%", "-50%"] }}
					transition={{
						x: {
							repeat: Infinity,
							repeatType: "loop",
							duration: 30,
							ease: "linear",
						},
					}}
				>
					{logosDuplicated.map((client, index) => (
						<div 
							key={index} 
							className="relative flex-shrink-0 w-48 h-32 group"
						>
							<div className="flex items-center justify-center h-full">
								<Image
									src={client.logo}
									alt={client.name}
									width={160}
									height={100}
									className="object-contain w-auto h-full max-h-[100px] filter grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110"
								/>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
} 