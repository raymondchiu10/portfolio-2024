import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";

export function Homepage() {
	return (
		<section className="homepage">
			<Header />
			<Hero />
			<About />
		</section>
	);
}