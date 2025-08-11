import { fileNameParserJpg } from "../../../shared/fileNameParserJpg";
import stockOverflow from "src/images/jpg/stockoverflow.jpg";
import stockOverflowwebp from "src/images/webp/stockoverflow.webp";

const SotckOverflowPage = () => {
	const { altString } = fileNameParserJpg(stockOverflow);

	return (
		<section className="stock-overflow-page">
			<div className="stock-overflow-page__bg-parallax">
				<picture>
					<source srcSet={stockOverflowwebp} type="image/webp" />
					<source srcSet={stockOverflow} type="image/jpeg" />
					<img src={stockOverflow} alt={`${altString} Screenshot`} />
				</picture>
			</div>

			<div className="box-shadow">
				<div className="stock-overflow-page__body">
					<div className="stock-overflow-page__header">
						<h1>Stock Overflow</h1>
					</div>

					<div className="stock-overflow-page__content">
						<div className="stock-overflow-page__content-element">
							<h2>Overview</h2>
							<p>
								Stock overflow is a Brainstation capstone
								project focusing on showcasing accumulated
								skills and delivering an inventory tracking
								system that uses QR codes to look up product
								information.
							</p>
							<a
								href="https://stock-overflow.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://stock-overflow.netlify.app/
							</a>
							<p>
								for admin test credentials, please{" "}
								<a
									href="mailto:raymondchiu10@gmail.com?subject=Portfolio - Stock Overflow admin request"
									target="_blank"
									rel="noopener noreferrer"
								>
									reach out to me
								</a>
								.
							</p>
						</div>
						<div className="stock-overflow-page__content-element">
							<h2>Project goal</h2>
							<p>
								This app is needed for companies and individuals
								that do not have a centralized way to keep track
								of their inventory, as well as a means to look
								up relevant information in real-time on an item.
								By having a centralized point to get inventory
								count and detailed information, a company can
								scale out and not have to rely on individuals
								for price checking and restocking needs.
							</p>
						</div>
						<div className="stock-overflow-page__content-element">
							<h2>My role</h2>
							<p>
								I was in charge of ideating, developing, and
								deploying this project successfully online as
								proof of concept, and testing by a local
								business.
							</p>
						</div>
					</div>

					<div className="stock-overflow-page__features">
						<h2>Features</h2>
						<summary>
							<p>
								An admin should be able to have a database that
								can add, edit, and remove items from a global
								list so that they can keep track of what they
								have in stock. They should be able to look at
								items in my inventory database, and change
								prices of stock so that users can see updated
								prices on the go.
							</p>
							<br />
							<p>
								Users should be able to look up a specific item
								to see whether or not it is in stock and a
								description of that item so that I can am able
								to make an informed decision on whether or not
								it is the right item I am looking for. As a
								user, I want to be able to look at some kind of
								marker (upc, qr code, or potential image) so
								that I can compare one item to another to make
								sure I am correctly looking at the item that I
								want.
							</p>
						</summary>
					</div>

					<div className="stock-overflow-page__tech">
						<h2>Tech Stack</h2>
						<summary>
							The different technologies used in building this
							project.
						</summary>
						<ul>
							<li>
								<a
									href="https://typescriptlang.rog"
									target="_blank"
									rel="noopener noreferrer"
								>
									Typescript
								</a>
							</li>

							<li>
								<a
									href="https://sass-lang.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									SCSS
								</a>
							</li>

							<li>
								<a
									href="https://nodejs.org/en"
									target="_blank"
									rel="noopener noreferrer"
								>
									NodeJS
								</a>
							</li>

							<li>
								<a
									href="https://www.postgresql.org/"
									target="_blank"
									rel="noopener noreferrer"
								>
									PostgreSQL
								</a>
							</li>

							<li>
								<a
									href="https://tanstack.com/query/latest"
									target="_blank"
									rel="noopener noreferrer"
								>
									React Query
								</a>
							</li>
							<li>
								<a
									href="https://nextjs.org/"
									target="_blank"
									rel="noopener noreferrer"
								>
									NextJS
								</a>
							</li>
							<li>
								<a
									href="https://www.prisma.io/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Prisma
								</a>
							</li>

							<li>
								<a
									href="https://aiven.io/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Aiven
								</a>
							</li>

							<li>
								<a
									href="https://swiperjs.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									scanapp
								</a>
							</li>
						</ul>

						<p>
							For more information, or to view the github for this
							project, follow{" "}
							<a
								href="https://github.com/raymondchiu10/stock-overflow"
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

export default SotckOverflowPage;
