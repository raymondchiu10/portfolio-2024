import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { fileNameParserJpg } from "../../../shared/fileNameParserJpg";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import expopulus from "src/images/jpg/expopulus.jpg";
import dags from "src/images/jpg/expopulus_dags.jpg";
import finalForm from "src/images/jpg/expopulus_final-form.jpg";
import ironPigeons1 from "src/images/jpg/expopulus_iron-pigeons.jpg";
import frameOne1 from "src/images/jpg/frame-one-software.jpg";
import rxToMe from "src/images/jpg/rxtome.jpg";
import xaiGames1 from "src/images/jpg/xai-games.jpg";
import lolChampionViewer from "src/images/jpg/lol-champion-viewer.jpg";

import expopuluswebp from "src/images/webp/expopulus.webp";
import dagswebp from "src/images/webp/expopulus_dags.webp";
import finalFormwebp from "src/images/webp/expopulus_final-form.webp";
import ironPigeons1webp from "src/images/webp/expopulus_iron-pigeons.webp";
import frameOne1webp from "src/images/webp/frame-one-software.webp";
import rxToMewebp from "src/images/webp/rxtome.webp";
import xaiGames1webp from "src/images/webp/xai-games.webp";
import lolChampionViewerwebp from "src/images/webp/lol-champion-viewer.webp";

const imageArray = [
	expopulus,
	dags,
	ironPigeons1,
	finalForm,
	xaiGames1,
	frameOne1,
	lolChampionViewer,
	rxToMe,
];

const imageArrayWebp = [
	expopuluswebp,
	dagswebp,
	ironPigeons1webp,
	finalFormwebp,
	xaiGames1webp,
	frameOne1webp,
	lolChampionViewerwebp,
	rxToMewebp,
];

const About = () => {
	const navigate = useNavigate();

	function createSlide(item: string, index: number) {
		const { altString, baseProject } = fileNameParserJpg(item);

		const navigationHelper = () => {
			navigate({
				pathname: baseProject,
			});
		};

		return (
			<SwiperSlide
				key={altString}
				className="about_carousel_item"
				onClick={navigationHelper}
			>
				<picture>
					<source srcSet={imageArrayWebp[index]} type="image/webp" />
					<source srcSet={item} type="image/jpeg" />
					<img src={item} alt={`${altString} Screenshot`} />
				</picture>
			</SwiperSlide>
		);
	}

	return (
		<section className="about">
			<div className="about_container">
				<h3 className="about_container_header">
					Projects I have worked on:
				</h3>
			</div>

			<div className="about_carousel">
				<Swiper
					modules={[Navigation, Pagination, A11y, Autoplay]}
					a11y={{ enabled: true }}
					centeredSlides={true}
					spaceBetween={50}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					autoplay={{
						delay: 4000,
						pauseOnMouseEnter: true,
					}}
					loop
				>
					{imageArray.map(createSlide)}
				</Swiper>
			</div>
		</section>
	);
};

export default About;
