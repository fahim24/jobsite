import { Input, Select } from "antd";
import NavSection from "./NavSection";
import Hero from "../assets/hero.png";
import P1 from "../assets/pattern1.svg";
import P2 from "../assets/pattern2.svg";
import W from "../assets/wave.png";

const HeroSection = () => {
	const options = ["City 1", "City 2", "City 3", "City 4"];
	return (
		<section className=" relative h-auto">
			<div className="bg-CGray absolute w-full h-full z-[-4]"></div>
			<img src={W} alt="" className="absolute left-0 bottom-0 z-[-3]" />

			<NavSection />

			<div className="container mx-auto px-10 space-y-12 justify-center h-full py-20 relative">
				<div className="hidden md:block absolute bottom-0 right-0 lg:right-[10%] z-[-2] h-full w-fit">
					<img src={Hero} alt="" className=" h-full invisible lg:visible" />
					<img src={P1} alt="" className=" absolute right-[18%] top-[24%] z-[-1]" />
					<img src={P2} alt="" className="absolute -left-[15%] bottom-0 z-[-1]" />
				</div>

				<div className="w-full md:w-3/4 lg:w-1/2  text-CDark space-y-10">
					<h1 className="text-5xl md:text-6xl font-bold ">Find a dream job that changes life.</h1>
					<p className="text-lg opacity-70">
						With lots of unique blocks, you can easily build a page without coding. Build your next
						job website.
					</p>
				</div>
				<div className="space-y-10">
					<form
						action="#"
						className="bg-CBlue rounded-lg p-4 grid grid-cols-1 md:grid-cols-3 items-center gap-5 w-full md:w-4/5 lg:w-2/3"
					>
						{/* antd Select */}
						<Input allowClear size="large" placeholder="Job title or keyword" />
						{/* antd DatePicker */}
						<Select
							allowClear
							size="large"
							optionLabelProp="label"
							placeholder={<span className="text-CDark">City</span>}
						>
							{options.map((option) => (
								<Select.Option
									key={option}
									value={option}
									label={<span className="text-CDark">{option}</span>}
								>
									{option}
								</Select.Option>
							))}
						</Select>
						<button className="bg-CDark text-white text-lg font-bold py-2.5 px-8 rounded-lg hover:opacity-90">
							Search
						</button>
					</form>
					<p className="text-CDark opacity-70">Try Product Designer, Software Engineer etc.</p>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
