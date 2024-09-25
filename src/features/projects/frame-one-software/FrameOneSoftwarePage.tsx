import { fileNameParserJpg } from "../../../shared/fileNameParserJpg";
import frameOne1 from "src/images/jpg/frame-one-software.jpg";
import frameOne2 from "src/images/jpg/frame-one-software-2.jpg";
import frameOne1webp from "src/images/webp/frame-one-software.webp";
import frameOne2webp from "src/images/webp/frame-one-software-2.webp";

const FrameOneSoftwarePage = () => {
	const { altString, projectName } = fileNameParserJpg(frameOne1);

	return (
		<section className="frame-one-software-page">
			<div className="frame-one-software-page_bg-parallax">
				<picture>
					<source srcSet={frameOne1webp} type="image/webp" />
					<source srcSet={frameOne1} type="image/jpeg" />
					<img src={frameOne1} alt={`${altString} Screenshot`} />
				</picture>
			</div>

			<div className="box-shadow">
				<div className="frame-one-software-page_summary">
					<div className="frame-one-software-page_summary_header">
						<h1>{projectName}</h1>
					</div>

					<div className="frame-one-software-page_summary_content">
						<div className="frame-one-software-page_summary_content_element">
							<h2>Company & Team</h2>
							<p>
								Frame One Software (defunct) is a all in one
								development company that builds websites, apps &
								software that provide solutions and create
								tangible results for their clients.
							</p>
							<a
								href="https://www.linkedin.com/company/frame-one-software-inc/posts/?feedView=images"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://www.linkedin.com/company/frame-one-software-inc
							</a>
						</div>
						<div className="frame-one-software-page_summary_content_element">
							<h2>Project goal</h2>
							<p>
								The goals will vary from product and solutions,
								and also vary depending on the development stage
								that each client is at when joining each
								project.
							</p>
						</div>
						<div className="frame-one-software-page_summary_content_element">
							<h2>My role</h2>
							<p>
								As a fullstack developer in charge of ideating,
								developing, and launching this project
								successfully online for public consumption.
							</p>
							<p>
								I used the Riot Developer Data Dragon API
								endpoints to parse data and display information
								in an organized user interface.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="frame-one-software-page_bg-parallax-2">
				<picture>
					<source srcSet={frameOne2webp} type="image/webp" />
					<source srcSet={frameOne2} type="image/jpeg" />
					<img src={frameOne2} alt={`${altString} Screenshot`} />
				</picture>
			</div>
		</section>
	);
};

export default FrameOneSoftwarePage;
