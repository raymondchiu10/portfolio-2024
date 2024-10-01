import { fileNameParserJpg } from "../../../shared/fileNameParserJpg";
import xaiGames1 from "src/images/jpg/xai-games.jpg";
import xaiGames2 from "src/images/jpg/xai-games_sentrynodes.jpg";
import xaiGames1webp from "src/images/webp/xai-games.webp";
import xaiGames2webp from "src/images/webp/xai-games_sentrynodes.webp";

const XaiGamesPage = () => {
	const { altString, projectName } = fileNameParserJpg(xaiGames1);

	return (
		<section className="xai-games-page">
			<div className="xai-games-page_bg-parallax">
				<picture>
					<source srcSet={xaiGames1webp} type="image/webp" />
					<source srcSet={xaiGames1} type="image/jpeg" />
					<img src={xaiGames1} alt={`${altString} Screenshot`} />
				</picture>
			</div>

			<div className="box-shadow">
				<div className="xai-games-page_summary">
					<div className="xai-games-page_summary_header">
						<h1>{projectName}</h1>
					</div>

					<div className="xai-games-page_summary_content">
						<div className="xai-games-page_summary_content_element">
							<h2>Company & Team</h2>
							<p>
								Xai Games is a decentralized web3 development company that is building layer2 solutions to bridge the gap between web3 and web2 services.
							</p>
							<a
								href="https://xai.games/"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://xai.games
							</a>
						</div>
						<div className="xai-games-page_summary_content_element">
							<h2>Project goal</h2>
							<p>
								The goal of the project is to build a platform that will allow easy transition into development on the xai ethereum blockchain.
							</p>
						</div>
						<div className="xai-games-page_summary_content_element">
							<h2>My role</h2>
							<p>
								My role in Xai games was a fullstack developer that aided in ideating,
								developing, and driving traffic and interest to the xai platform through frontend development.
							</p>
							<p>
								I used a multitude of technologies and
								libraries, such as React (Vite), GSAP,
								well as various frontend UI libraries.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="xai-games-page_bg-parallax-2">
				<picture>
					<source srcSet={xaiGames2webp} type="image/webp" />
					<source srcSet={xaiGames2} type="image/jpeg" />
					<img src={xaiGames2} alt={`${altString} Screenshot`} />
				</picture>
			</div>

			<div className="xai-games-page_tech">
				<div className="xai-games-page_tech_container">
					<h2>Project Checkpoint</h2>
					<summary className="xai-games-page_tech_summary">
						<p>
							During my time working on Xai Games, the company was developing an electron application to allow users to acquire nodes on the Xai chain to help improve and further stabilize the platform.
						</p>
						<p>For more information on Xai and their protocols can be viewed <a href="https://xai-foundation.gitbook.io/xai-network" target="_blank" rel="noopener noreferrer">here</a>.</p>
					</summary>

				</div>
			</div>
		</section>
	);
};

export default XaiGamesPage;
