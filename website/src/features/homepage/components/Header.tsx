import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {

}

export function Header({ }: Props) {
	return (
		<header className="header">
			<div className="header_container">
				<div className="header_container_title">
					<h1>Raymond Chiu</h1>
					<span>Fullstack Web Developer</span>
				</div>

				<div className="header_container_links">
					<Link to="/">Work</Link>
					<Link to="/">About</Link>
					<Link to="/">Contact</Link>
					<a href="https://www.linkedin.com/in/rachiu" target="_blank" rel="noopener noreferrer">
						<div>
							<FaLinkedinIn />
						</div>
					</a>
				</div>
			</div>
		</header>
	);
}