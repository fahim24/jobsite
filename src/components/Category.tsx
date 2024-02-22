import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Category = () => {
	return (
		<section className="bg-CDark">
			<div className="container mx-auto px-10 py-20">
				<div className="flex justify-between pb-16">
					<div className="w-1/3 flex flex-col gap-5 text-white">
						<h4 className=" font-bold text-4xl">Jobs by category</h4>
						<p className="opacity-70 text-lg">
							With lots of unique blocks, you can easily build a page without coding.
						</p>
					</div>
					<div className="flex gap-2 items-end">
						<button className="text-CGreen rounded hover:text-lg flex gap-5 items-center">
							<span>Explore all categories</span>
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-10">
					<div className="bg-white px-8 py-6 rounded-lg shadow-xl flex justify-between items-center Jhover">
						<div className="flex flex-col gap-2 text-CDark ">
							<h6 className=" font-bold text-xl">Design</h6>
							<p className=" opacity-70 text-sm">47 jobs</p>
						</div>
						<button className=" w-10 h-10 shrink-0 bg-CDark bg-opacity-20 flex items-center justify-center text-CDark font-bold rounded-full">
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
					<div className="bg-white px-8 py-6 rounded-lg shadow-xl flex justify-between items-center Jhover">
						<div className="flex flex-col gap-2 text-CDark">
							<h6 className="font-bold text-xl">Marketing</h6>
							<p className="opacity-70 text-sm">51 jobs</p>
						</div>
						<button className="w-10 h-10 shrink-0 bg-CDark bg-opacity-20 flex items-center justify-center text-CDark font-bold rounded-full">
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
					<div className="bg-white px-8 py-6 rounded-lg shadow-xl flex justify-between items-center Jhover">
						<div className="flex flex-col gap-2 text-CDark">
							<h6 className="font-bold text-xl">Engineering</h6>
							<p className="opacity-70 text-sm">89 jobs</p>
						</div>
						<button className="w-10 h-10 shrink-0 bg-CDark bg-opacity-20 flex items-center justify-center text-CDark font-bold rounded-full">
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
					<div className="bg-white px-8 py-6 rounded-lg shadow-xl flex justify-between items-center Jhover">
						<div className="flex flex-col gap-2 text-CDark">
							<h6 className="font-bold text-xl">Mangement</h6>
							<p className="opacity-70 text-sm">16 jobs</p>
						</div>
						<button className="w-10 h-10 shrink-0 bg-CDark bg-opacity-20 flex items-center justify-center text-CDark font-bold rounded-full">
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
					<div className="bg-white px-8 py-6 rounded-lg shadow-xl flex justify-between items-center Jhover">
						<div className="flex flex-col gap-2 text-CDark">
							<h6 className="font-bold text-xl">Finance</h6>
							<p className="opacity-70 text-sm">23 jobs</p>
						</div>
						<button className="w-10 h-10 shrink-0 bg-CDark bg-opacity-20 flex items-center justify-center text-CDark font-bold rounded-full">
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
					<div className="bg-white px-8 py-6 rounded-lg shadow-xl flex justify-between items-center Jhover">
						<div className="flex flex-col gap-2 text-CDark">
							<h6 className="font-bold text-xl">Customer Support</h6>
							<p className="opacity-70 text-sm">34 jobs</p>
						</div>
						<button className="w-10 h-10 shrink-0 bg-CDark bg-opacity-20 flex items-center justify-center text-CDark font-bold rounded-full">
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Category;
