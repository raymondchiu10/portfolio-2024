import { Link } from "react-router-dom";
import Linkedin from "src/svgs/linkedin.svg?react";

const Header = () => {
	return (
		<header className="header">
			<div className="header_container">
				<Link to={"/"} className="header_container_title">
					<h1>Raymond Chiu</h1>
					<span>Fullstack Web Developer</span>
				</Link>

				<div className="header_container_links">
					<Link to="/">Work</Link>
					<Link to="/about">About</Link>
					<a
						href="https://www.linkedin.com/in/rachiu"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div>
							<Linkedin aria-label="linkedin" />
						</div>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
