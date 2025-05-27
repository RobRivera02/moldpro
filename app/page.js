import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Contact } from "@/components/home/Contact";

import { Carousel } from "@/components/home/Carousel";

import Footer from "@/components/Footer";
import { About } from "@/components/home/About";
import { Navbar } from "@/components/Navbar";


export default function Home() {
	return (
		<main className="min-h-screen bg-[#4284BA] text-white">
			<Navbar />
			<section id="home">
				<Hero />
			</section>
			<section id="about">
				<About />
			</section>
			<Carousel />
			

			
			
			
			<section id="contact">
				<Contact />
			</section>
			<Footer />
		</main>
	);
}
