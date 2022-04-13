import React from "react";
import Banner from "../../../components/Banner";
import Categories from "../../../components/Categories";
import Footer from "../../../components/Footer";
import Navigation from "../../../components/Navigation";
import Regions from "../../../components/Regions";

const Home = () => {
	return (
		<div>
			<Navigation />
			<Banner />
			<Categories />
			<Regions />
			<Footer />
		</div>
	);
};

export default Home;
