import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Contact } from "@/components/home/Contact";
import { Clients } from "@/components/home/Clients";
import { Carousel } from "@/components/home/Carousel";
import { Message } from "@/components/home/Message";
import Footer from "@/components/Footer";
import { About } from "@/components/home/About";
export default function Home() {
	return (
		<main className="min-h-screen bg-[#4284BA] text-white">
			<Hero />
			<About />
			<Carousel />
			<Features />
			<Clients />
			<Message />
			<Contact />
			<Footer />
		</main>
	);
}
