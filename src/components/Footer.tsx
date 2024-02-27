import {
	faInstagram,
	faLinkedin,
	faSquareFacebook,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	return (
		<section className="bg-CDark">
			<div className="container mx-auto px-10 py-20 ">
				<div className="flex flex-col lg:flex-row justify-between gap-y-10">
					<div className="space-y-8 text-white basis-1/4 order-2 lg:order-1">
						<h3 className="text-2xl font-bold text-center md:text-left">Brainwave.io</h3>
						<p className="opacity-70 text-center md:text-left">
							With lots of unique blocks, you can easily build a page without coding. Build your
							next landing page.
						</p>
						<div className="flex justify-center md:justify-start gap-5 opacity-70">
							<a href="https://www.twitter.com" className=" hover:text-CGreen">
								<FontAwesomeIcon icon={faTwitter} />
							</a>
							<a href="https://www.facebook.com" className=" hover:text-CGreen">
								<FontAwesomeIcon icon={faSquareFacebook} />
							</a>
							<a href="https://www.instagram.com" className=" hover:text-CGreen">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a href="https://www.linkedin.com" className=" hover:text-CGreen">
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-x-16 gap-y-8 order-1 lg:order-2">
						<div className="text-center md:text-left text-white space-y-5">
							<h6 className="opacity-70">Company</h6>
							<ul className="space-y-1">
								<li>
									<a href="#" className="hover:text-CGreen">
										About us
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CGreen">
										Contact us
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CGreen">
										Careers
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CGreen">
										Press
									</a>
								</li>
							</ul>
						</div>
						<div className="text-center md:text-left text-white space-y-5">
							<h6 className="opacity-70">Product</h6>
							<ul className="space-y-1">
								<li>
									<a href="#" className="hover:text-CGreen">
										Features
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CGreen">
										Pricing
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CGreen">
										News
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CGreen">
										Help desk
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CGreen">
										Support
									</a>
								</li>
							</ul>
						</div>
						<div className="text-center md:text-left text-white space-y-5">
							<h6 className="opacity-70">Services</h6>
							<ul className="space-y-1">
								<li>
									<a href="#" className="hover:text-CGreen">
										Digital Marketing
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CGreen">
										Content Writing
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CGreen">
										SEO for Business
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CGreen">
										UI Design
									</a>
								</li>
							</ul>
						</div>
						<div className="text-center md:text-left text-white space-y-5">
							<h6 className="opacity-70">Legal</h6>
							<ul className="space-y-1">
								<li>
									<a href="#" className="hover:text-CGreen">
										Privacy Policy
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CGreen">
										Terms & Conditions
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-CGreen">
										Return Policy
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
