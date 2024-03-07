export async function getSynonym(word: string = "Hello"): Promise<string> {
	let testWord = "Hello";
	const endpoint = `https://api.api-ninjas.com/v1/thesaurus?word=${word}`;
	try {
		const res = await fetch(endpoint);
		console.log(res);
	} catch (err) {

	} finally {
		return testWord;
	}
}