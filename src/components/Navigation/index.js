import React from "react";

const Navigation = () => {
	return (
		<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<a href="#home" className="flex items-center">
					<span className="self-center text-xl font-semibold whitespace-nowrap">
						Slidex
					</span>
				</a>

				<div className="hidden md:block justify-between items-center flex w-auto order-1">
					<ul className="flex mt-4 flex-row space-x-8 mt-0 text-sm font-medium">
						<li>
							<a
								href="#home"
								className="block text-gray-700 hover:bg-transparent hover:text-blue-700 focus:text-blue-700"
								aria-current="page"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#about-us"
								className="block text-gray-700 hover:bg-transparent hover:text-blue-700 focus:text-blue-700"
							>
								About Us
							</a>
						</li>
						<li>
							<a
								href="#contact-us"
								className="block text-gray-700 hover:bg-transparent hover:text-blue-700 focus:text-blue-700"
							>
								Contact Us
							</a>
						</li>
						<li>
							<a
								href="#events"
								className="block text-gray-700 hover:bg-transparent hover:text-blue-700 focus:text-blue-700"
							>
								Events
							</a>
						</li>
					</ul>
				</div>

				<div className="flex items-center md:order-2">
					<div className="group inline-block relative">
						<span className="self-center pl-24 font-semibold whitespace-nowrap">
							Profile
						</span>
						<ul className="absolute text-sm font-medium hidden bg-blue-50 text-gray-700 pt-1 group-hover:block z-10 text-left rounded-b">
							<li>
								<a
									className="rounded-t hover:bg-blue-700 hover:text-white py-2 pl-3 pr-5 block whitespace-no-wrap flex items-center"
									href="#home"
								>
									<p className="pr-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											class="bi bi-house-heart-fill"
											viewBox="0 0 16 16"
										>
											<path
												fill-rule="evenodd"
												d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L8 2.207l6.646 6.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"
											/>
											<path
												fill-rule="evenodd"
												d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Zm0 5.189c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z"
											/>
										</svg>
									</p>
									<p>Home</p>
								</a>
							</li>

							<li>
								<a
									className="hover:bg-blue-700 hover:text-white py-2 pl-3 pr-5 block whitespace-no-wrap flex items-center"
									href="#about-us"
								>
									<p className="pr-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											class="bi bi-question-circle-fill"
											viewBox="0 0 16 16"
										>
											<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
										</svg>
									</p>
									<p>About Us</p>
								</a>
							</li>

							<li>
								<a
									className="hover:bg-blue-700 hover:text-white py-2 pl-3 pr-5 block whitespace-no-wrap flex items-center"
									href="#contact-us"
								>
									<p className="pr-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											class="bi bi-telephone-fill"
											viewBox="0 0 16 16"
										>
											<path
												fill-rule="evenodd"
												d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
											/>
										</svg>
									</p>
									<p>Contact Us</p>
								</a>
							</li>

							<li>
								<a
									className="rounded-b hover:bg-blue-700 hover:text-white py-2 pl-3 pr-5 block whitespace-no-wrap flex items-center"
									href="#login"
								>
									<p className="pr-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											class="bi bi-box-arrow-in-right"
											viewBox="0 0 16 16"
										>
											<path
												fill-rule="evenodd"
												d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
											/>
											<path
												fill-rule="evenodd"
												d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
											/>
										</svg>
									</p>
									<p>Login</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
