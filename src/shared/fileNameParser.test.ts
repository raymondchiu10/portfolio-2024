import { describe, it, expect } from "vitest";
import { fileNameParserJpg } from "./fileNameParserJpg";

describe("fileNameParserJpg", () => {
	it("parses a standard jpg file path with base and project name", () => {
		const input =
			"https://res.cloudinary.com/demo/image/upload/jpg/sets/frameone_homepage_banner.jpg";
		const result = fileNameParserJpg(input);

		expect(result).toEqual({
			altString: "frameone homepage project",
			baseProject: "frameone",
			projectName: "homepage",
		});
	});

	it("parses when project name is missing (no underscore)", () => {
		const input =
			"https://res.cloudinary.com/demo/image/upload/jpg/sets/expopulus.jpg";
		const result = fileNameParserJpg(input);

		expect(result).toEqual({
			altString: "expopulus project",
			baseProject: "expopulus",
			projectName: "expopulus",
		});
	});

	it("handles extra folders or suffixes correctly", () => {
		const input =
			"https://res.cloudinary.com/demo/image/upload/v123/jpg/sets/lolchamps_gallery-xyz123.jpg";
		const result = fileNameParserJpg(input);

		expect(result).toEqual({
			altString: "lolchamps gallery project",
			baseProject: "lolchamps",
			projectName: "gallery",
		});
	});

	it("returns consistent results even with long URLs", () => {
		const input =
			"https://cdn.example.com/assets/images/jpg/sets/rxtome_dashboard_v2-optimized.jpg";
		const result = fileNameParserJpg(input);

		expect(result).toEqual({
			altString: "rxtome dashboard project",
			baseProject: "rxtome",
			projectName: "dashboard",
		});
	});
});
