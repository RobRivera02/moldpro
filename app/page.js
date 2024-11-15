"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Send, Paintbrush, Globe, Megaphone } from "lucide-react";
import { translations } from "../translations";

export default function CreativeStudioLandingPage() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [lang, setLang] = useState("en");

	useEffect(() => {
		// Detectar el idioma del navegador
		const browserLang = navigator.language.split("-")[0];
		setLang(translations[browserLang] ? browserLang : "en");

		const handleMouseMove = (e) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const t = translations[lang];

	const fadeIn = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	};

	return (
		<div className="min-h-screen bg-black text-white overflow-hidden">
			{/* Creative Cursor */}
			<motion.div
				className="fixed w-6 h-6 rounded-full bg-[#E80575] mix-blend-difference pointer-events-none z-50"
				animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
				transition={{ type: "spring", stiffness: 500, damping: 28 }}
			/>

			{/* Hero Section */}
			<section className="h-screen flex flex-col items-center justify-center text-center px-4 relative">
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 180, 360],
					}}
					transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
					className="absolute w-full h-full">
					<div className="absolute inset-0 bg-gradient-to-r from-black via-[#E80575] to-black opacity-20" />
				</motion.div>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.5 }}
					className="mb-8 relative">
					<div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
						<div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
							<div className="w-16 h-16 bg-[#E80575] rounded-full"></div>
						</div>
					</div>
					<motion.div
						className="absolute -inset-4 rounded-full border-2 border-white opacity-75"
						animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
						transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
					/>
				</motion.div>
				<motion.h1
					className="text-4xl md:text-6xl font-bold mb-4 relative"
					{...fadeIn}>
					<span className="relative z-10">Cherry Labs</span>
					<motion.span
						className="absolute inset-0 bg-[#E80575] -z-10"
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 0.5, delay: 0.5 }}
					/>
				</motion.h1>
				<motion.p className="text-xl md:text-2xl mb-8" {...fadeIn}>
					{t.tagline}
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 1,
						duration: 1.5,
						repeat: Infinity,
						repeatType: "reverse",
					}}>
					<ChevronDown className="w-8 h-8" />
				</motion.div>
			</section>

			{/* Services Section */}
			<section className="py-20 px-4 relative">
				<motion.h2
					className="text-3xl md:text-4xl font-bold mb-12 text-center"
					{...fadeIn}>
					{t.services.title}
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{[
						{ name: t.services.branding, icon: Paintbrush },
						{ name: t.services.webDesign, icon: Globe },
						{ name: t.services.marketing, icon: Megaphone },
					].map(({ name, icon: Icon }, index) => (
						<motion.div
							key={name}
							className="bg-white hover:bg-[#FFCCE6] text-white p-6 rounded-lg relative overflow-hidden group"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}>
							<motion.div
								className="absolute inset-0 bg-gradient-to-b from-[#E80575] to-transparent"
								initial={{ scaleY: 0 }}
								whileHover={{ scaleY: 1 }}
								transition={{ duration: 0.3 }}
							/>
							<div className="relative z-10">
								<Icon className="w-12 h-12 mb-4 text-[#E80575] group-hover:text-[#FF3399] transition-colors" />
								<h3 className="text-xl font-bold mb-2 text-gray-600 group-hover:text-white transition-colors">
									{name}
								</h3>
								<p className="text-gray-600 group-hover:text-white transition-colors">
									{t.services.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* Portfolio Section */}
			<section className="py-20 px-4 bg-white text-black">
				<motion.h2
					className="text-3xl md:text-4xl font-bold mb-12 text-center"
					{...fadeIn}>
					{t.portfolio.title}
				</motion.h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
					{[...Array(8)].map((_, index) => (
						<motion.div
							key={index}
							className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative group"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ scale: 1.05 }}>
							<img
								src={`/placeholder.svg?height=300&width=300&text=Project ${
									index + 1
								}`}
								alt={`Project ${index + 1}`}
								className="w-full h-full object-cover transition-transform group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
								<p className="text-white text-lg font-bold">
									{t.portfolio.viewProject}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-20 px-4 relative">
				<motion.div
					className="absolute inset-0 bg-[#E80575] opacity-10 -z-10"
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					transition={{ duration: 2, ease: "easeInOut" }}>
					<svg
						className="w-full h-full"
						viewBox="0 0 100 100"
						preserveAspectRatio="none">
						<motion.path
							d="M0,0 Q50,100 100,0 V100 H0 Z"
							fill="none"
							stroke="#E80575"
							strokeWidth="2"
							initial={{ pathLength: 0 }}
							animate={{ pathLength: 1 }}
							transition={{ duration: 2, ease: "easeInOut" }}
						/>
					</svg>
				</motion.div>
				<motion.h2
					className="text-3xl md:text-4xl font-bold mb-12 text-center"
					{...fadeIn}>
					{t.contact.title}
				</motion.h2>
				<motion.form
					className="max-w-md mx-auto"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}>
					<div className="mb-4">
						<input
							type="email"
							placeholder={t.contact.emailPlaceholder}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-3 py-2 bg-white text-black rounded-md"
						/>
					</div>
					<div className="mb-4">
						<textarea
							placeholder={t.contact.messagePlaceholder}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="w-full px-3 py-2 bg-white text-black rounded-md"
							rows={4}
						/>
					</div>
					<button className="w-full bg-[#E80575] hover:bg-[#B8045D] text-white py-2 px-4 rounded-md relative overflow-hidden group">
						<span className="relative z-10">{t.contact.sendButton}</span>
						<motion.div
							className="absolute inset-0 bg-white"
							initial={{ scaleX: 0 }}
							whileHover={{ scaleX: 1 }}
							transition={{ duration: 0.3 }}
						/>
						<Send className="ml-2 h-4 w-4 inline-block relative z-10 " />
					</button>
				</motion.form>
			</section>

			{/* Footer */}
			<footer className="py-8 text-center text-sm relative">
				<motion.div
					className="absolute inset-0 bg-gradient-to-t from-[#E80575] to-transparent opacity-20 -z-10"
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.2 }}
					transition={{ duration: 1 }}
				/>
				<p>
					&copy; {new Date().getFullYear()} Cherry Labs. All rights reserved.
					{t.footer.rights}
				</p>
			</footer>
		</div>
	);
}
