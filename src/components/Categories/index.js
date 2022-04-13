import React from "react";
import Slider from "react-slick";

const Categories = () => {
	const settings = {
		dots: false,
		className: "center",
		centerPadding: "60px",
		swipeToSlide: true,
		infinite: true,
		slidesToShow: 9,
		slidesToScroll: 1,
		speed: 2500,
		autoplay: true,
		autoplaySpeed: 2500,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 7,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	};
	return (
		<div className="mt-12 container mx-auto">
			<div className="mb-3 text-left font-bold">
				Browse by <span className="text-orange-600">Categories</span>
			</div>
			<Slider {...settings}>
				<div className="border-2 border-inherit	rounded-lg p-3 md:p-5">
					<img
						src="https://artincontext.org/wp-content/uploads/2021/08/Types-of-Art-848x530.jpg"
						alt="art"
						className="w-40 h-32 mx-auto mb-5"
						style={{ borderRadius: "1.5rem" }}
					/>
					<b>Art</b>
				</div>
				<div className="border-2 border-inherit	rounded-lg p-3 md:p-5">
					<img
						src="http://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/Business%20Analytics%20Meeting.png&w=1200&h=630"
						alt="Busniess"
						className="w-40 h-32 mx-auto mb-5"
						style={{ borderRadius: "1.5rem" }}
					/>
					<b>Busniess</b>
				</div>
				<div className="border-2 border-inherit	rounded-lg p-3 md:p-5">
					<img
						src="https://media.istockphoto.com/photos/business-meeting-with-word-culture-on-table-picture-id841152680?k=20&m=841152680&s=612x612&w=0&h=TFE8imyZ65nvF0W5T9Do9oUwNHLCNKwUNVIoCXNYvqw="
						alt="art"
						className="w-40 h-32 mx-auto mb-5"
						style={{ borderRadius: "1.5rem" }}
					/>
					<b>Culture</b>
				</div>
				<div className="border-2 border-inherit	rounded-lg p-3 md:p-5">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4CQ_iKfcP-bVrfZACiKH1A_fTpcoDOlw_d43SdsEhaLSxKOpBkYzO73Eyi_HdomzleRo&usqp=CAU"
						alt="art"
						className="w-40 h-32 mx-auto mb-5"
						style={{ borderRadius: "1.5rem" }}
					/>
					<b>Fitness</b>
				</div>
				<div className="border-2 border-inherit	rounded-lg p-3 md:p-5">
					<img
						src="https://www.foodnavigator-asia.com/var/wrbm_gb_food_pharma/storage/images/7/4/0/8/2118047-1-eng-GB/Site-of-New-Zealand-food-search-research-centre-revealed.jpg"
						alt="art"
						className="w-40 h-32 mx-auto mb-5"
						style={{ borderRadius: "1.5rem" }}
					/>
					<b>Foot and drinks</b>
				</div>
				<div className="border-2 border-inherit	rounded-lg p-3 md:p-5">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8s3AnexPDrLMk9BLapMgCzozT1Up5rFNKRlAPklfCQfYQEu_QISJe6duH5IOVymlcwTY&usqp=CAU"
						alt="art"
						className="w-40 h-32 mx-auto mb-5"
						style={{ borderRadius: "1.5rem" }}
					/>
					<b>Kids</b>
				</div>
				<div className="border-2 border-inherit	rounded-lg p-3 md:p-5">
					<img
						src="https://reachinghighernh.org/wp-content/uploads/2018/07/competency-portfolio-learning.png"
						alt="art"
						className="w-40 h-32 mx-auto mb-5"
						style={{ borderRadius: "1.5rem" }}
					/>
					<b>Learning</b>
				</div>
				<div className="border-2 border-inherit	rounded-lg p-3 md:p-5">
					<img
						src="https://10play.com.au/ip/s3/2019/08/09/e4b365d10829878d80a0a1871ffeee0b-551003.jpg?image-profile=image_poster&io=portrait"
						alt="art"
						className="w-40 h-32 mx-auto mb-5"
						style={{ borderRadius: "1.5rem" }}
					/>
					<b>Movies</b>
				</div>
				<div className="border-2 border-inherit	rounded-lg p-3 md:p-5">
					<img
						src="https://media.istockphoto.com/photos/business-meeting-with-word-culture-on-table-picture-id841152680?k=20&m=841152680&s=612x612&w=0&h=TFE8imyZ65nvF0W5T9Do9oUwNHLCNKwUNVIoCXNYvqw="
						alt="art"
						className="w-40 h-32 mx-auto mb-5"
						style={{ borderRadius: "1.5rem" }}
					/>
					<b>Culture</b>
				</div>
				<div className="border-2 border-inherit	rounded-lg p-3 md:p-5">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4CQ_iKfcP-bVrfZACiKH1A_fTpcoDOlw_d43SdsEhaLSxKOpBkYzO73Eyi_HdomzleRo&usqp=CAU"
						alt="art"
						className="w-40 h-32 mx-auto mb-5"
						style={{ borderRadius: "1.5rem" }}
					/>
					<b>Fitness</b>
				</div>
			</Slider>
		</div>
	);
};

export default Categories;
