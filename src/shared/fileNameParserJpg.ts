export const fileNameParserJpg = (item: string) => {
	const startWord = "jpg/";
	const startString = item.indexOf(startWord);
	const endString = item.indexOf(".jpg");

	const baseProject = item
		.slice(startString + startWord.length, endString)
		.split(/sets\/|-.*$/)
		.filter((item) => item !== "")[0]
		.split("_")[0];

	const projectName =
		item
			.slice(startString + startWord.length, endString)
			.split(/sets\/|-.*$/)
			.filter((item) => item !== "")[0]
			.split("_")[1] !== undefined
			? item
					.slice(startString + startWord.length, endString)
					.split(/sets\/|-.*$/)
					.filter((item) => item !== "")[0]
					.split("_")[1]
			: baseProject;

	const altString = `${baseProject} ${
		item
			.slice(startString + startWord.length, endString)
			.split(/sets\/|-.*$/)
			.filter((item) => item !== "")[0]
			.split("_")[1] !== undefined
			? item
					.slice(startString + startWord.length, endString)
					.split(/sets\/|-.*$/)
					.filter((item) => item !== "")[0]
					.split("_")[1]
			: ""
	} project`;

	return {
		altString,
		baseProject,
		projectName,
	};
};
