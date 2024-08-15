import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Header component", () => {
	it("renders the header", () => {
		// Memory router is used because there are Link components in the testing component. they need to be wrapped in a router of some sort to work.
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>,
		);
	});

	it("renders all the navigation links", () => {
		const { container } = render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>,
		);
		const link1 = screen.getByText("Work");
		const link2 = screen.getByText("About");
		const link3 = container.querySelector(
			"a[href='https://www.linkedin.com/in/rachiu']",
		);
		expect(link1).toBeInTheDocument();
		expect(link2).toBeInTheDocument();
		expect(link3).toBeInTheDocument();
	});
});
