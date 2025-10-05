import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Homepage from "./Homepage";
import { MemoryRouter } from "react-router-dom";

describe("home page render", () => {
	it("renders the page", () => {
		const { asFragment } = render(
			<MemoryRouter>
				<Homepage />
			</MemoryRouter>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
