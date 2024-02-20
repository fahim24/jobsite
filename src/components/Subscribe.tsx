import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Subscribe = () => {
	return (
		<section className="container mx-auto px-10 py-24 ">
			<div className="w-full md:w-3/5 lg:w-2/5 mx-auto flex flex-col  gap-16">
				<div className="flex flex-col gap-5 text-CDark text-center">
					<div className="w-16 h-16 mx-auto bg-CGreen rounded-full text-3xl text-CDark flex items-center justify-center ">
						<FontAwesomeIcon icon={faEnvelope} />
					</div>
					<h2 className=" font-bold text-4xl ">Get latest updates</h2>
					<p className=" opacity-70 text-lg ">
						With lots of unique blocks, you can easily build a page without coding. Build your next
						landing page.
					</p>
				</div>
				<div className="grid grid-cols-[2fr_1fr] gap-5 ">
					<input
						type="email"
						placeholder="Enter Your Email"
						className="border border-solid border-CGray p-2.5 rounded"
					/>
					<button className="bg-CBlue text-white font-bold rounded p-2.5">Subscribe</button>
				</div>
				<p className="text-CDark opacity-70 text-center">
					We’ll never share your details with third parties. View our Privacy Policy for more info.
				</p>
			</div>
		</section>
	);
};

export default Subscribe;
