import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutMe = () => {
	const aboutMeRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: aboutMeRef,
		offset: ["start end", "end end"],
	});
	const transformLeftX = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
	const transformLeftY = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
	const transformRightX = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
	const transformRightY = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

	return (
		<div
			ref={aboutMeRef}
			className="
				min-h-screen
				flex
				flex-col
				md:flex-row
				items-center
				justify-center
				gap-5
				px-5
				overflow-hidden
			"
		>

			<motion.div
				className="
					max-w-[434px]
					w-full
				"
				style={{
					x: transformLeftX,
					y: transformLeftY
				}}
			>
				<h2
					className="
						text-center
						font-bold
						text-4xl
						mb-4
					"
				>
					About Me
				</h2>
				<p
					className="
						font-medium 
						leading-5 
						text-wrap 
						whitespace-pre-wrap
					"
				>
					My name is <span className="text-[#F659DC]">Vitaliy</span>, and I am a junior developer with a profound interest in creating innovative software solutions.
					I have a stable foundation in programming languages such as JavaScript, TypeScript, and experience working with technologies like <span className="text-[#89D1F2]">HTML, CSS, React, MongoDB, PostgreSQL, Tailwind, Express, NodeJS, ReduxJS, Git</span>.
					<br />
					<br />
					I am inspired by the opportunity to implement cutting-edge technologies to solve complex problems. I am ready to learn and actively participate in team projects, aiming for continuous improvement of my skills. My goal is not only to achieve successful results but also to constantly evolve in the dynamic field of software development.
					<br />
					<br />
					My strengths include the ability to learn quickly, determination, and resilience to stress.
				</p>
			</motion.div>

			<motion.div
				className="
					max-w-[800px]
					max-h-[750px]
					h-full
					w-full
					bg-cover
				"
				style={{
					// backgroundImage: "url(/img/about-me.png)",
					x: transformRightX,
					y: transformRightY,
				}}
			>
				<img className="max-w-[100%] object-cover" src="/img/about-me.png" alt="" />
			</motion.div>

		</div>
	);
};

export default AboutMe;