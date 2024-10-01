import { fileNameParserJpg } from "../../../shared/fileNameParserJpg";
import frameOne1 from "src/images/jpg/frameonesoftware.jpg";
import frameOne2 from "src/images/jpg/frameonesoftware2.jpg";
import frameOne1webp from "src/images/webp/frameonesoftware.webp";
import frameOne2webp from "src/images/webp/frameonesoftware2.webp";

const FrameOneSoftwarePage = () => {
	const { altString } = fileNameParserJpg(frameOne1);

	return (
		<section className="frame-one-software-page">
			<div className="frame-one-software-page_bg-parallax">
				<picture>
					<source srcSet={frameOne2webp} type="image/webp" />
					<source srcSet={frameOne2} type="image/jpeg" />
					<img src={frameOne2} alt={`${altString} Screenshot`} />
				</picture>
			</div>

			<div className="box-shadow">
				<div className="frame-one-software-page_summary">
					<div className="frame-one-software-page_summary_header">
						<h1>Frame One Software</h1>
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
								I used a multitude of technologies and
								libraries, such as React, React Native, MongoDB,
								Express, Nodejs, D3js, Google API suites, as
								well as many other frontend UI libraries to name
								a few.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="frame-one-software-page_bg-parallax-2">
				<picture>
					<source srcSet={frameOne1webp} type="image/webp" />
					<source srcSet={frameOne1} type="image/jpeg" />
					<img src={frameOne1} alt={`${altString} Screenshot`} />
				</picture>
			</div>

			<div className="frame-one-software-page_tech">
				<div className="frame-one-software-page_tech_container">
					<h2>Project Summaries</h2>
					<summary className="frame-one-software-page_tech_summary">
						<p>
							Since the Frame One Software Company was comprised
							of multiple projects spanning various companies and
							contracts that I helped develop over the years, I
							will give a brief summary of some projects that I
							have participated in.
						</p>
					</summary>

					<div className="frame-one-software-page_tech_projects">
						<div>
							<h3>Revyva</h3>
							<p>
								Revyva is a fitness training scheduling web
								application with accompanying mobile React
								Native application. This project connected
								clients and trainers to a shared calendar to
								book visits with each other. This service used a
								log in system that tracked information on a
								mongoDB server as well as incorporated push
								notifications via SMS as well as SMS services.
							</p>
						</div>

						<div>
							<h3>ShackHacker</h3>
							<p>
								React Native project that documents core samples
								of drilling sites for geographic analysis. Used
								the Google Places and Maps API, as well as
								storing image and text data on a mongoDB server.
								The project also used a login service to
								identify user data being entered to the mobile
								app.
							</p>
						</div>

						<div>
							<h3>Netcoins</h3>
							<p>
								Anoter React Native cryptocurrentcy exange
								mobile application with an accompanying web
								application. This project used sockets to pull
								live data from a crypto exchange as well as
								displayed live data via a graph visualization. I
								played a contractor role to update and optimize
								frontend mobile code as well as address bugs
								that arised from user input.
							</p>
						</div>

						<div>
							<h3>CEO.ca</h3>
							<p>
								This project was a website that displayed
								investment information for industry
								professionals. There was a preexisting codebase
								that was to be maintained and improved upon by
								making external tools and code quality
								imporovements for future developers.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FrameOneSoftwarePage;
