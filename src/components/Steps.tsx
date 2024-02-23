import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import P1 from "../assets/img1.png";
import { faBell } from "@fortawesome/free-solid-svg-icons";
const Steps = () => {
	return (
		<section className="container mx-auto px-10 py-20">
			<div className="w-full md:w-3/4 lg:w-3/5 mx-auto flex flex-col gap-10 text-CDark text-center pb-16">
				<h3 className="text-4xl font-bold">Find jobs with 3 easy steps</h3>
				<p className=" opacity-70 text-lg">
					With lots of unique blocks, you can easily build a page without coding. Build your next
					landing page.
				</p>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
				<div className="relative h-[400px] md:h-[500px]">
					<div className="bg-CGreen h-full w-3/4 absolute -bottom-10 right-0 rounded-lg opacity-10"></div>
					<div className="drop-shadow-xl h-full w-3/4 absolute bottom-0 right-10  ">
						<img
							src={P1}
							alt=""
							className="h-full w-full object-cover rounded-lg -scale-x-100 object-top"
						/>
					</div>
					<div className="bg-CDark h-fit w-fit absolute bottom-1/4 left-0 rounded-lg translate-y-1/2 hover:drop-shadow-2xl cursor-pointer">
						<div className="px-6 py-4 flex gap-3 items-center">
							<div className="size-10 shrink-0 bg-CGreen flex items-center justify-center text-CDark rounded-full">
								<FontAwesomeIcon icon={faBell} />
							</div>
							<div className="flex flex-col gap-2 text-white">
								<p className="opacity-70">New Invitation!</p>
								<h6 className="font-bold">Interview invitation at Greener</h6>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-12 w-full md:w-3/4 justify-center">
					<div className="flex gap-3">
						<div className="w-10 h-10 shrink-0 bg-CBlue flex items-center justify-center text-white font-bold rounded-full">
							1
						</div>
						<div className="flex flex-col gap-2 text-CDark">
							<h5 className="font-bold text-xl">Search for a job</h5>
							<p className="opacity-70">
								With lots of unique blocks, you can easily build a page without coding.{" "}
							</p>
						</div>
					</div>

					<div className="flex gap-3">
						<div className="w-10 h-10 shrink-0 bg-CBlue flex items-center justify-center text-white font-bold rounded-full">
							2
						</div>
						<div className="flex flex-col gap-2 text-CDark">
							<h5 className="font-bold text-xl">Apply within our website</h5>
							<p className="opacity-70">
								With lots of unique blocks, you can easily build a page without coding.{" "}
							</p>
						</div>
					</div>

					<div className="flex gap-3">
						<div className="w-10 h-10 shrink-0 bg-CBlue flex items-center justify-center text-white font-bold rounded-full">
							3
						</div>
						<div className="flex flex-col gap-2 text-CDark">
							<h5 className="font-bold text-xl">Get interview call</h5>
							<p className="opacity-70">
								With lots of unique blocks, you can easily build a page without coding.{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Steps;
