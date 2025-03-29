import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Contact } from "@/components/home/Contact";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="min-h-screen bg-[#4284BA] text-white">
			<Hero />
			<Features />
			<Contact />
			<Footer />
		</main>
	);
}
