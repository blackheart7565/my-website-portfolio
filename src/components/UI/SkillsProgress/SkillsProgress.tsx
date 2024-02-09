
import React, { useEffect, useRef, useState } from 'react';

interface ICircle {
	size?: string | number | undefined;
	color?: string | undefined;
	value: number;
	isViewProgress?: boolean | undefined;
	isRound?: boolean | undefined;
}

const SkillsProgress: React.FC<ICircle> = ({
	size,
	color,
	value,
	isViewProgress,
	isRound,
}) => {
	const mainContainerRef = useRef<HTMLSpanElement>(null);

	const [displayValue, setDisplayValue] = useState<number>(0);
	const [progressLine, setProgressLine] = useState<number>(126.92);
	const [textSize, setTextSize] = useState<number>(0);

	const checkMaxValue = (value: number) => {
		if (value > 100) return 100;
		return value;
	}

	const progressValue = (value: number): number => {
		const v = checkMaxValue(value);
		return 126.92 - (126.92 * v) / 100;
	}

	useEffect(() => {
		const textSize = () => {
			if (!mainContainerRef.current) return;

			const w = mainContainerRef.current.offsetWidth
			const h = mainContainerRef.current.offsetHeight

			let textSize = Math.floor(Math.max(w, h) / 10);

			if (textSize < 8) {
				textSize = 8;
			}
			setTextSize(textSize);
		}
		textSize();

		window.addEventListener("resize", textSize);
		return () => {
			window.removeEventListener("resize", textSize);
		}
	}, [size]);

	useEffect(() => {
		if (isViewProgress) {
			let count: number = 0;
			const v = checkMaxValue(value);
			const interval = setInterval(() => {
				if (count >= v) {
					clearInterval(interval);
				}
				const progress = 126.92 - (126.92 * count) / 100;
				count += 1;

				setDisplayValue(count - 1);
				setProgressLine(progress);
			}, 25);
		}
	}, [value, isViewProgress]);

	return (
		<span
			ref={mainContainerRef}
			className="inline-block relative -rotate-90"
			style={{
				width: size || "50px",
				height: size || "50px",
			}}
		>
			<span
				className="
					absolute 
					top-[50%] 
					left-[50%] 
					translate-x-[-50%] 
					translate-y-[-50%]
					rotate-90
					text-[4vw]
				"
				style={{
					fontSize: textSize
				}}
			>
				{isViewProgress ? displayValue : checkMaxValue(value)}<span>%</span>
			</span>

			<svg
				className="block relative"
				viewBox="22 22 44 44"
			>
				<circle cx={44} cy={44} r={20.2}
					className="
						fill-transparent 
						stroke-[3.6]
					"
					style={{
						stroke: color || "#0e7be1",
						strokeDasharray: 126.92,
						strokeDashoffset: isViewProgress ? `${progressLine}px` : progressValue(value),
						transition: !isViewProgress ? 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)' : "",
						strokeLinecap: isRound ? "round" : "butt",
					}}
				/>
			</svg>
		</span >
	);
};

export default SkillsProgress;