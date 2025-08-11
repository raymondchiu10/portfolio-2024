import { fileNameParserJpg } from "../../../shared/fileNameParserJpg";

import stockOverflow from "src/images/jpg/stockoverflow.jpg";
import expopulus from "src/images/jpg/expopulus.jpg";
import frameOne1 from "src/images/jpg/frameonesoftware.jpg";
import rxToMe from "src/images/jpg/rxtome.jpg";
import xaiGames1 from "src/images/jpg/xaigames.jpg";
import lolChampionViewer from "src/images/jpg/lolchampionviewer.jpg";

import stockOverflowwebp from "src/images/webp/stockoverflow.webp";
import expopuluswebp from "src/images/webp/expopulus.webp";
import frameOne1webp from "src/images/webp/frameonesoftware.webp";
import rxToMewebp from "src/images/webp/rxtome.webp";
import xaiGames1webp from "src/images/webp/xaigames.webp";
import lolChampionViewerwebp from "src/images/webp/lolchampionviewer.webp";
import { useNavigate } from "react-router-dom";

const imageArray = [
	stockOverflow,
	expopulus,
	xaiGames1,
	frameOne1,
	lolChampionViewer,
	rxToMe,
];

const imageArrayWebp = [
	stockOverflowwebp,
	expopuluswebp,
	xaiGames1webp,
	frameOne1webp,
	lolChampionViewerwebp,
	rxToMewebp,
];

const About = () => {
	const navigate = useNavigate();

	const createSlide = (item: string, index: number) => {
		const { altString, baseProject, projectName } = fileNameParserJpg(item);

		const navigationHelper = () => {
			navigate({
				pathname: "/projects/" + baseProject,
				hash: projectName !== baseProject ? projectName : undefined,
			});
		};

		return (
			<article
				key={altString}
				className="about__card-item"
				onClick={navigationHelper}
			>
				<picture>
					<source srcSet={imageArrayWebp[index]} type="image/webp" />
					<source srcSet={item} type="image/jpeg" />
					<img src={item} alt={`${altString} Screenshot`} />
				</picture>
			</article>
		);
	};

	return (
		<section className="about">
			<div className="about__container">
				<h3 className="about__header">Projects I have worked on:</h3>
			</div>

			<div className="about__card">{imageArray.map(createSlide)}</div>
		</section>
	);
};

export default About;
