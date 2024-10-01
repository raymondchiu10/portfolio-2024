import { fileNameParserJpg } from "../../../shared/fileNameParserJpg";
import lolChampionViewer from "src/images/jpg/lol-champion-viewer.jpg";
import lolChampionViewerwebp from "src/images/webp/lol-champion-viewer.webp";

const LolChampionViewerPage = () => {
	const { altString, projectName } = fileNameParserJpg(lolChampionViewer);

	return (
		<section className="lol-champion-viewer-page">
			<div className="lol-champion-viewer-page_bg-parallax">
				<picture>
					<source srcSet={lolChampionViewerwebp} type="image/webp" />
					<source srcSet={lolChampionViewer} type="image/jpeg" />
					<img
						src={lolChampionViewer}
						alt={`${altString} Screenshot`}
					/>
				</picture>
			</div>

			<div className="lol-champion-viewer-page_body">
				<div className="lol-champion-viewer-page_body_header">
					<h1>{projectName}</h1>
				</div>

				<div className="lol-champion-viewer-page_body_content">
					<div className="lol-champion-viewer-page_body_content_element">
						<h2>Company & Team</h2>
						<p>
							Lol Champion Viewer is a personal project focusing
							on delivering concise champion information about
							Riot Games intellectual property: League of Legends.
						</p>
						<a
							href="https://lol-champion-viewer.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://lol-champion-viewer.netlify.app/
						</a>
					</div>
					<div className="lol-champion-viewer-page_body_content_element">
						<h2>Project goal</h2>
						<p>
							The target clients are users of league League of
							Legends game. The focus was to create a responsive
							web solution to be able to view champion information
							quickly.
						</p>
					</div>
					<div className="lol-champion-viewer-page_body_content_element">
						<h2>My role</h2>
						<p>
							I was in charge of ideating, developing, and
							launching this project successfully online for
							public consumption.
						</p>
						<p>
							I used the Riot Developer Data Dragon API endpoints
							to parse data and display information in an
							organized user interface.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LolChampionViewerPage;
