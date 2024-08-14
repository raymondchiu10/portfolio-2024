import { Hero } from "../components/Hero";
import About from "../components/About";

export function Homepage() {
	return (
		<section className="homepage">
			<Hero />
			<About />
		</section>
	);
}
