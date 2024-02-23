import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logo3.png";
import Logo4 from "../assets/logo4.png";
import Logo5 from "../assets/logo5.png";
import Logo6 from "../assets/logo6.png";
const Companies = () => {
	return (
		<section className="container mx-auto px-10 my-24">
			<div className="space-y-16 w-full lg:w-3/4 mx-auto">
				<div className="md:px-10 lg:px-20 space-y-7 text-CDark text-center">
					<h3 className="text-4xl font-bold">Big companies are here</h3>
					<p className="opacity-70 text-lg">
						With lots of unique blocks, you can easily build a page without coding. Build your next
						consultancy website within few minutes. You have a business to run. Stop worring about
						cross-browser bugs, designing new pages.
					</p>
				</div>
				<div className="flex gap-x-20 gap-y-10 flex-wrap opacity-50 justify-center">
					<img src={Logo1} alt="" className="h-8" />
					<img src={Logo2} alt="" className="h-8" />
					<img src={Logo3} alt="" className="h-8" />
					<img src={Logo4} alt="" className="h-8" />
					<img src={Logo5} alt="" className="h-8" />
					<img src={Logo6} alt="" className="h-8" />
				</div>
			</div>
		</section>
	);
};

export default Companies;
