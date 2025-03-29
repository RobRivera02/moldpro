import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Contact } from "@/components/home/Contact";
import Footer from "@/components/Footer";
import { About } from "@/components/home/About";
export default function Home() {
	return (
		<main className="min-h-screen bg-[#4284BA] text-white">
			<Hero />
			<About />
			<Features />
			<Contact />
			<Footer />
		</main>
	);
}
