import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("hero component render", () => {
	it("renders the hero component header", () => {
		render(<Hero />);
		const headerElement = screen.getByText("Hey there, I'm Raymond");
		expect(headerElement).toBeInTheDocument();
	});
});
