import { motion } from "framer-motion";
import { HTMLAttributes, forwardRef } from "react";

interface ISkillContainer extends HTMLAttributes<HTMLDivElement> { }

const SkillContainer: React.FC<ISkillContainer> = forwardRef<HTMLDivElement, ISkillContainer>(({
	children,
}, ref) => {
	return (
		<motion.div
			ref={ref}
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
		>
			{children}
		</motion.div>
	);
});

export const MSkillContainer = motion(SkillContainer);

export default SkillContainer;