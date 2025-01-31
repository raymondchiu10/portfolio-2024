import profile from "src/images/jpg/profile_raymond-chiu.jpg";
import profilewebp from "src/images/webp/profile_raymond-chiu.webp";

const AboutPage = () => {
	const startDate = 2018;
	const date = new Date().getFullYear();

	return (
		<section className="aboutPage">
			<div className="aboutPage__profile">
				<div className="aboutPage__profile-container">
					<picture>
						<source srcSet={profilewebp} type="image/webp" />
						<source srcSet={profile} type="image/jpeg" />
						<img
							src={profile}
							alt="Raymond Chiu"
							draggable={false}
						/>
					</picture>
				</div>
			</div>

			<h2 className="aboutPage__header">Hey there!</h2>

			<div className="aboutPage_body">
				<p className="aboutPage_body-content">
					{
						"I'm a Full Stack Developer with a background in Digital Design and Development, user experience/interface design."
					}
				</p>

				<p className="aboutPage_body-content">{`I have been building my craft in the industry over the last ${Number(date - startDate)}+ years and has had the privilege of working with exceptional companies, such as Frame One Software, Ex Populus, and Xai Games, and many others. I also have experience working with startups and projects such as Netcoins, ShackHacker, and Revyva.`}</p>

				<p className="aboutPage_body-content">
					{
						"I also enjoy playing disc golf, video games, and enjoying the local restraunts in the area."
					}
				</p>

				<p className="aboutPage_body-content">
					{
						"You may have noticed that almost all my work is in screenshot form - almost all of my professional work is on private repositories, so if you would like to know more, shoot me a message on my "
					}
					<a
						href="https://www.linkedin.com/in/rachiu/"
						target="_blank"
						rel="noopener noreferrer"
					>
						{"LinkedIn"}
					</a>
				</p>

				<div className="aboutPage__cta">
					<a
						className="aboutPage__cta-button"
						href="https://docs.google.com/document/d/1p9JCsUjgxn9nYOb0TxHlWLPagwbaR5rTnoHuJzXl8CY/edit?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
						draggable={false}
					>
						View Resume
					</a>
				</div>
			</div>
		</section>
	);
};

export default AboutPage;
