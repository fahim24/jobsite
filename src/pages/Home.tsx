import Category from "../components/Category";
import Companies from "../components/Companies";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Jobs from "../components/Jobs";
import News from "../components/News";
import Steps from "../components/Steps";
import Subscribe from "../components/Subscribe";

const Home = () => {
	return (
		<>
			<HeroSection />
			<Companies />
			<Category />
			<Steps />
			<Jobs />
			<News />
			<Subscribe />
			<Footer />
		</>
	);
};

export default Home;
