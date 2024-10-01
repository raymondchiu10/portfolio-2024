import profile from "src/images/jpg/arizona_profile.jpg";
import profilewebp from "src/images/webp/arizona_profile.webp";

const AboutPage = () => {
	const startDate = 2018;
	const date = new Date().getFullYear();

	return (
		<section className="aboutPage">
			<div className="aboutPage_profile">
				<div className="aboutPage_profile_container">
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

			<h2>Hey there</h2>
			<div className="aboutPage_body">
				<p>
					{
						"I'm a Full Stack Developer with a background in Digital Design and Development, user experience/interface design with a focus on Frontend Development."
					}
				</p>

				<p>{`I have been building my craft in the industry over the last ${Number(date - startDate)}+ years and has had the privilege of working with exceptional companies, such as Frame One Software, Ex Populus, and Xai Games, and many others. I also have experience working with startups and projects such as Netcoins, ShackHacker, and Revyva.`}</p>

				<p>
					{
						"I also enjoy playing disc golf, video games, and enjoying the local restraunts in the area."
					}
				</p>

				<p>
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

				<div className="aboutPage_cta">
					<a
						className="aboutPage_cta_button"
						href="https://drive.google.com/file/d/1w1MU693OvJKYQoN5TJ2hoXP-4u9AYakf/view?usp=sharing"
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
