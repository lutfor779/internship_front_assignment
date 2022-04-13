import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div>
			<img
				src="https://www.myphukettravel.com/assets/front-end/images/404.gif"
				alt="not found"
			/>
			<p>
				<Link to={"/"}>Back to Home</Link>
			</p>
		</div>
	);
};

export default NotFound;
