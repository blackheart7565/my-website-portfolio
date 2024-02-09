import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from 'react';
import { skills } from "../../utils/skills";
import SkillsProgress from "../UI/SkillsProgress/SkillsProgress";

interface ISkills { }

const Skills: React.FC<ISkills> = () => {
	const skillsRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: skillsRef,
		offset: ["start end", "end start"]
	});

	const opacity1 = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
	const scale1 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

	const opacity2 = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
	const scale2 = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

	const opacity3 = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
	const scale3 = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

	return (
		<div
			ref={skillsRef}
			className="
				flex
				flex-col
				justify-center
				items-center
				min-h-[100vh]
				relative
				gap-y-20
				overflow-hidden
				px-5
				py-32
			"
		>
			{/* Frontend */}
			<motion.div
				className="
					flex 
					flex-col 
					gap-10 
					py-5
					px-4
					w-full
					max-w-[1000px]
					border-[#00D0DC] 
					border-solid 
					border-2 
					rounded-[8px]
					shadow-skillSection
				"
				style={{
					opacity: opacity1,
					scale: scale1,
				}}
			>
				<h2
					className="
							font-bold
							tracking-widest
							text-4xl
							px-5
							text-[#00D0DC]
						"
				>Frontend</h2>
				<div
					className="
								grid
								grid-cols-2
								sm:grid-cols-skillsColum
								gap-5
								sm:gap-7
								py-5
							"
				>
					{skills.frontend.map(front => (
						<div
							key={front.id}
							className="
										flex flex-col items-center gap-y-5
									"
						>
							<SkillsProgress value={front.percent} size={"100%"} isRound />
							<div
								className="
											font-bold tracking-wider text-center text-wrap whitespace-pre-wrap
										"
							>{front.text}</div>
						</div>
					))}
				</div>
			</motion.div>

			{/* Backend */}
			<motion.div
				className="
					flex 
					flex-col 
					gap-10 
					py-5
					px-4
					w-full
					max-w-[1000px]
					border-[#00D0DC] 
					border-solid 
					border-2 
					rounded-[8px]
					shadow-skillSection
				"
				style={{
					opacity: opacity2,
					scale: scale2,
				}}
			>
				<h2
					className="
						font-bold tracking-widest text-4xl px-5 text-[#00D0DC]
					"
				>Backend</h2>
				<div
					className="
						grid
						grid-cols-2
						sm:grid-cols-skillsColum
						gap-7
						py-5
					"
				>
					{skills.backend.map(back => (
						<div
							key={back.id}
							className="
								flex flex-col items-center gap-y-5
							"
						>
							<SkillsProgress value={back.percent} size={"100%"} isRound />
							<div
								className="
									font-bold tracking-wider text-center text-wrap whitespace-pre-wrap
								"
							>{back.text}</div>
						</div>
					))}
				</div>
			</motion.div>

			{/* Other */}
			<motion.div
				className="
					flex 
					flex-col 
					gap-10 
					py-5
					px-4
					w-full
					max-w-[1000px]
					border-[#00D0DC] 
					border-solid 
					border-2 
					rounded-[8px]
					shadow-skillSection
				"
				style={{
					opacity: opacity3,
					scale: scale3,
				}}
			>
				<h2
					className="
						font-bold tracking-widest text-4xl px-5 text-[#00D0DC]
					"
				>Other</h2>
				<div
					className="
						grid
						grid-cols-2
						sm:grid-cols-skillsColum
						gap-7
						py-5
					"
				>
					{skills.other.map(other => (
						<div
							key={other.id}
							className="
								flex flex-col items-center gap-y-5
							"
						>
							<SkillsProgress value={other.percent} size={"100%"} isRound />
							<div
								className="
									font-bold tracking-wider text-center text-wrap whitespace-pre-wrap
								"
							>{other.text}</div>
						</div>
					))}
				</div>
			</motion.div>
		</div >
	);
};

export default Skills;