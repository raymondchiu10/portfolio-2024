import { describe, it, expect } from "vitest";
import { fileNameParserJpg } from "./fileNameParserJpg";

describe("fileNameParserJpg", () => {
	it("parses a typical cloudinary jpg path with base and project name", () => {
		const input =
			"https://res.cloudinary.com/demo/image/upload/jpg/sets/frameone_homepage_banner.jpg";
		expect(fileNameParserJpg(input)).toEqual({
			altString: "frameone homepage project",
			baseProject: "frameone",
			projectName: "homepage",
		});
	});

	it("handles Netlify/Next hashed filenames (dot-hash before .jpg)", () => {
		const input = "/_next/static/media/frameone_homepage.9f7b5c3.jpg";
		expect(fileNameParserJpg(input)).toEqual({
			altString: "frameone homepage project",
			baseProject: "frameone",
			projectName: "homepage",
		});
	});

	it("handles hashed filenames with dot hash (static/media)", () => {
		const input =
			"https://cdn.example.com/static/media/rxtome_dashboard.abcdef12.jpg";
		expect(fileNameParserJpg(input)).toEqual({
			altString: "rxtome dashboard project",
			baseProject: "rxtome",
			projectName: "dashboard",
		});
	});

	it("parses when project name is missing (no underscore)", () => {
		const input =
			"https://res.cloudinary.com/demo/image/upload/jpg/sets/expopulus.jpg";
		expect(fileNameParserJpg(input)).toEqual({
			altString: "expopulus project",
			baseProject: "expopulus",
			projectName: "expopulus",
		});
	});

	it("removes trailing dash-suffixes inserted for optimization", () => {
		const input =
			"https://res.cloudinary.com/demo/image/upload/jpg/sets/lolchamps_gallery-xyz123.jpg";
		expect(fileNameParserJpg(input)).toEqual({
			altString: "lolchamps gallery project",
			baseProject: "lolchamps",
			projectName: "gallery",
		});
	});

	it("handles filenames with _v2-optimized suffixes", () => {
		const input =
			"https://cdn.example.com/assets/jpg/sets/rxtome_dashboard_v2-optimized.jpg";
		expect(fileNameParserJpg(input)).toEqual({
			altString: "rxtome dashboard project",
			baseProject: "rxtome",
			projectName: "dashboard",
		});
	});

	it("returns empty fields for input with no .jpg extension", () => {
		const input =
			"https://cdn.example.com/assets/images/jpg/sets/frameone_homepage_banner";
		expect(fileNameParserJpg(input)).toEqual({
			altString: "",
			baseProject: "",
			projectName: "",
		});
	});

	it("handles empty string input safely", () => {
		expect(fileNameParserJpg("")).toEqual({
			altString: "",
			baseProject: "",
			projectName: "",
		});
	});
});
