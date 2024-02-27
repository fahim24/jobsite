import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const NavSection = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		const nav = document.getElementById("navMenu");
		const log = document.getElementById("logMenu");

		if (!isOpen) {
			nav?.classList.remove("hidden");
			nav?.classList.add("flex");
			log?.classList.remove("hidden");
			log?.classList.add("flex");

			setIsOpen((prevIsLang) => !prevIsLang);
		} else {
			nav?.classList.remove("flex");
			nav?.classList.add("hidden");
			log?.classList.remove("flex");
			log?.classList.add("hidden");

			setIsOpen((prevIsLang) => !prevIsLang);
		}
	};

	const resetMenu = () => {
		const nav = document.getElementById("navMenu");
		const log = document.getElementById("logMenu");

		if (isOpen) {
			nav?.classList.remove("flex");
			nav?.classList.add("hidden");
			log?.classList.remove("flex");
			log?.classList.add("hidden");

			setIsOpen((prevIsLang) => !prevIsLang);
		}
	};
	return (
		<nav className=" w-full flex flex-col lg:flex-row justify-between items-center gap-x-20 gap-y-10 py-1 px-10">
			<div className="flex w-full lg:w-auto items-start justify-between">
				<a href="#" onClick={resetMenu} title="Go to home">
					<h2 className="text-CDark hover:text-CRed font-bold text-2xl">Brainwave.io</h2>
				</a>
				<button
					className="block lg:hidden  text-CDark font-bold rounded-lg"
					title="Open/Close nav menu"
					onClick={toggleMenu}
				>
					<FontAwesomeIcon icon={faBars} />
				</button>
			</div>

			<div
				id="navMenu"
				className="hidden lg:flex flex-col lg:flex-row gap-x-10 gap-y-3 text-CDark font-bold items-center"
			>
				<a href="#" className="hover:text-CGreen" onClick={resetMenu}>
					Demos
				</a>
				<a href="#" className="hover:text-CGreen" onClick={resetMenu}>
					Pages
				</a>
				<a href="#" className="hover:text-CGreen" onClick={resetMenu}>
					Support
				</a>
				<a href="#" className="hover:text-CGreen" onClick={resetMenu}>
					Contact
				</a>
			</div>

			<div
				id="logMenu"
				className="hidden lg:flex flex-col lg:flex-row gap-x-10 gap-y-3 text-CDark font-bold"
			>
				<button className="hover:text-CBlue" onClick={resetMenu}>
					Login
				</button>
				<button className="hover:text-CBlue whitespace-nowrap" onClick={resetMenu}>
					Sign up
				</button>
			</div>
		</nav>
	);
};

export default NavSection;
