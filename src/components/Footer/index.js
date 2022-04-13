import React from "react";

const Footer = () => {
	return (
		<div className="mt-12">
			<footer className="text-center p-2">
				<h1 className="text-xl font-black my-3">Slidex</h1>
				<a
					href="https://mail.google.com/mail/u/0/#inbox?compose=new"
					target="_blank"
					rel="noreferrer"
					className="hover:text-blue-700"
				>
					www.mdlrrahman779@gmail.com
				</a>
				<br />
				<p>Phone: +880 1793-054198</p>
				<p className="mb-4">Address: Dhaka-1230, Bangladesh</p>
				<hr className="w-75 mx-auto" />
				<small>
					Copyright ©2021 All rights reserved | This template is made
					by Lutfor Rahman
				</small>
			</footer>
		</div>
	);
};

export default Footer;
