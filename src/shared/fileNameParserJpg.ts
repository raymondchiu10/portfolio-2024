export const fileNameParserJpg = (item: string) => {
	const startWord = "jpg/";
	const startString = item.indexOf(startWord);
	const endString = item.indexOf(".jpg");
	const altString = item
		.slice(startString + startWord.length, endString)
		.split("_")
		.join(" ");

	const baseProject =
		"/projects/" +
		item.slice(startString + startWord.length, endString).split("_")[0];

	const projectName = item.slice(startString + startWord.length, endString).split("_")[0].split("-").join(" ");

	return {
		altString,
		baseProject,
		projectName
	}
}
