import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import expopulus from "src/images/jpg/expopulus_screenshot.jpg";
import dags from "src/images/jpg/expopulus_dags_screenshot.jpg";
import finalForm from "src/images/jpg/expopulus_finalform_carousel_screenshot.jpg";
import ironPigeons1 from "src/images/jpg/expopulus_ironpigeons_screenshot.jpg";
import ironPigeons2 from "src/images/jpg/expopulus_ironpigeons_screenshot2.jpg";
import frameOne1 from "src/images/jpg/frameonesoftware_screenshot.jpg";
import frameOne2 from "src/images/jpg/frameonesoftware_screenshot2.jpg";
import rxToMe from "src/images/jpg/rxtome_screenshot.jpg";
import xaiGames1 from "src/images/jpg/xai_games_screenshot.jpg";
import xaiGames2 from "src/images/jpg/xai_games_sentrynodes_screenshot.jpg";

import expopuluswebp from "src/images/webp/expopulus_screenshot.webp";
import dagswebp from "src/images/webp/expopulus_dags_screenshot.webp";
import finalFormwebp from "src/images/webp/expopulus_finalform_carousel_screenshot.webp";
import ironPigeons1webp from "src/images/webp/expopulus_ironpigeons_screenshot.webp";
import ironPigeons2webp from "src/images/webp/expopulus_ironpigeons_screenshot2.webp";
import frameOne1webp from "src/images/webp/frameonesoftware_screenshot.webp";
import frameOne2webp from "src/images/webp/frameonesoftware_screenshot2.webp";
import rxToMewebp from "src/images/webp/rxtome_screenshot.webp";
import xaiGames1webp from "src/images/webp/xai_games_screenshot.webp";
import xaiGames2webp from "src/images/webp/xai_games_sentrynodes_screenshot.webp";

const imageArray = [
	frameOne1,
	frameOne2,
	expopulus,
	dags,
	finalForm,
	ironPigeons1,
	ironPigeons2,
	rxToMe,
	xaiGames1,
	xaiGames2,
];

const imageArrayWebp = [
	frameOne1webp,
	frameOne2webp,
	expopuluswebp,
	dagswebp,
	finalFormwebp,
	ironPigeons1webp,
	ironPigeons2webp,
	rxToMewebp,
	xaiGames1webp,
	xaiGames2webp,
];

const About = () => {
	function createSlide(item: string, index: number) {
		const startWord = "jpg/";
		const startString = item.indexOf(startWord);
		const endString = item.indexOf(".jpg");
		const updatedString = item
			.slice(startString + startWord.length, endString)
			.split("_")
			.join(" ");

		return (
			<SwiperSlide
				key={updatedString}
				className="about_carousel_item"
			>
				<picture>
					<source srcSet={imageArrayWebp[index]} type="image/webp" />
					<source srcSet={item} type="image/jpeg" />
					<img src={item} alt={updatedString} />
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
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={50}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					loop
				>
					{imageArray.map(createSlide)}
				</Swiper>
			</div>
		</section>
	);
};

export default About;
