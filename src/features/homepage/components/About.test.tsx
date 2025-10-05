import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import About from "./About";

describe("about component render", () => {
	it("renders the about component header", () => {
		render(
			<MemoryRouter>
				<About />
			</MemoryRouter>,
		);
		const headerElement = screen.getByText("Projects I have worked on:");
		expect(headerElement).toBeInTheDocument();
	});
});
