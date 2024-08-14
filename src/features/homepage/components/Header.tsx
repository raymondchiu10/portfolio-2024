import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Header() {
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
					{/* <Link to="/">Contact</Link> */}
					<a
						href="https://www.linkedin.com/in/rachiu"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div>
							<FaLinkedinIn />
						</div>
					</a>
				</div>
			</div>
		</header>
	);
}
