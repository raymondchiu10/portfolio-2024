import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Homepage from "./Homepage";

describe("home page render", () => {
	it("renders the page", () => {
		const { asFragment } = render(<Homepage />);
		expect(asFragment()).toMatchSnapshot();
	});
});
