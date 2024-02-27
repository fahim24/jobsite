import { Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import I1 from "../assets/icon1.svg";
import I2 from "../assets/icon2.svg";
import I3 from "../assets/icon3.svg";
import I4 from "../assets/icon4.svg";
import P from "../assets/wave2.png";
const Jobs = () => {
	return (
		<section className="relative  ">
			<img src={P} alt="" className="absolute left-0 bottom-0  z-[-1] " />
			<div className="container mx-auto px-10 py-20">
				<div className="flex flex-col md:flex-row justify-between gap-y-10 pb-16">
					<div className="w-full md:w-2/3 lg:w-1/3 space-y-5">
						<h4 className="text-CDark font-bold text-4xl">Featured jobs</h4>
						<p className="text-CDark opacity-70 text-lg">
							With lots of unique blocks, you can easily build a page without coding.
						</p>
					</div>
					<div className="flex gap-2 items-end">
						<button className="bg-CGray px-4 py-2 text-CDark h-fit rounded hover:text-lg">
							<FontAwesomeIcon icon={faArrowLeft} />
						</button>
						<button className="bg-CGray px-4 py-2 text-CDark h-fit rounded hover:text-lg">
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 jobs">
					<Card hoverable>
						<div className="flex flex-col gap-16 h-full justify-between">
							<div className="space-y-3">
								<p className="uppercase font-bold text-xs text-CGreen">Full-time</p>
								<h5 className="text-CDark font-bold text-xl">Senior Software Engineer</h5>
								<p className="text-CDark opacity-70 text-sm">New York, USA</p>
							</div>
							<div className="flex gap-3 ">
								<img src={I1} alt="" />
								<p className="text-CDark text-lg font-bold">Dorfus</p>
							</div>
						</div>
					</Card>
					<Card hoverable>
						<div className="flex flex-col gap-16 h-full justify-between">
							<div className="space-y-3">
								<p className="uppercase font-bold text-xs text-CBlue">Remote</p>
								<h5 className="text-CDark font-bold text-xl">Product Designer</h5>
								<p className="text-CDark opacity-70 text-sm">Lake Colby, UK</p>
							</div>
							<div className="flex gap-3 ">
								<img src={I2} alt="" />
								<p className="text-CDark text-lg font-bold">Coworks</p>
							</div>
						</div>
					</Card>
					<Card hoverable>
						<div className="flex flex-col gap-16 h-full justify-between">
							<div className="space-y-3">
								<p className="uppercase font-bold text-xs text-CGreen">Full-time</p>
								<h5 className="text-CDark font-bold text-xl">UX Designer</h5>
								<p className="text-CDark opacity-70 text-sm">California, USA</p>
							</div>
							<div className="flex gap-3">
								<img src={I3} alt="" />
								<p className="text-CDark text-lg font-bold">Askimat</p>
							</div>
						</div>
					</Card>
					<Card hoverable>
						<div className="flex flex-col gap-16 h-full justify-between">
							<div className="space-y-3">
								<p className="uppercase font-bold text-xs text-CRed">Part-time</p>
								<h5 className="text-CDark font-bold text-xl">Full-stack Web Developer</h5>
								<p className="text-CDark opacity-70 text-sm">Katlynburgh, Sweden</p>
							</div>
							<div className="flex gap-3">
								<img src={I4} alt="" />
								<p className="text-CDark text-lg font-bold">Greener</p>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default Jobs;
