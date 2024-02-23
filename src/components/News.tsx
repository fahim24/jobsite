import { Card } from "antd";
import Img1 from "../assets/img2.png";
import Img2 from "../assets/img3.png";
import Img3 from "../assets/img4.png";

const News = () => {
	return (
		<section className="bg-CGray">
			<div className="container mx-auto px-10 py-20 flex flex-col gap-12">
				<div className="w-full md:w-3/4 lg:w-2/5 mx-auto flex flex-col gap-10 text-CDark  text-center">
					<h3 className="text-4xl font-bold">News that helps</h3>
					<p className=" opacity-70 text-lg">
						With lots of unique blocks, you can easily build a page without coding. Build your next
						landing page.
					</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
					<Card hoverable cover={<img alt="example" src={Img1} className="h-80 object-cover" />}>
						<p className="text-CDark opacity-70">Career</p>
						<h4 className="text-CDark font-bold text-xl">
							How to win any job you want. Get started with 5 steps.
						</h4>
					</Card>
					<Card hoverable cover={<img alt="example" src={Img2} className="h-80 object-cover" />}>
						<p className="text-CDark opacity-70">Lifestyle</p>
						<h4 className="text-CDark font-bold text-xl">
							10 ways to reduce your office work depression.
						</h4>
					</Card>
					<Card hoverable cover={<img alt="example" src={Img3} className="h-80 object-cover" />}>
						<p className="text-CDark opacity-70">Career</p>
						<h4 className="text-CDark font-bold text-xl">
							Why should you work as a team even on small projects.
						</h4>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default News;
