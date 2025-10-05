export const fileNameParserJpg = (item: string) => {
	const startWord = "jpg/";
	const endWord = ".jpg";

	const startIndex = item.indexOf(startWord);
	const endIndex = item.indexOf(endWord);

	if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex) {
		return {
			altString: "",
			baseProject: "",
			projectName: "",
		};
	}

	// Extract just the core file name (between "jpg/" and ".jpg")
	const coreName =
		item
			.slice(startIndex + startWord.length, endIndex)
			.split(/sets\/|-.*$/)
			.filter(Boolean)[0] || "";

	// Split on underscore, if present
	const [baseProject, projectNameRaw] = coreName.split("_");

	const projectName = projectNameRaw ?? baseProject;
	const altString = `${baseProject} ${projectNameRaw ? projectNameRaw + " " : ""}project`;

	return { altString, baseProject, projectName };
};
