export const fileNameParserJpg = (item: string) => {
	if (!item) {
		return { altString: "", baseProject: "", projectName: "" };
	}

	const ext = "jpg";
	const lower = item.toLowerCase();
	const extIndex = lower.lastIndexOf(`.${ext}`);
	if (extIndex === -1) {
		return { altString: "", baseProject: "", projectName: "" };
	}

	// find last slash before the extension to isolate the filename part
	const lastSlash = item.lastIndexOf("/", extIndex);
	const rawName = item.slice(lastSlash + 1, extIndex); // e.g. "frameone_homepage.9f7b5c3" or "frameone_homepage_banner"

	// remove trailing hash/suffixes:
	// - "-something" (dash suffix)
	// - ".hash" (dot hash inserted by bundlers)
	// - trailing _v{number} and anything after (like _v2-optimized)
	let cleaned = rawName.replace(/[-.][A-Za-z0-9]+$/i, "");
	cleaned = cleaned.replace(/_v\d+.*$/i, "");

	const coreName = cleaned.split("/").pop() ?? "";

	if (!coreName) {
		return { altString: "", baseProject: "", projectName: "" };
	}

	// We only need the first two underscore segments: baseProject and projectName (if present)
	const [baseProjectRaw, projectNameRaw] = coreName.split("_");
	const baseProject = baseProjectRaw ?? "";
	const projectName = projectNameRaw ?? baseProject;

	const altString = projectNameRaw
		? `${baseProject} ${projectNameRaw} project`
		: `${baseProject} project`;

	return { altString, baseProject, projectName };
};
