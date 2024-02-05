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
		<div
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
						header-section-titles
						z-[1] 
					"
					style={{
						y: headerTitleY,
					}}
				>
					<div
						className="
							header-caption
							text-[#e1e1e1]
							font-bold
						"
					>
						Hello,
						<span
							className="
								text-[#0E1D42]
							"
						> my name is</span>
					</div>
					<div
						className="
							header-title
							uppercase
							font-black
							bg-gradientHeaderTitle
							bg-clip-text
							text-transparent
						"
					>
						Vitaly Lavrov
					</div>
					<div
						className="
							header-subtext
							text-[#e1e1e1]
							font-bold
						"
					>
						I'am a Web Developer
					</div>
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
		</div>
	);
};

export default Header;