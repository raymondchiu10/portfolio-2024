import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "./About";

describe("about component render", () => {
	it("renders the about component header", () => {
		render(<About />);
		const headerElement = screen.getByText("Projects I have worked on:");
		expect(headerElement).toBeInTheDocument();
	});

	it("rendered the carousel", () => {
		const { container } = render(<About />);
		const carousel = container.querySelector(".carousel");
		expect(carousel).toBeInTheDocument();
	});
});
