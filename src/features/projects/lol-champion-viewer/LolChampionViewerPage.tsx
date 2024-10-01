import { fileNameParserJpg } from "../../../shared/fileNameParserJpg";
import lolChampionViewer from "src/images/jpg/lolchampionviewer.jpg";
import lolChampionViewerwebp from "src/images/webp/lolchampionviewer.webp";

const LolChampionViewerPage = () => {
	const { altString } = fileNameParserJpg(lolChampionViewer);

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

			<div className="box-shadow">
				<div className="lol-champion-viewer-page_body">
					<div className="lol-champion-viewer-page_body_header">
						<h1>LOL Champion Viewer</h1>
					</div>

					<div className="lol-champion-viewer-page_body_content">
						<div className="lol-champion-viewer-page_body_content_element">
							<h2>Company & Team</h2>
							<p>
								Lol Champion Viewer is a personal project
								focusing on delivering concise champion
								information about Riot Games intellectual
								property: League of Legends.
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
								Legends game. The focus was to create a
								responsive web solution to be able to view
								champion information quickly.
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
								I used the Riot Developer Data Dragon API
								endpoints to parse data and display information
								in an organized user interface.
							</p>
						</div>
					</div>

					<div className="lol-champion-viewer-page_body_tech">
						<h2>Technical Breakdown</h2>
						<summary>
							<p>
								This project shows off League of Legends
								champions as well as displays interesting
								information about each champion.{" "}
							</p>
							<p>
								This project is built on React working in Vite
								with HMR and some ESLint rules.
							</p>
						</summary>

						<ul>
							<li>
								<a
									href="https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md"
									target="_blank"
									rel="noopener noreferrer"
								>
									@vitejs/plugin-react
								</a>
								{" uses "}
								<a
									href="https://babeljs.io/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{"Babel"}
								</a>{" "}
								{" for Fast Refresh."}
							</li>

							<li>
								{"This project also uses "}
								<a
									href="https://sass-lang.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									SCSS
								</a>
								{" for css management"}
							</li>

							<li>
								{"For routing, the project uses "}
								<a
									href="https://reactrouter.com/en/main"
									target="_blank"
									rel="noopener noreferrer"
								>
									React Router Dom
								</a>
							</li>

							<li>
								{
									"For state management, this project uses a combination of "
								}
								<a
									href="https://tanstack.com/query/latest"
									target="_blank"
									rel="noopener noreferrer"
								>
									React Query
								</a>
								{" and "}
								<a
									href="https://react.dev/learn/passing-data-deeply-with-context"
									target="_blank"
									rel="noopener noreferrer"
								>
									Context API
								</a>
							</li>

							<li>
								{"For the carousel component, "}
								<a
									href="https://swiperjs.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Swiper
								</a>
								{" was used."}
							</li>
						</ul>

						<p>
							For more information, or to view the github for this
							project, follow{" "}
							<a
								href="https://github.com/raymondchiu10/lol-champion-viewer"
								target="_blank"
								rel="noopener noreferrer"
							>
								this link
							</a>
							.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LolChampionViewerPage;
