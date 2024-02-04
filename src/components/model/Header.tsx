import {
	motion,
	useScroll, useTransform
} from "framer-motion";
import { useRef } from "react";


const Header = () => {
	const ref = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const backgroundBaseY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	const headerTitleY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

	return (
		<header
			className="relative"
		>
			<div
				className="
					h-screen 
					flex justify-center items-center text-center 
					overflow-hidden relative
				"
			>
				<motion.div
					className="
						header-title
						inline-flex
						font-black uppercase z-[1] 
						bg-gradientHeaderTitle 
						bg-clip-text
						text-transparent
					"
					style={{
						y: headerTitleY,
					}}
				>
					Parallax
				</motion.div>

				<motion.div
					className="header-bg z-[0]"
					style={{
						backgroundImage: "url(img/header/base.png)",
						y: backgroundBaseY
					}}
				/>
				<motion.div
					className="header-bg z-[1] header-shadow"
					style={{
						backgroundImage: "url(img/header/center.png)"
					}}
				/>

			</div>
		</header>
	);
};

export default Header;