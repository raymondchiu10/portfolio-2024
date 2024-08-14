import About from "./components/About";
import { Hero } from "./components/Hero";

export function Homepage() {
	return (
		<section className="homepage">
			<Hero />
			<About />
		</section>
	);
}
