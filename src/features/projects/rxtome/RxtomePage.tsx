import { fileNameParserJpg } from "../../../shared/fileNameParserJpg";
import rxToMe from "src/images/jpg/rxtome.jpg";
import rxToMewebp from "src/images/webp/rxtome.webp";

const RxtomePage = () => {
	const { altString, projectName } = fileNameParserJpg(rxToMe);

	return (
		<section className="rxtome-page">
			<div className="rxtome-page__bg-parallax">
				<picture>
					<source srcSet={rxToMewebp} type="image/webp" />
					<source srcSet={rxToMe} type="image/jpeg" />
					<img src={rxToMe} alt={`${altString} Screenshot`} />
				</picture>
			</div>

			<div className="box-shadow">
				<div className="rxtome-page__body">
					<div className="rxtome-page__header">
						<h1>{projectName}</h1>
					</div>

					<div className="rxtome-page__content">
						<div className="rxtome-page__content-element">
							<h2>Company & Team</h2>
							<p>
								Prizm Media Inc. is a Lead generation company
								specializing in acquiring medical leads qualify
								for medical delivery goods and services.
							</p>
							<a
								href="https://prizmmedia.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://prizmmedia.com/
							</a>
						</div>
						<div className="rxtome-page__content-element">
							<h2>Project goal</h2>
							<p>
								Rxtome is a mail Order Pharmaceutical
								Reactjs/React Native project from Prizm Media
								Inc. focusing on delivering Durable Medical
								Equipment as well as prescription medication
								across the United States.
							</p>
						</div>
						<div className="rxtome-page__content-element">
							<h2>My role</h2>
							<p>
								I was in charge of ideating, developing, and
								launching this project for public consumption,
								as well as incorporate marketing-centric tools
								that would aid in user acquisition and
								retention.
							</p>
							<p>
								I was also tasked to research HIPAA compliance
								and to make sure that data being housed on the
								servers stayed confidential to HIPAA standards.
							</p>
						</div>
					</div>

					<div className="rxtome-page__tech">
						<h2>Technical Summary</h2>
						<summary>
							<p>
								This project used{" "}
								<a
									href="https://redux.js.org/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Redux
								</a>
								, local and session storage in combination with
								tools such as{" "}
								<a
									href="https://mixpanel.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Mixpanel
								</a>{" "}
								and{" "}
								<a
									href="https://marketingplatform.google.com/about/analytics/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Google Analytics
								</a>{" "}
								to track users across multiple Know Your Client
								(KYC) flows.{" "}
							</p>
							<p>
								This project is built on React and React Native
								for web and mobile respectively. The styling
								used a combination of custom css and{" "}
								<a
									href="https://getbootstrap.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Bootstrap
								</a>
								. The backend was a PHP server hosted on AWS
								housing over 1,000,000 unique user data
								profiles.
							</p>
						</summary>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RxtomePage;
