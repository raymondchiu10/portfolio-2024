import { describe, it, expect, test } from "vitest";
import { render } from "@testing-library/react";
import About from "./About";

test("demo", () => {
	expect(true).toBe(true);
});

describe("render", () => {
	it("renders the main page", () => {
		render(<About />);
		expect(true).toBeTruthy();
	});
});
