import React from "react";
import Slider from "react-slick";

const Banner = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 3000,
		cssEase: "linear",
	};
	return (
		<div className="container mx-auto">
			<Slider {...settings}>
				<div>
					<img
						src="https://evirtualexpo.com/wp-content/uploads/2022/02/web-development.jpeg"
						alt="First slide"
					/>
				</div>
				<div>
					<img
						src="https://wickodesign.com/images/Wicko/wicko-FP-banner-full-1920x800.jpg"
						alt="Second slide"
					/>
				</div>
				<div>
					<img
						src="https://www.digitalcro.com/hubfs/1.%20Work/Header%20Images/BuildItYourself.jpg"
						alt="Third slide"
					/>
				</div>

				<div>
					<img
						src="https://content.app-sources.com/s/313904427911800921/uploads/Images/slider01-0323184.jpg"
						alt="Fourth slide"
					/>
				</div>
			</Slider>
		</div>
	);
};

export default Banner;
